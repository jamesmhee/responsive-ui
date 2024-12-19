import { useContext, useMemo, useState, createContext, SetStateAction, useEffect } from "react"
import { ProductsProps } from "../interface/Products"
import { useFetchProducts } from "@/hooks/useFetchProducts"

interface AppContextProps {
    data: ProductsProps[]
    setData: React.Dispatch<SetStateAction<ProductsProps[]>>   
    searchData: ProductsProps[]
    setSearchData: React.Dispatch<SetStateAction<ProductsProps[]>>   
    isLoading: boolean
    isError: boolean
    error: unknown 
    filterData: (type: string)=>void
    onScroll: number
    setOnScroll: React.Dispatch<SetStateAction<number>>    
}

export const ContextApp = createContext({} as AppContextProps)

export const AppContext = ({children}: {children: React.ReactNode}) =>{    
    const [data, setData] = useState<ProductsProps[]>([])
    const [searchData, setSearchData] = useState<ProductsProps[]>([])
    const [onScroll, setOnScroll] = useState(0)
    const { data:productsData, isLoading, isError, error } = useFetchProducts(data?.length > 0)
    useEffect(()=>{
        if(productsData){
            setData((prev)=>(productsData))
        }
    }, [productsData])

    const filterData = (type: string) => {                
        setSearchData(()=>data.filter((elm)=>elm.category === type))
    }

    useEffect(()=>{
        console.log(searchData)
    }, [searchData])

    const store = useMemo(()=>({
        data,
        setData,
        searchData, 
        setSearchData,
        isLoading,
        isError,
        error,
        filterData,
        onScroll,
        setOnScroll
    }), [
        data,
        searchData,
        isLoading,
        isError,
        error,
        filterData,
        onScroll
    ])
    return (
        <ContextApp value={store}>
            {children}
        </ContextApp>
    )
}

export const useAppContext = () =>{
    const context = useContext(ContextApp)
    if(!context){
        throw new Error("Error Context")
    }
    return context
}
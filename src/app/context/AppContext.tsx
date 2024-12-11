import { useContext, useMemo, useState, createContext, SetStateAction, useEffect } from "react"
import { ProductsProps } from "../interface/Products"
import { useFetchProducts } from "@/hooks/useFetchProducts"

interface AppContextProps {
    data: ProductsProps[]
    setData: React.Dispatch<SetStateAction<ProductsProps[]>>   
    isLoading: boolean
    isError: boolean
    error: unknown 
}

export const ContextApp = createContext({} as AppContextProps)

export const AppContext = ({children}: {children: React.ReactNode}) =>{    
    const [data, setData] = useState<ProductsProps[]>([])
    const [scroll, setScroll] = useState(0)
    const { data:productsData, isLoading, isError, error } = useFetchProducts(data?.length > 0)
    useEffect(()=>{
        if(productsData){
            setData((prev)=>(productsData))
        }
    }, [productsData])
    const store = useMemo(()=>({
        data,
        setData,
        isLoading,
        isError,
        error
    }), [
        data,
        isLoading,
        isError,
        error              
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
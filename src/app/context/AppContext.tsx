import { useContext, useMemo, useState, createContext, SetStateAction } from "react"
import { ProductsProps } from "../interface/Products"

interface AppContextProps {
    data: ProductsProps[]
    setData: React.Dispatch<SetStateAction<ProductsProps[]>>
}

export const ContextApp = createContext({} as AppContextProps)

export const AppContext = ({children}: {children: React.ReactNode}) =>{    
    const [data, setData] = useState<ProductsProps[]>([])
    const store = useMemo(()=>({
        data,
        setData
    }), [
        data,        
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
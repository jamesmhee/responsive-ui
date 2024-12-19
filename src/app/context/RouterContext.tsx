import { createContext, SetStateAction, useContext, useMemo, useState } from "react";

interface CreateContextProps {
    home: string
    setHome: React.Dispatch<SetStateAction<string>>
    cart: string
    setCart: React.Dispatch<SetStateAction<string>>
}

export const RouterContext = createContext<CreateContextProps>({} as CreateContextProps)

export const RouterProvider = ({children}: {children: React.ReactNode}) =>{
    const [home,setHome] = useState('/')
    const [cart, setCart] = useState('cart')

    const store = useMemo(()=>({
        home,
        setHome,
        cart,
        setCart
    }), [
        home,
        cart
    ])

    return (
        <RouterContext value={store}>
            {children}
        </RouterContext>
    )
}

export const useRouterContext = () =>{
    const context = useContext(RouterContext)
    if(!context){
        throw new Error("context not inside parent")
    }

    return context
}
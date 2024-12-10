import apiClient from "@/app/helpers/apiClient"
import { ProductsProps } from "@/app/interface/Products"
import { useQuery } from "@tanstack/react-query"

export const useFetchProduct = (id: string | undefined) =>{
    const { data, isLoading, error, isError } = useQuery({
        queryKey: ['product', id],
        queryFn: async ()=>{
            const response = await apiClient.get<ProductsProps>(`/products/${id}`)
            return response?.data
        },
        retry: 0,                
    })

    return { data, isLoading, error, isError }
}
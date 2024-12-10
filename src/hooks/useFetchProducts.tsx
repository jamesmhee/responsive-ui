import apiClient from "@/app/helpers/apiClient"
import { useQuery } from "@tanstack/react-query"
import { ProductsProps } from "@/app/interface/Products"

export const useFetchProducts = (active: boolean) =>{
    const { data, isLoading, error, isError } = useQuery({
        queryKey: ['products'],
        queryFn: async () =>{
            const response = await apiClient.get<ProductsProps[]>('/products')
            return response?.data
        },       
        retry: 0,
        enabled: !active 
    })

    return { data, isLoading, error, isError }
}
import apiClient from "@/app/helpers/apiClient"
import { useQuery } from "@tanstack/react-query"

export interface Carts {
  id: number
  userId: number
  date: string
  products: Product[]
  __v: number
}

export interface Product {
  productId: number
  quantity: number
}


export const useFetchCart = (active: boolean) =>{
    const { data, isLoading, error, isError } = useQuery({
        queryKey: ['cart'],
        queryFn: async () =>{
            const response = await apiClient.get<Carts[]>('/carts')
            return response?.data
        },
        enabled: active
    })

    return { data, isLoading, error, isError }
}
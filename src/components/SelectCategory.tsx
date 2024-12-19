import { useEffect, useRef } from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "./ui/label"
import { useAppContext } from "@/app/context/AppContext"

interface SelectCategoryProps {
    label: string
    placeHolder: string
    options: any[]
    onChange: (any:any) => void
    selectAll: (any:any) => void
}

export function SelectCategory({label, placeHolder, options, onChange, selectAll}: SelectCategoryProps) {    
    const { onScroll } = useAppContext()

  return (
    <div className={(onScroll >= 189 ? 'fixed translate-y-4 pb-5 top-12 bg-yellow-400 dark:bg-zinc-800' : 'absolute bottom-[-20px]') +  " transition-transform duration-700 ease-in-out w-full px-5 dark:text-zinc-300"}>
        <Label className="text-base mx-3">{label}</Label>
        <Select onValueChange={(value)=>onChange(value)}>
            <SelectTrigger className="w-full dark:bg-zinc-700">
                <SelectValue placeholder={placeHolder} />
            </SelectTrigger>
            <SelectContent className="dark:bg-zinc-900">
                <SelectGroup>                                 
                    <SelectItem value="all" onChange={selectAll}>All</SelectItem>
                    {
                        options && options?.map((elm: string, index: number)=>(
                            <SelectItem key={index} value={elm}>{elm}</SelectItem>                        
                        ))
                    }                
                </SelectGroup>
            </SelectContent>
        </Select>
    </div>
  )
}

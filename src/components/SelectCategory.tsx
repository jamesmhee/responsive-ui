import * as React from "react"

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

interface SelectCategoryProps {
    label: string
    placeHolder: string
    options: any[]
    onChange: (any:any) => void
    selectAll: (any:any) => void
}

export function SelectCategory({label, placeHolder, options, onChange, selectAll}: SelectCategoryProps) {    
  return (
    <div className="absolute w-full px-5 bottom-[-20px] dark:text-zinc-300">
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

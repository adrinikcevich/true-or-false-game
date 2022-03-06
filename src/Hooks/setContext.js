import { useState } from "react"

export const useCategory = () =>{
    const [category,setCategory] = useState(null)
    return setCategory
}
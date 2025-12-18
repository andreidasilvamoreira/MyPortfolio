import { useContext } from "react"
import { LanguageContext } from "../Context/LanguageContext"

export function useLanguage() {
    return useContext(LanguageContext)
}
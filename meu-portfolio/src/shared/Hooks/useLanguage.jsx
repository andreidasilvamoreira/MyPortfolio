import { useContext } from "react"
import { LanguageContext } from "../../app/providers/LanguageProvider"

export function useLanguage() {
    return useContext(LanguageContext)
}
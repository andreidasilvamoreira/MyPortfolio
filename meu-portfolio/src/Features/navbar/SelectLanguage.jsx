import { useLanguage } from "../../shared/Hooks/useLanguage"
import "./style.css"

export function LanguageSelect() {
    const { language, changeLanguage } = useLanguage()

    return (
        <select className="selectLanguage" value={language} onChange={(e) => changeLanguage(e.target.value)}>
            <option value="pt">pt-BR</option>
            <option value="en">en-US</option>
        </select>
    )
}
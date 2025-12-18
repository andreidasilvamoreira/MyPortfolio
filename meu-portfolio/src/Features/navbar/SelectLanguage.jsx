import { useLanguage } from "../../shared/Hooks/useLanguage"
import "./style.css"

export function LanguageSelect() {
    const { language, changeLanguage } = useLanguage()

    return (
        <select className="selectLanguage" value={language} onChange={(e) => changeLanguage(e.target.value)}>
            <option value="pt">PT</option>
            <option value="en">EN</option>
        </select>
    )
}
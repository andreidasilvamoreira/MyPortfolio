import { translations } from "../../i18n/translations";
import { useState, useMemo, createContext } from "react";

export const LanguageContext = createContext()


export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState("pt")

    function changeLanguage(lang) {
        setLanguage(lang);
    }

    const t = useMemo(() => {
        return translations[language]
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, changeLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}




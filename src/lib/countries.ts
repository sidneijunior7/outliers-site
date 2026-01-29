export interface Country {
    name: string;
    code: string;
    dial: string;
    flag: string;
}

export const countries: Country[] = [
    { name: "Brasil", code: "BR", dial: "+55", flag: "🇧🇷" },
    { name: "Alemanha", code: "DE", dial: "+49", flag: "🇩🇪" },
    { name: "Argentina", code: "AR", dial: "+54", flag: "🇦🇷" },
    { name: "Austrália", code: "AU", dial: "+61", flag: "🇦🇺" },
    { name: "Canadá", code: "CA", dial: "+1", flag: "🇨🇦" },
    { name: "China", code: "CN", dial: "+86", flag: "🇨🇳" },
    { name: "Coreia do Sul", code: "KR", dial: "+82", flag: "🇰🇷" },
    { name: "Espanha", code: "ES", dial: "+34", flag: "🇪🇸" },
    { name: "Estados Unidos", code: "US", dial: "+1", flag: "🇺🇸" },
    { name: "França", code: "FR", dial: "+33", flag: "🇫🇷" },
    { name: "Índia", code: "IN", dial: "+91", flag: "🇮🇳" },
    { name: "Indonésia", code: "ID", dial: "+62", flag: "🇮🇩" },
    { name: "Inglaterra", code: "GB", dial: "+44", flag: "🇬🇧" },
    { name: "Irlanda", code: "IE", dial: "+353", flag: "🇮🇪" },
    { name: "Itália", code: "IT", dial: "+39", flag: "🇮🇹" },
    { name: "Japão", code: "JP", dial: "+81", flag: "🇯🇵" },
    { name: "México", code: "MX", dial: "+52", flag: "🇲🇽" },
    { name: "Nova Zelândia", code: "NZ", dial: "+64", flag: "🇳🇿" },
    { name: "Portugal", code: "PT", dial: "+351", flag: "🇵🇹" },
    { name: "Rússia", code: "RU", dial: "+7", flag: "🇷🇺" },
    { name: "Turquia", code: "TR", dial: "+90", flag: "🇹🇷" },
];

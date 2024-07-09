import z from "zod";
export const language = [
  { "code": "af", "name": "Afrikaans" },
  { "code": "ak", "name": "Akan" },
  { "code": "sq", "name": "Albanian" },
  { "code": "am", "name": "Amharic" },
  { "code": "ar", "name": "Arabic" },
  { "code": "hy", "name": "Armenian" },
  { "code": "az", "name": "Azerbaijani" },
  { "code": "eu", "name": "Basque" },
  { "code": "be", "name": "Belarusian" },
  { "code": "bn", "name": "Bengali" },
  { "code": "bh", "name": "Bihari" },
  { "code": "bs", "name": "Bosnian" },
  { "code": "br", "name": "Breton" },
  { "code": "bg", "name": "Bulgarian" },
  { "code": "km", "name": "Cambodian" },
  { "code": "ca", "name": "Catalan" },
  { "code": "ny", "name": "Chichewa" },
  { "code": "zh-Hans", "name": "Chinese (Simplified)" },
  { "code": "zh-HK", "name": "Chinese (Traditional, HK)" },
  { "code": "zh-TW", "name": "Chinese (Traditional, TW)" },
  { "code": "co", "name": "Corsican" },
  { "code": "hr", "name": "Croatian" },
  { "code": "cs", "name": "Czech" },
  { "code": "da", "name": "Danish" },
  { "code": "nl", "name": "Dutch" },
  { "code": "en", "name": "English" },
  { "code": "eo", "name": "Esperanto" },
  { "code": "et", "name": "Estonian" },
  { "code": "ee", "name": "Ewe" },
  { "code": "fo", "name": "Faroese" },
  { "code": "tl", "name": "Filipino" },
  { "code": "fi", "name": "Finnish" },
  { "code": "fr", "name": "French" },
  { "code": "fy", "name": "Frisian" },
  { "code": "gl", "name": "Galician" },
  { "code": "ka", "name": "Georgian" },
  { "code": "de", "name": "German" },
  { "code": "el", "name": "Greek" },
  { "code": "gn", "name": "Guarani" },
  { "code": "gu", "name": "Gujarati" },
  { "code": "ht", "name": "Haitian Creole" },
  { "code": "ha", "name": "Hausa" },
  { "code": "iw", "name": "Hebrew" },
  { "code": "hi", "name": "Hindi" },
  { "code": "hu", "name": "Hungarian" },
  { "code": "is", "name": "Icelandic" },
  { "code": "ig", "name": "Igbo" },
  { "code": "id", "name": "Indonesian" },
  { "code": "ia", "name": "Interlingua" },
  { "code": "ga", "name": "Irish" },
  { "code": "it", "name": "Italian" },
  { "code": "ja", "name": "Japanese" },
  { "code": "jw", "name": "Javanese" },
  { "code": "kn", "name": "Kannada" },
  { "code": "kk", "name": "Kazakh" },
  { "code": "rw", "name": "Kinyarwanda" },
  { "code": "rn", "name": "Kirundi" },
  { "code": "kg", "name": "Kongo" },
  { "code": "ko", "name": "Korean" },
  { "code": "ku", "name": "Kurdish" },
  { "code": "ky", "name": "Kyrgyz" },
  { "code": "lo", "name": "Laothian" },
  { "code": "la", "name": "Latin" },
  { "code": "lv", "name": "Latvian" },
  { "code": "ln", "name": "Lingala" },
  { "code": "lt", "name": "Lithuanian" },
  { "code": "lg", "name": "Luganda" },
  { "code": "mk", "name": "Macedonian" },
  { "code": "mg", "name": "Malagasy" },
  { "code": "ms", "name": "Malay" },
  { "code": "ml", "name": "Malayalam" },
  { "code": "mt", "name": "Maltese" },
  { "code": "mi", "name": "Maori" },
  { "code": "mr", "name": "Marathi" },
  { "code": "mo", "name": "Moldavian" },
  { "code": "mn", "name": "Mongolian" },
  { "code": "ne", "name": "Nepali" },
  { "code": "no", "name": "Norwegian" },
  { "code": "oc", "name": "Occitan" },
  { "code": "or", "name": "Oriya" },
  { "code": "om", "name": "Oromo" },
  { "code": "ps", "name": "Pashto" },
  { "code": "fa", "name": "Persian" },
  { "code": "pl", "name": "Polish" },
  { "code": "pt", "name": "Portuguese" },
  { "code": "pa", "name": "Punjabi" },
  { "code": "qu", "name": "Quechua" },
  { "code": "ro", "name": "Romanian" },
  { "code": "rm", "name": "Romansh" },
  { "code": "ru", "name": "Russian" },
  { "code": "gd", "name": "Scots Gaelic" },
  { "code": "sr", "name": "Serbian" },
  { "code": "sh", "name": "Serbo-Croatian" },
  { "code": "st", "name": "Sesotho" },
  { "code": "tn", "name": "Setswana" },
  { "code": "sn", "name": "Shona" },
  { "code": "sd", "name": "Sindhi" },
  { "code": "si", "name": "Sinhalese" },
  { "code": "sk", "name": "Slovak" },
  { "code": "sl", "name": "Slovenian" },
  { "code": "so", "name": "Somali" },
  { "code": "es", "name": "Spanish" },
  { "code": "su", "name": "Sundanese" },
  { "code": "sw", "name": "Swahili" },
  { "code": "sv", "name": "Swedish" },
  { "code": "tg", "name": "Tajik" },
  { "code": "ta", "name": "Tamil" },
  { "code": "tt", "name": "Tatar" },
  { "code": "te", "name": "Telugu" },
  { "code": "th", "name": "Thai" },
  { "code": "ti", "name": "Tigrinya" },
  { "code": "to", "name": "Tonga" },
  { "code": "tr", "name": "Turkish" },
  { "code": "tk", "name": "Turkmen" },
  { "code": "tw", "name": "Twi" },
  { "code": "ug", "name": "Uighur" },
  { "code": "uk", "name": "Ukrainian" },
  { "code": "ur", "name": "Urdu" },
  { "code": "uz", "name": "Uzbek" },
  { "code": "vi", "name": "Vietnamese" },
  { "code": "cy", "name": "Welsh" },
  { "code": "wo", "name": "Wolof" },
  { "code": "xh", "name": "Xhosa" },
  { "code": "yi", "name": "Yiddish" },
  { "code": "yo", "name": "Yoruba" },
  { "code": "zu", "name": "Zulu" },
];

export const languageCodes = language.map(item => item.code);
export const LanguageCodeSchema = z.enum(languageCodes as [string, ...string[]]);
export type LanguageCode = z.infer<typeof LanguageCodeSchema>;
export const languageOptions = language.map(item => {
  const value = `${item.name}  (${item.code.toUpperCase()})`;
  return {
    value: value,
    code: item.code,
    label: item.name
  }
});

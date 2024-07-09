import z from "zod";
export const countries = [
  { "code": "af", "name": " Afghanistan ", "flag": "🇦🇫" },
  { "code": "al", "name": " Albania ", "flag": "🇦🇱" },
  { "code": "dz", "name": " Algeria ", "flag": "🇩🇿" },
  { "code": "as", "name": " American Samoa ", "flag": "🇦🇸" },
  { "code": "ad", "name": " Andorra ", "flag": "🇦🇩" },
  { "code": "ao", "name": " Angola ", "flag": "🇦🇴" },
  { "code": "ai", "name": " Anguilla ", "flag": "🇦🇮" },
  { "code": "aq", "name": " Antarctica ", "flag": "🇦🇶" },
  { "code": "ag", "name": " Antigua and Barbuda ", "flag": "🇦🇬" },
  { "code": "ar", "name": " Argentina ", "flag": "🇦🇷" },
  { "code": "am", "name": " Armenia ", "flag": "🇦🇲" },
  { "code": "aw", "name": " Aruba ", "flag": "🇦🇼" },
  { "code": "au", "name": " Australia ", "flag": "🇦🇺" },
  { "code": "at", "name": " Austria ", "flag": "🇦🇹" },
  { "code": "az", "name": " Azerbaijan ", "flag": "🇦🇿" },
  { "code": "bs", "name": " Bahamas ", "flag": "🇧🇸" },
  { "code": "bh", "name": " Bahrain ", "flag": "🇧🇭" },
  { "code": "bd", "name": " Bangladesh ", "flag": "🇧🇩" },
  { "code": "bb", "name": " Barbados ", "flag": "🇧🇧" },
  { "code": "by", "name": " Belarus ", "flag": "🇧🇾" },
  { "code": "be", "name": " Belgium ", "flag": "🇧🇪" },
  { "code": "bz", "name": " Belize ", "flag": "🇧🇿" },
  { "code": "bj", "name": " Benin ", "flag": "🇧🇯" },
  { "code": "bm", "name": " Bermuda ", "flag": "🇧🇲" },
  { "code": "bt", "name": " Bhutan ", "flag": "🇧🇹" },
  { "code": "bo", "name": " Bolivia ", "flag": "🇧🇴" },
  { "code": "ba", "name": " Bosnia and Herzegovina ", "flag": "🇧🇦" },
  { "code": "bw", "name": " Botswana ", "flag": "🇧🇼" },
  { "code": "bv", "name": " Bouvet Island ", "flag": "🇧🇻" },
  { "code": "br", "name": " Brazil ", "flag": "🇧🇷" },
  { "code": "io", "name": " British Indian Ocean Territory ", "flag": "🇮🇴" },
  { "code": "bn", "name": " Brunei Darussalam ", "flag": "🇧🇳" },
  { "code": "bg", "name": " Bulgaria ", "flag": "🇧🇬" },
  { "code": "bf", "name": " Burkina Faso ", "flag": "🇧🇫" },
  { "code": "bi", "name": " Burundi ", "flag": "🇧🇮" },
  { "code": "kh", "name": " Cambodia ", "flag": "🇰🇭" },
  { "code": "cm", "name": " Cameroon ", "flag": "🇨🇲" },
  { "code": "ca", "name": " Canada ", "flag": "🇨🇦" },
  { "code": "cv", "name": " Cape Verde ", "flag": "🇨🇻" },
  { "code": "ky", "name": " Cayman Islands ", "flag": "🇰🇾" },
  { "code": "cf", "name": " Central African Republic ", "flag": "🇨🇫" },
  { "code": "td", "name": " Chad ", "flag": "🇹🇩" },
  { "code": "cl", "name": " Chile ", "flag": "🇨🇱" },
  { "code": "cn", "name": " China ", "flag": "🇨🇳" },
  { "code": "cx", "name": " Christmas Island ", "flag": "🇨🇽" },
  { "code": "co", "name": " Colombia ", "flag": "🇨🇴" },
  { "code": "km", "name": " Comoros ", "flag": "🇰🇲" },
  { "code": "cg", "name": " Congo ", "flag": "🇨🇬" },
  { "code": "cd", "name": " Congo, the Democratic Republic of the ", "flag": "🇨🇩" },
  { "code": "ck", "name": " Cook Islands ", "flag": "🇨🇰" },
  { "code": "cr", "name": " Costa Rica ", "flag": "🇨🇷" },
  { "code": "ci", "name": " Cote D'ivoire ", "flag": "🇨🇮" },
  { "code": "hr", "name": " Croatia ", "flag": "🇭🇷" },
  { "code": "cu", "name": " Cuba ", "flag": "🇨🇺" },
  { "code": "cy", "name": " Cyprus ", "flag": "🇨🇾" },
  { "code": "cz", "name": " Czech Republic ", "flag": "🇨🇿" },
  { "code": "dk", "name": " Denmark ", "flag": "🇩🇰" },
  { "code": "dj", "name": " Djibouti ", "flag": "🇩🇯" },
  { "code": "dm", "name": " Dominica ", "flag": "🇩🇲" },
  { "code": "do", "name": " Dominican Republic ", "flag": "🇩🇴" },
  { "code": "ec", "name": " Ecuador ", "flag": "🇪🇨" },
  { "code": "eg", "name": " Egypt ", "flag": "🇪🇬" },
  { "code": "sv", "name": " El Salvador ", "flag": "🇸🇻" },
  { "code": "gq", "name": " Equatorial Guinea ", "flag": "🇬🇶" },
  { "code": "er", "name": " Eritrea ", "flag": "🇪🇷" },
  { "code": "ee", "name": " Estonia ", "flag": "🇪🇪" },
  { "code": "et", "name": " Ethiopia ", "flag": "🇪🇹" },
  { "code": "fo", "name": " Faroe Islands ", "flag": "🇫🇴" },
  { "code": "fj", "name": " Fiji ", "flag": "🇫🇯" },
  { "code": "fi", "name": " Finland ", "flag": "🇫🇮" },
  { "code": "fr", "name": " France ", "flag": "🇫🇷" },
  { "code": "gf", "name": " French Guiana ", "flag": "🇬🇫" },
  { "code": "pf", "name": " French Polynesia ", "flag": "🇵🇫" },
  { "code": "tf", "name": " French Southern Territories ", "flag": "🇹🇫" },
  { "code": "ga", "name": " Gabon ", "flag": "🇬🇦" },
  { "code": "gm", "name": " Gambia ", "flag": "🇬🇲" },
  { "code": "ge", "name": " Georgia ", "flag": "🇬🇪" },
  { "code": "de", "name": " Germany ", "flag": "🇩🇪" },
  { "code": "gh", "name": " Ghana ", "flag": "🇬🇭" },
  { "code": "gi", "name": " Gibraltar ", "flag": "🇬🇮" },
  { "code": "gr", "name": " Greece ", "flag": "🇬🇷" },
  { "code": "gl", "name": " Greenland ", "flag": "🇬🇱" },
  { "code": "gd", "name": " Grenada ", "flag": "🇬🇩" },
  { "code": "gp", "name": " Guadeloupe ", "flag": "🇬🇵" },
  { "code": "gu", "name": " Guam ", "flag": "🇬🇺" },
  { "code": "gt", "name": " Guatemala ", "flag": "🇬🇹" },
  { "code": "gn", "name": " Guinea ", "flag": "🇬🇳" },
  { "code": "gw", "name": " Guinea-Bissau ", "flag": "🇬🇼" },
  { "code": "gy", "name": " Guyana ", "flag": "🇬🇾" },
  { "code": "ht", "name": " Haiti ", "flag": "🇭🇹" },
  { "code": "hm", "name": " Heard Island and Mcdonald Islands ", "flag": "🇭🇲" },
  { "code": "hn", "name": " Honduras ", "flag": "🇭🇳" },
  { "code": "hk", "name": " Hong Kong ", "flag": "🇭🇰" },
  { "code": "hu", "name": " Hungary ", "flag": "🇭🇺" },
  { "code": "is", "name": " Iceland ", "flag": "🇮🇸" },
  { "code": "in", "name": " India ", "flag": "🇮🇳" },
  { "code": "id", "name": " Indonesia ", "flag": "🇮🇩" },
  { "code": "ir", "name": " Iran, Islamic Republic of ", "flag": "🇮🇷" },
  { "code": "iq", "name": " Iraq ", "flag": "🇮🇶" },
  { "code": "ie", "name": " Ireland ", "flag": "🇮🇪" },
  { "code": "il", "name": " Israel ", "flag": "🇮🇱" },
  { "code": "it", "name": " Italy ", "flag": "🇮🇹" },
  { "code": "jm", "name": " Jamaica ", "flag": "🇯🇲" },
  { "code": "jp", "name": " Japan ", "flag": "🇯🇵" },
  { "code": "jo", "name": " Jordan ", "flag": "🇯🇴" },
  { "code": "kz", "name": " Kazakhstan ", "flag": "🇰🇿" },
  { "code": "ke", "name": " Kenya ", "flag": "🇰🇪" },
  { "code": "ki", "name": " Kiribati ", "flag": "🇰🇮" },
  { "code": "kp", "name": " Korea, Democratic People's Republic of ", "flag": "🇰🇵" },
  { "code": "kr", "name": " Korea, Republic of ", "flag": "🇰🇷" },
  { "code": "kw", "name": " Kuwait ", "flag": "🇰🇼" },
  { "code": "kg", "name": " Kyrgyzstan ", "flag": "🇰🇬" },
  { "code": "la", "name": " Lao People's Democratic Republic ", "flag": "🇱🇦" },
  { "code": "lv", "name": " Latvia ", "flag": "🇱🇻" },
  { "code": "lb", "name": " Lebanon ", "flag": "🇱🇧" },
  { "code": "ls", "name": " Lesotho ", "flag": "🇱🇸" },
  { "code": "lr", "name": " Liberia ", "flag": "🇱🇷" },
  { "code": "ly", "name": " Libyan Arab Jamahiriya ", "flag": "🇱🇾" },
  { "code": "li", "name": " Liechtenstein ", "flag": "🇱🇮" },
  { "code": "lt", "name": " Lithuania ", "flag": "🇱🇹" },
  { "code": "lu", "name": " Luxembourg ", "flag": "🇱🇺" },
  { "code": "mo", "name": " Macao ", "flag": "🇲🇴" },
  { "code": "mk", "name": " Macedonia, the Former Yugosalv Republic of ", "flag": "🇲🇰" },
  { "code": "mg", "name": " Madagascar ", "flag": "🇲🇬" },
  { "code": "mw", "name": " Malawi ", "flag": "🇲🇼" },
  { "code": "my", "name": " Malaysia ", "flag": "🇲🇾" },
  { "code": "mv", "name": " Maldives ", "flag": "🇲🇻" },
  { "code": "ml", "name": " Mali ", "flag": "🇲🇱" },
  { "code": "mt", "name": " Malta ", "flag": "🇲🇹" },
  { "code": "mh", "name": " Marshall Islands ", "flag": "🇲🇭" },
  { "code": "mq", "name": " Martinique ", "flag": "🇲🇶" },
  { "code": "mr", "name": " Mauritania ", "flag": "🇲🇷" },
  { "code": "mu", "name": " Mauritius ", "flag": "🇲🇺" },
  { "code": "yt", "name": " Mayotte ", "flag": "🇾🇹" },
  { "code": "mx", "name": " Mexico ", "flag": "🇲🇽" },
  { "code": "fm", "name": " Micronesia, Federated States of ", "flag": "🇫🇲" },
  { "code": "md", "name": " Moldova, Republic of ", "flag": "🇲🇩" },
  { "code": "mc", "name": " Monaco ", "flag": "🇲🇨" },
  { "code": "mn", "name": " Mongolia ", "flag": "🇲🇳" },
  { "code": "ms", "name": " Montserrat ", "flag": "🇲🇸" },
  { "code": "ma", "name": " Morocco ", "flag": "🇲🇦" },
  { "code": "mz", "name": " Mozambique ", "flag": "🇲🇿" },
  { "code": "mm", "name": " Myanmar ", "flag": "🇲🇲" },
  { "code": "na", "name": " Namibia ", "flag": "🇳🇦" },
  { "code": "nr", "name": " Nauru ", "flag": "🇳🇷" },
  { "code": "np", "name": " Nepal ", "flag": "🇳🇵" },
  { "code": "nl", "name": " Netherlands ", "flag": "🇳🇱" },
  { "code": "an", "name": " Netherlands Antilles ", "flag": "🇦🇳" },
  { "code": "nc", "name": " New Caledonia ", "flag": "🇳🇨" },
  { "code": "nz", "name": " New Zealand ", "flag": "🇳🇿" },
  { "code": "ni", "name": " Nicaragua ", "flag": "🇳🇮" },
  { "code": "ne", "name": " Niger ", "flag": "🇳🇪" },
  { "code": "ng", "name": " Nigeria ", "flag": "🇳🇬" },
  { "code": "nu", "name": " Niue ", "flag": "🇳🇺" },
  { "code": "nf", "name": " Norfolk Island ", "flag": "🇳🇫" },
  { "code": "mp", "name": " Northern Mariana Islands ", "flag": "🇲🇵" },
  { "code": "no", "name": " Norway ", "flag": "🇳🇴" },
  { "code": "om", "name": " Oman ", "flag": "🇴🇲" },
  { "code": "pk", "name": " Pakistan ", "flag": "🇵🇰" },
  { "code": "pw", "name": " Palau ", "flag": "🇵🇼" },
  { "code": "ps", "name": " Palestinian Territory, Occupied ", "flag": "🇵🇸" },
  { "code": "pa", "name": " Panama ", "flag": "🇵🇦" },
  { "code": "pg", "name": " Papua New Guinea ", "flag": "🇵🇬" },
  { "code": "py", "name": " Paraguay ", "flag": "🇵🇾" },
  { "code": "pe", "name": " Peru ", "flag": "🇵🇪" },
  { "code": "ph", "name": " Philippines ", "flag": "🇵🇭" },
  { "code": "pn", "name": " Pitcairn ", "flag": "🇵🇳" },
  { "code": "pl", "name": " Poland ", "flag": "🇵🇱" },
  { "code": "pt", "name": " Portugal ", "flag": "🇵🇹" },
  { "code": "pr", "name": " Puerto Rico ", "flag": "🇵🇷" },
  { "code": "qa", "name": " Qatar ", "flag": "🇶🇦" },
  { "code": "re", "name": " Reunion ", "flag": "🇷🇪" },
  { "code": "ro", "name": " Romania ", "flag": "🇷🇴" },
  { "code": "ru", "name": " Russian Federation ", "flag": "🇷🇺" },
  { "code": "rw", "name": " Rwanda ", "flag": "🇷🇼" },
  { "code": "sh", "name": " Saint Helena ", "flag": "🇸🇭" },
  { "code": "kn", "name": " Saint Kitts and Nevis ", "flag": "🇰🇳" },
  { "code": "lc", "name": " Saint Lucia ", "flag": "🇱🇨" },
  { "code": "pm", "name": " Saint Pierre and Miquelon ", "flag": "🇵🇲" },
  { "code": "vc", "name": " Saint Vincent and the Grenadines ", "flag": "🇻🇨" },
  { "code": "ws", "name": " Samoa ", "flag": "🇼🇸" },
  { "code": "sm", "name": " San Marino ", "flag": "🇸🇲" },
  { "code": "st", "name": " Sao Tome and Principe ", "flag": "🇸🇹" },
  { "code": "sa", "name": " Saudi Arabia ", "flag": "🇸🇦" },
  { "code": "sn", "name": " Senegal ", "flag": "🇸🇳" },
  { "code": "rs", "name": " Serbia and Montenegro ", "flag": "🇷🇸" },
  { "code": "sc", "name": " Seychelles ", "flag": "🇸🇨" },
  { "code": "sl", "name": " Sierra Leone ", "flag": "🇸🇱" },
  { "code": "sg", "name": " Singapore ", "flag": "🇸🇬" },
  { "code": "sk", "name": " Slovakia ", "flag": "🇸🇰" },
  { "code": "si", "name": " Slovenia ", "flag": "🇸🇮" },
  { "code": "sb", "name": " Solomon Islands ", "flag": "🇸🇧" },
  { "code": "so", "name": " Somalia ", "flag": "🇸🇴" },
  { "code": "za", "name": " South Africa ", "flag": "🇿🇦" },
  { "code": "gs", "name": " South Georgia and the South Sandwich Islands ", "flag": "🇬🇸" },
  { "code": "es", "name": " Spain ", "flag": "🇪🇸" },
  { "code": "lk", "name": " Sri Lanka ", "flag": "🇱🇰" },
  { "code": "sd", "name": " Sudan ", "flag": "🇸🇩" },
  { "code": "sr", "name": " Suriname ", "flag": "🇸🇷" },
  { "code": "sj", "name": " Svalbard and Jan Mayen ", "flag": "🇸🇯" },
  { "code": "sz", "name": " Swaziland ", "flag": "🇸🇿" },
  { "code": "se", "name": " Sweden ", "flag": "🇸🇪" },
  { "code": "ch", "name": " Switzerland ", "flag": "🇨🇭" },
  { "code": "sy", "name": " Syrian Arab Republic ", "flag": "🇸🇾" },
  { "code": "tw", "name": " Taiwan, Province of China ", "flag": "🇹🇼" },
  { "code": "tj", "name": " Tajikistan ", "flag": "🇹🇯" },
  { "code": "tz", "name": " Tanzania, United Republic of ", "flag": "🇹🇿" },
  { "code": "th", "name": " Thailand ", "flag": "🇹🇭" },
  { "code": "tl", "name": " Timor-Leste ", "flag": "🇹🇱" },
  { "code": "tg", "name": " Togo ", "flag": "🇹🇬" },
  { "code": "tk", "name": " Tokelau ", "flag": "🇹🇰" },
  { "code": "to", "name": " Tonga ", "flag": "🇹🇴" },
  { "code": "tt", "name": " Trinidad and Tobago ", "flag": "🇹🇹" },
  { "code": "tn", "name": " Tunisia ", "flag": "🇹🇳" },
  { "code": "tr", "name": " Turkey ", "flag": "🇹🇷" },
  { "code": "tm", "name": " Turkmenistan ", "flag": "🇹🇲" },
  { "code": "tc", "name": " Turks and Caicos Islands ", "flag": "🇹🇨" },
  { "code": "tv", "name": " Tuvalu ", "flag": "🇹🇻" },
  { "code": "ug", "name": " Uganda ", "flag": "🇺🇬" },
  { "code": "ua", "name": " Ukraine ", "flag": "🇺🇦" },
  { "code": "ae", "name": " United Arab Emirates ", "flag": "🇦🇪" },
  { "code": "gb", "name": " United Kingdom ", "flag": "🇬🇧" },
  { "code": "us", "name": " United States ", "flag": "🇺🇸" },
  { "code": "um", "name": " United States Minor Outlying Islands ", "flag": "🇺🇲" },
  { "code": "uy", "name": " Uruguay ", "flag": "🇺🇾" },
  { "code": "uz", "name": " Uzbekistan ", "flag": "🇺🇿" },
  { "code": "vu", "name": " Vanuatu ", "flag": "🇻🇺" },
  { "code": "ve", "name": " Venezuela ", "flag": "🇻🇪" },
  { "code": "vn", "name": " Viet Nam ", "flag": "🇻🇳" },
  { "code": "vg", "name": " Virgin Islands, British ", "flag": "🇻🇬" },
  { "code": "vi", "name": " Virgin Islands, U.S. ", "flag": "🇻🇮" },
  { "code": "wf", "name": " Wallis and Futuna ", "flag": "🇼🇫" },
  { "code": "eh", "name": " Western Sahara ", "flag": "🇪🇭" },
  { "code": "ye", "name": " Yemen ", "flag": "🇾🇪" },
  { "code": "zm", "name": " Zambia ", "flag": "🇿🇲" },
  { "code": "zw", "name": " Zimbabwe ", "flag": "🇿🇼" },
];

export const countryCodes = countries.map(item => item.code);
export const CountryCodeSchema = z.enum(countryCodes as [string, ...string[]]);
export type CountryCode = z.infer<typeof CountryCodeSchema>;
export const countryOptions = countries.map(item => {
  const value = `${item.flag} ${item.name} (${item.code.toUpperCase()})`;
  return {
    value: value,
    code: item.code,
    label: `${item.flag} ${item.name}`
  }
})
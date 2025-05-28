"use client";

import { Font, PDFViewer } from "@react-pdf/renderer";
import A4PujaList from "../../../../../package/src/sizes/a4/A4PujaList";

interface IPuja {
  name: string;
  bookings: {
    invoiceNumber: string;
    devoteeName: string;
    nakshatra: string;
    quantity: string;
    priestNote: string;
    is_early_reminder?: boolean; // Optional property
    date?: string; // Optional property
  }[];
}

const A4PujaListPage = () => {
  const fontFamilies = [
    {
      family: "Noto Sans SC", // Simplified Chinese
      src: "https://cdn.jsdelivr.net/fontsource/fonts/noto-serif-sc@latest/chinese-simplified-400-normal.ttf",
    },
    {
      family: "Noto Sans Arabic", // arabic , urdu
      src: "https://cdn.jsdelivr.net/fontsource/fonts/noto-sans-arabic@latest/arabic-400-normal.ttf",
    },
    {
      family: "Noto Sans Devanagari", //hindi
      src: "https://cdn.jsdelivr.net/fontsource/fonts/noto-sans-devanagari@latest/devanagari-400-normal.ttf",
    },
    {
      family: "Noto Sans Kannada", //kannada
      src: "https://cdn.jsdelivr.net/fontsource/fonts/noto-sans-kannada@latest/kannada-400-normal.ttf",
    },
    {
      family: "Noto Sans Tamil", //tamil
      src: "https://cdn.jsdelivr.net/fontsource/fonts/noto-sans-tamil@latest/tamil-400-normal.ttf",
    },
    {
      family: "Noto Sans Gurmukhi", //punjabi
      src: "https://cdn.jsdelivr.net/fontsource/fonts/anek-gurmukhi@latest/gurmukhi-400-normal.ttf",
    },
    {
      family: "Noto Sans Lao", //lao
      src: "https://cdn.jsdelivr.net/fontsource/fonts/noto-sans-lao@latest/lao-400-normal.ttf",
    },
    {
      family: "Noto Sans Thai", //thai
      src: "https://cdn.jsdelivr.net/fontsource/fonts/noto-sans-thai@latest/thai-400-normal.ttf",
    },
    {
      family: "Noto Sans Kr", //korean
      src: "https://cdn.jsdelivr.net/fontsource/fonts/noto-sans-kr@latest/korean-400-normal.ttf",
    },
    {
      family: "Noto Sans Bengali", //bengali
      src: "https://cdn.jsdelivr.net/fontsource/fonts/noto-sans-bengali@latest/bengali-400-normal.ttf",
    },
    {
      family: "Noto Sans Cyrillic", //russian
      src: "https://cdn.jsdelivr.net/fontsource/fonts/noto-sans-kr@latest/cyrillic-400-normal.ttf",
    },
    {
      family: "Noto Sans JP", //japanese
      src: "https://cdn.jsdelivr.net/fontsource/fonts/noto-sans-jp@latest/japanese-400-normal.ttf",
    },
    {
      family: "Noto Sans Greek", //greek
      src: "https://cdn.jsdelivr.net/fontsource/fonts/noto-sans@latest/greek-400-normal.ttf",
    },
    {
      family: "Noto Sans Latin", //latin
      src: "https://cdn.jsdelivr.net/fontsource/fonts/noto-sans@latest/latin-400-normal.ttf",
    },
    {
      family: "Noto Sans Myanmar", //Myanmar
      src: "https://cdn.jsdelivr.net/fontsource/fonts/noto-sans-myanmar@latest/myanmar-400-normal.ttf",
    },
    {
      family: "Noto Sans Ethiopic", //Ethiopic
      src: "https://cdn.jsdelivr.net/fontsource/fonts/noto-sans-ethiopic@latest/ethiopic-400-normal.ttf",
    },
    {
      family: "Noto Sans Khmer", //Khmer
      src: "https://cdn.jsdelivr.net/fontsource/fonts/noto-sans-khmer@latest/khmer-400-normal.ttf",
    },
    {
      family: "Noto Sans Armenian", //Armenian
      src: "https://cdn.jsdelivr.net/fontsource/fonts/noto-sans-armenian@latest/armenian-400-normal.ttf",
    },
    {
      family: "Noto Sans Hebrew", //Hebrew
      src: "https://cdn.jsdelivr.net/fontsource/fonts/noto-sans-hebrew@latest/hebrew-400-normal.ttf",
    },
    {
      family: "Noto Sans Georgian", //Georgian
      src: "https://cdn.jsdelivr.net/fontsource/fonts/noto-sans-georgian@latest/georgian-400-normal.ttf",
    },
    {
      family: "Noto Sans Canadian Aboriginal", //Canadian Aboriginal
      src: "https://cdn.jsdelivr.net/fontsource/fonts/noto-sans-canadian-aboriginal@latest/canadian-aboriginal-400-normal.ttf",
    },
    {
      family: "Noto Sans Sinhala", //Sinhala
      src: "https://cdn.jsdelivr.net/fontsource/fonts/noto-sans-sinhala@latest/sinhala-400-normal.ttf",
    },
    {
      family: "Noto Sans Ol Chiki", //Ol Chiki
      src: "https://cdn.jsdelivr.net/fontsource/fonts/noto-sans-ol-chiki@latest/ol-chiki-400-normal.ttf",
    },
    {
      family: "Noto Sans Tibetan", //Tibetan
      src: "https://cdn.jsdelivr.net/fontsource/fonts/noto-serif-tibetan@latest/tibetan-400-normal.ttf",
    },
    {
      family: "Noto Sans Tifinagh", //Tifinagh
      src: "https://cdn.jsdelivr.net/fontsource/fonts/noto-sans-tifinagh@latest/tifinagh-400-normal.ttf",
    },
    {
      family: "Noto Sans Yi", //Yi
      src: "https://cdn.jsdelivr.net/fontsource/fonts/noto-sans-yi@latest/yi-400-normal.ttf",
    },
    {
      family: "Noto Sans Syriac", //Syriac
      src: "https://cdn.jsdelivr.net/fontsource/fonts/noto-sans-syriac@latest/syriac-400-normal.ttf",
    },
    {
      family: "Noto Sans Thaana", //Thaana
      src: "https://cdn.jsdelivr.net/fontsource/fonts/noto-sans-thaana@latest/thaana-400-normal.ttf",
    },
    {
      family: "Noto Sans Vai", //Vai
      src: "https://cdn.jsdelivr.net/fontsource/fonts/noto-sans-vai@latest/vai-400-normal.ttf",
    },
    {
      family: "Noto Sans Cherokee", //Cherokee
      src: "https://cdn.jsdelivr.net/fontsource/fonts/noto-sans-cherokee@latest/cherokee-400-normal.ttf",
    },
    {
      family: "Noto Sans Tai Tham", //Tai Tham
      src: "https://cdn.jsdelivr.net/fontsource/fonts/noto-sans-tai-tham@latest/tai-tham-400-normal.ttf",
    },
    {
      family: "Noto Sans Tai Viet", //Tai Viet
      src: "https://cdn.jsdelivr.net/fontsource/fonts/noto-sans-tai-viet@latest/tai-viet-400-normal.ttf",
    },
    {
      family: "Noto Sans Javanese", //Javanese
      src: "https://cdn.jsdelivr.net/fontsource/fonts/noto-sans-javanese@latest/javanese-400-normal.ttf",
    },
    {
      family: "Noto Sans Gujarati", //Gujarati
      src: "https://cdn.jsdelivr.net/fontsource/fonts/noto-sans-gujarati@latest/gujarati-400-normal.ttf",
    },
    {
      family: "Noto Sans Malayalam", //Malayalam
      src: "https://cdn.jsdelivr.net/fontsource/fonts/noto-sans-malayalam@latest/malayalam-400-normal.ttf",
    },
    {
      family: "Noto Sans Telugu", //Telugu
      src: "https://cdn.jsdelivr.net/fontsource/fonts/noto-sans-telugu@latest/telugu-400-normal.ttf",
    },
  ];

  //registering all the font families
  fontFamilies.forEach(({ family, src }) =>
    Font.register({
      family,
      src,
    })
  );

  const pujas: IPuja[] = [
    {
      name: "അർച്ചന",
      bookings: [
        {
          invoiceNumber: "INV-1001",
          devoteeName: "രാമ ശർമ്മ",
          nakshatra: "Ashwini",
          quantity: "1",
          priestNote: "Special blessing",
        },
        {
          invoiceNumber: "INV-1002",
          devoteeName: "Priya Patel",
          nakshatra: "Bharani",
          quantity: "2",
          priestNote: "",
        },
        {
          invoiceNumber: "INV-1002",
          devoteeName: "Priya Patel",
          nakshatra: "Bharani",
          quantity: "2",
          priestNote: "",
          is_early_reminder: true,
          date: "2023-10-01",
        },
      ],
    },
    {
      name: "Abhishekam",
      bookings: [
        {
          invoiceNumber: "INV-1003",
          devoteeName: "Suresh Kumar",
          nakshatra: "Krittika",
          quantity: "1",
          priestNote: "അർച്ചന അർച്ചന അർച്ചന അർച്ചന അർച്ചന അർച്ചന അർച്ചന അർച്ചന അർച്ചന അർച്ചന",
        },
      ],
    },
    {
      name: "Satyanarayana Puja",
      bookings: [
        {
          invoiceNumber: "INV-1004",
          devoteeName:
            "Ananya Singh Rajput Raman Singh Viral Nihaal Singh Gowda Virat Sinha Patel",
          nakshatra: "Rohini",
          quantity: "1",
          priestNote: "Family of 4",
        },
        {
          invoiceNumber: "INV-1005",
          devoteeName: "Vijay Reddy",
          nakshatra: "Mrigashiras",
          quantity: "1",
          priestNote: "Bring prasad",
          is_early_reminder: true,
          date: "2023-10-01",
        },
      ],
    },
    {
      name: "Lakshmi Puja",
      bookings: [
        {
          invoiceNumber: "INV-1006",
          devoteeName: "Meena Devi",
          nakshatra: "Ardra",
          quantity: "1",
          priestNote: "",
        },
      ],
    },
    {
      name: "Ganesh Puja",
      bookings: [
        {
          invoiceNumber: "INV-1007",
          devoteeName: "Rohit Verma",
          nakshatra: "Punarvasu",
          quantity: "2",
          priestNote: "Business blessing",
        },
      ],
    },
    {
      name: "Navagraha Puja",
      bookings: [
        {
          invoiceNumber: "INV-1008",
          devoteeName: "Ashok Gupta",
          nakshatra: "Pushya",
          quantity: "1",
          priestNote: "Health concerns",
        },
        {
          invoiceNumber: "INV-1009",
          devoteeName: "Leela Nair",
          nakshatra: "Ashlesha",
          quantity: "1",
          priestNote: "",
        },
      ],
    },
    {
      name: "Durga Puja",
      bookings: [
        {
          invoiceNumber: "INV-1010",
          devoteeName: "Karthik Iyer",
          nakshatra: "Magha",
          quantity: "1",
          priestNote: "",
        },
      ],
    },
    {
      name: "Shiva Abhishekam",
      bookings: [
        {
          invoiceNumber: "INV-1011",
          devoteeName: "Sunita Rao",
          nakshatra: "Purva Phalguni",
          quantity: "1",
          priestNote: "Early morning",
        },
        {
          invoiceNumber: "INV-1012",
          devoteeName: "Mohan Das",
          nakshatra: "Uttara Phalguni",
          quantity: "1",
          priestNote: "Bring flowers",
        },
      ],
    },
    {
      name: "Hanuman Puja",
      bookings: [
        {
          invoiceNumber: "INV-1013",
          devoteeName: "Arjun Mehta",
          nakshatra: "Hasta",
          quantity: "2",
          priestNote: "Saturday special",
        },
      ],
    },
    {
      name: "Satyanarayan Katha",
      bookings: [
        {
          invoiceNumber: "INV-1014",
          devoteeName: "Divya Joshi",
          nakshatra: "Chitra",
          quantity: "1",
          priestNote: "Anniversary",
        },
        {
          invoiceNumber: "INV-1015",
          devoteeName: "Prakash Malhotra",
          nakshatra: "Swati",
          quantity: "1",
          priestNote: "New home",
        },
      ],
    },
  ];

  const date = new Date();
  const templeName = "Sri Venkateswara Swamy Temple, Pittsburgh";

  return (
    <div>
      <PDFViewer className="w-full h-screen">
        <A4PujaList date={date} templeName={templeName} pujas={pujas} />
      </PDFViewer>
    </div>
  );
};

export default A4PujaListPage;

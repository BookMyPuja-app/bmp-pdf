"use client";

import { Font, PDFViewer } from '@react-pdf/renderer';
import React from 'react';
import A4MultiTemplePaymentReport from '../../../../../package/src/sizes/a4/A4MultiTemplePaymentReport';

const MultiTemplePaymentReport = () => {

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

    const date = new Date();

    const data = [
        {
            name: "Sri Vitthal Rukmini Mandir",
            revenue: 50000,
            bookings: 120
        },
        {
            name: "Sतुम्हारा नाम क्या है,",
            revenue: 30000,
            bookings: 80
        },
        {
            name: "Shree Hanuman Mandir",
            revenue: 20000,
            bookings: 60
        },
        {
            name: "Shree Durga Mandir",
            revenue: 15000,
            bookings: 40
        },
        {
            name: "Shree Krishna Mandir",
            revenue: 10000,
            bookings: 30
        }
    ];

    return (
    <div>
      <PDFViewer className="w-full h-screen">
        <A4MultiTemplePaymentReport startDate={date} endDate={date} data={data} />
      </PDFViewer>
    </div>
    )
}


export default MultiTemplePaymentReport;
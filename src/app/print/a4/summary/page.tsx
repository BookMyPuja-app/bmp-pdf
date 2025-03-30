"use client";

import { Document, Font, Page, PDFViewer, Text } from "@react-pdf/renderer";
import A4Summary from "../../../../../package/src/sizes/a4/A4Summary";

import { bmpLogo, robotoBold, robotoNormal } from "../../../../../package/src/constants";

Font.register({
  family: "Roboto",
  fontWeight: "normal",
  src: robotoNormal,
});
Font.register({
  family: "Roboto",
  fontWeight: "bold",
  src: robotoBold,
});

  const templeName = "Sree Meenkulathi Ammam Temple";
  const date = new Date();

  const pujas = [
    {
      name: "Pushpanjali",
      totalCount: 70,
      nakshatras: [
        { name: "Avottam", count: 45 },
        { name: "Nivedyam", count: 30 },
        { name: "Niramala", count: 20 },
        { name: "Niramala", count: 20 },
      ],
    },
    {
      name: "Ayyilum",
      totalCount: 70,
      nakshatras: [
        { name: "Avottam", count: 45 },
        { name: "Nivedyam", count: 30 },
        { name: "Niramala", count: 20 },
      ],
    },
    {
      name: "Gruha Pravesh",
      totalCount: 100,
      nakshatras: [
        { name: "Avottam", count: 45 },
        { name: "Nivedyam", count: 30 },
        { name: "Niramala", count: 20 },
        {
          name: "Niramala",
          count: 100,
        },
        {
          name: "Niramala",
          count: 20,
        },
      ],
    },
  ];

const A4SummaryPage = () => {
  return (
    <div>
      <PDFViewer className="w-full h-screen" >
        <A4Summary pujas={pujas} date={date} templeName={templeName} />
      </PDFViewer>
    </div>
  );
};

export default A4SummaryPage;

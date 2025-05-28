"use client";

import { reportPrinter } from "@bookmypuja-tech/bmp-pdf";
import { useEffect, useState } from "react";

interface KitchenReportData {
  name: string;
  quantity: number;
}

const PackageTest = () => {

    const [printBlob, setPrintBlob] = useState<Blob | null>(null);
    const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    const printer = new reportPrinter("kitchen", "A4");

    const data: KitchenReportData[] = [
      {
        name: "इनपुट उपकरण को ऑ",
        quantity: 10,
      },
      {
        name: "ലയാളികളെ സ്നേ",
        quantity: 5,
      },
      {
        name: "Prasad Item 3",
        quantity: 20,
      },
    ];

    const thisBlob = printer.getBlob({
      date: new Date(),
      templeName: "Sample Temple",
      data: data,
    });

    thisBlob.then((blob) => {
      setPrintBlob(blob);
      const url = URL.createObjectURL(blob);
        setUrl(url);
    });

  }, []);

  return (
    <>
      <p>Package test</p>
      {
        url ? (
          <iframe
            src={url}
            style={{ width: "100%", height: "100vh", border: "none" }}
            title="PDF Preview"
          />
        ) : (
          <p>Loading...</p>
        )
      }
    </>
  );
};

export default PackageTest;

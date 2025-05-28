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
        name: "അശ്വിനി, ഭരണി, കൃതിക, റോഹിണി, മൃഗശീർഷ, ആർദ്ര, പുനർവാസു, പൂഷ്യ, ആശ്ലേഷ, മാഘൻ, പൂർവ ഫാൽഗുനി, ഉത്തര ഫാൽഗുനി, ഹസ്ത, ചിത്ര, സ്വാതി, വിശാഖ, അനുരാധ, ജ്യേഷ്ഠൻ, മൂല, പൂർവ്വ ആഷാഢം, ഉത്തരാഷാഡ, ശ്രാവണ, ധനിഷ്ഠൻ, ശതാഭിഷ, പൂർവ്വ ഭദ്രപദ, ഉത്തര ഭദ്രപദ, രേവതി ,ലയാളികളെ സ്നേ ന്റക്ലിൺ സ്നേ  മസ്തിഷ്   മലയാളം ഒറ്റക്ക",
        // name: "Sample Item 1",
        quantity: 10,
      },
      {
        // name: "ലയാളികളെ സ്നേ",
        name: "ノートサンズ কিছু ছাড়া",
        // name: "Sample Item 2",
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

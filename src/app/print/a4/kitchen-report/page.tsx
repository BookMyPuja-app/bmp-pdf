"use client"
;
import { PDFViewer } from "@react-pdf/renderer";
import A4KitchenReport from "../../../../../package/src/sizes/a4/A4KitchenReport";

const A4KitchenReportPage = () => {

    const date = new Date();
    const templeName = "Sri Sri Radha Madan Mohan Mandir";

    const data = [
        { name: "Prasad 1", quantity: 10 },
        { name: "Prasad 2", quantity: 20 },
        { name: "Prasad 3", quantity: 30 },
        { name: "Prasad 4", quantity: 40 },
        { name: "Prasad 5", quantity: 50 },
    ]

  return (
    <div>
      <PDFViewer className="w-full h-screen">
        <A4KitchenReport date={date} templeName={templeName} data={data} />
      </PDFViewer>
    </div>
  );
};

export default A4KitchenReportPage;

"use client";

import { PDFViewer } from "@react-pdf/renderer";
import A4TransactionReport from "../../../../../package/src/sizes/a4/A4TransactionReport";

interface ITransactionItem {
    date: string;
    time: string;
    invoiceNumber: string;
    bookingAmount: number;
    creditedAmount: number;
}

const A4TransactionReportPage = () => {

    const date = new Date();
    const templeName = "Sri Venkateswara Temple";

    const data : ITransactionItem[] = [
        {
            date: "2023-10-01",
            time: "10:00 AM",
            invoiceNumber: "INV001",
            bookingAmount: 100,
            creditedAmount: 50,
        },
        {
            date: "2023-10-02",
            time: "11:00 AM",
            invoiceNumber: "INV002",
            bookingAmount: 200,
            creditedAmount: 150,
        },
        {
            date: "2023-10-03",
            time: "12:00 PM",
            invoiceNumber: "INV003",
            bookingAmount: 300,
            creditedAmount: 250,
        },
        {
            date: "2023-10-04",
            time: "01:00 PM",
            invoiceNumber: "INV004",
            bookingAmount: 400,
            creditedAmount: 350,
        },
        {
            date: "2023-10-05",
            time: "02:00 PM",
            invoiceNumber: "INV005",
            bookingAmount: 500,
            creditedAmount: 450,
        },
    ];


  return (
    <div>
      <PDFViewer className="w-full h-screen">
            <A4TransactionReport date={date} templeName={templeName} data={data } />
      </PDFViewer>
    </div>
  );
};

export default A4TransactionReportPage;

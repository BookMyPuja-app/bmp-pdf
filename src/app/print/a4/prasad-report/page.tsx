"use client";

import { PDFViewer } from "@react-pdf/renderer";
import A4PrasadReport from "../../../../../package/src/sizes/a4/A4PrasadReport";


interface IPrasadItem {
    invoiceNumber: string;
    devoteeName: string;
    prasadName: string;
    quantity: number;
}

const A4PrasadReportPage = () => {

    const date = new Date();
    const templeName = "Brahma Kumaris Madhuban";

    const data: IPrasadItem[] = [
        {
            devoteeName: "Rahul Sharma",
            invoiceNumber: "BMP0002",
            prasadName: "Modak",
            quantity: 3
        },
        {
            devoteeName: "Priya Patel",
            invoiceNumber: "BMP0003",
            prasadName: "Badam Halwa",
            quantity: 2
        },
        {
            devoteeName: "Anand Kumar",
            invoiceNumber: "BMP0004",
            prasadName: "Kheer",
            quantity: 4
        },
        {
            devoteeName: "Talha Yunus",
            invoiceNumber: "BMP0001",
            prasadName: "Laddu",
            quantity: 5
        },
        {
            devoteeName: "Vikram Mehta",
            invoiceNumber: "BMP0006",
            prasadName: "Pedha",
            quantity: 15
        },
        {
            devoteeName: "Sunita Reddy",
            invoiceNumber: "BMP0007",
            prasadName: "Coconut Barfi",
            quantity: 6
        },
        {
            devoteeName: "Karthik Iyer",
            invoiceNumber: "BMP0008",
            prasadName: "Gulab Jamun",
            quantity: 8
        },
        {
            devoteeName: "Anjali Gupta",
            invoiceNumber: "BMP0009",
            prasadName: "Rasmalai",
            quantity: 3
        },
        {
            devoteeName: "Meera Singh",
            invoiceNumber: "BMP0005",
            prasadName: "Jalebi",
            quantity: 10
        },
        {
            devoteeName: "Rajesh Verma",
            invoiceNumber: "BMP0010",
            prasadName: "Kaju Katli",
            quantity: 12
        },
        {
            devoteeName: "Deepa Joshi",
            invoiceNumber: "BMP0011",
            prasadName: "Besan Laddu",
            quantity: 7
        },
        {
            devoteeName: "Mohan Das",
            invoiceNumber: "BMP0012",
            prasadName: "Mysore Pak",
            quantity: 5
        }
    ];

  return (
    <div>
      <PDFViewer className="w-full h-screen">
        <A4PrasadReport date={date} templeName={templeName} data={data} />
      </PDFViewer>
    </div>
  );
};

export default A4PrasadReportPage;

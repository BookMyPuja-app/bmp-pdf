"use client";

import { PDFViewer } from "@react-pdf/renderer";
import A4PrasadDelivery from "../../../../../package/src/sizes/a4/A4PrasadDelivery";

interface IPrasadItem {
  invoiceNumber: string;
  devoteeName: string;
  pujaName: string;
  address: string;
  amount: number;
  date: Date;
}

const A4PrasadDeliveryPage = () => {
  const date = new Date();
  const templeName = "Sri Vitthal Rukmini Mandir";

  const getRandomDate = (startDays = -30, endDays = 10) => {
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() + startDays);

    const endDate = new Date(today);
    endDate.setDate(today.getDate() + endDays);

    const randomTimestamp =
      startDate.getTime() +
      Math.random() * (endDate.getTime() - startDate.getTime());
    return new Date(randomTimestamp);
  };

  const data: IPrasadItem[] = [
    {
      invoiceNumber: "PD-2023/001",
      devoteeName: "Rajesh Sharma ji",
      pujaName: "Satyanarayan Puja",
      address: `{"address":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five cent","locality":"Mum bai","state":"Maharash- tra","pincode":"400071"}`,
      amount: 1100,
      date: getRandomDate(-20, -5),
    },
    {
      invoiceNumber: "PD-2023/002",
      devoteeName: "Priya Patel ji",
      pujaName: "Ganesh Chaturthi Special Puja",
      address:
        "45/B, Shanti Niwas, Vile Parle East, Mumbai, Maharashtra 400057",
      amount: 2100,
      date: getRandomDate(-15, 0),
    },
    {
      invoiceNumber: "PD-2023/003",
      devoteeName: "Suresh & Lakshmi Iyer",
      pujaName: "Griha Pravesh Puja",
      address: "Plot 78, Saraswati Colony, Near Hanuman Temple, Pune 411004",
      amount: 5100,
      date: getRandomDate(-5, 5),
    },
    {
      invoiceNumber: "PD-2023/004",
      devoteeName: "Ananya Deshmukh ji",
      pujaName: "Vastu Shanti Puja",
      address: "D-404, Siddhivinayak Apartments, Koregaon Park, Pune 411001",
      amount: 3100,
      date: getRandomDate(0, 10),
    },
  ];

  return (
    <div>
      <PDFViewer className="w-full h-screen">
        <A4PrasadDelivery date={date} templeName={templeName} data={data} />
      </PDFViewer>
    </div>
  );
};

export default A4PrasadDeliveryPage;

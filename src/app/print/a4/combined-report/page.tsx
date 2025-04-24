"use client";

import { PDFViewer } from "@react-pdf/renderer";
import A4PrasadDelivery from "../../../../../package/src/sizes/a4/A4PrasadDelivery";
import A4CombinedReport from "../../../../../package/src/sizes/a4/A4CombinedReport";

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

  const pujas = [
    {
      name: "Archana",
      bookings: [
        {
          invoiceNumber: "INV-1001",
          devoteeName: "Rama Sharma",
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
          priestNote: "Include coconut",
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

  const prasad = [
    {
      devoteeName: "Rahul Sharma",
      invoiceNumber: "BMP0002",
      prasadName: "Modak",
      quantity: 3,
    },
    {
      devoteeName: "Priya Patel",
      invoiceNumber: "BMP0003",
      prasadName: "Badam Halwa",
      quantity: 2,
    },
    {
      devoteeName: "Anand Kumar",
      invoiceNumber: "BMP0004",
      prasadName: "Kheer",
      quantity: 4,
    },
    {
      devoteeName: "Talha Yunus",
      invoiceNumber: "BMP0001",
      prasadName: "Laddu",
      quantity: 5,
    },
    {
      devoteeName: "Vikram Mehta",
      invoiceNumber: "BMP0006",
      prasadName: "Pedha",
      quantity: 15,
    },
    {
      devoteeName: "Sunita Reddy",
      invoiceNumber: "BMP0007",
      prasadName: "Coconut Barfi",
      quantity: 6,
    },
    {
      devoteeName: "Karthik Iyer",
      invoiceNumber: "BMP0008",
      prasadName: "Gulab Jamun",
      quantity: 8,
    },
    {
      devoteeName: "Anjali Gupta",
      invoiceNumber: "BMP0009",
      prasadName: "Rasmalai",
      quantity: 3,
    },
    {
      devoteeName: "Meera Singh",
      invoiceNumber: "BMP0005",
      prasadName: "Jalebi",
      quantity: 10,
    },
    {
      devoteeName: "Rajesh Verma",
      invoiceNumber: "BMP0010",
      prasadName: "Kaju Katli",
      quantity: 12,
    },
    {
      devoteeName: "Deepa Joshi",
      invoiceNumber: "BMP0011",
      prasadName: "Besan Laddu",
      quantity: 7,
    },
    {
      devoteeName: "Mohan Das",
      invoiceNumber: "BMP0012",
      prasadName: "Mysore Pak",
      quantity: 5,
    },
  ];

  const delivery = [
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
        <A4CombinedReport
          date={date}
          templeName={templeName}
          pujaData={pujas}
          prasadData={prasad}
          deliveryData={delivery}
        />
      </PDFViewer>
    </div>
  );
};

export default A4PrasadDeliveryPage;

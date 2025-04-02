"use client";

import { PDFViewer } from "@react-pdf/renderer";
import A4PujaList from "../../../../../package/src/sizes/a4/A4PujaList";

interface IPuja {
    name: string;
    bookings: {
        invoiceNumber: string;
        devoteeName: string;
        nakshatra: string;
        quantity: string;
        priestNote: string;
    }[];
}

const A4PujaListPage = () => {

    const pujas: IPuja[] = [
      {
        name: "Archana",
        bookings: [
          { invoiceNumber: "INV-1001", devoteeName: "Rama Sharma", nakshatra: "Ashwini", quantity: "1", priestNote: "Special blessing" },
          { invoiceNumber: "INV-1002", devoteeName: "Priya Patel", nakshatra: "Bharani", quantity: "2", priestNote: "" },
          { invoiceNumber: "INV-1002", devoteeName: "Priya Patel", nakshatra: "Bharani", quantity: "2", priestNote: "" },
        ]
      },
      {
        name: "Abhishekam",
        bookings: [
          { invoiceNumber: "INV-1003", devoteeName: "Suresh Kumar", nakshatra: "Krittika", quantity: "1", priestNote: "Include coconut" }
        ]
      },
      {
        name: "Satyanarayana Puja",
        bookings: [
          { invoiceNumber: "INV-1004", devoteeName: "Ananya Singh Rajput Raman Singh Viral Nihaal Singh Gowda Virat Sinha Patel", nakshatra: "Rohini", quantity: "1", priestNote: "Family of 4" },
          { invoiceNumber: "INV-1005", devoteeName: "Vijay Reddy", nakshatra: "Mrigashiras", quantity: "1", priestNote: "Bring prasad" }
        ]
      },
      {
        name: "Lakshmi Puja",
        bookings: [
          { invoiceNumber: "INV-1006", devoteeName: "Meena Devi", nakshatra: "Ardra", quantity: "1", priestNote: "" }
        ]
      },
      {
        name: "Ganesh Puja",
        bookings: [
          { invoiceNumber: "INV-1007", devoteeName: "Rohit Verma", nakshatra: "Punarvasu", quantity: "2", priestNote: "Business blessing" }
        ]
      },
      {
        name: "Navagraha Puja",
        bookings: [
          { invoiceNumber: "INV-1008", devoteeName: "Ashok Gupta", nakshatra: "Pushya", quantity: "1", priestNote: "Health concerns" },
          { invoiceNumber: "INV-1009", devoteeName: "Leela Nair", nakshatra: "Ashlesha", quantity: "1", priestNote: "" }
        ]
      },
      {
        name: "Durga Puja",
        bookings: [
          { invoiceNumber: "INV-1010", devoteeName: "Karthik Iyer", nakshatra: "Magha", quantity: "1", priestNote: "" }
        ]
      },
      {
        name: "Shiva Abhishekam",
        bookings: [
          { invoiceNumber: "INV-1011", devoteeName: "Sunita Rao", nakshatra: "Purva Phalguni", quantity: "1", priestNote: "Early morning" },
          { invoiceNumber: "INV-1012", devoteeName: "Mohan Das", nakshatra: "Uttara Phalguni", quantity: "1", priestNote: "Bring flowers" }
        ]
      },
      {
        name: "Hanuman Puja",
        bookings: [
          { invoiceNumber: "INV-1013", devoteeName: "Arjun Mehta", nakshatra: "Hasta", quantity: "2", priestNote: "Saturday special" }
        ]
      },
      {
        name: "Satyanarayan Katha",
        bookings: [
          { invoiceNumber: "INV-1014", devoteeName: "Divya Joshi", nakshatra: "Chitra", quantity: "1", priestNote: "Anniversary" },
          { invoiceNumber: "INV-1015", devoteeName: "Prakash Malhotra", nakshatra: "Swati", quantity: "1", priestNote: "New home" }
        ]
      }
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

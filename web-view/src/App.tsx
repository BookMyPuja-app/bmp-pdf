import Template from "../../src/sizes/T2InchReceipt";
import { PDFViewer } from '@react-pdf/renderer'
import './App.css'
import { IPrintablePuja } from "../../src/types";

function App() {

  const data: IPrintablePuja[] = [
    {
      pujaName: "Ganesh Puja",
      participantName: "Amit",
      participantNakshatra: "Rohini",
      paymentStatus: "Paid",
      amount: 1000,
      date: new Date(),
      priestNote: "Do it properly"
    }
  ,
  {
    pujaName: "Nihar Chandrakant Hodawadekar, Mr Perfect Perfect",
    participantName: "Nihar Chandrakant Hodawadekar",
    participantNakshatra: "Ashwini",
    paymentStatus: "pending",
    amount: 1500,
    date: new Date()
  },
  {
    pujaName: "Saraswati Puja",
    participantName: "Priya",
    participantNakshatra: "Bharani",
    paymentStatus: "Paid",
    amount: 1200,
    date: new Date(),
    priestNote: "Chant mantras clearly"
  },
  {
    pujaName: "Shiva Puja",
    participantName: "Vikram",
    participantNakshatra: "Krittika",
    paymentStatus: "Paid",
    amount: 2000,
    date: new Date()
  },
  {
    pujaName: "Durga Puja",
    participantName: "Anjali",
    participantNakshatra: "Rohini",
    paymentStatus: "pending",
    amount: 1800,
    date: new Date(),
    priestNote: "Offer flowers and fruits in the name of my late mother, her soul will be happy"
  },
  {
    pujaName: "Hanuman Puja",
    participantName: "Rajesh",
    participantNakshatra: "Mrigashira",
    paymentStatus: "Paid",
    amount: 1100,
    date: new Date()
  },
  // {
  //   pujaName: "Krishna Puja",
  //   participantName: "Suman",
  //   participantNakshatra: "Ardra",
  //   paymentStatus: "Pending",
  //   amount: 1300,
  //   date: new Date(),
  //   priestNote: "Prepare prasad"
  // },
  // {
  //   pujaName: "Rama Puja",
  //   participantName: "Kiran",
  //   participantNakshatra: "Punarvasu",
  //   paymentStatus: "Paid",
  //   amount: 1400,
  //   date: new Date()
  // },
  // {
  //   pujaName: "Vishnu Puja",
  //   participantName: "Meena",
  //   participantNakshatra: "Pushya",
  //   paymentStatus: "Pending",
  //   amount: 1600,
  //   date: new Date(),
  //   priestNote: "Light lamps"
  // },
  // {
  //   pujaName: "Surya Puja",
  //   participantName: "Anil",
  //   participantNakshatra: "Ashlesha",
  //   paymentStatus: "Paid",
  //   amount: 1700,
  //   date: new Date()
  // },
  // {
  //   pujaName: "Chandra Puja",
  //   participantName: "Sunita",
  //   participantNakshatra: "Magha",
  //   paymentStatus: "Pending",
  //   amount: 1900,
  //   date: new Date(),
  //   priestNote: "Use sandalwood paste"
  // },
  // {
  //   pujaName: "Navagraha Puja",
  //   participantName: "Ramesh",
  //   participantNakshatra: "Purva Phalguni",
  //   paymentStatus: "Paid",
  //   amount: 2100,
  //   date: new Date()
  // },
  // {
  //   pujaName: "Kali Puja",
  //   participantName: "Geeta",
  //   participantNakshatra: "Uttara Phalguni",
  //   paymentStatus: "Pending",
  //   amount: 2200,
  //   date: new Date(),
  //   priestNote: "Offer red flowers"
  // },
  // {
  //   pujaName: "Ganesha Puja",
  //   participantName: "Suresh",
  //   participantNakshatra: "Hasta",
  //   paymentStatus: "Paid",
  //   amount: 2300,
  //   date: new Date()
  // },
  // {
  //   pujaName: "Shani Puja",
  //   participantName: "Nisha",
  //   participantNakshatra: "Chitra",
  //   paymentStatus: "Pending",
  //   amount: 2400,
  //   date: new Date(),
  //   priestNote: "Use black sesame seeds"
  // },
  // {
  //   pujaName: "Mangal Puja",
  //   participantName: "Vijay",
  //   participantNakshatra: "Swati",
  //   paymentStatus: "Paid",
  //   amount: 2500,
  //   date: new Date()
  // },
  // {
  //   pujaName: "Budh Puja",
  //   participantName: "Rita",
  //   participantNakshatra: "Vishakha",
  //   paymentStatus: "Pending",
  //   amount: 2600,
  //   date: new Date(),
  //   priestNote: "Offer green gram"
  // },
  // {
  //   pujaName: "Guru Puja",
  //   participantName: "Arun",
  //   participantNakshatra: "Anuradha",
  //   paymentStatus: "Paid",
  //   amount: 2700,
  //   date: new Date()
  // },
  // {
  //   pujaName: "Shukra Puja",
  //   participantName: "Kavita",
  //   participantNakshatra: "Jyeshtha",
  //   paymentStatus: "Pending",
  //   amount: 2800,
  //   date: new Date(),
  //   priestNote: "Use white flowers"
  // },
  // {
  //   pujaName: "Rahu Puja",
  //   participantName: "Manoj",
  //   participantNakshatra: "Mula",
  //   paymentStatus: "Paid",
  //   amount: 2900,
  //   date: new Date()
  // },
  // {
  //   pujaName: "Ketu Puja",
  //   participantName: "Neha",
  //   participantNakshatra: "Purva Ashadha",
  //   paymentStatus: "Pending",
  //   amount: 3000,
  //   date: new Date(),
  //   priestNote: "Use blue flowers"
  // }
  ]  

  return (
    <>
    <div style={{
      display: "flex",
      justifyContent: "center",
      height: "100dvh",
      width: "100vw"
    }}>
     <PDFViewer children={<Template data={{templeName: "Shri Ram Mandir, Ayodhya", participantName: "Yash", participantNakshatra: "Rohini", pujaName: "Govind Puja", amount: 120, bookingDate: new Date(), receiptNumber: 1298190819}}  />}  style={{width: "100%", maxWidth: "800px"}} />
    </div>
    </>
  )
}

export default App

// data={data} dates={[(new Date("Feb 20 2005")).toISOString(), (new Date()).toISOString()]}
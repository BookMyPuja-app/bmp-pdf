"use client";

// import { IPujaReceipt, printReceipt } from "./../../../../../src/index"
import { printReceipt } from "@package/index";
import type { IPujaReceipt } from "@package/index";


function App() {
  
  const data : IPujaReceipt = {
    address: "Andhra Pradesh, India",
    date: new Date(),
    participantNakshatra: "Rajasvi",
    participantName: "Ajeet Bharti",
    pujaName: "Shri Kalka Puja",
    pujaPrice: 1000,
    status: "confirmed",
    receiptNumber: 293892,
    templeName: "Shri Kalka Mandir",
  }

  return (
    <>
      <div>
        <button  
        onClick={() => {
          printReceipt(data)
        }}
        
        >Print</button>
      </div>
    </>
  )
}

export default App

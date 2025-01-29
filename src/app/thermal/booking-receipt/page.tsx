"use client";

import { printReceipt } from "../../../../package/src";

const ThermalBookingReceipt = () => {

    const handlePrint = () => {
        console.log('Printing...');
        printReceipt({
            pujaName: "Sri Satyanarayana Swamy Vratham",
            address: "Sri Satyanarayana Swamy Temple, Annavaram",
            receiptNumber: 123456,
            date: new Date(),
            participantNakshatra: "Rohini",
            participantName: "Sri Rama",
            pujaPrice: 1000,
            templeName: "Sri Satyanarayana Swamy Temple"
        })
    }

    return (
        <>
            <button onClick={handlePrint}>Print</button>
        </>
    )
}

export default ThermalBookingReceipt;
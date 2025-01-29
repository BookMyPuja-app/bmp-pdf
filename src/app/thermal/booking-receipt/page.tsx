"use client";

import { printReceipt } from "../../../../package/src";

const ThermalBookingReceipt = () => {

    const handlePrint = () => {
        console.log('Printing...');
        printReceipt({
            pujaName: "Sri Satyanarayana Swamy ",
            address: "Annavaram, Andhra Pradesh",
            receiptNumber: 123456,
            date: new Date(),
            participants: [
                {
                    participantName: "",
                    participantNakshatra: "Mrunira",
                }
            ],
            pujaPrice: 24000,
            templeName: "Sri Satyanarayana Swamy Temple"
        })
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
            <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handlePrint}>Print</button>
            </div>
        </>
    )
}

export default ThermalBookingReceipt;
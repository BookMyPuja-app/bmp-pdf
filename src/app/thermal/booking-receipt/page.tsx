"use client";

import { printDevoteeReceipt2Inch } from "../../../../package/src";

const ThermalBookingReceipt = () => {

    const handlePrint = () => {
        console.log('Printing...');
        printDevoteeReceipt2Inch({
            templeName: "Sri Satyanarayana Swamy Temple",
            address: "Annavaram, Andhra \n Ph: 08868-238121 ",
            pujaName: "Sri Satyanarayana Swamy",
            receiptNumber: 123456,
            // date: new Date(),
            dates: [
                new Date(),
                new Date("2023-08-15"),
                new Date("2023-09-22"),
                new Date("2023-10-05"),
                new Date("2023-11-30"),
                new Date("2023-12-25"),
                new Date("2024-01-01"),
                new Date("2024-02-14"),
                new Date("2024-03-21")
            ],
            participants: [
                {
                    participantName: "Srinivas",
                    participantNakshatra: "Revathi",
                }
            ],
            pujaPrice: 24000,
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
"use client";

import { printePujaReport2Inch, printTotalReceipt2Inch } from "../../../../package/src";

const ThermalBookingReceipt = () => {

    const handlePrint = () => {
        console.log('Printing...');
        printePujaReport2Inch({
            templeName: "Sri Venkateshwara Temple",
            dates: [new Date(), new Date()],
            pujas: [
            {
                name: "Abhishekam",
                participantNakshatra: "Ashwini",
                participantName: "Raj Kumar",
                pujaAmount: 250,
                pujaDate: new Date(),
                repeatCount: 1,
            },
            {
                name: "Archana",
                participantNakshatra: "Bharani",
                participantName: "Priya Singh",
                pujaAmount: 150,
                pujaDate: new Date(),
                repeatCount: 3,
                prasadam: "Pedha",
            }
            ]
        })
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
            <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handlePrint}>Print Report</button>
            </div>
        </>
    )
}

export default ThermalBookingReceipt;
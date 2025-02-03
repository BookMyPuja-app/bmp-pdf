"use client";

import { printTotalReceipt2Inch } from "../../../../package/src";

const ThermalBookingReceipt = () => {

    const handlePrint = () => {
        console.log('Printing...');
        printTotalReceipt2Inch({
            address: "Annavaram, Andhra Pradesh",
            receiptNumber: 123456,
            numberOfPujas: 3,
            qrContent: "https://www.google.com",
            totalAmount: 24000,
            templeName: "Sri Satyanarayana Swamy Temple"
        })
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
            <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handlePrint}>Print Total Receipt</button>
            </div>
        </>
    )
}

export default ThermalBookingReceipt;
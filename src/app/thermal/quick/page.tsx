"use client";

import { printQuickPrintReceipt2Inch } from "../../../../package/src";

const QuickPujaReceipt = () => {

    const handlePrint = () => {
        console.log("Printing...");
        printQuickPrintReceipt2Inch({
            templeName: "Sri Satyanarayana Swamy Temple",
            address: "Annavaram, East Godavari, Andhra Pradesh",
            receiptNumber: "BMP-1444",
            pujas: [
                {
                    name: "Ganesha Puja",
                    pujaAmount: 1000,
                    pujaDate: new Date(),
                    pujaQty: 14
                }, 
                {
                    name: "Saraswati Puja",
                    pujaAmount: 1000,
                    pujaDate: new Date("2023-Feb-15"),
                    pujaQty: 1
                }
            ],
        });
    }

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handlePrint}
        >
          Print
        </button>
      </div>
    </>
  );
};

export default QuickPujaReceipt;

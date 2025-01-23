"use client";

import T2InchReceipt from "@/components/thermal/T2InchReceipt";
import { base64Data } from "@/components/thermal/T2InchReceipt";
import { useState, useEffect } from "react";
import PrintButton from "@/components/PrintButton"
import { printNow } from "@/components/PrintButton";

const bookingReceipt2Inch = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    base64Data().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <>
    {/* {data} */}
    <div className="p-4">
    <button onClick={() => printNow(data)}>Print</button>

    </div>
    </>
  )
}

export default bookingReceipt2Inch;
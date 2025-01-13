import { pdf } from "@react-pdf/renderer";
import A4Print from "./sizes/A4Print";
import { IPrintablePuja, IReceiptData } from "./types";
import React from "react";
import T2Inch from "./sizes/T2Inch";
import T2InchReceipt from "./sizes/T2InchReceipt";

type sizeOptions = "A4" | "2Inch";

const getPrintBlob = ({
  size,
  data,
  dates,
}: {
  size: sizeOptions;
  data: IPrintablePuja[];
  dates: [string | Date, string | Date];
}) => {
  if (size === "A4") {
    const blob = pdf(<A4Print data={data} dates={dates} />).toBlob();
    return blob;
  } else {
    const blob = pdf(<T2Inch data={data} dates={dates} />).toBlob();
    return blob;
  }
};

const getT2InchReceipt = ({data} : {data: IReceiptData}) => {
  const blob = pdf(<T2InchReceipt data={data} />).toBlob();
  return blob;
}

export { getPrintBlob, T2Inch, A4Print, getT2InchReceipt };
export type { IPrintablePuja };

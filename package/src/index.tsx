import { pdf } from "@react-pdf/renderer";
import A4Print from "./sizes/A4Print";
import { IPrintablePuja } from "./types";
import React from "react";
import T2Inch from "./sizes/T2Inch";
import type {IPujaReceipt} from "./types";
import { getBase64Data } from "./sizes/receipt/T2InchReceipt";

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
}

const printReceipt = async (data: IPujaReceipt) => {
  const base64DataObject = await getBase64Data(data);
  var S = "#Intent;scheme=rawbt;";
  var P = "package=ru.a402d.rawbtprinter;end;";
  window.location.href = "intent:" + "base64," + base64DataObject + S + P;
}

export { getPrintBlob, T2Inch, A4Print, printReceipt };
export type { IPrintablePuja, IPujaReceipt };

import { pdf } from "@react-pdf/renderer";
import A4Print from "./sizes/A4Print";
import { IPrintablePuja } from "./types";
import React from "react";
import T2Inch from "./sizes/T2Inch";
import type {IPujaReceipt, IPujaReport, ITotalReceipt} from "./types";
import { getDevoteeReceipt2InchBase64Data } from "./sizes/receipt/DevoteeReceipt2Inch";
import { getTotalReceipt2InchBase64Data } from "./sizes/receipt/TotalReceipt2Inch";
import { getPujaReportReceipt2InchBase64Data } from "./sizes/receipt/PujaReport2Inch";

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

const printDevoteeReceipt2Inch = async (data: IPujaReceipt) => {
  const base64DataObject = await getDevoteeReceipt2InchBase64Data(data);
  var S = "#Intent;scheme=rawbt;";
  var P = "package=ru.a402d.rawbtprinter;end;";
  window.location.href = "intent:" + "base64," + base64DataObject + S + P;
}

const printTotalReceipt2Inch = async (data: ITotalReceipt) => {
  const base64DataObject = await getTotalReceipt2InchBase64Data(data);
  var S = "#Intent;scheme=rawbt;";
  var P = "package=ru.a402d.rawbtprinter;end;";
  window.location.href = "intent:" + "base64," + base64DataObject + S + P;
}

const printePujaReport2Inch = async (data: IPujaReport) => {
  const base64DataObject = await getPujaReportReceipt2InchBase64Data(data);
  var S = "#Intent;scheme=rawbt;";
  var P = "package=ru.a402d.rawbtprinter;end;";
  window.location.href = "intent:" + "base64," + base64DataObject + S + P;
}

export { getPrintBlob, T2Inch, A4Print, printDevoteeReceipt2Inch, printTotalReceipt2Inch, printePujaReport2Inch };
export type { IPrintablePuja, IPujaReceipt };

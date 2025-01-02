import { pdf } from "@react-pdf/renderer";
import A4Print from "./sizes/A4Print";
import { IPrintablePuja } from "./types";
import React from "react";
import T2Inch from "./sizes/T2Inch";

const getA4Blob = (
  data: IPrintablePuja[],
  dates: [string | Date, string | Date]
) => {
  const blob = pdf(<A4Print data={data} dates={dates} />).toBlob();
  return blob;
};

const getT2InchBlob = (
  data: IPrintablePuja[],
  dates: [string | Date, string | Date]
) => {
  const blob = pdf(<T2Inch data={data} dates={dates} />).toBlob();
  return blob;
};

export { getT2InchBlob, getA4Blob, T2Inch, A4Print };
export type { IPrintablePuja };

"use client";

import React, { useEffect } from "react";
import {
  Printer,
  Br,
  Line,
  render,
  Text,
  Row,
  Raw,
  Cut,
  QRCode,
  Image,
} from "react-thermal-printer";
import { IPujaReport } from "../../types";

export default (
  <>
    <p>Hello World</p>
  </>
);

const PujaReportReceipt2Inch = (data: IPujaReport) => {
  const timeRightNow = new Date();

  const isSingleDate =
    data.dates[0].toISOString().split("T")[0] ===
    data.dates[1].toISOString().split("T")[0];

  return (
    <Printer type="epson" width={32} characterSet="iso8859_15_latin9">
      <Text bold={true} align="center">
        {data.templeName}
      </Text>
      {isSingleDate ? (
        <Text align="center">
          {data.dates[0].toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </Text>
      ) : (
        <Text align="center">
          {data.dates[0].toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }) + " - "}
          {data.dates[1].toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </Text>
      )}
      <Line />
      {data.pujas.map((puja, index) => {
        return (
          <>
            <Text>
              {puja.name}{" "}
              {puja.pujaQty ? (
                <>
                  {"("}qty: {String(puja.pujaQty)}
                  {")"}
                </>
              ) : null}
            </Text>
            {puja.prasadam ? <Text>{puja.prasadam}</Text> : null}
            <Text align="right">
              Price: {String(puja.pujaAmount)}
              {", "}
              {puja.pujaDate.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </Text>
            <Text>{puja.participantName}</Text>
            <Text>{puja.participantNakshatra}</Text>
            <Line />
          </>
        );
      })}
      <Text align="right">Total Pujas: {String(data.pujas.length)}</Text>
      <Text align="right">
        Total Amount:{" "}
        {String(
          data.pujas.reduce((acc, puja) => {
            return acc + Number(puja.pujaAmount);
          }, 0)
        )}
      </Text>
      <Line />
      <Text align="center">Thank You</Text>
      <Text align="center">bookmypuja.app</Text>
      <Br />
    </Printer>
  );
};

const getPujaReportReceipt2InchBase64Data = async (
  receiptData: IPujaReport
) => {
  const data = await render(PujaReportReceipt2Inch(receiptData));
  return btoa(String.fromCharCode.apply(null, Array.from(data)));
};

export { getPujaReportReceipt2InchBase64Data, PujaReportReceipt2Inch };

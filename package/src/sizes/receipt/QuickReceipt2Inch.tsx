"use client";

import React from "react";
import { Br, Cut, Line, Printer, render, Text } from "react-thermal-printer";
import { IQuickReport } from "../../types";

export default (
  <>
    <p>Hello World</p>
  </>
);

const QuickReceipt2Inch = (data: IQuickReport) => {
  //   const todaysDate = new Date();

  return (
    <Printer type="epson" width={32} characterSet="iso8859_15_latin9">
      {data.pujas.map((puja) => {
        return (
          <>
            <Text align="center" bold={true}>
              {data.templeName}
            </Text>
            <Text align="center">{data.receiptNumber}</Text>
            <Line />
            <Text bold={true} size={{ height: 2, width: 1 }}>
              {puja.name}
              {Number(puja.pujaQty) > 1 && ` (Qty:${puja.pujaQty})`}
            </Text>
            {/* <Text align="right">
              {puja.pujaDate.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </Text>
            <Text align="right">
              {"Rs "}
              {Number(puja.pujaAmount).toLocaleString("en-IN")}
            </Text> */}
            <Text align="left">
              {puja.pujaDate.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
              {"     "}
              {"Rs "}
              {Number(puja.pujaAmount).toLocaleString("en-IN")}
            </Text>
            <Br />
            <Br />
            <Br />
            <Cut />
          </>
        );
      })}
    </Printer>
  );
};

const getQuickReceipt2InchBase64Data = async (receiptData: IQuickReport) => {
  const data = await render(QuickReceipt2Inch(receiptData));
  return btoa(String.fromCharCode.apply(null, Array.from(data)));
};

export { QuickReceipt2Inch, getQuickReceipt2InchBase64Data };

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
import { IPujaReceipt, ITotalReceipt } from "../../types";

export default (
  <>
    <p>Hello World</p>
  </>
);

const TotalReceipt2Inch = (data: ITotalReceipt) => {
  const timeRightNow = new Date();

  return (
    <Printer type="epson" width={32} characterSet="iso8859_15_latin9">
      <Text align="center" bold={true}>
        {data.templeName}
      </Text>
      <Text align="center">{data.address}</Text>
      {data.receiptNumber ? (
        <Text align="center">Invoice no: #{String(data.receiptNumber)}</Text>
      ) : null}
      <Text align="center">
        Print:{" "}
        {timeRightNow.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })}
        ,{" "}
        {timeRightNow
          .toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })
          .toLowerCase()}
      </Text>
      <Line />
      <Text bold={true} align="center">
        Booking Receipt
      </Text>
      <Br />
      <Text>Total Bookings: {String(data.numberOfPujas)}</Text>
      <Text>Total Amount: {String(data.totalAmount)}</Text>
      <Br />
      <Image
        src={"https://files.20022005.xyz/praying.png"}
        align="center"
      />
      <Line />
      <Text align="center">Thank You</Text>
      <Text align="center">bookmypuja.app</Text>
      <Br />
    </Printer>
  );
};

const getTotalReceipt2InchBase64Data = async (receiptData: ITotalReceipt) => {
  const data = await render(TotalReceipt2Inch(receiptData));
  return btoa(String.fromCharCode.apply(null, Array.from(data)));
};

export { getTotalReceipt2InchBase64Data, TotalReceipt2Inch };

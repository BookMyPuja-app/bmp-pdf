"use client";

import React, { useEffect } from "react";
import { Printer, Br, Line, render, Text, Row } from "react-thermal-printer";

export default (
  <>
    <p>Hello World</p>
  </>
);

interface IPujaReceipt {
  templeName: string;
  address: string;
  receiptNumber: Number;
  date: Date;
  pujaName: string;
  participantName: string;
  participantNakshatra: string;
  pujaPrice: Number;
  status: string;
}



const T2InchReceipt = (data: IPujaReceipt) => {
  
  let paymentStatus = "Payment Pending";
  if(data.status === "confirmed"){
    paymentStatus = "Paid";
  }

  return (
    <Printer type="epson" width={32} characterSet="iso8859_15_latin9">
      <Text align="center" bold={true}>
        {data.templeName}
      </Text>
      <Text align="center">{data.address}</Text>
      <Line />
      <Text align="center">Puja Receipt</Text>
      {data.receiptNumber ? (
        <Text align="center">#{String(data.receiptNumber)}</Text>
      ) : null}
      <Text align="center">
        {data.date.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })}
        ,{" "}
        {data.date
          .toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })
          .toLowerCase()}
      </Text>
      <Line />
      <Text>Puja: {data.pujaName}</Text>
      <Text>Name: {data.participantName}</Text>
      <Text>Nakshatra: {data.participantNakshatra}</Text>
      <Text align="right">Price: {String(data.pujaPrice)}</Text>
      <Text align="right">{paymentStatus}</Text>
      <Line />
      <Text align="center">Thank You</Text>
      <Text align="center">bookmypuja.app</Text>
    </Printer>
  );
};

const base64Data = async (receiptData: IPujaReceipt) => {
  const data = await render(T2InchReceipt(receiptData));
  return btoa(String.fromCharCode.apply(null, Array.from(data)));
};

export { base64Data, T2InchReceipt };

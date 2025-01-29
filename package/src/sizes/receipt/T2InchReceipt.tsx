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
} from "react-thermal-printer";
import { IPujaReceipt } from "../../types";

export default (
  <>
    <p>Hello World</p>
  </>
);

const T2InchReceipt = (data: IPujaReceipt) => {

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
      {data.participants.map((participant, index) => {
        return (
          <>
            {data.participants.length > 1 ? <Br /> : null}
            <Text>Name: {participant.participantName}</Text>
            <Text>Nakshatra: {participant.participantNakshatra}</Text>
          </>
        );
      })}
      {data.participants.length > 1 ? <Br /> : null}
      <Text align="right">Price: {String(data.pujaPrice)}</Text>
      {data.status ? <Text align="right">{data.status}</Text> : null}
      <Line />
      <Text align="center">Thank You</Text>
      <Text align="center">bookmypuja.app</Text>
      <Br />
    </Printer>
  );
};

const getBase64Data = async (receiptData: IPujaReceipt) => {
  const data = await render(T2InchReceipt(receiptData));
  return btoa(String.fromCharCode.apply(null, Array.from(data)));
};

export { getBase64Data, T2InchReceipt };

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

const DevoteeReceipt2Inch = (data: IPujaReceipt) => {
  const timeRightNow = new Date();

  let datesArray: JSX.Element[] = [];

  if (data.dates) {
    for (let i = 0; i < data.dates.length; i++) {
      if (i == data.dates.length - 1) {
        datesArray.push(
          <Text>
            {data.dates[i].toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </Text>
        );
      } else {
        datesArray.push(
          <Text>
            {data.dates[i].toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            }) + ",    "}
            {data.dates[i + 1].toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </Text>
        );
      }
      i++;
    }
  }

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
        Booking Details
      </Text>
      <Br />
      <Text bold={true}>
        Puja: {data.pujaName}{" "}
        {Number(data.pujaQty) > 1 ? (
          <>
            {"("}qty: {String(data.pujaQty)}
            {")"}
          </>
        ) : null}
      </Text>
      {data.date ? (
        <Text>
          Puja Date:{" "}
          {data.date?.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </Text>
      ) : null}
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
      {data.dates ? (
        <>
          <Br />
          <Text bold={true} align="center">
            Puja Dates
          </Text>
          {/* <Br /> */}
        </>
      ) : null}
      {data.dates ? datesArray : null}
      <Line />
      <Text align="center">Thank You</Text>
      <Text align="center">bookmypuja.app</Text>
      <Br />
    </Printer>
  );
};

const getDevoteeReceipt2InchBase64Data = async (receiptData: IPujaReceipt) => {
  const data = await render(DevoteeReceipt2Inch(receiptData));
  return btoa(String.fromCharCode.apply(null, Array.from(data)));
};

export { getDevoteeReceipt2InchBase64Data, DevoteeReceipt2Inch };

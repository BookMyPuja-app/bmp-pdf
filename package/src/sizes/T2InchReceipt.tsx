import React from "react";
import {
  Document,
  Font,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { bmpLogo, robotoBold, robotoNormal } from "../constants";
import { IPujaReceipt } from "../types";

const scalingFactor = 1;
const globalFontSize = 25 * scalingFactor;

Font.register({
  family: "Roboto",
  fontWeight: "normal",
  src: robotoNormal,
});
Font.register({
  family: "Roboto",
  fontWeight: "bold",
  src: robotoBold,
});

const styles = StyleSheet.create({
  page: {
    padding: 10 * scalingFactor,
    fontFamily: "Roboto",
  },
  pujaTile: {
    paddingVertical: 10 * scalingFactor,
    paddingHorizontal: 10 * scalingFactor,
    fontSize: globalFontSize,
    border: `${5 * scalingFactor}px solid black`,
    borderRadius: 5 * scalingFactor,
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
});

const T2InchReceipt = ({data}: {data : IPujaReceipt}) => {
  return (
    <Document>
      <Page dpi={200} size={[457 * scalingFactor]} style={styles.page}>
        <Text style={{
          fontSize: 20 * scalingFactor,
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: 5 * scalingFactor,
        }}>
            {data.templeName}
        </Text>
        <Text style={{
          margin: "auto",
            fontSize: 20 * scalingFactor,
            marginBottom: 5 * scalingFactor,
        }}>Puja Booking Receipt</Text>
        <Text style={{
          margin: "auto",
          fontSize: 15 * scalingFactor,
        }} >#{data.receiptNumber}</Text>
        <View style={{height: 15, width: "100%"}}></View>
        <View style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: 10 * scalingFactor,
          }}>
        <Text>Name : {data.participantName}</Text>
        <Text>Nakshatra : {data.participantNakshatra}</Text>
        <Text>Puja Name : {data.pujaName}</Text>
        <Text>Amount : ₹{String(data.amount)}</Text>
        <Text>Booked on : {(new Date(data.bookingDate)).toDateString()} {(new Date(data.bookingDate)).toTimeString().split(" ")[0]}</Text>
        </View>
        <View style={{
          height: 10 * scalingFactor,
          width: "100%"
        }}></View>
        <Image
          fixed={true}
          style={{
            height: 30 * scalingFactor,
            width: 149 * scalingFactor,
            marginTop: 5 * scalingFactor,
            marginHorizontal: "auto",
          }}
          src={bmpLogo}
        />
      </Page>
    </Document>
  );
};

export default T2InchReceipt;

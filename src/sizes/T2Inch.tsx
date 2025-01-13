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
import { formatDate } from "../functions";
import { IPrintablePuja } from "../types";
import { bmpLogo, robotoBold, robotoNormal } from "../constants";



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

const scalingFactor = 1;
const globalFontSize = 25 * scalingFactor;

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

const T2Inch = ({
  data,
  dates,
}: {
  data: IPrintablePuja[];
  dates: [string | Date, string | Date];
}) => {
  const isSingleDate = formatDate(dates[0]) === formatDate(dates[1]);
  return (
    <Document>
      <Page dpi={200} size={[457 * scalingFactor]} style={styles.page}>
        <Image
          fixed={true}
          style={{
            height: 55 * scalingFactor,
            width: 280 * scalingFactor,
            marginBottom: 10 * scalingFactor,
            marginHorizontal: "auto",
          }}
          src={bmpLogo}

        />
        <Text style={{ fontSize: 25  * scalingFactor, marginBottom: 5 * scalingFactor, marginHorizontal: "auto" }}>Puja List</Text>
        <Text style={{ fontSize: 20 * scalingFactor, marginBottom: 5 * scalingFactor, marginHorizontal: "auto", fontWeight: "bold" }}>
          {"Date"}:{" "}
          {isSingleDate
            ? formatDate(dates[0])
            : `${formatDate(dates[0])} - ${formatDate(dates[1])}`}
        </Text>
        <Text style={{ fontSize: 17 * scalingFactor, marginBottom: 20 * scalingFactor, marginHorizontal: "auto"}}>
          Printed at : {new Date().toLocaleString()}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 15 * scalingFactor,
          }}
        >
          {data
            ? data.map((item, index) => {
                return (
                  <View wrap={false} key={index} style={styles.pujaTile}>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 5 * scalingFactor }}>
                      <Text
                        style={{
                          opacity: 0.6,
                          marginRight: 10 * scalingFactor,
                        }}
                      >
                        #{(index + 1).toString().padStart(2, "0")}
                      </Text>
                      <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-end",
                        gap: 10 * scalingFactor,
                      }}
                    >
                      {item.paymentStatus == "pending" ? (
                        <View
                          style={{
                            backgroundColor: "#000000",
                            paddingVertical: 3 * scalingFactor,
                            paddingHorizontal: 5 * scalingFactor,
                            borderRadius: 5 * scalingFactor,
                            marginTop: 3 * scalingFactor,
                          }}
                        >
                          <Text
                            style={{
                              color: "#ffffff",
                              fontSize: globalFontSize,
                            }}
                          >
                            Pending
                          </Text>
                        </View>
                      ) : null}
                      <Text style={{ fontWeight: "bold", fontSize: globalFontSize }}>
                        Rs {item.amount}
                      </Text>
                    </View>
                    </View>
                    <View
                      style={{
                        flexGrow: 1,
                      }}
                    >
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          flexWrap: "wrap",
                          marginBottom: 3 * scalingFactor,
                          gap: 3 * scalingFactor,
                        }}
                      >
                        <Text style={{ fontSize: globalFontSize, fontWeight: "bold",  }}>
                          {item.participantName}
                        </Text>
                        <Text style={{ fontSize: globalFontSize, fontWeight: "bold" }}>
                          -
                        </Text>
                        <Text style={{ fontSize: globalFontSize, fontWeight: "bold" }}>
                          {item.participantNakshatra}
                        </Text>
                      </View>
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignContent: "flex-end",
                          gap: 10 * scalingFactor,
                        }}
                      >
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            flexWrap: "wrap",
                            alignContent: "flex-end",
                          }}
                        >
                          <Text>Puja name : </Text>
                          <Text style={{ fontSize: globalFontSize, fontWeight: "bold" }}>
                            {item.pujaName}
                          </Text>
                        </View>
                        {isSingleDate ? null : (
                          <View
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignContent: "flex-end",
                            }}
                          >
                            <Text>Date: </Text>
                            <Text style={{ fontWeight: "bold" }}>
                              {formatDate(item.date as Date)}
                            </Text>
                          </View>
                        )}
                      </View>
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignContent: "flex-end",
                          gap: 10 * scalingFactor,
                        }}
                      ></View>
                      {item.priestNote !== "" &&
                      item.priestNote !== null &&
                      item.priestNote !== undefined ? (
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginTop: 3 * scalingFactor,
                          }}
                        >
                          <Text>Priest Note: {item.priestNote}</Text>
                        </View>
                      ) : null}
                    </View>
                  </View>
                );
              })
            : null}
        </View>
      </Page>
    </Document>
  );
};

export default T2Inch;

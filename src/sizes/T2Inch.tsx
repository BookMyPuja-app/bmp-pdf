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

const bmpLogo = "https://files.20022005.xyz/bmp-blacked.png";
const robotoNormal = "https://files.20022005.xyz/Roboto-Regular.ttf";
const robotoBold = "https://files.20022005.xyz/Roboto-Bold.ttf";

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

const globalFontSize = 30;

const styles = StyleSheet.create({
  page: {
    padding: 10,
    fontFamily: "Roboto",
  },
  pujaTile: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: globalFontSize,
    border: "5px solid black",
    borderRadius: 5,
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
      <Page dpi={200} size={[457]} style={styles.page}>
        <Image
          fixed={true}
          style={{
            height: 55,
            width: 280,
            marginBottom: 10,
            marginHorizontal: "auto",
          }}
          src={bmpLogo}

        />
        <Text style={{ fontSize: 25, marginBottom: 5, marginHorizontal: "auto" }}>Puja List</Text>
        <Text style={{ fontSize: 20, marginBottom: 20, marginHorizontal: "auto", fontWeight: "bold" }}>
          {"Date"}:{" "}
          {isSingleDate
            ? formatDate(dates[0])
            : `${formatDate(dates[0])} - ${formatDate(dates[1])}`}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 8,
          }}
        >
          {data
            ? data.map((item, index) => {
                return (
                  <View wrap={false} key={index} style={styles.pujaTile}>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                      <Text
                        style={{
                          opacity: 0.6,
                          marginRight: 10,
                        }}
                      >
                        #{(index + 1).toString().padStart(2, "0")}
                      </Text>
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
                          marginBottom: 3,
                          gap: 3,
                        }}
                      >
                        <Text style={{ fontSize: globalFontSize, fontWeight: "bold" }}>
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
                          gap: 10,
                        }}
                      >
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
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
                          gap: 10,
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
                            marginTop: 3,
                          }}
                        >
                          <Text>Priest Note: {item.priestNote}</Text>
                        </View>
                      ) : null}
                    </View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        marginTop: 10,
                      }}
                    >
                      <Text style={{ fontWeight: "bold", fontSize: globalFontSize }}>
                        Rs {item.amount}
                      </Text>
                      {item.paymentStatus == "pending" ? (
                        <View
                          style={{
                            backgroundColor: "#000000",
                            paddingVertical: 3,
                            paddingHorizontal: 5,
                            borderRadius: 5,
                            marginTop: 3,
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

import { Document, Image, Page, Text, View } from "@react-pdf/renderer";
import React from "react";
import { bmpLogo } from "../../constants";

interface KitchenReportData {
  name: string;
  quantity: number;
}

interface KitchenReportProps {
  date: Date;
  templeName: string;
  data: KitchenReportData[];
}

const A4KitchenReport = ({
  date,
  templeName,
  data,
}: {
  date: Date;
  templeName: string;
  data: KitchenReportData[];
}) => {
  return (
    <>
      <Document>
        <Page size="A4" style={{ padding: 30, fontFamily: "Noto Sans" }}>
          <Image
            fixed={true}
            style={{
              height: 15,
              width: 75,
              marginBottom: 10,
            }}
            src={bmpLogo}
          />
          <Text style={{ fontSize: 11, marginTop: 5, textAlign: "right" }}>
            Date: {date.toDateString()}
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>
            Temple Prasad (Kitchen) Report
          </Text>
          <Text style={{ fontSize: 12 }}>{`${templeName}`}</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 20,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                border: "1px solid #000",
                fontSize: 10,
                fontWeight: "semibold"
              }}
            >
              <View
                style={{
                  padding: 6,
                  borderRight: "1px solid #000",
                  width: "20%",
                }}
              >
                <Text>Sr no</Text>
              </View>
              <View
                style={{
                  padding: 6,
                  borderRight: "1px solid #000",
                  width: "60%",
                }}
              >
                <Text>Prasad Name</Text>
              </View>
              <View
                style={{
                  padding: 6,
                  borderRight: "none",
                  width: "20%",
                }}
              >
                <Text>Quantity</Text>
              </View>
            </View>
            {data.map((item, index) => {
              return (
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    border: "1px solid #000",
                    borderTop: "none",
                    fontSize: 10,
                  }}
                >
                  <View
                    style={{
                      padding: 6,
                      borderRight: "1px solid #000",
                      width: "20%",
                    }}
                  >
                    <Text>{index + 1}</Text>
                  </View>
                  <View
                    style={{
                      padding: 6,
                      borderRight: "1px solid #000",
                      width: "60%",
                    }}
                  >
                    <Text>{item.name}</Text>
                  </View>
                  <View
                    style={{
                      padding: 6,
                      borderRight: "none",
                      width: "20%",
                    }}
                  >
                    <Text>{item.quantity}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        </Page>
      </Document>
    </>
  );
};

export default A4KitchenReport;
export type { KitchenReportData, KitchenReportProps };

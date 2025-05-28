import { Document, Image, Page, View } from "@react-pdf/renderer";
import Text from "../../components/Text";
import React from "react";
import { bmpLogo } from "../../constants";

interface IPrasadItem {
  invoiceNumber: string;
  devoteeName: string;
  prasadName: string;
  quantity: number;
}

interface IPrasadReport {
  date: Date;
  templeName: string;
  data: IPrasadItem[];
}

const A4PrasadReport = ({
  date,
  templeName,
  data,
}: {
  date: Date;
  templeName: string;
  data: IPrasadItem[];
}) => {
  const sortedPrasadItems = data.sort((a, b) => {
    return a.invoiceNumber.localeCompare(b.invoiceNumber);
  });

  return (
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
        <Text style={{ fontSize: 14, fontWeight: "bold" }}>Prasad Report</Text>
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
              border: "1px solid black",
              fontWeight: "semibold",
              fontSize: 10,
            }}
          >
            <View
              style={{
                padding: 6,
                borderRight: "1px solid black",
                width: "10%",
              }}
            >
              <Text>Sr no</Text>
            </View>
            <View
              style={{
                padding: 6,
                borderRight: "1px solid black",
                width: "20%",
              }}
            >
              <Text>Invoice Number</Text>
            </View>
            <View
              style={{
                padding: 6,
                borderRight: "1px solid black",
                width: "30%",
              }}
            >
              <Text>Devotee Name</Text>
            </View>
            <View
              style={{
                padding: 6,
                borderRight: "1px solid black",
                width: "30%",
              }}
            >
              <Text>Prasad Name</Text>
            </View>
            <View
              style={{
                padding: 6,
                width: "10%",
              }}
            >
              <Text>Qty</Text>
            </View>
          </View>
          {data.map((item, index) => {
            return (
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  border: "1px solid black",
                  borderTop: "none",
                  fontSize: 10,
                }}
              >
                <View
                  style={{
                    padding: 6,
                    borderRight: "1px solid black",
                    width: "10%",
                  }}
                >
                  <Text>{index + 1}</Text>
                </View>
                <View
                  style={{
                    padding: 6,
                    borderRight: "1px solid black",
                    width: "20%",
                  }}
                >
                  <Text>{item.invoiceNumber}</Text>
                </View>
                <View
                  style={{
                    padding: 6,
                    borderRight: "1px solid black",
                    width: "30%",
                  }}
                >
                  <Text>{item.devoteeName}</Text>
                </View>
                <View
                  style={{
                    padding: 6,
                    borderRight: "1px solid black",
                    width: "30%",
                  }}
                >
                  <Text>{item.prasadName}</Text>
                </View>
                <View
                  style={{
                    padding: 6,
                    width: "10%",
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
  );
};

export default A4PrasadReport;
export type { IPrasadItem, IPrasadReport };
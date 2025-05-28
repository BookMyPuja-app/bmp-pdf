import { Document, Image, Page, View } from "@react-pdf/renderer";
import Text from "../../components/Text";
import React from "react";
import { bmpLogo } from "../../constants";

interface ITempleData {
  name: string;
  revenue: number;
  bookings: number;
}

interface IMultiTemplePaymentReport {
  startDate: Date;
  endDate: Date;
  data: ITempleData[];
}

const A4MultiTemplePaymentReport = ({
  startDate,
  endDate,
  data,
}: IMultiTemplePaymentReport) => {
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
          Date: {startDate.toDateString()} - {endDate.toDateString()}
        </Text>
        <Text style={{ fontSize: 14, fontWeight: "bold" }}>
          Temple Payment Report
        </Text>
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
              <Text>S.No.</Text>
            </View>
            <View
              style={{
                padding: 6,
                borderRight: "1px solid black",
                width: "55%",
              }}
            >
              <Text>Temple Name</Text>
            </View>
            <View
              style={{
                padding: 6,
                borderRight: "1px solid black",
                width: "15%",
              }}
            >
              <Text>Bookings</Text>
            </View>
            <View
              style={{
                padding: 6,
                width: "20%",
              }}
            >
              <Text>Revenue</Text>
            </View>
          </View>
          {data?.map((temple, index) => {
            return (
              <View
                key={index}
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
                    width: "55%",
                  }}
                >
                  <Text>{temple.name}</Text>
                </View>
                <View
                  style={{
                    padding: 6,
                    borderRight: "1px solid black",
                    width: "15%",
                  }}
                >
                  <Text>{temple.bookings}</Text>
                </View>
                <View
                  style={{
                    padding: 6,
                    width: "20%",
                  }}
                >
                  <Text>₹{temple.revenue}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </Page>
    </Document>
  );
};

export default A4MultiTemplePaymentReport;
export type { IMultiTemplePaymentReport };

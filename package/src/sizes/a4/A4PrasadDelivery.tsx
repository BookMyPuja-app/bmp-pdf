import { Document, Image, Page, Text, View } from "@react-pdf/renderer";
import React from "react";
import { bmpLogo } from "../../constants";


interface IPrasadItem {
  invoiceNumber: string;
  devoteeName: string;
  pujaName: string;
  address: string;
  amount: number;
  date: Date;
}

interface IPrasadDelivery {
  date: Date;
  templeName: string;
  data: IPrasadItem[];
}

const A4PrasadDelivery = ({
  date,
  templeName,
  data,
}: {
  date: Date;
  templeName: string;
  data: IPrasadItem[];
}) => {

  data = data.map((item) => {

    let address = "";

    try{
      const parsedAddress = JSON.parse(item.address);
      address = `${parsedAddress.address}, ${parsedAddress.locality}, ${parsedAddress.state} - ${parsedAddress.pincode}`;
    }catch(e){
      console.error("Error parsing address:", e);
      address = item.address;
    }

    return {
      ...item,
      address,
    }
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
        <Text style={{ fontSize: 14, fontWeight: "bold" }}>
          Prasad Delivery Address
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
              <Text>Date</Text>
            </View>
            <View
              style={{
                padding: 6,
                borderRight: "1px solid black",
                width: "13%",
              }}
            >
              <Text>Invoice</Text>
            </View>
            <View
              style={{
                padding: 6,
                borderRight: "1px solid black",
                width: "18%",
              }}
            >
              <Text>Devotee Name</Text>
            </View>
            <View
              style={{
                padding: 6,
                borderRight: "1px solid black",
                width: "25%",
              }}
            >
              <Text>Address</Text>
            </View>
            <View
              style={{
                padding: 6,
                borderRight: "1px solid black",
                width: "20%",
              }}
            >
              <Text>Puja Name</Text>
            </View>
            <View
              style={{
                padding: 6,
                width: "15%",
              }}
            >
              <Text>Amount</Text>
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
                  <Text>
                    {new Date(item.date).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "2-digit",
                    })}
                  </Text>
                </View>
                <View
                  style={{
                    padding: 6,
                    borderRight: "1px solid black",
                    width: "13%",
                  }}
                >
                  <Text>{item.invoiceNumber}</Text>
                </View>
                <View
                  style={{
                    padding: 6,
                    borderRight: "1px solid black",
                    width: "18%",
                  }}
                >
                  <Text>{item.devoteeName}</Text>
                </View>
                <View
                  style={{
                    padding: 6,
                    borderRight: "1px solid black",
                    width: "25%",
                  }}
                >
                  <Text>
                    {item.address}
                  </Text>
                </View>
                <View
                  style={{
                    padding: 6,
                    borderRight: "1px solid black",
                    width: "20%",
                  }}
                >
                  <Text>{item.pujaName}</Text>
                </View>
                <View
                  style={{
                    padding: 6,
                    width: "15%",
                  }}
                >
                  <Text>
                    {item.amount.toLocaleString("en-IN", {
                      maximumFractionDigits: 2,
                      style: "currency",
                      currency: "INR",
                    })}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      </Page>
    </Document>
  );
};

export default A4PrasadDelivery;
export type { IPrasadItem, IPrasadDelivery };
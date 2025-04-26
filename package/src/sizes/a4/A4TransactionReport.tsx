import { Document, Image, Page, Text, View } from "@react-pdf/renderer";
import React from "react";
import { bmpLogo } from "../../constants";

interface ITransactionItem {
  date: string;
  time: string;
  invoiceNumber: string;
  bookingAmount: number;
  creditedAmount: number;
  status?: string;
}

interface ITransactionReport {
  date: Date;
  templeName: string;
  data: ITransactionItem[];
}

const A4TransactionReport = ({
  date,
  templeName,
  data,
}: {
  date: Date;
  templeName: string;
  data: ITransactionItem[];
}) => {
  const totalAmount = data.reduce((acc, item) => {
    if (item.status === "cancelled") {
      return acc;
    }
    return acc + item.bookingAmount;
  }, 0);

  const totalCreditedAmount = data.reduce((acc, item) => {
    if (item.status === "cancelled") {
      return acc;
    }
    return acc + item.creditedAmount;
  }, 0);

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
            Transactions Report
          </Text>
          <Text style={{ fontSize: 12 }}>{`${templeName}`}</Text>
          <Text style={{ fontSize: 10, marginTop: 10 }}>
            {"Total Bookings:                  "}
            {totalAmount.toLocaleString("en-IN", {
              maximumFractionDigits: 2,
              style: "currency",
              currency: "INR",
            })}
          </Text>
          <Text style={{ fontSize: 10 }}>
            {"Total Credited Amount:    "}
            {totalCreditedAmount.toLocaleString("en-IN", {
              maximumFractionDigits: 2,
              style: "currency",
              currency: "INR",
            })}
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
                <Text>Sr no</Text>
              </View>
              <View
                style={{
                  padding: 6,
                  borderRight: "1px solid black",
                  width: "15%",
                }}
              >
                <Text>Date</Text>
              </View>
              <View
                style={{
                  padding: 6,
                  borderRight: "1px solid black",
                  width: "15%",
                }}
              >
                <Text>Time</Text>
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
                  width: "20%",
                }}
              >
                <Text>Booking Amount</Text>
              </View>
              <View
                style={{
                  padding: 6,
                  width: "20%",
                }}
              >
                <Text>Credited Amount</Text>
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
                      width: "15%",
                    }}
                  >
                    <Text>{item.date}</Text>
                  </View>
                  <View
                    style={{
                      padding: 6,
                      borderRight: "1px solid black",
                      width: "15%",
                    }}
                  >
                    <Text>{item.time}</Text>
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
                  {item.status == "cancelled" ? (
                    <>
                      <View
                        style={{
                          padding: 6,
                          // borderRight: "1px solid black",
                          width: "40%",
                        }}
                      >
                        <Text
                        style={{
                          textAlign: "center",
                        }}
                        >CANCELLED</Text>
                      </View>
                    </>
                  ) : (
                    <>
                      <View
                        style={{
                          padding: 6,
                          borderRight: "1px solid black",
                          width: "20%",
                        }}
                      >
                        <Text>
                          {item.bookingAmount.toLocaleString("en-IN", {
                            maximumFractionDigits: 2,
                            style: "currency",
                            currency: "INR",
                          })}
                        </Text>
                      </View>
                      <View
                        style={{
                          padding: 6,
                          width: "20%",
                        }}
                      >
                        <Text>
                          {item.creditedAmount.toLocaleString("en-IN", {
                            maximumFractionDigits: 2,
                            style: "currency",
                            currency: "INR",
                          })}
                        </Text>
                      </View>
                    </>
                  )}
                </View>
              );
            })}
          </View>
        </Page>
      </Document>
    </>
  );
};

export default A4TransactionReport;
export type { ITransactionItem, ITransactionReport };

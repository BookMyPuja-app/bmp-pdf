import { Document, Image, Page, Text, View } from "@react-pdf/renderer";
import React from "react";
import { bmpLogo } from "../../constants";
import { IPuja } from "./A4PujaList";
import { IPrasadItem as IPrasadDeliveryItem } from "./A4PrasadDelivery";
import { IPrasadItem } from "./A4PrasadReport";

interface CombinedReportData {
  date: Date;
  templeName: string;
  pujaData: IPuja[];
  prasadData: IPrasadItem[];
  deliveryData: IPrasadDeliveryItem[];
}

const A4CombinedReport = ({
  date,
  templeName,
  pujaData,
  prasadData,
  deliveryData,
}: CombinedReportData) => {

  deliveryData = deliveryData.map((item) => {

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
    <>
      <Document>
        {pujaData.length > 0 && (
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
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>Puja List</Text>
            <Text style={{ fontSize: 12 }}>{`${templeName}`}</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: 20,
              }}
            >
              {pujaData.map((puja, pujaIndex) => {
                return (
                  <>
                    <View wrap={false} style={{ marginBottom: 25 }}>
                      <View>
                        <Text
                          style={{
                            fontSize: 10,
                            fontWeight: "bold",
                            border: "1px solid black",
                            padding: 6,
                            textAlign: "center",
                            borderBottom: "none",
                          }}
                        >
                          {puja.name} - {puja.bookings.length}
                        </Text>
                      </View>
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          border: "1px solid black",
                        }}
                      >
                        <View
                          style={{
                            padding: 6,
                            fontSize: 10,
                            borderRight: "1px solid black",
                            fontWeight: "semibold",
                            width: "10%",
                          }}
                        >
                          <Text>Sr No</Text>
                        </View>
                        <View
                          style={{
                            padding: 6,
                            fontSize: 10,
                            borderRight: "1px solid black",
                            fontWeight: "semibold",
                            width: "20%",
                          }}
                        >
                          <Text>Invoice No</Text>
                        </View>
                        <View
                          style={{
                            padding: 6,
                            fontSize: 10,
                            borderRight: "1px solid black",
                            fontWeight: "semibold",
                            width: "35%",
                          }}
                        >
                          <Text>Devotee Name</Text>
                        </View>
                        <View
                          style={{
                            padding: 6,
                            fontSize: 10,
                            borderRight: "1px solid black",
                            fontWeight: "semibold",
                            width: "25%",
                          }}
                        >
                          <Text>Nakshatra</Text>
                        </View>
                        <View
                          style={{
                            padding: 6,
                            fontSize: 10,
                            borderRight: "none",
                            fontWeight: "semibold",
                            width: "10%",
                          }}
                        >
                          <Text>Qty</Text>
                        </View>
                      </View>
                      {puja.bookings.map((booking, bookingIndex) => {
                        return (
                          <>
                            <View
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                border: "1px solid black",
                                borderTop: "none",
                                width: "100%",
                              }}
                            >
                              <View
                                style={{
                                  padding: 6,
                                  fontSize: 10,
                                  borderRight: "1px solid black",
                                  width: "10%",
                                }}
                              >
                                <Text>{bookingIndex + 1}</Text>
                              </View>
                              <View
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  width: "90%",
                                }}
                              >
                                <View
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                  }}
                                >
                                  <View
                                    style={{
                                      padding: 6,
                                      fontSize: 10,
                                      borderRight: "1px solid black",
                                      width: `${20 * 1.11111}%`,
                                    }}
                                  >
                                    <Text>{booking.invoiceNumber}</Text>
                                  </View>
                                  <View
                                    style={{
                                      padding: 6,
                                      fontSize: 10,
                                      borderRight: "1px solid black",
                                      width: `${35 * 1.11111}%`,
                                    }}
                                  >
                                    <Text>{booking.devoteeName}</Text>
                                  </View>
                                  <View
                                    style={{
                                      padding: 6,
                                      fontSize: 10,
                                      borderRight: "1px solid black",
                                      width: `${25 * 1.11111}%`,
                                    }}
                                  >
                                    <Text>{booking.nakshatra}</Text>
                                  </View>
                                  <View
                                    style={{
                                      padding: 6,
                                      fontSize: 10,
                                      borderRight: "none",
                                      width: `${10 * 1.11111}%`,
                                    }}
                                  >
                                    <Text>{booking.quantity}</Text>
                                  </View>
                                </View>
                                {booking.priestNote && (
                                  <View
                                    style={{
                                      padding: 6,
                                      fontSize: 10,
                                      borderTop: "1px solid black",
                                      width: "100%",
                                    }}
                                  >
                                    <Text>{booking.priestNote}</Text>
                                  </View>
                                )}
                              </View>
                            </View>
                          </>
                        );
                      })}
                    </View>
                  </>
                );
              })}
            </View>
          </Page>
        )}
        {prasadData.length > 0 && (
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
              Prasad Report
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
              {prasadData.map((item, index) => {
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
        )}
        {deliveryData.length > 0 && (
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
              {deliveryData.map((item, index) => {
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
                      <Text>{item.address}</Text>
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
        )}
      </Document>
    </>
  );
};

export default A4CombinedReport;
export type { CombinedReportData };

import { Document, Font, Image, Page, View } from "@react-pdf/renderer";
import Text from "../../components/Text";
import React from "react";
import { bmpLogo } from "../../constants";

interface IPuja {
  name: string;
  price: string;
  bookings: {
    invoiceNumber: string;
    devoteeName: string;
    nakshatra: string;
    quantity: string;
    priestNote: string;
    is_early_reminder?: boolean; //
    date?: string; //
  }[];
}

interface IPujaList {
  date: Date;
  templeName: string;
  pujas: IPuja[];
}

const A4PujaList = ({
  date,
  templeName,
  pujas,
}: {
  date: Date;
  templeName: string;
  pujas: IPuja[];
}) => {
  let serialOfNormalPujas = 0;
  let serialOfEarlyReminders = 0;

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
          {pujas.some((puja) =>
            puja.bookings.some((booking) => booking.is_early_reminder)
          ) && (
            <>
              <Text style={{ fontSize: 14, fontWeight: "bold", marginTop: 10 }}>
                Early Reminders for Upcoming Pujas
              </Text>

              <View wrap={false} style={{ marginTop: 10 }}>
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
                      width: "60%",
                    }}
                  >
                    <Text>Puja Name</Text>
                  </View>
                  <View
                    style={{
                      padding: 6,
                      fontSize: 10,
                      borderRight: "1px solid black",
                      fontWeight: "semibold",
                      width: "10%",
                    }}
                  >
                    <Text>Qty</Text>
                  </View>
                  <View
                    style={{
                      padding: 6,
                      fontSize: 10,
                      borderRight: "none",
                      fontWeight: "semibold",
                      width: "20%",
                    }}
                  >
                    <Text>Date</Text>
                  </View>
                </View>
              </View>
            </>
          )}
          {pujas.some((puja) =>
            puja.bookings.some((booking) => booking.is_early_reminder)
          )
            ? pujas.flatMap((puja, pujaIndex) =>
                puja.bookings
                  .filter((booking) => booking.is_early_reminder)
                  .map((booking, bookingIndex) => {
                    serialOfEarlyReminders++;
                    return (
                      <View
                        key={`${pujaIndex}-${bookingIndex}`}
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          border: "1px solid black",
                          borderTop: "none",
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
                          <Text>{serialOfEarlyReminders}</Text>
                        </View>
                        <View
                          style={{
                            padding: 6,
                            fontSize: 10,
                            borderRight: "1px solid black",
                            width: "60%",
                          }}
                        >
                          {/* <TextParsedAfterDetectingLanguage> */}
                            {/* {puja.name} */}
                          {/* </TextParsedAfterDetectingLanguage> */}
                          <Text>{puja.name}</Text>
                        </View>
                        <View
                          style={{
                            padding: 6,
                            fontSize: 10,
                            borderRight: "1px solid black",
                            width: "10%",
                          }}
                        >
                          <Text>{booking.quantity}</Text>
                        </View>
                        <View
                          style={{
                            padding: 6,
                            fontSize: 10,
                            borderRight: "none",
                            width: "20%",
                          }}
                        >
                          <Text>
                            {booking.date
                              ? new Date(booking.date).toDateString()
                              : ""}
                          </Text>
                        </View>
                      </View>
                    );
                  })
              )
            : null}
          <Text style={{ fontSize: 14, fontWeight: "bold", marginTop: 20 }}>
            Puja List
          </Text>
          <Text style={{ fontSize: 12 }}>{`${templeName}`}</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 10,
            }}
          >
            {pujas.map((puja, pujaIndex) => {
              if (puja.bookings.every((booking) => booking.is_early_reminder))
                return null;
              serialOfNormalPujas = 0;
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
                        {`${puja.name} - ${puja.bookings.length}`}
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
                      if (booking.is_early_reminder) return null;
                      serialOfNormalPujas++;
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
                              <Text>{serialOfNormalPujas}</Text>
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
      </Document>
    </>
  );
};

export default A4PujaList;
export type { IPuja, IPujaList };

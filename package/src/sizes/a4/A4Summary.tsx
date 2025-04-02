// "use client";

// // TODO: Sort the pujas in descending order according to the count of nakshatrams participating in the puja

import React from "react";
import {
  Page,
  Text,
  Document,
  StyleSheet,
  Image,
  View,
} from "@react-pdf/renderer";

import { bmpLogo } from "../../constants";

interface ISummaryPuja {
  name: string;
  totalCount: number;
  nakshatras: {
    name: string;
    count: number;
  }[];
}

interface ISummaryPujaList {
  date: Date;
  templeName: string;
  pujas : ISummaryPuja[];
}

const A4Summary = ({
  templeName,
  date,
  pujas,
}: {
  templeName: string;
  date: Date;
  pujas: ISummaryPuja[];
}) => {
  const sortedPujaList = pujas.sort((a, b) => {
    const aTotalCount = a.nakshatras.length;
    const bTotalCount = b.nakshatras.length;
    return bTotalCount - aTotalCount;
  });

  return (
    <Document>
      <Page
        size="A4"
        style={{
          padding: 30,
          fontFamily: "Noto Sans",
        }}
      >
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
        <Text style={{ fontSize: 14, fontWeight: "bold" }}>Puja Summary</Text>
        <Text style={{ fontSize: 12 }}>{`${templeName}`}</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 20,
          }}
        >
          {sortedPujaList.map((item, index) => {
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
                      {item.name} - {item.totalCount}
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
                        width: "20%",
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
                      <Text>Nakshatra</Text>
                    </View>
                    <View
                      style={{
                        padding: 6,
                        fontSize: 10,
                        width: "20%",
                        fontWeight: "semibold",
                      }}
                    >
                      <Text>Quantity</Text>
                    </View>
                  </View>
                  {item.nakshatras.map((nakshatra, nakshatraIndex) => {
                    return (
                      <>
                        <View
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
                              width: "20%",
                            }}
                          >
                            <Text>{nakshatraIndex + 1}</Text>
                          </View>
                          <View
                            style={{
                              padding: 6,
                              fontSize: 10,
                              borderRight: "1px solid black",
                              width: "60%",
                            }}
                          >
                            <Text>{nakshatra.name}</Text>
                          </View>
                          <View
                            style={{
                              padding: 6,
                              fontSize: 10,
                              width: "20%",
                            }}
                          >
                            <Text>{nakshatra.count}</Text>
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
  );
};

export default A4Summary;
export type { ISummaryPuja, ISummaryPujaList };
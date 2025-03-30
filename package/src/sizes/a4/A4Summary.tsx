// TODO: Sort the pujas in descending order according to the count of nakshatrams participating in the puja

import React from "react";
import {
  Page,
  Text,
  Document,
  Font,
  StyleSheet,
  Image,
  View,
} from "@react-pdf/renderer";

import { bmpLogo, robotoBold, robotoNormal } from "../../constants";

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

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Roboto",
  },
  pujaTile: {
    padding: 10,
    fontSize: 9,
    border: "1px solid rgb(100,100,100)",
    borderRadius: 5,
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
});

interface ISummaryPuja {
  name: string;
  totalCount: number;
  nakshatras: {
    name: string;
    count: number;
  }[];
}

const A4Summary = ({templeName, date, pujas}: {templeName:string, date: Date, pujas: ISummaryPuja[]}) => {
//   const templeName = "Sree Meenkulathi Ammam Temple";
//   const date = new Date();

//   const pujas: ISummaryPuja[] = [
//     {
//       name: "Pushpanjali",
//       totalCount: 70,
//       nakshatras: [
//         { name: "Avottam", count: 45 },
//         { name: "Nivedyam", count: 30 },
//         { name: "Niramala", count: 20 },
//         { name: "Niramala", count: 20 },
//       ],
//     },
//     {
//       name: "Ayyilum",
//       totalCount: 70,
//       nakshatras: [
//         { name: "Avottam", count: 45 },
//         { name: "Nivedyam", count: 30 },
//         { name: "Niramala", count: 20 },
//       ],
//     },
//     {
//       name: "Gruha Pravesh",
//       totalCount: 100,
//       nakshatras: [
//         { name: "Avottam", count: 45 },
//         { name: "Nivedyam", count: 30 },
//         { name: "Niramala", count: 20 },
//         {
//           name: "Niramala",
//           count: 100,
//         },
//         {
//           name: "Niramala",
//           count: 20,
//         },
//       ],
//     },
//   ];

  const sortedPujaList = pujas.sort((a, b) => {
    const aTotalCount = a.nakshatras.length;
    const bTotalCount = b.nakshatras.length;
    return bTotalCount - aTotalCount;
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
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
        <Text style={{ fontSize: 14 }}>{`${templeName}`}</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 10,
            marginTop: 10,
          }}
        >
          {sortedPujaList.map((item, index) => {
            return (
              <>
                <View
                  style={{
                    border: "1px solid black",
                    borderRadius: 5,
                    padding: 10,
                    width: "49%",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 11,
                      marginBottom: 5,
                      fontWeight: "bold",
                    }}
                  >
                    {`${item.name} - ${item.totalCount}`}
                  </Text>
                  <View style={{ marginLeft: 20 }}>
                    {item.nakshatras.map((nakshatra) => {
                      return (
                        <Text
                          style={{
                            fontSize: 11,
                            marginBottom: 5,
                          }}
                        >
                          {`${nakshatra.name} - ${nakshatra.count}`}
                        </Text>
                      );
                    })}
                  </View>
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

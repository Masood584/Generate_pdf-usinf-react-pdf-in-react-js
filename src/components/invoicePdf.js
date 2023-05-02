import React from "react";
import {
  Document,
  Page,
  View,
  Image,
  StyleSheet,
  Text,
} from "@react-pdf/renderer";

import { Font } from "@react-pdf/renderer";
import RobotoLight from "../assets/fonts/Roboto-Light.ttf";
import RobotoBold from "../assets/fonts/Roboto-Bold.ttf";

Font.register({
  family: "RobotoLight",
  fonts: [
    { src: RobotoLight }, // font-style: normal, font-weight: normal
  ],
});
Font.register({
  family: "RobotoBold",
  fonts: [
    { src: RobotoBold }, // font-style: normal, font-weight: normal
  ],
});

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    padding: "30px",
  },
});

const InvoicePdf = () => {
  return (
    <Document>
      <Page size={[791.98, 651.28]}>
        <View style={styles.container}>
          <View style={{ textAlign: "center" }}>
            <Text style={{ fontSize: "23px", fontFamily: "RobotoBold" }}>
              INSTITUTE OF PROFESSIONAL DVELOPMENT
            </Text>
            <Text
              style={{
                fontSize: "16px",
                fontFamily: "RobotoLight",
                color: "gray",
              }}
            >
              A UNIT OF DARKHANA LIBERARY & READING ROOM{" "}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              marginTop: "20px",
            }}
          >
            <View style={{ border: "2px solid black", padding: "2px 15px" }}>
              <Text style={{ fontSize: "12px", fontFamily: "RobotoBold" }}>
                Voucher Id
              </Text>
            </View>
            <View style={{ border: "2px solid black", padding: "2px 50px" }}>
              <Text style={{ fontSize: "12px", fontFamily: "RobotoBold" }}>
                EO823
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#d4d4d4",
              padding: "2px",
              marginTop: "5px",
              marginLeft: "160px",
              width: "165px",
            }}
          >
            <Text
              style={{
                fontFamily: "RobotoBold",
                fontSize: "18px",
                color: "white",
                textAlign: "center",
              }}
            >
              PAYMENT RECEIPT
            </Text>
          </View>
          <View
            style={{
              height: "3px",
              backgroundColor: "black",
              width: "100%",
              marginTop: "15px",
              marginBottom: "18px",
            }}
          ></View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingLeft: "5px",
              paddingRight: "15px",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontFamily: "RobotoLight",
                  fontSize: "12px",
                  color: "gray",
                }}
              >
                Received Form
              </Text>
              <Text
                style={{
                  fontFamily: "RobotoBold",
                  fontSize: "12px",
                  marginLeft: "25px",
                }}
              >
                Humaira Dilawar Yashkun - [IPD-201907608]
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontFamily: "RobotoLight",
                  fontSize: "12px",
                  color: "gray",
                }}
              >
                Voucher Date
              </Text>
              <Text
                style={{
                  fontFamily: "RobotoBold",
                  fontSize: "12px",
                  marginLeft: "25px",
                }}
              >
                17-Aug-2019
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: "20px",
              marginLeft: "5px",
            }}
          >
            <Text
              style={{
                fontFamily: "RobotoLight",
                fontSize: "12px",
                color: "gray",
              }}
            >
              Description
            </Text>
            <Text
              style={{
                fontFamily: "RobotoBold",
                fontSize: "12px",
                marginLeft: "43px",
              }}
            >
              Advance Excel From 22/07/2019 To 22/9/2019 - 63 Day(s)
            </Text>
          </View>
          <View
            style={{
              height: "3px",
              backgroundColor: "black",
              width: "100%",
              marginTop: "15px",
              marginBottom: "2px",
            }}
          ></View>
          <View
            style={{
              flexDirection: "row",
              marginTop: "20px",
              width: "100%",
            }}
          >
            <View
              style={{
                width: "5%",
                border: "2px solid black",
                padding: "5px",
                borderRight: "none",
              }}
            >
              <Text style={{ fontFamily: "RobotoBold", fontSize: "12px" }}>
                No
              </Text>
            </View>
            <View
              style={{
                width: "30%",
                border: "2px solid black",
                padding: "5px",
                textAlign: "center",
                borderRight: "none",
              }}
            >
              <Text style={{ fontFamily: "RobotoBold", fontSize: "12px" }}>
                COURSE DETAILS
              </Text>
            </View>
            <View
              style={{
                width: "15%",
                border: "2px solid black",
                padding: "5px",
                textAlign: "center",
                borderRight: "none",
              }}
            >
              <Text style={{ fontFamily: "RobotoBold", fontSize: "12px" }}>
                COURSE FEES
              </Text>
            </View>
            <View
              style={{
                width: "15%",
                border: "2px solid black",
                padding: "5px",
                textAlign: "center",
                borderRight: "none",
              }}
            >
              <Text style={{ fontFamily: "RobotoBold", fontSize: "12px" }}>
                DISCOUNT
              </Text>
            </View>
            <View
              style={{
                width: "18.5%",
                border: "2px solid black",
                padding: "5px",
                textAlign: "center",
                borderRight: "none",
              }}
            >
              <Text style={{ fontFamily: "RobotoBold", fontSize: "12px" }}>
                AMOUNT PAID
              </Text>
            </View>
            <View
              style={{
                width: "16.5%",
                border: "2px solid black",
                padding: "5px",
                textAlign: "center",
              }}
            >
              <Text style={{ fontFamily: "RobotoBold", fontSize: "12px" }}>
                BALANCE DUE
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
            }}
          >
            <View
              style={{
                width: "5%",
                border: "2px solid black",
                padding: "5px",
                borderRight: "none",
                borderTop:"none"
              }}
            >
              <Text style={{ fontFamily: "RobotoBold", fontSize: "12px" }}>
                1
              </Text>
            </View>
            <View
              style={{
                width: "30%",
                border: "2px solid black",
                padding: "5px",
                textAlign: "center",
                borderRight: "none",
                borderTop:"none"
              }}
            >
              <Text style={{ fontFamily: "RobotoBold", fontSize: "12px" }}>
                Advance Excel
              </Text>
            </View>
            <View
              style={{
                width: "15%",
                border: "2px solid black",
                padding: "5px",
                textAlign: "center",
                borderRight: "none",
                borderTop:"none"
              }}
            >
              <Text style={{ fontFamily: "RobotoBold", fontSize: "12px" }}>
                2500.00
              </Text>
            </View>
            <View
              style={{
                width: "15%",
                border: "2px solid black",
                padding: "5px",
                textAlign: "center",
                borderRight: "none",
                borderTop:"none"
              }}
            >
              <Text style={{ fontFamily: "RobotoBold", fontSize: "12px" }}>
                0.00
              </Text>
            </View>
            <View
              style={{
                width: "18.5%",
                border: "2px solid black",
                padding: "5px",
                textAlign: "center",
                borderRight: "none",
                borderTop:"none"
              }}
            >
              <Text style={{ fontFamily: "RobotoBold", fontSize: "12px" }}>
                2500.00
              </Text>
            </View>
            <View
              style={{
                width: "16.5%",
                border: "2px solid black",
                padding: "5px",
                textAlign: "center",
                borderTop:"none"
              }}
            >
              <Text style={{ fontFamily: "RobotoBold", fontSize: "12px" }}>
                0.00
              </Text>
            </View>
          </View>
          <View
            style={{
              border: "2px solid black",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "50px",
              width: "100%",
            }}
          >
            <View style={{ width: "84%", margin: "10px" }}>
              <Text
                style={{
                  fontFamily: "RobotoBold",
                  fontSize: "12px",
                }}
              >
                Two Thousand Five Hundred Rupees And Zero paise
              </Text>
            </View>
            <View style={{ width: "2px", backgroundColor: "black" }}></View>
            <View style={{ width: "15%", textAlign: "center", margin: "10px" }}>
              <Text
                style={{
                  fontFamily: "RobotoBold",
                  fontSize: "12px",
                }}
              >
                2500.00
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "150px",
            }}
          >
            <View
              style={{ width: "30%", height: "2px", backgroundColor: "black" }}
            ></View>
            <View
              style={{ width: "30%", height: "2px", backgroundColor: "black" }}
            ></View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "5px",
            }}
          >
            <Text
              style={{
                fontFamily: "RobotoBold",
                fontSize: "13px",
                marginLeft: "55px",
              }}
            >
              DEPOSITED BY
            </Text>
            <Text
              style={{
                fontFamily: "RobotoBold",
                fontSize: "13px",
                marginRight: "55px",
              }}
            >
              RECEIVED BY
            </Text>
          </View>
          <View style={{ marginTop: "10px" }}>
            <Text
              style={{
                fontFamily: "RobotoLight",
                fontSize: "12px",
              }}
            >
              Voucher Posted by Shafqat on 17/08/2019-20:21
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default InvoicePdf;

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

const dumyData = [
  {
    id: 1,
    name: "Muhammad Masood Huraira",
    number: "0348-2099767",
    totalFee: "8,000",
    feeReceived: "6,000",
    feeDue: "-",
    discount: "2,000",
    course: "Mobile App Development",
    Remarks: "",
  },
  {
    id: 2,
    name: "Muhammad Ali Khan",
    number: "0348-2099767",
    totalFee: "8,000",
    feeReceived: "6,000",
    feeDue: "-",
    discount: "2,000",
    course: "Academic",
    Remarks: ""
},
  {
    id: 3,
    name: "Muhammad Anas Ahmed",
    number: "0348-2099767",
    totalFee: "8,000",
    feeReceived: "6,000",
    feeDue: "-",
    discount: "2,000",
    course: "Academic",
    Remarks: "",
  },
  {
    id: 4,
    name: "Muhammad Shahid",
    number: "0348-2099767",
    totalFee: "8,000",
    feeReceived: "6,000",
    feeDue: "-",
    discount: "2,000",
    course: "Academic",
    Remarks: "",
  },
  {
    id: 5,
    name: "Muhammad Waqas Kaleem",
    number: "0348-2099767",
    totalFee: "8,000",
    feeReceived: "6,000",
    feeDue: "-",
    discount: "2,000",
    course: "Academic",
    Remarks: "",
  },
  {
    id: 6,
    name: "Muhammad Shaf Ahmed",
    number: "0348-2099767",
    totalFee: "8,000",
    feeReceived: "6,000",
    feeDue: "-",
    discount: "2,000",
    course: "Academic",
    Remarks: "",
  },
  {
    id: 7,
    name: "Baqi shahzad",
    number: "0348-2099767",
    totalFee: "8,000",
    feeReceived: "6,000",
    feeDue: "-",
    discount: "2,000",
    course: "Academic",
    Remarks: "",
  },
  {
    id: 8,
    name: "Reeba Shahzad",
    number: "0348-2099767",
    totalFee: "8,000",
    feeReceived: "6,000",
    feeDue: "-",
    discount: "2,000",
    course: "Academic",
    Remarks: "",
  },
  {
    id: 9,
    name: "Muhammad Ismail",
    number: "0348-2099767",
    totalFee: "8,000",
    feeReceived: "6,000",
    feeDue: "-",
    discount: "2,000",
    course: "Academic",
    Remarks: "",
  },
];

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    padding: "30px",
  },
  tableContainer: {
    width: "100%",
    border: "2px solid black",
    textAlign: "center",
    borderBottom: "1px",
  },
  tableHeading: {
    fontFamily: "RobotoBold",
    fontSize: "30px",
  },
  footer: {
    width: "30%",
    position:"absolute",
    bottom:"30px",
    left:"30px"
  },
  signature: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
});

const IeltsPdf = () => {
  return (
    <Document>
      <Page size={[830.98, 591.28]}>
        <View style={styles.container}>
          <View style={styles.tableContainer}>
            <Text style={styles.tableHeading}>IELTS April & May 2023 </Text>
            <View
              style={{
                flexDirection: "row",
                marginTop: "10px",
                width: "100%",
                border: "2px solid black",
                borderLeft: "none",
                borderRight: "none",
              }}
            >
              <View
                style={{
                  width: "4%",
                  border: "2px solid black",
                  padding: "1px",
                  border: "none",
                }}
              >
                <Text style={{ fontFamily: "RobotoBold", fontSize: "12px" }}>
                  S.no
                </Text>
              </View>
              <View
                style={{
                  width: "20%",
                  border: "2px solid black",
                  padding: "1px",
                  textAlign: "center",
                  borderRight: "none",
                  borderBottom: "none",
                  borderTop: "none",
                }}
              >
                <Text style={{ fontFamily: "RobotoBold", fontSize: "12px" }}>
                  Name of Students
                </Text>
              </View>
              <View
                style={{
                  width: "10%",
                  border: "2px solid black",
                  padding: "1px",
                  textAlign: "center",
                  borderRight: "none",
                  borderBottom: "none",
                  borderTop: "none",
                }}
              >
                <Text style={{ fontFamily: "RobotoBold", fontSize: "12px" }}>
                  Contact No
                </Text>
              </View>
              <View
                style={{
                  width: "7%",
                  border: "2px solid black",
                  padding: "1px",
                  textAlign: "center",
                  borderRight: "none",
                  borderBottom: "none",
                  borderTop: "none",
                }}
              >
                <Text style={{ fontFamily: "RobotoBold", fontSize: "12px" }}>
                  Total Fee
                </Text>
              </View>
              <View
                style={{
                  width: "10%",
                  border: "2px solid black",
                  padding: "1px",
                  textAlign: "center",
                  borderRight: "none",
                  borderBottom: "none",
                  borderTop: "none",
                }}
              >
                <Text style={{ fontFamily: "RobotoBold", fontSize: "12px" }}>
                  Fee Received
                </Text>
              </View>
              <View
                style={{
                  width: "7%",
                  border: "2px solid black",
                  padding: "1px",
                  textAlign: "center",
                  borderBottom: "none",
                  borderTop: "none",
                  borderRight: "none",
                }}
              >
                <Text style={{ fontFamily: "RobotoBold", fontSize: "12px" }}>
                  Fee Due
                </Text>
              </View>
              <View
                style={{
                  width: "7%",
                  border: "2px solid black",
                  padding: "1px",
                  textAlign: "center",
                  borderBottom: "none",
                  borderTop: "none",
                  borderRight: "none",
                }}
              >
                <Text style={{ fontFamily: "RobotoBold", fontSize: "12px" }}>
                  Discount
                </Text>
              </View>
              <View
                style={{
                  width: "17%%",
                  border: "2px solid black",
                  padding: "1px",
                  textAlign: "center",
                  borderBottom: "none",
                  borderTop: "none",
                  borderRight: "none",
                }}
              >
                <Text style={{ fontFamily: "RobotoBold", fontSize: "12px" }}>
                  Course
                </Text>
              </View>
              <View
                style={{
                  width: "16%",
                  border: "2px solid black",
                  padding: "1px",
                  textAlign: "center",
                  borderBottom: "none",
                  borderTop: "none",
                  borderRight: "none",
                }}
              >
                <Text style={{ fontFamily: "RobotoBold", fontSize: "12px" }}>
                  Remarks
                </Text>
              </View>
            </View>
            {dumyData.map((data) => {
              return (
                <View
                  style={{
                    flexDirection: "row",
                    width: "100%",
                    border: "2px solid black",
                    border: "none",
                    borderBottom: "1px",
                  }}
                  key={data.id}
                >
                  <View
                    style={{
                      width: "4%",
                      border: "2px solid black",
                      padding: "1px",
                      border: "none",
                    }}
                  >
                    <Text
                      style={{ fontFamily: "RobotoBold", fontSize: "10px" }}
                    >
                      {data.id}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: "20%",
                      border: "2px solid black",
                      padding: "1px",
                      paddingLeft: "3px",
                      textAlign: "left",
                      borderRight: "none",
                      borderBottom: "none",
                      borderTop: "none",
                    }}
                  >
                    <Text
                      style={{ fontFamily: "RobotoLight", fontSize: "10px" }}
                    >
                      {data.name}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: "10%",
                      border: "2px solid black",
                      padding: "1px",
                      paddingLeft: "3px",
                      textAlign: "left",
                      borderRight: "none",
                      borderBottom: "none",
                      borderTop: "none",
                    }}
                  >
                    <Text
                      style={{ fontFamily: "RobotoLight", fontSize: "10px" }}
                    >
                      {data.number}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: "7%",
                      border: "2px solid black",
                      padding: "1px",
                      paddingRight: "5px",
                      textAlign: "right",
                      borderRight: "none",
                      borderBottom: "none",
                      borderTop: "none",
                    }}
                  >
                    <Text
                      style={{ fontFamily: "RobotoLight", fontSize: "10px" }}
                    >
                      {data.totalFee}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: "10%",
                      border: "2px solid black",
                      padding: "1px",
                      paddingRight: "5px",
                      textAlign: "right",
                      borderRight: "none",
                      borderBottom: "none",
                      borderTop: "none",
                    }}
                  >
                    <Text
                      style={{ fontFamily: "RobotoLight", fontSize: "10px" }}
                    >
                      {data.feeReceived}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: "7%",
                      border: "2px solid black",
                      padding: "1px",
                      paddingRight: "5px",
                      textAlign: "right",
                      borderRight: "none",
                      borderBottom: "none",
                      borderTop: "none",
                      borderRight: "none",
                    }}
                  >
                    <Text
                      style={{ fontFamily: "RobotoLight", fontSize: "10px" }}
                    >
                      {data.feeDue}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: "7%",
                      border: "2px solid black",
                      padding: "1px",
                      paddingRight: "5px",
                      textAlign: "right",
                      borderBottom: "none",
                      borderTop: "none",
                      borderRight: "none",
                    }}
                  >
                    <Text
                      style={{ fontFamily: "RobotoLight", fontSize: "10px" }}
                    >
                      {data.discount}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: "17%",
                      border: "2px solid black",
                      padding: "1px",
                      paddingLeft: "3px",
                      textAlign: "left",
                      borderBottom: "none",
                      borderTop: "none",
                      borderRight: "none",
                    }}
                  >
                    <Text
                      style={{ fontFamily: "RobotoLight", fontSize: "10px" }}
                    >
                      {data.course}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: "15%",
                      border: "2px solid black",
                      padding: "1px",
                      paddingLeft: "3px",
                      textAlign: "left",
                      borderBottom: "none",
                      borderTop: "none",
                      borderRight: "none",
                    }}
                  >
                    <Text
                      style={{ fontFamily: "RobotoLight", fontSize: "10px" }}
                    >
                      {data.Remarks}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: "40px",
              width: "100%",
            }}
          >
            <View
              style={{
                width: "4%",
                padding: "1px",
              }}
            >
              <Text
                style={{ fontFamily: "RobotoBold", fontSize: "12px" }}
              ></Text>
            </View>
            <View
              style={{
                width: "20%",
                padding: "1px",
                textAlign: "left",
              }}
            >
              <Text style={{ fontFamily: "RobotoBold", fontSize: "12px" }}>
                Total
              </Text>
            </View>
            <View
              style={{
                width: "10%",
                padding: "1px",
                textAlign: "center",
              }}
            >
              <Text
                style={{ fontFamily: "RobotoBold", fontSize: "12px" }}
              ></Text>
            </View>
            <View
              style={{
                width: "7%",
                padding: "1px",
                textAlign: "right",
                paddingRight: "5px",
              }}
            >
              <Text style={{ fontFamily: "RobotoBold", fontSize: "10px" }}>
                120,000
              </Text>
            </View>
            <View
              style={{
                width: "10%",
                padding: "1px",
                textAlign: "right",
                paddingRight: "5px",
              }}
            >
              <Text style={{ fontFamily: "RobotoBold", fontSize: "10px" }}>
                101,000
              </Text>
            </View>
            <View
              style={{
                width: "7%",
                padding: "1px",
                textAlign: "right",
                textAlign: "right",
                paddingRight: "5px",
              }}
            >
              <Text style={{ fontFamily: "RobotoBold", fontSize: "10px" }}>
                15,000
              </Text>
            </View>
            <View
              style={{
                width: "7%",
                padding: "1px",
                textAlign: "right",
                textAlign: "right",
                paddingRight: "5px",
              }}
            >
              <Text style={{ fontFamily: "RobotoBold", fontSize: "10px" }}>
                4,000
              </Text>
            </View>
            <View
              style={{
                width: "17%",
                padding: "1px",
              }}
            >
              <Text
                style={{ fontFamily: "RobotoBold", fontSize: "12px" }}
              ></Text>
            </View>
            <View
              style={{
                width: "15%",
                padding: "1px",
              }}
            >
              <Text
                style={{ fontFamily: "RobotoBold", fontSize: "12px" }}
              ></Text>
            </View>
          </View>
          {/*footer area*/}
          <View style={styles.footer}>
            <View style={styles.signature}>
              <Text style={{ fontFamily: "RobotoBold", fontSize: "12px" }}>
                Teacher Share
              </Text>
              <View style={{ width: "40%", borderBottom: "1px" }}></View>
            </View>
            <View style={styles.signature}>
              <Text style={{ fontFamily: "RobotoBold", fontSize: "12px" }}>
                Expense
              </Text>
              <View style={{ width: "40%", borderBottom: "1px" }}></View>
            </View>
            <View style={styles.signature}>
              <Text style={{ fontFamily: "RobotoBold", fontSize: "12px" }}>
                Total Expense
              </Text>
              <View style={{ width: "40%", borderBottom: "1px",textAlign:"right" }}>
              <Text style={{fontFamily:"RobotoBold",fontSize:"13px"}}>0</Text>
              </View>
            </View>
            <View style={styles.signature}>
              <Text style={{ fontFamily: "RobotoBold", fontSize: "12px" }}>
                Discount
              </Text>
              <View style={{ width: "40%", borderBottom: "1px",textAlign:"right" }}>
              <Text style={{fontFamily:"RobotoBold",fontSize:"13px"}}>4,000</Text>
              </View>
            </View>
            <View style={styles.signature}>
              <Text style={{ fontFamily: "RobotoBold", fontSize: "12px" }}>
               Total Income
              </Text>
              <View style={{ width: "40%", borderBottom: "1px",textAlign:"right" }}>
              <Text style={{fontFamily:"RobotoBold",fontSize:"13px"}}>101,000</Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default IeltsPdf;

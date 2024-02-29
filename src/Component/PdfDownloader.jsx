import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Image,
  Line,
  Svg,
} from "@react-pdf/renderer";
import logo from "../assets/image/Group 137.png";
import font from "../assets/fonts/Poppins/Poppins-Regular.ttf";
import fontMedium from "../assets/fonts/Poppins/Poppins-Medium.ttf";
import RupeeIcon from "../assets/image/1608821_rupee_icon.png";
import { PaySlipData } from "./PdfData";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FFF",
    padding: 30,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  subcontainer: {
    display:"flex",
    flexDirection: "column",
  },
  header: {
    fontSize: 12,
    fontFamily: "Poppins",
    fontWeight: "bold",
    textAlign: "start",
  },
  subheader: {
    fontSize: 11,
    fontFamily: "Poppins",
    // marginBottom: 10,
    textAlign: "start",
    color: "grey",
  },
  imageContainer: {
    width: 120,
    objectFit: "contain",
  },
  image: {
    width: "100%",
  },
  iconContainer: {
    alignItems:"center",
    flexDirection: "row",
  },
  iconImageContainer: {
    width: 30,
    height: 30,
    objectFit: "contain",
  },
  iconWrapper:{
    width: 10,
    height: 10,
    objectFit: "contain",
  },
  iconImage: {
    width: "100%",
  },
  wrapper: {
    marginBottom: 20,
  },
  sender: {
    fontSize: 11,
    fontFamily: "Poppins",
    fontWeight: "bold",
    marginBottom: 10,
  },
  subsender: {
    fontSize: 10,
    fontFamily: "Poppins",
    // marginBottom: 10,
    textAlign: "start",
    color: "grey",
  },
  emp: {
    flexDirection: "row",
    gap: 5,
  },
  algin: {
    flexDirection: "row",
    gap: 25,
    marginBottom: 20,
  },
  amount: {
    fontSize: 28,
    fontFamily: "PoppinsMedium",
  },
  recipient: {
    marginBottom: 30,
  },
  leftAlgin: {
    marginRight: 20,
  },

  table: {
    display: "flex",
    flexDirection: "row",
  },
  tableCell: {
    width: "30%",
  },
  tableHeader: {
    fontSize: 10,
    fontFamily: "Poppins",
    fontWeight: "bold",
    marginBottom: 10,
  },
  tableCells: {
    flexDirection: "row",
    alignItems: "center",
    width: "30%",
    fontSize: 11,
    fontFamily: "Poppins",
    marginBottom: 15,
  },
  footerCells: {
    width: "30%",
    flexDirection:"row",
    alignItems:"center",
    fontSize: 10,
    fontFamily: "Poppins",
    marginBottom: 15,
  },
  bottom: {
    fontSize: 10,
    fontFamily: "Poppins",
    textAlign: "center",
    color: "grey",
  },
  bottomText: {
    fontSize: 11,
    fontFamily: "Poppins",
    fontWeight: "bold",
  },
  bottomText2: {
    fontSize: 10,
    fontFamily: "Poppins",
  },
  bottomText3: {
    fontSize: 10,
    fontFamily: "Poppins",
    color: "grey",
  },
  bottomWrapper: {
    display: "flex",
    flexDirection: "row",
  },
  bottomContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    height: 45,
    backgroundColor: "#2196f314",
    marginBottom: 15,
  },
  pageNumber: {
    position: "absolute",
    bottom: 30,
    left: "50%",
    fontSize: 12,
    fontFamily: "Poppins",
  },
});

//npm package react-pdf

const PdfDownloader = () => {
  Font.register({
    family: "Poppins",
    src: font,
  });

  Font.register({
    family: "PoppinsMedium",
    src: fontMedium,
  });

  return (
    <Document>
      <Page style={styles.page}>
        {/* header section  */}
        <View style={styles.container}>
          <View style={styles.subcontainer}>
            <Text style={styles.header} fixed>
              {PaySlipData.name}
            </Text>
            <Text style={styles.subheader} fixed>
              {PaySlipData.addressLine1}
            </Text>
            <Text style={styles.subheader} fixed>
              {PaySlipData.addressLine2}
            </Text>
          </View>
          <View style={styles.imageContainer}>
            <Image style={styles.image} src={logo} />
          </View>
        </View>

        {/* Line */}
        <Svg height={20}>
          <Line x1="0" y1="0" x2="1000" y2="0" strokeWidth={1} stroke="#000" />
        </Svg>

        <View style={styles.wrapper}>
          <Text style={styles.sender}>
            Payslip For The Month Of September 2024
          </Text>
          <View style={styles.emp}>
            <Text style={styles.sender}>Employee,</Text>
            <Text style={styles.subsender}>
              Emp.No: {PaySlipData.employeeNo}
            </Text>
          </View>
          <Text style={styles.subsender}>
            {PaySlipData.department} | Date of Joining: {PaySlipData.dof}
          </Text>
        </View>

        <View style={styles.algin}>
          <View style={styles.subcontainer}>
            <Text style={styles.subsender}>UAN Number</Text>
            <Text style={styles.sender}>-------------</Text>
          </View>
          <View style={styles.subcontainer}>
            <Text style={styles.subsender}>PF A/C Number</Text>
            <Text style={styles.sender}>ADR/AAA/CR/----------</Text>
          </View>
          <View style={styles.subcontainer}>
            <Text style={styles.subsender}>Bank A/C Number</Text>
            <Text style={styles.sender}>{PaySlipData.bankAcNo}</Text>
          </View>
          <View style={styles.subcontainer}>
            <Text style={styles.subsender}>Employee Net Pay</Text>

            <View style={styles.iconContainer}>
              <View style={styles.iconImageContainer}>
                <Image style={styles.iconImage} src={RupeeIcon}></Image>
              </View>
              <Text style={styles.amount}>{PaySlipData.amount}</Text>
            </View>

            {/* </Text> */}
            <Text style={styles.subsender}>
              Paid Days: {PaySlipData.paidDays} days | LOP Days:{" "}
              {PaySlipData.lopDays}
            </Text>
          </View>
        </View>

        <Svg height={10}>
          <Line x1="0" y1="0" x2="1000" y2="0" strokeWidth={1} stroke="#000" />
        </Svg>

        {/* header */}

        <View style={styles.table}>
          <View
            style={[styles.tableCell, styles.tableHeader, styles.leftAlgin]}
          >
            <Text>EARNING</Text>
          </View>
          <View style={[styles.tableCell, styles.tableHeader]}>
            <Text>AMOUNT</Text>
          </View>
          <View style={[styles.tableCell, styles.tableHeader]}>
            <Text>DEDUCTIONS</Text>
          </View>
          <View style={[styles.tableCell, styles.tableHeader]}>
            <Text>AMOUNT</Text>
          </View>
        </View>

        <Svg height={15}>
          <Line x1="0" y1="0" x2="1000" y2="0" strokeWidth={1} stroke="#000" />
        </Svg>

        {/* Table Content */}
        {PaySlipData.items.map((item, index) => (
          <View key={index} style={styles.table}>
            <View style={[styles.tableCells, styles.leftAlgin]}>
              <Text>{item.description}</Text>
            </View>
            <View style={styles.tableCells}>
            <View style={styles.iconWrapper}>
                <Image style={styles.iconImage} src={RupeeIcon}></Image>
           </View>
              <Text>{item.quantity}</Text>
            </View>
            <View style={styles.tableCells}>
              <Text>{item.deduction}</Text>
            </View>
            <View style={styles.tableCells}>
            {/* <View style={styles.iconWrapper}>
                <Image style={styles.iconImage} src={RupeeIcon}></Image>
           </View> */}
              <Text>{item.amount}</Text>
            </View>
          </View>
        ))}

        <Svg height={15}>
          <Line x1="0" y1="0" x2="1000" y2="0" strokeWidth={1} stroke="#000" />
        </Svg>

        <View style={styles.table}>
          <View style={[styles.footerCells, styles.leftAlgin]}>
            <Text>Gross Earnings</Text>
          </View>
          <View style={styles.footerCells}>
          <View style={styles.iconWrapper}>
                <Image style={styles.iconImage} src={RupeeIcon}></Image>
           </View>
            <Text> 64415</Text>
          </View>
          <View style={styles.footerCells}>
            <Text>Total Deductions</Text>
          </View>
          <View style={styles.footerCells}>
          <View style={styles.iconWrapper}>
                <Image style={styles.iconImage} src={RupeeIcon}></Image>
           </View>
            <Text> 2008</Text>
          </View>
        </View>

        {/* Footer content */}

        <View style={styles.bottomContainer}>
          <View style={styles.bottomWrapper}>
            <Text style={styles.bottomText}>Total Net Payable ₹ 62407.08 </Text>
            <Text style={styles.bottomText2}>
              (Rupees sixty-two thousand four hundred seven only )
            </Text>
          </View>
          <Text style={styles.bottomText3}>
            Total Net Payable= (Gross Earnings - Total Deductions +
            Reimbursements )
          </Text>
        </View>
        <Text style={styles.bottom}>~ This is system generated payslip~</Text>
      </Page>
    </Document>
  );
};

export default PdfDownloader;

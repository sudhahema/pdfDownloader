import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const invoiceData = {
  sender: {
    name: "Gayathri S",
    address: "123 Main Street",
    city: "Chennai",
    state: "Tamil Nadu",
    zip: "603901",
  },
  recipient: {
    name: "Ramya V",
    address: "No-456 1st Street",
    city: "Chennai",
    state: "CA",
    zip: "608602",
  },
  items: [
    { description: "Item 1", quantity: 2, unitPrice: 10 },
    { description: "Item 2", quantity: 3, unitPrice: 15 },
    { description: "Item 3", quantity: 1, unitPrice: 20 },
  ],
  invoiceNumber: "INV-123456",
  date: "April 26, 2023",
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FFF",
    padding: 30,
  },
  header: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 30,
  },
  sender: {
    marginBottom: 20,
  },
  recipient: {
    marginBottom: 30,
  },
  addressLine: {
    fontSize: 12,
    marginBottom: 2,
  },
  table: {
    display: "flex",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    paddingBottom: 5,
    marginBottom: 10,
  },
  tableCell: {
    width: "25%",
    textAlign: "center",
    borderRightWidth: 1,
    borderRightColor: "#000",
    padding: 5,
  },
  tableHeader: {
    fontWeight: "bold",
  },
  total: {
    marginTop: 20,
    textAlign: "right",
  },
  pageNumber: {
    position: "absolute",
    bottom: 30,
    left: "50%",
    fontSize: 12,
  },
});
//npm package jspdf
const PdfConvert = () => {
  const totalAmount = invoiceData.items.reduce(
    (total, item) => total + item.quantity * item.unitPrice,
    0
  );
  

  return (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.header}>Invoice</Text>
        <View style={styles.sender}>
          <Text>{invoiceData.sender.name}</Text>
          <Text>{invoiceData.sender.address}</Text>
          <Text>
            {invoiceData.sender.city}, {invoiceData.sender.state}{" "}
            {invoiceData.sender.zip}
          </Text>
        </View>
        <View style={styles.table}>
          <View style={[styles.tableCell, styles.tableHeader]}>
            <Text>Description</Text>
          </View>
          <View style={[styles.tableCell, styles.tableHeader]}>
            <Text>Quantity</Text>
          </View>
          <View style={[styles.tableCell, styles.tableHeader]}>
            <Text>Unit Price</Text>
          </View>
          <View style={[styles.tableCell, styles.tableHeader]}>
            <Text>Amount</Text>
          </View>
        </View>
        {invoiceData.items.map((item, index) => (
          <View key={index} style={styles.table}>
            <View style={styles.tableCell}>
              <Text>{item.description}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>{item.quantity}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>{item.unitPrice.toFixed(2)}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>{(item.quantity * item.unitPrice).toFixed(2)}</Text>
            </View>
          </View>
        ))}
        <Text style={styles.total}>Total: ${totalAmount.toFixed(2)}</Text>
        <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
          `Page ${pageNumber} of ${totalPages}`
        )} fixed />
      </Page>
      <Page style={styles.page}>
        <Text style={styles.header}>Invoice</Text>
        <View style={styles.recipient}>
          <Text>{invoiceData.recipient.name}</Text>
          <Text>{invoiceData.recipient.address}</Text>
          <Text>
            {invoiceData.recipient.city}, {invoiceData.recipient.state}{" "}
            {invoiceData.recipient.zip}
          </Text>
        </View>
        <View style={styles.table}>
          <View style={[styles.tableCell, styles.tableHeader]}>
            <Text>Description</Text>
          </View>
          <View style={[styles.tableCell, styles.tableHeader]}>
            <Text>Quantity</Text>
          </View>
          <View style={[styles.tableCell, styles.tableHeader]}>
            <Text>Unit Price</Text>
          </View>
          <View style={[styles.tableCell, styles.tableHeader]}>
            <Text>Amount</Text>
          </View>
        </View>
        {invoiceData.items.map((item, index) => (
          <View key={index} style={styles.table}>
            <View style={styles.tableCell}>
              <Text>{item.description}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>{item.quantity}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>{item.unitPrice.toFixed(2)}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>{(item.quantity * item.unitPrice).toFixed(2)}</Text>
            </View>
          </View>
        ))}
        <Text style={styles.total}>Total: ${totalAmount.toFixed(2)}</Text>
        <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
          `Page ${pageNumber} of ${totalPages}`
        )} fixed />
      </Page>
    </Document>
  );
};

export default PdfConvert;

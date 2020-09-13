import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  movieContainer: {
    backgroundColor: "#f6f6f5",
    display: "flex",
    flexDirection: "row",
    padding: 5
  }, 
  image:{
    verticalAlign: "middle",
    width: 50,
    height:50,
    borderRadius:50,
  },
  text:{
    marginLeft: 320,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman'
  }
});
export function PdfDocument(props) {
  console.log("pdf props", props.data);
  return (
    <Document>
      <Page orientation="potrait" style={styles.page}>
           <Text style={styles.text}>There Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut laboriosam ad tempore eius eveniet accusantium facilis mollitia doloribus nostrum cum soluta, voluptatem assumenda perferendis, distinctio cumque debitis vitae officia. Accusantium assumenda iusto quos numquam commodi, modi fuga distinctio possimus nam.</Text>   
           <View>
               <Image source="https://react-pdf.org/images/logo.png" style={styles.image} />
           </View>
      </Page>
    </Document>
  );
}

import React from "react";
import Product from "./Product";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import data from "../data/data_json";
const BASE_URL = "http://10.0.2.2:10000/";


const Explore = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <Text style={{fontSize:25, fontWeight:'bold', color: '#181725', textAlign: 'center', marginVertical: 20}}>Explore Products</Text>
      {data.map((val, index) => (
        <View style={styles.productContainer} key ={index}>
          <Product
            props={val}
            navigation={navigation}
            key={index}
            />
          {data[index + 1] && (
            <Product
              props={data[index+1]}
              navigation={navigation}
              key={index+1}
            />
          )}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 25,
    paddingHorizontal: 10,
  },
  productContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});

export default Explore;
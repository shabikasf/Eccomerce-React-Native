import React from "react";
import { Image, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import Icon from 'react-native-ico-miscellaneous';


const Product = ({props, navigation}) => {
  const key = props.key
  return (
    <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate('ProductDetails', {key})} >
      <View style={styles.imgView}>
        <Image source={{ uri: props.image_url }} style={styles.img} resizeMode="cover" />
        <View>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.quantity}>{props.quantity} Kg</Text>
        </View>
      </View>
      <View>
        <Text style={styles.price}>Rs: {props.price_rs}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 174,
    height: 250,
    backgroundColor: "#fff",
    elevation: 5,
    borderRadius: 18,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 10,
    
  },
  imgView: {
    flex: 1,
  },
  img: {
    alignItems: 'center',
    height: 100,
    width: 130,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#53B175'
  },
  quantity: {
    fontFamily: 'gilroy-medium',
    fontSize: 16,
    color: '#7c7c7c',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
     color: '#181725',
  },
});

export default Product;
 
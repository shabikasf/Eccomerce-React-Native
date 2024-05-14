import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, ScrollView } from "react-native";
import data from "../data/data_json";
import { useDispatch } from 'react-redux';
import { addToCart } from '../state/actions'
import { StyleSheet } from "react-native";
const ProductDetails = ({navigation, route})=>{
    const[quants, setQuants] = useState(0);
    const dispatch = useDispatch();
    const {key} = route.params;

    const product = data.find((val)=>{
        if(val.key === key )
            return val;
    });

    const handleAddToCart = () => {
        const newItem = product;
        dispatch(addToCart(newItem));
    };

    return(
        <View style={styles.root} >
            <View style={styles.imgCont}  >
                <Image source={{uri: product.image_url }} resizeMode="cover" style={styles.img}  />
            </View>
            <View style={styles.detailView} >
                <View>
                    <Text style={styles.name} >{product.name}</Text>
                    <Text style={styles.quantity}>{product.quantity} Kg</Text>
                </View>
                <View style={styles.cont} >
                    <View style={styles.quantsView} >
                        <TouchableOpacity onPress={()=>quants > 0 ? setQuants(quants-1) : 0}><Text style={styles.quants}>-</Text></TouchableOpacity>
                        <Text style={styles.quantsText} >{quants}</Text>
                        <TouchableOpacity onPress={()=>setQuants(quants+1)}><Text style={styles.quants}>+</Text></TouchableOpacity>
                    </View>
                    <View>
                        <Text style={styles.price}>Rs {product.price_rs}</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.detailhead} >Product Details</Text>
                    <Text style={styles.detailtxt}>{product.detail} Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Text>
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
                <Text style={styles.buttonInner}>Add To Basket</Text>
            </TouchableOpacity>
        </View>
        
    )
}

const styles = StyleSheet.create({
    root:{
        // flex: 1,
        // flexDirection: 'column',
    },
    imgCont:{
        width: '100%',
        height: '50%',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        overflow: 'hidden'
    },

    img:{
       flex: 1,
       margin: 0,
       padding: 0
    },
    detailView:{
        marginHorizontal: 25,
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#181725'
    },
    quantity: {
        fontFamily: 'gilroy-medium',
        fontSize: 18,
        color: '#7c7c7c',
    },
    cont:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    quantsView:{
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    quantsText:{
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 20,
        color: '#000',
        textAlign: 'center'
    },
    quants:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#53B175',
    },
    price:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#181725',
    },
    detailhead:{
        fontSize:20, 
        fontWeight:'bold', 
        color: '#181725',  
        marginVertical: 10
    },
    detailtxt:{
        fontFamily: 'gilroy-medium',
        fontSize: 18,
        color: '#7c7c7c',
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: 70,
        borderRadius: 19,
        backgroundColor: '#53B175',
        marginVertical: 25,
        marginHorizontal: 25
    },
    buttonInner:{
        color: '#fff9ff',
        fontWeight: '600',
        fontSize: 18
    }
})

export default ProductDetails;
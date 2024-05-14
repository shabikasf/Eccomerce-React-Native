import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";

import AntDesign from 'react-native-vector-icons/AntDesign'
const OrderItem = ({props, key})=>{
    const product = props;
    
    return(
       <View style={styles.root} key={product.key} >
            <View style={styles.imgCont}  >
                <Image source={{uri: product.image_url }} resizeMode="contain" style={styles.img}  />
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <View style={{flexDirection: 'column'}}>
                    <Text style={styles.name} >{product.name}</Text>
                    <Text style={styles.quantity}>{product.quantity} Kg</Text>
                </View>
                <View style={{flexDirection: 'row', marginLeft: 20, }}>
                    <Text style={{fontSize: 16, color: '#181725', fontWeight: 'bold'}}>Rs.{(product.price_rs * product.qty).toFixed(2)}</Text>
                    <AntDesign name="right" color={'#181725'} size={20} style={{marginLeft: 5, fontWeight: 'bold'}} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems:'stretch',
        padding: 20,
        borderTopColor: '#e2e2e2',
        borderBottomColor: '#e2e2e2',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderRadius: 2,
        // marginHorizontal: 10,
        backgroundColor: '#fff'
       
    },
    imgCont:{
        width: 100,
        height: 100
    },

    img:{
        flex: 1,
    },
    detailView:{
        // marginHorizontal: 10,
        // backgroundColor: 'red'
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#181725'
    },
    quantity: {
        fontFamily: 'gilroy-medium',
        fontSize: 16,
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
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 20,
        color: '#000',
        textAlign: 'center'
    },
    quants:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#53B175',
        borderRadius: 17,
        width: 30,
        height: 30,
        borderColor: '#e2e2e2',
        borderWidth: 1,
        textAlign: 'center'
    },
    price:{
        fontSize: 16,
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

export default OrderItem;
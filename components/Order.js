import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View, Modal, Text, TextInput } from "react-native";
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";

const Order = ()=>{
    const bookedItems = useSelector(state => state.booked.bookedItems);

    return(
        <View style={{backgroundColor: '#fff'}} > 
            <View style={{marginVertical: 20}}>
                <Text style={{textAlign: 'center', fontSize: 30, fontWeight: 'bold', color: '#181725',}}>My Orders</Text>
            </View>
            <ScrollView>
                {bookedItems.map((data) =>{
                    return <OrderItem props={data} key={data.key} />
                })}
            </ScrollView>
            
        </View>
    );
}

const Styles = StyleSheet.create({
    buttonCont:{
        marginHorizontal: 20,

    },
     button:{
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15,
        height: 70,
        borderRadius: 19,
        backgroundColor: '#53B175',
    },
    buttonInner:{
        color: '#fff9ff',
        fontWeight: '600',
        fontSize: 18
    },
    modalView:{
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        minHeight: '55%',
        backgroundColor: 'white',
        elevation: 10,
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    none:{
        margin: 0
    },
    box:{
        fontSize: 18,
        height: 50,
        borderColor: '#e3e3e3',  
        color: '#7c7c7c',
        borderWidth: 1,
        borderRadius: 8,
        padding: 10

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

export default Order;
import React from "react";
import { View, Text, Image, ScrollView, StyleSheet, Dimensions, TextInput } from "react-native";
import logo from '../assets/logo.png'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import home from "../assets/home.png"
import data from "../data/data_json";
import Product from "./Product";


const data1 = data.filter((val, index)=>{
    return index < 5 && index % 2 === 0;
})
const data2 = data.filter((val, index)=>{
    return index >= 5 && index % 2 === 1;
})

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height

const Home = ({navigation})=>{
    return(
        <ScrollView>
        <View style={styles.root}>
            <View style={{justifyContent: 'center', alignItems: 'center', width: {width}, height: '3%'}}>
                <View style={styles.imgCont}>
                    <Image source={logo} style={styles.img} resizeMode="contain"/>
                </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', marginVertical: 10}}>
                <Entypo name="location-pin" color={"#4C4F4D"} size={25} />
                <Text style={{marginLeft: 2, fontSize: 18, fontWeight: 'bold', fontFamily: 'gilroy-medium', color: '#4C4F4D' }}>Chennai, Tamil Nadu</Text>
            </View>
            <View style={styles.container}>
            <View style={styles.searchBox}>
                <Ionicons name="search" size={20} style={styles.searchIcon} />
                <TextInput
                    placeholder="Search Store"
                    style={styles.input}
                />
            </View>
        </View>
            <View style={{width: '100%', marginVertical: 10}}>
                <Image source={home} style={{width: '100%'}} resizeMode="stretch"/>
            </View>
    
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10}}>
                <Text style={{fontSize: 24, color: '#181725', fontWeight: 'bold'}}>Exclusive</Text>
                <Text style={{fontSize: 18, color: '#53B175', fontWeight: 'bold'}}>See all</Text>
            </View>
            <ScrollView horizontal={true} style={{ flexDirection: 'row', marginVertical: 10 }}>
                {data1.map((val, index) => (
                    <Product props={val} navigation={navigation} key={val.key} /> 
                ))}
            </ScrollView>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10}}>
                <Text style={{fontSize: 24, color: '#181725', fontWeight: 'bold'}}>Best selling</Text>
                <Text style={{fontSize: 18, color: '#53B175', fontWeight: 'bold'}}>See all</Text>
            </View>
            <ScrollView horizontal={true} style={{ flexDirection: 'row', paddingVertical: 10}}>
                {data2.map((val, index) =>{
                    return <Product props={val} key={val.key} navigation={navigation}/>
                })}
            </ScrollView>
        
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root:{
        flexDirection: 'column',
        padding: 25,
        backgroundColor: '#fff',
        marginBottom: 30
    }, 
    imgCont:{
        height: 40,
        width: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img:{
        flex: 1,
        
    },
    container: {
        marginVertical: 10,
        alignItems: 'center'
    },
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#F2F3F2'

    },
    searchIcon: {
        marginRight: 5,
        color: '#4C4F4D',
    },
    input: {
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'gilroy-medium',
        color: '#7c7c7c'
    },
})

export default Home;
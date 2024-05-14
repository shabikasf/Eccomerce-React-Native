import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import luffy from '../assets/luffy.jpg'

const Account = ({navigation})=>{
    return(
        <ScrollView style={{backgroundColor: '#fff', paddingHorizontal: 25, paddingVertical: 30}}>
            <View style={{paddingVertical: 20}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{ width: 75, height: 75, borderRadius: 100, overflow: 'hidden', marginRight: 15 }}>
                        <Image source={luffy} style={{ width: '100%', height: '100%' }} resizeMode="cover" />
                    </View>
                    <View>
                        <Text style={{fontSize: 20, color: '#181725', fontWeight: 'bold'}}>Monkey D Luffy</Text>
                        <Text style={{fontSize: 16, color: '#7c7c7c', }}>kingofpirates@gmail.com</Text>
                    </View>
                </View>
            </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: '#e2e2e2', borderTopColor: '#e2e2e2', borderBottomWidth: 1, borderTopWidth: 1, alignItems: 'center', paddingVertical: 20}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Feather name="shopping-bag" color={'#181725'} size={20} style={{marginRight: 10}}/>
                        <Text style={{fontSize: 18, color: '#181725', fontWeight: 'bold'}}>Orders</Text>
                    </View>
                    <View>
                        <AntDesign name="right" color={'#181725'} size={20} />
                    </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between',  borderBottomColor: '##e2e2e2', borderTopColor: '#e2e2e2', borderBottomWidth: 1, borderTopWidth: 1, alignItems: 'center', paddingVertical: 20}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <AntDesign name="idcard" color={'#181725'} size={20} style={{marginRight: 10}}/>
                        <Text style={{fontSize: 18, color: '#181725', fontWeight: 'bold'}}>My Details</Text>
                    </View>
                    <View>
                        <AntDesign name="right" color={'#181725'} size={20} />
                    </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between',  borderBottomColor: '##e2e2e2', borderTopColor: '#e2e2e2', borderBottomWidth: 1, borderTopWidth: 1, alignItems: 'center',  paddingVertical: 20}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Entypo name="location-pin" color={'#181725'} size={20} style={{marginRight: 10}} />
                        <Text style={{fontSize: 18, color: '#181725', fontWeight: 'bold'}}>Delivery Address</Text>
                    </View>
                    <View>
                        <AntDesign name="right" color={'#181725'} size={20} />
                    </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between',  borderBottomColor: '##e2e2e2', borderTopColor: '#e2e2e2', borderBottomWidth: 1, borderTopWidth: 1, alignItems: 'center',  paddingVertical: 20}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Entypo name="credit-card" color={'#181725'} size={20} style={{marginRight: 10}} />
                        <Text style={{fontSize: 18, color: '#181725', fontWeight: 'bold'}}>Payment Methods</Text>
                    </View>
                    <View>
                        <AntDesign name="right" color={'#181725'} size={20} />
                    </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between',  borderBottomColor: '##e2e2e2', borderTopColor: '#e2e2e2', borderBottomWidth: 1, borderTopWidth: 1, alignItems: 'center',  paddingVertical: 20}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Feather name="info" color={'#181725'} size={20} style={{marginRight: 10}} />
                        <Text style={{fontSize: 18, color: '#181725', fontWeight: 'bold'}}>About</Text>
                    </View>
                    <View>
                        <AntDesign name="right" color={'#181725'} size={20} />
                    </View>
                </View>
                <View style={{marginVertical: 20}}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', height: 50, backgroundColor: '#f2f3f2', borderRadius: 16, elevation: 1 }}>
                        <Text style={{ textAlign: 'center', color:'#53B175', fontSize: 20, fontWeight: '600' }} onPress={()=>navigation.navigate('Login')}>Log Out</Text>
                    </TouchableOpacity>
                </View>
                
        </ScrollView>
    )
}



const styles = StyleSheet.create({

})

export default Account;
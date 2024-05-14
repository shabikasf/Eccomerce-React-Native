import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View, Modal, Text, TextInput, Alert } from "react-native";
import { useSelector, useDispatch  } from "react-redux";
import CartItem from "./CartItem";
import Icon from "react-native-ico-miscellaneous";
import { booked } from "../state/actions";


const Cart = ({navigation})=>{
    const[isVisible, setVisible] = React.useState(false);
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalPrice = cartItems.reduce((total, item) => total + item.price_rs*item.qty, 0);
    const dispatch = useDispatch();;
   

    const Checkout = ({navigation})=>{

        function handlepayment(){
            Alert.alert(
                'Purchase Successful',
                'Payment Recieved Sucessfully',
                [
                {text: 'OK', onPress: ()=> {
                    
                    dispatch(booked())
                    navigation.navigate('Order');
                

                }},
                ],
                { cancelable: false }
            )
        }
            
        const onModalClose = ()=>{
            setVisible(!isVisible)
            handlepayment();
        }

        return(
        <Modal visible={isVisible} animationType="slide" onRequestClose={()=>setVisible(!isVisible)} transparent={true}>
        <View style={{flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.5)'}}>
            <View style={Styles.modalView}>
                <View style={[Styles.row, {marginHorizontal: 20, borderBottomColor: '#e3e3e3', borderBottomWidth: 1, paddingVertical: 20}]}>
                    <Text style={{fontSize: 30, color:'#181725', fontWeight: '600'}}>Checkout</Text>
                    <Icon name="cancel" size={30} onPress={()=>setVisible(!isVisible)} color={'#181725'}/>
                </View>
                <View style={{marginHorizontal: 20, borderBottomColor: '#e3e3e3', borderBottomWidth: 1, paddingVertical: 25}}>
                    <Text style={{fontSize: 20, color: '#181725', fontWeight: '600'}}>Have a promotional code?</Text>
                    <View style={Styles.row}>
                        <TextInput placeholder="Enter Code" style={[Styles.box, {width: '67%', backgroundColor: '#f3f3f3'}]} />
                        <TouchableOpacity style={Styles.box}><Text style={{textAlign: 'center', fontSize: 18}}>Apply Code</Text></TouchableOpacity>
                    </View>
                </View>
                <View style={{marginHorizontal:20,  borderBottomColor: '#e3e3e3', borderBottomWidth: 3, paddingVertical: 25, borderStyle: 'dashed'}}>
                    <Text style={{fontSize: 20, color: '#181725', fontWeight: '600'}}>Order Summary</Text>
                    <View style={[Styles.row, {marginTop: 5}]}>
                        <Text style={{fontSize: 18, color:'#7c7c7c'}}>{cartItems.length} items</Text>
                        <Text style={{fontSize: 18, color:'#181725'}}>Rs.{totalPrice.toFixed(2)}</Text>
                    </View>
                    <View style={[Styles.row, {marginTop: 5}]}>
                        <Text style={{fontSize: 18, color:'#7c7c7c'}}>Delivery Cost</Text>
                        <Text style={{fontSize: 18, color:'#181725'}}>Rs.50</Text>
                    </View>
                </View>
                <View style={[Styles.row, {marginHorizontal: 20}]}>
                    <Text style={{fontSize: 20, color: '#181725', fontWeight: '600'}}>Total:</Text>
                    <Text style={{fontSize: 20, color: '#181725', fontWeight: '600'}}>Rs.{(totalPrice + 50).toFixed(2)}</Text>
                </View>
                <TouchableOpacity style={Styles.button} onPress={()=>onModalClose()}>
                    <Text style={Styles.buttonInner}>Confirm Checkout</Text>
                </TouchableOpacity>
            </View>
            </View>
        </Modal>
        );
    }
    
    return(
        <View style={{backgroundColor: '#fff'}} > 
            <Checkout isVisible={isVisible} navigation={navigation} />
            <View style={{marginVertical: 20}}>
                <Text style={{textAlign: 'center', fontSize: 30, fontWeight: 'bold', color: '#181725',}}>My Cart</Text>
            </View>
            <ScrollView>
                {cartItems.map((data) =>{
                    return <CartItem props={data} key={data.key} />
                })}
            </ScrollView>
            <View style={Styles.buttonCont}>
                <TouchableOpacity style={Styles.button} onPress={()=>setVisible(true)}>
                    <Text style={Styles.buttonInner}>Go to Checkout</Text>
                </TouchableOpacity>
            </View>
            
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

export default Cart;
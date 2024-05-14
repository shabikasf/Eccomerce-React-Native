import React, { useState } from "react";
import logo from '../assets/logo.png';
import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import Heading from "./Heading";
import CustomInput from "./CustomInput";
import { useDispatch } from "react-redux";
import axios from "axios";
const BASE_URL = "http://10.0.2.2:10000/"

const Signin = ({navigation})=>{
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleSignup = async () => {
    if(username!=''){
        try {
            const response = await axios.post(`${BASE_URL}signup`, {
              username,
              password,
            });
            navigation.navigate('Login');
          } catch (error) {
              console.warn(error)
            Alert.alert(
              'Signup Failed',
              'UserName Already Exists or Server Error',
              [
                {text: 'OK'},
              ],
              { cancelable: false }
            )
          }
    }
    else{

        Alert.alert(
            'Check your Details',
            'Details not entered properly',
            [
              {text: 'OK'},
            ],
            { cancelable: false }
          )


    }
  };

    return(
        <ScrollView style={styles.root}>
            <View style={styles.img}>
                <Image source={logo} style={styles.image} resizeMode="contain" />
            </View>
            
            <Heading heading={"Sign Up"} subheading={"Enter your credentials to continue"} />
            <CustomInput label={"Username"} secureText={false} val={username} setVal={setUsername} />
            <CustomInput label={"Email"} secureText={false} val={email} setVal={setEmail}  />
            <CustomInput label={"Password"} secureText={true} val={password} setVal={setPassword} />
            <View style={margin=15}>
                <Text>By continuing you agree to our <Text style={styles.inner}> Terms of Service</Text> and <Text style={styles.inner}>Privacy Policy</Text>.</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={()=>handleSignup()}><Text style={styles.buttonInner}>Sign Up</Text></TouchableOpacity>
             <View style={{alignItems: 'center'}}>
                <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center'}} onPress={()=>navigation.navigate('Login')}><Text style={{fontSize: 18, fontWeight: '600', color: '#030303', textAlign: 'center', borderBottomColor: '#7c7c7c', borderBottomWidth: 1}}>Already have an account? <Text style={styles.inner}>Sign in</Text></Text></TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    root:{
        flex: 1,
        flexDirection: 'column',
        padding: 20,
        backgroundColor: '#FCFCFC',
        padding: 25

    },
    img:{
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 230,
        marginVertical: 20
    },
    image:{
        width: 100,
        height: 60,
    },
    agreement:{
        fontFamily: 'gilroy-medium',
        fontSize: 18,
        color: '#7c7c7c',
        letterSpacing: 5
    },
    inner:{
        color:'#53B175',
        fontSize: 18,

    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15,
        width: '100%',
        height: 50,
        borderRadius: 19,
        backgroundColor: '#53B175',
    },
    buttonInner:{
        color: '#fff9ff',
        fontWeight: '600',
        fontSize: 18
    }
    
    
});

export default Signin;
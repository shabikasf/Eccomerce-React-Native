import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import Heading from "./Heading";
import CustomInput from "./CustomInput";
import { useDispatch } from "react-redux";
import logo from '../assets/logo.png';
import axios from "axios"; 
const BASE_URL = "http://10.0.2.2:10000/";

const Login = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleLogin = async () => {
        try {
            const response = await axios.post(`${BASE_URL}login`, {
                username,
                password,
            });
            navigation.navigate('Home');
            
        } catch (error) {
            console.warn(error)
            Alert.alert(
                'Login Failed',
                'Please check your username and Password',
                [
                    { text: 'OK' },
                ],
                { cancelable: false }
            );
        }
    };

    return (
        <ScrollView style={styles.root}>
            <View style={styles.img}>
                <Image source={logo} style={styles.image} resizeMode="contain" />
            </View>

            <Heading heading={"Log In"} subheading={"Enter your email and password"} />
            <CustomInput label={"Email"} secureText={false} val={username} setVal={setUsername} />
            <CustomInput label={"Password"} secureText={true} val={password} setVal={setPassword} />
            <TouchableOpacity style={styles.button} onPress={()=>handleLogin()}>
                <Text style={styles.buttonInner}>Log In</Text>
            </TouchableOpacity>
            <View>
                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} ><Text style={{ fontSize: 18, fontWeight: '600', color: '#030303', textAlign: 'center', borderBottomColor: '#7c7c7c', borderBottomWidth: 1 }}>Don't have an account? <Text style={styles.inner} onPress={() => navigation.navigate('Signin')}>Sign up</Text></Text></TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column',
        padding: 20,
        backgroundColor: '#FCFCFC',
        padding: 25

    },
    img: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 230,
        marginVertical: 20
    },
    image: {
        width: 100,
        height: 60,
    },
    agreement: {
        fontFamily: 'gilroy-medium',
        fontSize: 18,
        color: '#7c7c7c',
        letterSpacing: 5
    },
    inner: {
        color: '#53B175',
        fontSize: 18,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15,
        width: '100%',
        height: 50,
        borderRadius: 19,
        backgroundColor: '#53B175',
    },
    buttonInner: {
        color: '#fff9ff',
        fontWeight: '600',
        fontSize: 18
    }


});

export default Login;

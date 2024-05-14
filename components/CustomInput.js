import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const CustomInput = ({label, secureText, val, setVal})=>{
    return(
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput label={label} style={styles.input} secureTextEntry={secureText} onChangeText={text=>setVal(text)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginVertical: 15
    },
    label:{
        fontFamily: 'Gilroy',
        fontSize: 18,
        fontWeight: '600'

    },
    input:{
         fontFamily: 'Gilroy-medium',
        height: 50,
        width: '100%',
        fontSize: 18,
        fontWeight: '600',
        color: '#030303',
        paddingBottom: 10,
        borderBottomColor: '#e2e2e2',
        borderBottomWidth: 2,
    }
})

export default CustomInput;
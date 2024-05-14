import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Heading = ({heading, subheading})=>{
    return(
        <View style={styles.container}>
            <Text style={styles.heading}>{heading}</Text>
            <Text style={styles.subheading}>{subheading}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        marginVertical: 15
    },
    heading:{
        color: '#030303',
        fontSize: 30,
        fontFamily: 'gilroy',
        fontWeight: 'bold'
    },
    subheading:{
        color: '#7C7C7C',
        fontSize: 18,
        fontFamily: 'gilroy-medium'
    }
});

export default Heading;
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Explore from '../components/Explore';
import Cart from '../components/Cart';
import ProductDetails from '../components/ProductDetails';
import Login from '../components/Login';
import Signin from '../components/Signin';
import Home from '../components/Home';
import Account from '../components/Account';
import Order from '../components/Order';

const Tab = createBottomTabNavigator();


const screenOptions = {
  tabBarShowLabel:false,
  headerShown: false,
  tabBarStyle:{
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: "#fff"
  }
}



const Navigation = ()=>{
    return(
        <NavigationContainer>
        <Tab.Navigator initialRouteName={Signin} screenOptions={screenOptions}>
         <Tab.Screen 
            name="Login" 
            component={Login} 
            options={{
                tabBarVisible: false,
                tabBarStyle:{display: 'none'},
                tabBarButton: props=>null,
            }}
            />
             <Tab.Screen 
            name="Signin" 
            component={Signin} 
            options={{
                tabBarVisible: false,
                tabBarStyle:{display: 'none'}, headerShown: false,
                tabBarButton: props=>null,
            }}
            />

            <Tab.Screen 
            name="Home" 
            component={Home} 
            options={{
                tabBarIcon: ({focused})=>{
                return (
                    <View style={{alignItems: "center", justifyContent: "center"}}> 
                    <Ionicons name="home-outline" size={24} color={focused ? "#53B175": "#181725"} />
                    <Text style={{fontSize: 12, color: "#16247d"}}>SHOP</Text>
                    </View>
                )
                }
            }}
            />

            <Tab.Screen 
            name="Explore" 
            component={Explore} 
            options={{
                tabBarIcon: ({focused})=>{
                return (
                    <View style={{alignItems: "center", justifyContent: "center"}}> 
                    <Feather name="shopping-bag" size={24} color={focused ? "#53B175": "#181725"} />
                    <Text style={{fontSize: 12, color: "#16247d"}}>EXPLORE</Text>
                </View>
                )
                }
            }}
            />
            
            <Tab.Screen
            name="Cart" 
            component={Cart}
            options={{
                tabBarIcon: ({focused})=>{
                return (
                    <View style={{alignItems: "center", justifyContent: "center"}}> 
                    <Ionicons name="cart-outline" size={24} color={focused ? "#53B175": "#181725"} />
                    <Text style={{fontSize: 12, color: "#16247d"}}>CART</Text>
                </View>
                )
                }
            }}
            />

                <Tab.Screen 
            name="ProductDetails" 
            component={ProductDetails} 
            options={{tabBarVisible: false,
                tabBarButton: props=>null,
              }}
            />

             <Tab.Screen 
            name="Order" 
            component={Order} 
            options={{
                tabBarIcon: ({focused})=>{
                return (
                    <View style={{alignItems: "center", justifyContent: "center"}}> 
                    <Ionicons name="clipboard-outline" size={24} color={focused ? "#53B175": "#181725"} />
                    <Text style={{fontSize: 12, color: "#16247d"}}>Order</Text>
                </View>
                )
                }
            }}
            /> 
            <Tab.Screen 
            name="Account" 
            component={Account} 
            options={{
                tabBarIcon: ({focused})=>{
                return (
                    <View style={{alignItems: "center", justifyContent: "center"}}> 
                    <Ionicons name="person-outline" size={24} color={focused ? "#53B175": "#181725"} />
                    <Text style={{fontSize: 12, color: "#16247d"}}>Account</Text>
                </View>
                )
                }
            }}
            />
        </Tab.Navigator>
        </NavigationContainer>
  );
}

export default Navigation;
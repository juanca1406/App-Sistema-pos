import React from 'react'
import { Text, ScrollView, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import perfil from "../assets/logo.png"
import categorias from "../assets/categorias.png";
import coordinar from "../assets/coordinar.png";
import tablero from "../assets/tablero.png";
import sales from "../assets/ventas.png";
import cliente from "../assets/cliente.png";
import gente from "../assets/gente.png";
import box from "../assets/box.png";

export default function Menu({ navigation }) {
    return (
        <ScrollView>
            <View className="mt-7 bg-gray-100">
                <View className="flex-row bg-white  justify-between items-center p-2">
                    <View className="bg-gray rounded-full p-2">
                        <TouchableOpacity >
                            <Ionicons name="notifications-outline" size={24} color="black" />
                            <View className="absolute ml-3 -mt-2 bg-red-300 rounded-full h-5 w-5 justify-center items-center">
                                <Text className="text-xs font-bold text-gray-800">0</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View className="flex-row items-center ml-auto">
                        <Text className="font-bold mr-2">Json Taylor</Text>
                        <Image source={perfil} className="w-10 h-10 rounded-full" />
                    </View>
                </View>

                <View className="flex-row flex-wrap justify-between p-2 mx-2">
                    <TouchableOpacity
                        className="bg-white rounded-lg p-4 shadow-md items-center w-[48%] mb-4"
                    >
                        <Image source={categorias} className="w-16 h-16 mb-2" resizeMode="contain" />
                        <Text className="text-center font-bold text-gray-700">Categories</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className="bg-white rounded-lg p-4 shadow-md items-center w-[48%] mb-4"
                    >
                        <Image source={cliente} className="w-16 h-16 mb-2" resizeMode="contain" />
                        <Text className="text-center font-bold text-gray-700">Customers</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className="bg-white rounded-lg p-4 shadow-md items-center w-[48%] mb-4"
                    >
                        <Image source={gente} className="w-16 h-16 mb-2" resizeMode="contain" />
                        <Text className="text-center font-bold text-gray-700">Employees</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className="bg-white rounded-lg p-4 shadow-md items-center w-[48%] mb-4"
                    >
                        <Image source={box} className="w-16 h-16 mb-2" resizeMode="contain" />
                        <Text className="text-center font-bold text-gray-700">Products</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className="bg-white rounded-lg p-4 shadow-md items-center w-[48%] mb-4"
                    >
                        <Image source={coordinar} className="w-16 h-16 mb-2" resizeMode="contain" />
                        <Text className="text-center font-bold text-gray-700">Rols</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className="bg-white rounded-lg p-4 shadow-md items-center w-[48%] mb-4"
                    >
                        <Image source={sales} className="w-16 h-16 mb-2" resizeMode="contain" />
                        <Text className="text-center font-bold text-gray-700">Sales</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className="bg-white rounded-lg p-4 shadow-md items-center w-[48%] mb-4"
                    >
                        <Image source={tablero} className="w-16 h-16 mb-2" resizeMode="contain" />
                        <Text className="text-center font-bold text-gray-700">Dashboard</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </ScrollView>
    )
}

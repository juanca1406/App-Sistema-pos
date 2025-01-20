import { Text, View, Image, ScrollView, Button, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import box from "../assets/box.png";
import perfil from "../assets/logo.png";
import sales from "../assets/punto-de-venta.png";
import gente from "../assets/gente.png";
import clothing from "../assets/clothing.png";
import furniture from "../assets/furniture.png";
import food from "../assets/food.png";
import tablero from "../assets/tablero.png";
import cliente from "../assets/cliente.png";
import salesDetails from "../assets/ventas.png"
import React, { useState } from "react";

export default function Home({ navigation }) {
    const [selectedCategory, setSelectedCategory] = useState(null); // Estado para la categoría seleccionada

    const renderCategoryContent = () => {
        switch (selectedCategory) {
            case "Electronics":
                return (
                    <View>
                        <Text className="text-lg font-bold">Electronics</Text>
                        <Text>Here are some electronics products...</Text>
                    </View>
                );
            case "Clothing":
                return (
                    <View>
                        <Text className="text-lg font-bold">Clothing</Text>
                        <Text>Here are some clothing items...</Text>
                    </View>
                );
            case "Groceries":
                return (
                    <View>
                        <Text className="text-lg font-bold">Groceries</Text>
                        <Text>Here are some grocery items...</Text>
                    </View>
                );
            case "Furniture":
                return (
                    <View>
                        <Text className="text-lg font-bold">Furniture</Text>
                        <Text>Here are some furniture items...</Text>
                        <Text className="text-lg font-bold">Select a category to see more details</Text>
                        <Text className="text-lg font-bold">Select a category to see more details</Text>
                        <Text className="text-lg font-bold">Select a category to see more details</Text>
                        <Text className="text-lg font-bold">Select a category to see more details</Text>
                        <Text className="text-lg font-bold">Select a category to see more details</Text>
                        <Text className="text-lg font-bold">Select a category to see more details</Text>
                    </View>
                );
            default:
                return (
                    <View>
                        <Text className="text-lg font-bold">Select a category to see more details</Text>
                    </View>
                );
        }
    };

    return (
        <ScrollView>
            <View className="mt-8 bg-gray-100">
                <View className="flex-row bg-white justify-between items-center p-2 shadow-md">
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

                <Text className="text-lg font-bold p-4">Bienvenido de nuevo, Json Taylor 🎉</Text>

                <View className="flex flex-wrap mx-auto p-1">
                    <View className="bg-white rounded-lg p-4 shadow-lg flex-row items-center justify-between w-[90%] my-2 mx-auto">
                        <View>
                            <Text className="text-lg font-bold text-gray-700">Ver Dashboard</Text>
                            <Button onPress={() => navigation.navigate('Dashboard')} title='Ver Dashboard' />
                        </View>
                        <View className="p-3 bg-gray-200 items-center justify-center rounded-full overflow-hidden">
                            <Image
                                source={tablero}
                                className="h-20 w-20"
                                resizeMode="contain"
                            />
                        </View>
                    </View>
                </View >

                <View className="flex-row justify-between p-3 bg-white rounded-2xl mx-3 shadow-lg gap-2 mt-3">
                    {/* Products */}
                    <View className="w-[23%] items-center">
                        <TouchableOpacity onPress={() => navigation.navigate('Products')}>
                            <View className="p-4 bg-blue-100 items-center justify-center rounded-full shadow-sm">
                                <Image
                                    source={salesDetails}
                                    className="h-12 w-12"
                                    resizeMode="cover"
                                />
                            </View>
                            <Text className="text-sm font-bold text-center text-gray-800 mt-2">Ventas</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Sales */}
                    <View className="w-[23%] items-center">
                        <TouchableOpacity onPress={() => navigation.navigate('SalesDetails')}>
                            <View className="p-4 bg-green-100 items-center justify-center rounded-full shadow-sm">
                                <Image
                                    source={sales}
                                    className="h-12 w-12"
                                    resizeMode="contain"
                                />
                            </View>
                            <Text className="text-sm font-bold text-center text-gray-800 mt-2">Detalles de las ventas</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Customers */}
                    <View className="w-[23%] items-center">
                        <View className="p-4 bg-yellow-100 items-center justify-center rounded-full shadow-sm">
                            <Image
                                source={cliente}
                                className="h-12 w-12"
                                resizeMode="contain"
                            />
                        </View>
                        <Text className="text-sm font-bold text-center text-gray-800 mt-2">Clientes</Text>
                    </View>

                    {/* Employees */}
                    <TouchableOpacity onPress={() => navigation.navigate('Employees')} className="w-[23%] h-24 items-center">
                        <View className="p-4 bg-red-100 items-center justify-center rounded-full shadow-sm">
                            <Image
                                source={gente}
                                className="h-12 w-12"
                                resizeMode="contain"
                            />
                        </View>
                        <Text className="text-sm font-bold text-center text-gray-800 mt-2">Empleados</Text>
                    </TouchableOpacity>
                </View>


                <Text className="text-lg font-bold p-4">Categoría 🎉</Text>
                <View className="flex-row flex-wrap justify-between p-2 mx-2">
                    <TouchableOpacity
                        className="bg-white rounded-lg p-4 shadow-md items-center w-[48%] mb-4"
                        onPress={() => setSelectedCategory("Electronics")}
                    >
                        <Image source={box} className="w-16 h-16 mb-2" resizeMode="contain" />
                        <Text className="text-center font-bold text-gray-700">Electronics</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className="bg-white rounded-lg p-4 shadow-md items-center w-[48%] mb-4"
                        onPress={() => setSelectedCategory("Clothing")}
                    >
                        <Image source={clothing} className="w-16 h-16 mb-2" resizeMode="contain" />
                        <Text className="text-center font-bold text-gray-700">Clothing</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className="bg-white rounded-lg p-4 shadow-md items-center w-[48%] mb-4"
                        onPress={() => setSelectedCategory("Groceries")}
                    >
                        <Image source={food} className="w-16 h-16 mb-2" resizeMode="contain" />
                        <Text className="text-center font-bold text-gray-700">Food</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className="bg-white rounded-lg p-4 shadow-md items-center w-[48%] mb-4"
                        onPress={() => setSelectedCategory("Furniture")}
                    >
                        <Image source={furniture} className="w-16 h-16 mb-2" resizeMode="contain" />
                        <Text className="text-center font-bold text-gray-700">Furniture</Text>
                    </TouchableOpacity>
                </View>

                <View className="p-4 mx-2 bg-white rounded-lg shadow-md">
                    {renderCategoryContent()}
                </View>
            </View>
        </ScrollView >
    );
}

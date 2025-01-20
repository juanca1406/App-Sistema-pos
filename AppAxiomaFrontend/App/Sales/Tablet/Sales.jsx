import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import perfil from "../../../assets/logo.png";
import pago from "../../../assets/pago.png";
import React, { useState } from 'react';
import { useProducts } from "../../../Hooks/ProductsHooks"
import Nike from "../../../assets/image.png"

export default function Sales({ navigation }) {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [page, setPage] = useState(1);
    const { error, data } = useProducts(page);
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);

            if (existingProduct) {
                // Incrementar cantidad si ya está en el carrito
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, cantidad: item.cantidad + 1 }
                        : item
                );
            } else {
                // Agregar nuevo producto al carrito
                return [...prevCart, { ...product, cantidad: 1 }];
            }
        });
    };

    const renderCategoryContent = () => {
        switch (selectedCategory) {
            case "Shoes":
                return (
                    <ScrollView showsVerticalScrollIndicator={false} >
                        <View className="mt-5">
                            <View className="flex-row flex-wrap gap-2 justify-center">
                                {data?.data?.map((product) => (
                                    <View
                                        key={product.id}
                                        className="bg-white rounded-xl shadow-lg  border border-gray-200 p-1 sm:w-[20%] md:w-[47%] lg:w-[30%] ">
                                        <TouchableOpacity onPress={() => addToCart(product)}>
                                            <View className="w-full h-24 flex justify-center items-center mb-2">
                                                <Image
                                                    source={Nike}
                                                    className="w-full h-full"
                                                    resizeMode="contain"
                                                />
                                            </View>
                                            <Text className="text-lg font-bold text-gray-800 text-center">
                                                {product.name}
                                            </Text>
                                            <View className="flex-col items-center">
                                                <Text className="text-sm text-gray-500">Zapatos</Text>
                                                <Text className="text-md text-gray-700 font-semibold">
                                                    {product.price}
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                ))}
                            </View>
                        </View>
                    </ScrollView>
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
                    </View>
                );
            default:
                return (
                    <View>
                        <Text className="text-lg font-bold">Ver Todas la categorias</Text>
                    </View>
                );
        }
    };

    return (
        <View className="mt-8 bg-gray-100">
            {/* Header con botón y perfil */}
            <View className="flex-row bg-white justify-between items-center p-4 shadow-md">
                <TouchableOpacity onPress={() => navigation.navigate('MainTabs', { screen: 'Home' })}>
                    <View className="bg-gray-200 rounded-full p-2">
                        <FontAwesome5 name="arrow-left" size={20} color="black" />
                    </View>
                </TouchableOpacity>
                <View className="flex-row items-center">
                    <Text className="font-bold mr-2">Json Taylor</Text>
                    <Image source={perfil} className="w-10 h-10 rounded-full" />
                </View>
            </View>

            <View className='flex-row justify-between p-2 gap-2'>
                <View className="bg-white flex-1 shadow-lg items-center p-2">
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ gap: 5 }}
                    >
                        <TouchableOpacity
                            className="bg-white rounded-lg p-3 shadow-lg items-center"
                            onPress={() => setSelectedCategory("Shoes")}
                        >
                            <Text className="text-center text-sm font-bold text-gray-700">Shoes</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            className="bg-white rounded-lg p-3 shadow-lg items-center"
                            onPress={() => setSelectedCategory("Clothing")}
                        >
                            <Text className="text-center text-sm font-bold text-gray-700">Clothing</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            className="bg-white rounded-lg p-3 shadow-md items-center"
                            onPress={() => setSelectedCategory("Groceries")}
                        >
                            <Text className="text-center text-sm font-bold text-gray-700">Food</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            className="bg-white rounded-lg p-3 shadow-md items-center"
                            onPress={() => setSelectedCategory("Furniture")}
                        >
                            <Text className="text-center text-sm font-bold text-gray-700">Furniture</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            className="bg-white rounded-lg p-3 shadow-md items-center"
                            onPress={() => setSelectedCategory("Electronics")}
                        >
                            <Text className="text-center text-sm font-bold text-gray-700">Electronics</Text>
                        </TouchableOpacity>
                    </ScrollView>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: "50%" }}
                        className="mt-1"
                    >
                        {renderCategoryContent()}
                    </ScrollView>
                </View>

                <View className="bg-gray-100 justify-center items-center p-4 shadow-2xl w-[33%]">
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: "50%" }}
                    >
                        {cart.map((product) => (
                            <View
                                key={product.id}
                                className="bg-white shadow-2xl rounded-lg mb-2 flex-row justify-between items-center w-[100%]"
                            >
                                <Image
                                    source={Nike}
                                    className="w-20 h-20 rounded-md mb-2"
                                    resizeMode="cover"
                                />
                                <Text className="text-gray-800">{product.name}</Text>
                                <View className="flex-row items-center">
                                    <TouchableOpacity
                                        className="bg-gray-200 px-2 py-1 rounded-md"
                                        onPress={() =>
                                            setCart((prevCart) =>
                                                prevCart.map((cartItem) =>
                                                    cartItem.id === product.id && cartItem.cantidad > 1
                                                        ? { ...cartItem, cantidad: cartItem.cantidad - 1 }
                                                        : cartItem
                                                )
                                            )
                                        }
                                    >
                                        <Text>-</Text>
                                    </TouchableOpacity>
                                    <Text className="mx-2">{product.cantidad}</Text>
                                    <TouchableOpacity
                                        className="bg-gray-200 px-2 py-1 rounded-md"
                                        onPress={() =>
                                            setCart((prevCart) =>
                                                prevCart.map((cartItem) =>
                                                    cartItem.id === product.id
                                                        ? { ...cartItem, cantidad: cartItem.cantidad + 1 }
                                                        : cartItem
                                                )
                                            )
                                        }
                                    >
                                        <Text>+</Text>
                                    </TouchableOpacity>
                                </View>
                                <Text className="text-gray-800">${product.price}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>

                <View className="bg-white items-center p-4 shadow-md w-[33%] h-auto">
                    <View className='flex-row p-2 gap-4 items-center justify-center'>
                        <Image
                            source={perfil}
                            className="w-20 h-20 rounded-full mb-2"
                            resizeMode="cover"
                        />
                        <View>
                            <Text className="font-bold text-lg">Json Taylor</Text>
                            <Text className="font-bold text-lg">Rol: Administrador</Text>
                        </View>
                    </View>
                    <View className='flex-row gap-2'>
                        <Text className="font-bold text-lg">Subtotal:</Text>
                        <Text className="text-gray-800 text-xl">
                            $
                            {cart.reduce(
                                (total, product) => total + product.price * product.cantidad,
                                0
                            )}
                        </Text>
                    </View>
                    <View className='flex-row gap-2'>
                        <Text className="font-bold text-lg">Otros:</Text>
                        <Text className="text-gray-800 text-xl">
                            $0
                        </Text>
                    </View>
                    <View className='flex-row gap-2'>
                        <Text className="font-bold text-lg">Total:</Text>
                        <Text className="text-gray-800 text-xl">
                            $
                            {cart.reduce(
                                (total, product) => total + product.price * product.cantidad,
                                0
                            )}
                        </Text>
                    </View>
                    <View className='flex-row gap-2'>
                        <Image
                            source={pago}
                            className="w-10 h-10 rounded-full mb-2"
                            resizeMode="cover"
                        />
                        <Text className="font-bold text-lg">Pago</Text>
                    </View>
                </View>
            </View>
        </View >
    );
}

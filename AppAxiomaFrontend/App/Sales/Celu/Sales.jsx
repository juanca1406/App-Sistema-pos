import { ScrollView, TextInput, View, TouchableOpacity, Image, Text } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import perfil from "../../../assets/image.png"
import { useProducts } from "../../../Hooks/ProductsHooks"
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Products({ navigation }) {
    const [searchText, setSearchText] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [page, setPage] = useState(1);
    const { error, isLoading, data } = useProducts(page);
    const handleSearch = () => {
        if (onSearch) {
            onSearch(searchText); // Ejecuta la función de búsqueda con el texto
        }
    };

    const onPress = () => {

    }

    if (error) {
        return <Text>Error al cargar los productos.</Text>;
    }

    const renderCategoryContent = () => {
        switch (selectedCategory) {
            case "Shoes":
                return (
                    <View className="m-2 flex-row justify-between flex-wrap">
                        {data?.data?.map((product) => (
                            <View key={product.id} className="bg-white rounded-lg shadow-lg p-4 mb-6 w-48 ">
                                <Image
                                    source={perfil}
                                    className="w-full h-40 rounded-md mb-2"
                                    resizeMode="cover"
                                />
                                <Text className="text-lg font-bold">{product.name}</Text>
                                <View className="flex-row items-center justify-between mt-2">
                                    <View>
                                        <Text className="text-gray-700">Zapatoasadss</Text>
                                        <Text className="text-gray-700">$1.000.000</Text>
                                    </View>
                                    <TouchableOpacity onPress={onPress} className='ml-[-70]'>
                                        <Ionicons name="bag-add" size={26} color="black" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}
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
        <ScrollView>
            <View className="bg-gray-100 mt-8">

                <View className='flex-row items-center p-2 bg-white justify-center shadow-md gap-2'>
                    <TouchableOpacity onPress={() => navigation.navigate('MainTabs', { screen: 'Home' })}>
                        <View className="bg-gray-200 rounded-full p-2">
                            <FontAwesome5 name="arrow-left" size={20} color="black" />
                        </View>
                    </TouchableOpacity>

                    <View className="flex-row items-center bg-gray-200 rounded-full w-[70%] h-10 mr-1">
                        <TextInput
                            className="flex-1 ml-2"
                            placeholder="Buscar..."
                            value={searchText}
                            onChangeText={setSearchText}
                            size={10}
                        />
                        <TouchableOpacity className='-mt-2' onPress={handleSearch}>
                            <EvilIcons name="search" size={36} color="gray" />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={onPress}>
                        <AntDesign name="shoppingcart" size={24} color="black" />
                        <View className="absolute ml-4 -mt-2 bg-red-300 rounded-full h-5 w-5 justify-center items-center">
                            <Text className="text-xs font-bold text-gray-800">5</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Ionicons name="notifications-outline" size={24} color="black" />
                        <View className="absolute ml-3 -mt-2 bg-red-300 rounded-full h-5 w-5 justify-center items-center">
                            <Text className="text-xs font-bold text-gray-800">5</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View className="p-2 mx-2">
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ gap: 2 }}
                    >
                        <TouchableOpacity
                            className="bg-white rounded-lg p-3 shadow-md items-center"
                            onPress={() => setSelectedCategory("Shoes")}
                        >
                            <Text className="text-center text-sm font-bold text-gray-700">Shoes</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            className="bg-white rounded-lg p-3 shadow-md items-center"
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
                </View>

                <View className="mx-2">
                    {renderCategoryContent()}
                </View>
            </View >
        </ScrollView >
    );
}


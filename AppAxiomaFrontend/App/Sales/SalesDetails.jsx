import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native'
import perfil from "../../assets/logo.png"
import { FontAwesome5 } from '@expo/vector-icons';

export default function SalesDetails({ navigation }) {
    return (
        <ScrollView>
            <View className="mt-10 bg-gray-100">
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
                <Text className="text-lg font-bold text-gray-700 p-4">Detalles de las ventas</Text>
                <View className="bg-white rounded-lg shadow-md mx-2">
                    <Text className="text-lg font-bold text-gray-700 p-4">Número total de ventas realizadas hasta ahora: 28</Text>
                </View>
                <View className="m-2 flex-row justify-between flex-wrap">
                    <View className="bg-white rounded-lg shadow-lg p-4 mb-6 w-48 ">
                        <Image
                            source={perfil}
                            className="w-20 h-20 rounded-md mb-2"
                            resizeMode="cover"
                        />
                        <Text className="text-lg font-bold">Zapa</Text>
                        <View className="flex-row items-center justify-between mt-2">
                            <View>
                                <Text className="text-gray-700">Zapatoasadss</Text>
                                <Text className="text-gray-700">$1.000.000</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}


import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import perfil from "../../assets/logo.png";
import { FontAwesome5 } from '@expo/vector-icons';

export default function Employees({ navigation }) {
    const users = [
        { id: 1, name: 'Eula Yost', image: require('../../assets/usuario.png') },
        { id: 2, name: 'Kieran Pacocha', image: require('../../assets/usuario.png') },
        { id: 3, name: 'Employees', image: require('../../assets/usuario.png') },
        { id: 4, name: 'Navigate', image: require('../../assets/usuario.png') },
        { id: 5, name: 'Eula Yost', image: require('../../assets/usuario.png') },
        { id: 6, name: 'Kieran Pacocha', image: require('../../assets/usuario.png') },
        { id: 7, name: 'Employees', image: require('../../assets/usuario.png') },
        { id: 8, name: 'Navigate', image: require('../../assets/usuario.png') },
    ];
    return (
        <ScrollView>
            <View className="mt-10 bg-gray-100">
                {/* Header */}
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
                <Text className="text-lg font-bold text-gray-700 p-4">Tabla de Employees</Text>
                <View className="flex-row justify-center  p-1 rounded-[20px] flex-wrap">
                    {users.map((user) => (
                        <View key={user.id} className="bg-white rounded-lg p-4 shadow-lg flex-row items-center justify-between w-[90%] my-2 mx-auto">
                            <View className="flex-row items-end ml-1">
                                <Image source={user.image} className="h-20 w-20" resizeMode="contain" />
                            </View>
                            <View>
                                <Text className="text-lg font-bold text-gray-700 text-center">Name: {user.name}</Text>
                                <Text className="text-lg font-bold text-gray-700 text-center">lastname: Martinez a</Text>
                                <Text className="text-lg font-bold text-gray-700 text-center">Email: Post@mckenzie.net</Text>
                                <Text className="text-lg font-bold text-blue-800 text-center ">{user.id}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    )
}


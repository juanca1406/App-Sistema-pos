import { ScrollView, View, Text, Image, Button, TouchableOpacity } from 'react-native'
import perfil from "../../assets/logo.png"
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function CreateProducts({ navigation }) {
    return (
        <ScrollView>
            <View className="mt-10 bg-fondo-grey">
                <View className="flex-row bg-custom  justify-between items-center p-2">
                    <TouchableOpacity onPress={() => navigation.navigate('MainTabs', { screen: 'Menu' })}>
                        <View className="bg-fondo rounded-full ml-5">
                            <FontAwesome5 name="arrow-left" size={24} color="black" />
                        </View>
                    </TouchableOpacity>
                    <View className="flex-row items-center ml-auto">
                        <Text className="font-bold mr-2">Json Taylor</Text>
                        <Image source={perfil} className="w-10 h-10 rounded-full" />
                    </View>
                </View>
                <View className="mt-5" >
                    <Text className="font-bold text-center text-3xl">Registro de un producto</Text>
                </View>
            </View>
        </ScrollView>
    )
}


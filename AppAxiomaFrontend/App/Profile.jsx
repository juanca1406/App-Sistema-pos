import { ScrollView, View, Text, Image, Button } from 'react-native'
import perfil from "../assets/logo.png"

export default function Profile() {
    return (
        <ScrollView>
            <View className="mt-10 bg-gray-100">
                <View className="flex-row bg-white justify-between items-center p-2 shadow-md">
                    <View className="flex-row items-center ml-auto">
                        <Text className="font-bold mr-2">Json Taylor</Text>
                        <Image source={perfil} className="w-10 h-10 rounded-full" />
                    </View>
                </View>

                <View className="mt-6 bg-white p-4 rounded-lg shadow-md mx-2 justify-between flex-row gap-5">
                    {/* Imagen del Perfil */}
                    <View className="p-3 h-24 w-24 bg-gray-200 items-center justify-center rounded-full overflow-hidden">
                        <Image
                            source={perfil}
                            className="h-full w-full"
                            resizeMode="contain"
                        />
                    </View>
                    <View className='mr-auto my-auto'>
                        <Text className="font-bold text-center text-xl mb-2">Json Taylor</Text>
                        <Text className="text-center text-gray-600 text-lg mb-1">Rol: Administrador</Text>
                    </View>
                    <Button title='Editar' color="#841584" />
                </View>
                <View className="mt-6 bg-white p-4 rounded-lg shadow-md mx-4">
                    <Text className="text-center text-gray-600 text-lg mb-1">+57 319 3382042</Text>
                    <Text className="text-center text-gray-600 text-lg">axiomagest@gmail.com</Text>
                </View>
            </View>
        </ScrollView>

    )
}


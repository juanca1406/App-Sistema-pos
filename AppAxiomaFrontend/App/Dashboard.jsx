import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native'
import perfil from "../assets/logo.png"
import { FontAwesome5 } from '@expo/vector-icons';
import { BarChart } from 'react-native-gifted-charts';

export default function Dashboard({ navigation }) {

    const data = [
        { value: 25, label: 'Shoes' },
        { value: 40, label: 'Clothing' },
        { value: 15, label: 'Groceries' },
        { value: 20, label: 'Furniture' },
    ];

    return (
        <ScrollView>
            <View className="mt-10 bg-fondo-grey">
                <View className="flex-row bg-custom  justify-between items-center p-2">
                    <TouchableOpacity onPress={() => navigation.navigate('MainTabs', { screen: 'Home' })}>
                        <View className="bg-fondo rounded-full ml-5">
                            <FontAwesome5 name="arrow-left" size={24} color="black" />
                        </View>
                    </TouchableOpacity>
                    <View className="flex-row items-center ml-auto">
                        <Text className="font-bold mr-2">Json Taylor</Text>
                        <Image source={perfil} className="w-10 h-10 rounded-full" />
                    </View>
                </View>

                <View className="flex-wrap p-1 mt-5 mx-10">
                    <View className="bg-white rounded-lg p-4 shadow-lg flex-row items-center justify-between w-[90%] my-2 mx-auto">
                        <View>
                            <Text className="text-lg font-bold text-gray-700">Total Products</Text>
                            <Text className="text-2xl font-bold text-blue-800 my-1">100</Text>
                        </View>

                        <View className="flex-row items-end ml-1">
                            <View className="w-2 h-5 bg-indigo-200 rounded-full mx-0.5" />
                            <View className="w-2 h-7 bg-indigo-300 rounded-full mx-0.5" />
                            <View className="w-2 h-10 bg-indigo-400 rounded-full mx-0.5" />
                            <View className="w-2 h-12 bg-indigo-500 rounded-full mx-0.5" />
                        </View>
                    </View>
                    <View className="bg-white rounded-lg p-4 shadow-lg flex-row items-center justify-between w-[90%] my-2 mx-auto">
                        <View>
                            <Text className="text-lg font-bold text-gray-700">Total Sales</Text>
                            <Text className="text-2xl font-bold text-blue-800 my-1">12.000.000</Text>
                        </View>

                        <View className="flex-row items-end ml-1">
                            <View className="w-2 h-5 bg-indigo-200 rounded-full mx-0.5" />
                            <View className="w-2 h-7 bg-indigo-300 rounded-full mx-0.5" />
                            <View className="w-2 h-10 bg-indigo-400 rounded-full mx-0.5" />
                            <View className="w-2 h-12 bg-indigo-500 rounded-full mx-0.5" />
                        </View>
                    </View>
                </View >

                <View className="flex-1 justify-center items-center bg-gray-100 p-4">
                    {/* Título del Gráfico */}
                    <Text className="text-lg font-bold text-gray-800 mb-4">Categorías</Text>

                    {/* Contenedor del Gráfico */}
                    <View className="w-full h-72">
                        <BarChart
                            data={data}
                            barWidth={30} // Ancho de las barras
                            barBorderRadius={6} // Bordes redondeados
                            frontColor="#4caf50" // Color de las barras
                            yAxisThickness={0} // Grosor del eje Y
                            xAxisThickness={1} // Grosor del eje X
                            xAxisColor="#ccc" // Color del eje X
                            hideRules // Oculta las líneas de referencia
                            noOfSections={4} // Número de divisiones en el eje Y
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}


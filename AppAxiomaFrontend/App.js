import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Text, useWindowDimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Dashboard from './App/Dashboard';
import Home from './App/Home';
import Profile from './App/Profile';
import Products from './App/Products/Products';
import Menu from './App/Menu';
import CreateProducts from './App/Products/CreateProducts';
import Employees from './App/Employees/Employees';
import Sales from './App/Sales/Celu/Sales';
import SalesTablet from "./App/Sales/Tablet/Sales"
import SalesDetails from './App/Sales/SalesDetails';
import './global.css';

// Configuración de React Query
const queryClient = new QueryClient();

// Configuración de navegadores
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  const { width } = useWindowDimensions();
  const isTablet = width >= 768;
  const iscellular = width <= 768;

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginBottom: 3 }}>
              Home
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />

      {iscellular && (
        <Tab.Screen
          name="Sales"
          component={Sales}
          options={{
            tabBarLabel: ({ color }) => (
              <Text style={{ color: color, fontSize: 12, marginBottom: 3 }}>
                Sales
              </Text>
            ),
            tabBarIcon: ({ color, size }) => (
              <Fontisto name="shopping-basket-add" size={size} color={color} />
            ),
          }}
        />
      )}

      {isTablet && (
        <Tab.Screen
          name="Sales"
          component={SalesTablet}
          options={{
            tabBarLabel: ({ color }) => (
              <Text style={{ color: color, fontSize: 12, marginBottom: 3 }}>
                Sales
              </Text>
            ),
            tabBarIcon: ({ color, size }) => (
              <Fontisto name="shopping-basket-add" size={size} color={color} />
            ),
          }}
        />
      )}

      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginBottom: 3 }}>
              Menu
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="menu" size={size} color={color} />
          ),
        }}
      />


      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginBottom: 3 }}>
              Profile
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="MainTabs" component={TabNavigator} />
          <Stack.Screen name="CreateProducts" component={CreateProducts} />
          <Stack.Screen name="Employees" component={Employees} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Products" component={Products} />
          <Stack.Screen name="SalesDetails" component={SalesDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

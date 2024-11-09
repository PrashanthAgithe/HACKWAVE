import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import React, { useContext } from 'react';
import { Tabs, Redirect } from 'expo-router';
import { icons } from '../../constants';
import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserContext } from '../store/UserContext';

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View style={styles.centering}>
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        style={[{ width: 20 }, { height: 20 }]}
      />
      <Text style={[focused ? styles.tablabelsfocus : styles.tablabelsnotfocus, { color: color }]}>
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  const { isblind } = useContext(UserContext); 
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#FFA001',
          tabBarInactiveTintColor: '#CDCDE0',
          tabBarStyle: {
            backgroundColor: '#161622',
            borderTopWidth: 4,
            borderTopColor: '#232533',
            height: isblind ? 0 : 80,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
            headerTitleAlign: 'center',
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icons.home} color={color} name="Home" focused={focused} />
            ),
            tabBarButton: !isblind ? undefined : () => null,
          }}
        />

        <Tabs.Screen
          name="create"
          options={{
            title: 'Create',
            headerShown: false,
            headerTitleAlign: 'center',
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icons.plus} color={color} name="Create" focused={focused} />
            ),
            tabBarButton: !isblind ? undefined : () => null,
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            headerShown: false,
            headerTitleAlign: 'center',
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icons.profile} color={color} name="Profile" focused={focused} />
            ),
            tabBarButton: !isblind ? undefined : () => null,
          }}
        />
      </Tabs>
      {isblind && (
        <TouchableOpacity
          activeOpacity={0.7}
          className="h-[200px] w-[100%] bg-primary justify-center items-center"
        >
          <Text className="text-white">Tap and hold to speak</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({
  centering: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  tablabelsfocus: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 13,
  },
  tablabelsnotfocus: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
  },
});

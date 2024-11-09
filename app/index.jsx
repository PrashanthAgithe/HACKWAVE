import React from 'react';
import { ScrollView,View, Text, TouchableOpacity, StyleSheet, Alert,Image } from 'react-native';
import { Redirect,router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';
export default function HomeScreen() {

  return (
    <SafeAreaView className='bg-primary flex-1 '>
      <ScrollView>
        <View className="w-full justify-center items-center h-[100vh] px-4 pb-10">
            <Text className='text-white text-3xl font-bold text-center'>
              EduVoice
            </Text>
          <Image 
            source={images.logo1}
            resizeMode='contain'
            className='max-w-[380px] w-full h-[300px]'
            style={styles.logo}
          />
          <View className='relative mt-5'>
            <Text className='text-white text-2xl font-bold text-center'>
              Discover Endless Possibilities with{' '}
            <Text className="text-secondary-200">
              EduVoice
            </Text>
            </Text>
            <Image
              source={images.path}
              resizeMode="contain"
              style={styles.path} 
              className="w-[136px] h-[15px] absolute"
            />

          </View>
          <Text className='text-gray-100 text-sm font-pregular mt-7 text-center'>
          Bridging the Gap in Education for the Visually Impaired people with EduVoice
          </Text>
          <CustomButton 
            title='Continue'
            handlePress={()=>router.push('/sign-in')}
            containerStyles='w-full mt-8 '
            isLoading={false}
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light'/> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logo:{
    margin:10,
    borderRadius:0,
  },
  path:{
    top:60,
    right:55,
  },
  container: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box:{
    padding: 20,
    alignItems: 'center',
    borderRadius:10,
  },
});

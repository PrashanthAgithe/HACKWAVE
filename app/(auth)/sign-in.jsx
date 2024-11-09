import { ScrollView, StyleSheet, Text, View ,Image } from 'react-native'
import React, { useContext, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link,router } from 'expo-router'
import {UserContext,UserProvider} from '../store/UserContext'
const SignIn = () => {
  const [isSubmitting, setisSubmitting] = useState(false)
  const [form, setForm] = useState({
    email:"",
    password:""
  })
  // const {setusername,setemail,setisblind}=useContext(UserContext);
  const submit = ()=>{
    router.push('/home');
  }
  return (
    <UserProvider>
    <SafeAreaView className="bg-primary flex-1">
      <ScrollView>
        <View className="w-full justify-center items-center h-[100vh] px-4 pb-10">
          <View  style={styles.heading}>
          <Image 
            source={images.logo1}
            resizeMode='contain'
            className="w-[50px] h-[50px] "
            style={styles.logo}
          />
          <Text className="text-white text-3xl font-psemibold">
            EduVoice
          </Text>
          </View>
          <Text className="text-white text-2xl font-psemibold mt-5">
            Log in to Continue
          </Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />
          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles="w-full mt-7"
            isLoading={isSubmitting}
          />
          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an account?
            </Text>
            <Link
              href="/sign-up"
              className="text-lg font-psemibold text-secondary"
            >
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
    </UserProvider>
  )
}

export default SignIn

const styles = StyleSheet.create({
  heading:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    gap:0,
  },
  logo:{
    margin:0,
    padding:0,
  }
})
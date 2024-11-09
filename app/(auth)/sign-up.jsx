import { ScrollView, StyleSheet, Text, View ,Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'

const SignUp = () => {
  const [isSubmitting, setisSubmitting] = useState(false)
  const [form, setForm] = useState({
    username:"",
    email:"",
    password:""
  })
  const submit = ()=>{

  }
  return (
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
            Sign up to Continue
          </Text>
          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
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
            title="Sign Up"
            handlePress={submit}
            containerStyles="w-full mt-7"
            isLoading={isSubmitting}
          />
          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Have an account already?
            </Text>
            <Link
              href="/sign-in"
              className="text-lg font-psemibold text-secondary"
            >
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp

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
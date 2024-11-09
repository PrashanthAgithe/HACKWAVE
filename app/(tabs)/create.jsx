import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Create = () => {
  return (
    <SafeAreaView className="bg-primary flex-1">
      <ScrollView>
        <View className="flex justify-center items-center min-h-[94vh] px-5">
          <Text className="text-white">Create</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Create

const styles = StyleSheet.create({})
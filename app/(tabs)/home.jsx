import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Articles from '../../components/Articles';

const Home = () => {
  const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then(res=>res.json())
  //   .then(data=>setPosts(data))
  //   .catch(err=>alert(err))
  // },[]);

  return (
    <SafeAreaView className="bg-primary flex-1">
      <ScrollView>
        <View className="flex justify-center items-center min-h-[94vh] px-5">
          <Text className="text-white ">Home</Text>
          <Articles articles={posts}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})
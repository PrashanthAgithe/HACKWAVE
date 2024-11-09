import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Articles = ({articles}) => {
  return (
    <View>
      {
        articles && articles.map((article)=>{
          console.log(article);
          if(article.id == articles.length){
            return <View className="pb-5">
              <Text className="text-white text-2xl font-psemibold">{article.title.length>15? article.title.substring(0,15)+ '...':article.title}</Text>
              <Text className="text-white font-pregular">{article.body}</Text>
            </View>
          }else{
          return (
            <>
              <View >
                <Text className="text-white text-2xl">{article.title.length>15? article.title.substring(0,15)+ '...':article.title}</Text>
                <Text className="text-white">{article.body}</Text>
              </View>
              <View className="bg-secondary h-[1px] my-5"></View>
            </>
          )
          }
        })
      }
    </View>
  )
}

export default Articles

const styles = StyleSheet.create({})
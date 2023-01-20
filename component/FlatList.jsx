import { View, Text } from 'react-native'
import React from 'react'

const FlatList = () => {
    const names = [
        {
            name:"abc",id:"1a"
        },
        {
            name:"sdf",id:"2b"
        },
        {
            name:"sdf",id:"3c"
        }, 
        {
            name:"sdf",id:"4c"
        },
        {
            name:"sdf",id:"5d"
        },
        {
            name:"sdsf",id:"6e"
        },
    ]
  return (
    <View>
      <FlatList data={names} renderItem={(element)=>{
        return <Text>{element.item.name}</Text>
      }} />
    </View>
  )
}

export default FlatList
import { View, Text , TouchableOpacity} from 'react-native'
import React from 'react'

const Parameter = () => {
  return (
    <View>
      <Text>Parameter</Text>
      <TouchableOpacity style={{top : 52}} onPress={() => console.log("test")}>
  <Text>TEST</Text>
 </TouchableOpacity>
    </View>
  )
}

export default Parameter
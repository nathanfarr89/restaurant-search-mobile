import React, { useEffect, useState } from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { ScreenContainer } from 'react-native-screens'
import yelp from '../api/yelp'

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id')
  const [result, setResult] = useState(null)
  
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`)
    setResult(response.data)
  }

  useEffect(() => {
    getResult(id)
  }, [])

  if (!result) return null

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image source={{ uri: item }} style={styles.image} />
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  image: {
    height: 200,
    width: 300,
    marginBottom: 10,
    borderRadius: 4
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  }
})

export default ResultsShowScreen
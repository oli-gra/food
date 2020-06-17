import React, { useState, useEffect } from 'react';
import { Image, Text, FlatList, StyleSheet } from 'react-native';
import yelp from '../api/yelp'

const ResultScreen = ({ navigation }) => {
  const id = navigation.getParam('id')
  const [result, setResult] = useState(null)

  const getResult = async id => {
    const response = await yelp.get(`/${id}`)
    setResult(response.data)
  }

  useEffect(() => {
    getResult(id)
  }, [])

  if (!result) {
    return null
  }

  return <>
    <Text style={styles.title}>{result.name}</Text>
    <FlatList
      data={result.photos}
      keyExtractor={(photo) => photo}
      renderItem={({ item }) => {
        return <Image style={styles.image} source={{ uri: item }} />
      }
      }

    />
  </>
}

const styles = StyleSheet.create({
  title: {
    marginVertical: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
  image: {
    width: 400,
    height: 200,
  }

})

export default ResultScreen
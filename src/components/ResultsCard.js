import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

const ResultsCard = ({ item }) => {
  return <View style={styles.container}>
    <Image style={styles.image} source={{ uri: item.image_url }} />
    <Text style={styles.name}>{item.name}</Text>
    <Text>{item.rating}<FontAwesome name='star' /> ({item.review_count})</Text>
  </View>
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  image: {
    width: 200,
    height: 100,
    borderRadius: 5,
  },
  name: {
    fontSize: 16
  }
})

export default ResultsCard
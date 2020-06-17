import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation'
import { FlatList } from 'react-native-gesture-handler';
import ResultsCard from '../components/ResultsCard'

const ResultsList = ({ title, results, navigation }) => {
  if (!results.length) {
    return null
  }
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Result', { id: item.id })}>
              <ResultsCard item={item} />
            </TouchableOpacity>
          )
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginLeft: 15,
    marginBottom: 5,
  }
});

export default withNavigation(ResultsList);

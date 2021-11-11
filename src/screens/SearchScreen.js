import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [errorMessage, results, searchApi] = useResults()

  const filterResultsByPrice = (price) => {
    return results.filter(result => {
      return result.price === price
    })
  }

  return (
    <View style={styles.background}>
      <SearchBar
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
        term={term}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
        <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
        <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender" />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#fff',
    flex: 1
  }
})

export default SearchScreen

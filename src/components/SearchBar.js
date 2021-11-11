import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { Feather } from '@expo/vector-icons'; 

const SearchBar = ({ onTermChange, onTermSubmit, term }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle}/>
      <TextInput
        autoCapitalize="none"
        autoComplete={false}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        placeholder="Search..."
        style={styles.inputStyle}
        value={term}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row'
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15
  },  
  inputStyle: {
    flex: 1,
    fontSize: 18
  }
})

export default SearchBar

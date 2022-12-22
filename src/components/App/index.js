import React from 'react'
import {
  FlatList,
  StatusBar,
  SafeAreaView,
  Platform,
  StyleSheet,
} from 'react-native'
import { BoardItem } from '../BoardItem'
import data from '../../data/mock'

const isAndroid = Platform.OS === 'android' ? StatusBar.currentHeight : 0
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" animated />
      <FlatList
         data={data}
         keyExtractor={element => element.id}
         renderItem={({item}) => <BoardItem item={item}/>}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: isAndroid,
    backgroundColor: '#fff',
  },
})

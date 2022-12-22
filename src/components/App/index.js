import React from 'react'
import {
  View,
  Text,
  FlatList,
  StatusBar,
  SafeAreaView,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { BoardItem } from '../BoardItem'
import data from '../../data/mock'
import style from '../../assets/styles/global'

const isAndroid = Platform.OS === 'android' ? StatusBar.currentHeight : 0
export default function App() {
  const flatListRef = React.useRef(FlatList);


  const [currentIndex, setCurrentIndex] = React.useState(0)

  function getCurrentIndex(event){
   const index = Math.floor(Math.floor(event.nativeEvent.contentOffset.x) / Math.floor(event.nativeEvent.layoutMeasurement.width))
        setCurrentIndex(index)
  }

  function handlePress(){
    setCurrentIndex((prev) => prev > 1 ? 0 : prev + 1)


  }


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" animated />
      <FlatList
         data={data}
         keyExtractor={element => element.id}
         renderItem={({item }) => <BoardItem item={item}/>}
         horizontal
         onMomentumScrollEnd={getCurrentIndex}
         showsHorizontalScrollIndicator={false}
         ref={flatListRef}



      />
      <View style={styles.bulletsContainer}>
      <TouchableOpacity style={[styles.bullet, { opacity: currentIndex === 0 ? 1 : 0.5}]}/>
      <TouchableOpacity style={[styles.bullet, { opacity: currentIndex === 1 ? 1 : 0.5}]} />
      <TouchableOpacity style={[styles.bullet, { opacity: currentIndex === 2 ? 1 : 0.5}]} />
      </View>

      <TouchableOpacity style={styles.btn} onPress={handlePress}>
            <Text style={styles.btnText}> {currentIndex > 1 ? `Let's Go` : 'Skip'}</Text>
          </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: isAndroid,
    backgroundColor: '#fff',
    position: 'relative',
  },

  bulletsContainer:{
    width: '100%',
    position:'absolute',
    bottom:200,
    flexDirection: 'row',
    justifyContent: 'center',
    zIndex:999,


  },

  bullet:{
    width: 10,
    height:10,
    borderRadius: 5,
    backgroundColor: style.colors.blue,
    opacity: 0.5,
    marginHorizontal: 8,
  },

  btn:{
    position:'absolute',
    right:0,
    bottom:0,
    backgroundColor: style.colors.blue,
    width:100,
    height:40,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },

  btnText:{
    color: style.colors.white,
    size: style.size.lg,
    fontFamily: style.fonts.bold,
  },
})

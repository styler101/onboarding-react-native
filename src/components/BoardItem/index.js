import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import style from '../../assets/styles/global'

const { width, height } = Dimensions.get('screen')

export function BoardItem(props) {
  const { item } = props
  return (
    <View style={styles.container}>
      <View style={styles.imgWrapper}>
        <Image source={item.image} style={styles.image} />
      </View>
      <View style={styles.messageContainer}>
        <Text style={styles.title}> {item.title} </Text>
        <Text style={styles.description}>
          {item.description}
        </Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
  },

  imgWrapper: {
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flex: 1,
  },

  image: {
    width: width,
    height: height,
    flex: 1,
    resizeMode: 'contain',
  },


  messageContainer: {
    position: 'absolute',
    bottom: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: style.spacing.regular,
  },

  title: {
    fontSize: style.size.lg,
    color: style.colors.gray,
    fontFamily: style.fonts.bold,
  },

  description: {
    paddingBottom: style.spacing.sm,
    fontSize: style.size.xs,
    color: style.colors.gray,
    textAlign: 'center',
    marginTop: style.spacing.xs,
    fontFamily: style.fonts.regular,
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

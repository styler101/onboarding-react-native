import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import image1 from '../../assets/img/onboarding-2.png'
import style from '../../assets/styles/global'

const { width, height } = Dimensions.get('screen')
console.log(width)
export function BoardItem() {
  return (
    <View style={styles.container}>
      <View style={styles.imgWrapper}>
        <Image source={image1} style={styles.image} />
      </View>

      <View style={styles.messageContainer}>
        <Text style={styles.title}> Let's Traveling </Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quo
          assumenda dolor illum ratione, facere qui non deleniti adipisci cum
          illo placeat quis corrupti magni perspiciatis. Quia omnis saepe
          voluptatem?
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
  },
})

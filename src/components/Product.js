import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'

export default function Product({product}) {
  return (
    <View style={styles.productContainer}>
      <Image source={{uri: product.imgURL}} style={styles.img} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>{product.price}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  productContainer: {
    backgroundColor: '#eceff1',
    width:200,
    width: Dimensions.get('window').width / 2.2,
    margin: 4,
    padding: 15,
    borderRadius:10
  },
  img: {
    // marginTop:10,
    height: Dimensions.get('window').height / 4.2, 
  },
  title: {
    fontSize:14,
    fontWeight:'bold',
  },
  price: {
    fontSize:14,
    fontWeight:'500'
  }
})
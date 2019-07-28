import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Footer = (props) => {
  return (
    <View style={styles.footer}>
      <Text style={styles.title}>{ props.title }</Text>
      <Text style={styles.title}>{new Date().getFullYear()}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#F2B91B',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#F3F3F3',
    fontSize: 28,
    fontWeight: '900',
    textTransform: 'uppercase'
  }
});

export default Footer;

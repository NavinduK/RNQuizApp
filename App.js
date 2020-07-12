import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Question from './components/Question';

export default function App() {

  return (
        <LinearGradient colors={['#2C1040','#79234A', '#C73755']} style={styles.container}>
				  <View>
						<Question/>
					</View>
          <StatusBar style="light" />
        </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

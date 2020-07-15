import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Question from './components/Question';
import firebase from "./firebase";

export default function App() {

	const [QuizData,setQuizData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const dataQ = await db.collection("quiz").get();
      setQuizData(dataQ.docs.map((doc) => doc.data()));
    };
    fetchData();
    console.log(QuizData);
  }, []);

  return (
        <LinearGradient colors={['#2C1040','#79234A', '#C73755']} style={styles.container}>
				  <View>
						{/* <Question QuizData={QuizData}/> */}
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

import React, { useState, useRef,useEffect } from "react";
import {StyleSheet, Text, View, Button, TouchableOpacity,ToastAndroid, Vibration, Animated } from 'react-native';
import ResultScreen from './Results';
import QuizData from './QuizData';

export default function QuizScreen(){
    const [next,setNext] = useState(0);
    const [marks,setMarks] = useState(0);
    const [numberOfQuestions,setNumberOfQuestions] = useState(0);
	const [value,setValue] = useState(0);
	
	//To change answer Button Colors when select
    const [button1Color,setButton1Color] = useState("#D63A55");
	const [button2Color,setButton2Color] = useState("#D63A55");
	const [button3Color,setButton3Color] = useState("#D63A55");
	const [button4Color,setButton4Color] = useState("#D63A55");

	//Animation
	const springValueStart = useRef(new Animated.Value(1)).current;
	const springValueNext = useRef(new Animated.Value(1)).current;

	useEffect(() => {
		//console.log(QuizData);
		setNumberOfQuestions(QuizData.length);
		Animated.sequence([
			Animated.timing(springValueStart,{
				toValue:0.3,
				duration:100,
				useNativeDriver: true
			}),
			Animated.spring(springValueStart,{
				toValue:1,
				friction:2,
				useNativeDriver: true
			}),
		]).start();
	  }, [springValueStart]);
  

	const clickNext=() =>{
		//springValueNext = useRef(new Animated.Value(0.5)).current;
		
		if(value==0){
			ToastAndroid.show("Please select an answer to continue!", ToastAndroid.SHORT);
			Vibration.vibrate(1000);
		}
		else{
			Animated.sequence([
				Animated.timing(springValueNext,{
					toValue:0.9,
					duration:100,
					useNativeDriver: true
				}),
				Animated.spring(springValueNext,{
					toValue:1,
					friction:2,
					useNativeDriver: true
				}),
			]).start();
			if (value === QuizData[next].correct_value) {
				setMarks(marks + 1);
			}
			setValue(0);
			setButton1Color("#D63A55");
			setButton2Color("#D63A55");
			setButton3Color("#D63A55");
			setButton4Color("#D63A55");
			Vibration.vibrate(100);
			
			setNext(next + 1);
		}
	}

	const tryAgain=() =>{
		setNext(0);
		setMarks(0);
		setValue(0);
	}

	const buttonHandler=(answer) =>{
		setValue(answer);
		if(answer==1){
			setButton1Color("#A99DB2");
			setButton2Color("#D63A55");
			setButton3Color("#D63A55");
			setButton4Color("#D63A55");
		}
		else if(answer==2){
			setButton2Color("#A99DB2");
			setButton1Color("#D63A55");
			setButton3Color("#D63A55");
			setButton4Color("#D63A55");
		}
		else if(answer==3){
			setButton3Color("#A99DB2");
			setButton1Color("#D63A55");
			setButton2Color("#D63A55");
			setButton4Color("#D63A55");
		}
		else if(answer==4){
			setButton4Color("#A99DB2");
			setButton1Color("#D63A55");
			setButton2Color("#D63A55");
			setButton3Color("#D63A55");
		}
	}
	
	return (									
		<View >
			{
				next === numberOfQuestions
					?
					<View style={styles.container}>
						<ResultScreen 
							tryAgain={tryAgain}
							marks={marks}
						/>
					</View>
					:
					<Animated.View style={[styles.container,{transform:[{scale:springValueStart}]}]}>
						{
							<View style={styles.quizContainer} >
								<View style={[styles.questionCountContainer,styles.boxWithShadow]}>
									<Text style={styles.questionCount}>
										{next+1}/10
									</Text>
								</View>
								<View style={[styles.quizBox,styles.boxWithShadow]}>
								<Animated.View style={{transform:[{scale:springValueNext}]}}>
									<View style={styles.questionContainer}>
										<Text style={styles.question}>
											{QuizData[next].question}
										</Text>
									</View>
									<View style={styles.answerBox}>
										<View style={styles.answerBoxRow}>
											<TouchableOpacity
												style={[styles.answerButton,{backgroundColor: button1Color}]}
												onPress={() => {buttonHandler(1)}}
											><Text style={styles.answers}>{QuizData[next].answers[0]}</Text></TouchableOpacity>
											<TouchableOpacity 
												style={[styles.answerButton,{backgroundColor: button2Color}]}
												onPress={() => {buttonHandler(2)}}
											><Text style={styles.answers}>{QuizData[next].answers[1]}</Text></TouchableOpacity>
										</View>
										<View style={styles.answerBoxRow}>
											<TouchableOpacity
												style={[styles.answerButton,{backgroundColor: button3Color}]}
												onPress={() => {buttonHandler(3)}}
											><Text style={styles.answers}>{QuizData[next].answers[2]}</Text></TouchableOpacity>
											<TouchableOpacity 
												style={[styles.answerButton,{backgroundColor: button4Color}]}
												onPress={() => {buttonHandler(4)}}
											><Text style={styles.answers}>{QuizData[next].answers[3]}</Text></TouchableOpacity>
										</View>
									</View>
									</Animated.View>
								</View>
								<View style={styles.nextButtonContainer}>
									<TouchableOpacity
										onPress={clickNext}
										style={[styles.nextButton,styles.boxWithShadow]}
										color="#2C1040">
									<Text style={styles.question}>NEXT</Text></TouchableOpacity>

								</View>
							</View>
						}
					</Animated.View>
			}
		</View>							
	);
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  alignItems: 'center',
	  justifyContent: 'center',
	  width:"100%",
	},
	quizContainer:{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		width:"95%",
	},
	quizBox:{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor:"#2C1040",
		width:"100%",
		borderRadius:25,
		borderRightWidth:5,
		borderLeftWidth:5,
		borderColor:"#D63A55",
	},
	questionCountContainer:{
		flex:1,
		justifyContent: 'flex-end',
		width:"100%",
		alignItems: 'center',
		marginBottom: "5%",
	},
	questionCount:{
		textAlign:'center',
		color: "#2C1040",
		fontSize: 25,
		fontWeight:"bold",
		borderRadius:145,
		borderRightWidth:40,
		borderLeftWidth:40,
		borderColor:"#2C1040",
		backgroundColor:"#D63A55",
		width:"100%",
		margin:"1%",
		padding:"3%",
	},
	question:{
		textAlign:'center',
		color: "#D63A55",
		fontSize: 20,
		fontWeight:"bold",
		marginTop:"4%"
	},
	questionContainer:{
		height:"25%",
		width:"95%",
		padding:"5%",
		justifyContent:"center"
	},
	answers:{
		textAlign:'center',
		color: "#2C1040",
		fontSize: 17,
		fontWeight:"bold",
		padding: "9%",
	},
	answerBox:{
		marginTop: "2%",
		width:"100%",
		alignItems: 'center',
		marginTop:"4%"
	},
	answerBoxRow:{
		marginTop: "1%",
		flexDirection: 'row',
		width:"100%",
	},
	answerButton:{
		width:"44%",
		margin:"2%",
		borderRadius:25,
	},
	nextButtonContainer:{
		flex:1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		width:"100%",
	},
	nextButton:{
		width:"100%",
		margin:"1%",
		padding:"4%",
		borderRadius:145,
		borderRightWidth:40,
		borderLeftWidth:40,
		borderColor:"#D63A55",
		backgroundColor:"#2C1040",
		marginTop: "5%",
	},
	boxWithShadow: {
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0,
		shadowRadius: 1,  
		elevation: 5

	},
  });
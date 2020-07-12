import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function ResultScreen({tryAgain,marks}){
		return (															
						<View style={styles.container}>
							<View style={[styles.quizBox,styles.boxWithShadow]}>
								<Text style={styles.textStyle1}>Score</Text>
								<Text style={styles.textStyle2}>
									{marks}/10
								</Text>
								<TouchableOpacity
									onPress={tryAgain}
									style={[styles.againButton,styles.boxWithShadow]}
									color="#2C1040">
								<Text style={styles.buttonText}>Try Again</Text></TouchableOpacity>
							</View>
						</View>
		);
	}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width:"100%",
		height:"100%",
		alignItems: 'center',
		justifyContent: 'center',
	},
	quizBox:{
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius:25,
		backgroundColor:"#2C1040",
		width:"100%",
		height:"30%",
		padding:"15%"
	},
	textStyle1: {
		textAlign:'center',
		fontWeight:"bold",
		fontSize: 25,
		width:"100%",
		color: "#D63A55",
	},
	textStyle2: {
		textAlign:'center',
		fontSize: 25,
		width:"100%",
		color: "#D63A55",
		marginBottom:"10%"
	},
	againButton:{
		width:"100%",
		margin:"1%",
		padding:"7%",
		borderRadius:25,
		backgroundColor:"#D63A55",
		marginTop: "5%",
	},
	boxWithShadow: {
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.8,
		shadowRadius: 2,  
		elevation: 5
	},
	buttonText:{
		textAlign:'center',
		color: "#2C1040",
		fontSize: 20,
		fontWeight:"bold",
	},
});
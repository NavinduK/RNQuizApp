import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function ResultScreen({playAgain,marks}){
		return (															
						<View style={{ flex: 1 }}>
							<View style={styles.container}>
								<Text style={styles.textStyle}>
									Score: {marks}
								</Text>
								
								<View style={styles.buttons}>
									<Button
										onPress={playAgain}
										title="Play Again"
										backgroundColor="#03A9F4"
									/>
								</View>
							</View>
						</View>
		);
	}

const styles = StyleSheet.create({
	container: {
		marginLeft: 'auto', 
		marginRight: 'auto', 
		marginTop: 'auto', 
		marginBottom: 'auto'
	},
	textStyle: {
		width: 250, 
		fontWeight: 'bold', 
		marginLeft: 'auto', 
		marginRight: 'auto', 
		marginTop: 10, 
		marginBottom: 0, 
		fontSize: 20
	},
	buttons: {
		width: 250, 
		fontWeight: 'bold',
		marginLeft: 'auto', 
		marginRight: 'auto', 
		marginTop: 15, 
		marginBottom: 35
	}	
});
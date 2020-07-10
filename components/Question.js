import React, { useState, useEffect } from "react";
import { Text, View, Button } from 'react-native';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import ResultScreen from './Results';

export default function QuizScreen(){
    const [next,setNext] = useState(0);
    const [marks,setMarks] = useState(0);
    const [numberOfQuestions,setNumberOfQuestions] = useState(10);
    const [value,setValue] = useState(null);
	  const [data,setData] = useState();
	const clickNext=() =>{
    setNext(next + 1);
		
		if (value === 1) {
      setMarks(marks + 1);
		}
	}

	const playAgain=() =>{
    setNext(0);
    setMarks(0);
	}

		return (									
			<View style={{ flex: 1 }}>
				{
					next === numberOfQuestions
						?
						<View style={{ flex: 1 }}>
							<ResultScreen 
								playAgain={playAgain}
								marks={marks}
							/>
						</View>
						:
						<View style={{ flex: 1 }}>
							{
								data.length > 0 &&
									<View style={{ flex: 1 }}>
															<View style={{ flex: 1 }}>
																
																<Text style={{marginLeft: 5, marginRight: 5, fontSize: 18}}>
																	{data[next].question}
																</Text>
																
																<View style={{marginLeft: 15 }}>
																<RadioForm
																	radio_props={[
																		{ label: data[next].incorrect_answers[0], value: 0 },
																		{ label: data[next].correct_answer, value: 1 },
																		{ label: data[next].incorrect_answers[1], value: 2 },
																		{ label: data[next].incorrect_answers[2], value: 3 },
																	]}
																	initial={0}
																	buttonColor={'#03A9F4'}
																	selectedButtonColor={'#03A9F4'}
																	buttonSize={20}
																	onPress={(value) => { setValue(value)}}
																/>
																</View>
															</View>
															<View style={{width: 200, fontWeight: 'bold', marginLeft: 'auto', marginRight: 'auto', marginTop: 0, marginBottom: 40}}>
															<Button
																onPress={clickNext}
																title="Next"
																backgroundColor="#03A9F4"							
															/>
															</View>
														</View>
													}
												</View>
										}
			</View>							
		);
	}
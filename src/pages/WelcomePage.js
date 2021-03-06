import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import RecoveryPassword from './RecoveryPassword'


function WelcomePage({ navigation }) {
		return (


				<View style={styles.viewofall}>
					<Text style={styles.text}>Boas-Vindas</Text>
					 	<Image
						style={styles.logo}
						source={require('../components/logo.png')}
						/>
							<Text style={styles.text2}>Obrigado pelo cadastro, aproveite todas as comodidades do app.</Text>

				  	<TouchableOpacity style={styles.button} onPress={() => {navigation.navigate( RecoveryPassword )}}>
       					<View style={styles.viewbutton}>
       						<Text style={styles.textbutton}>
       								Continuar
       						</Text>
       					</View>
       				</TouchableOpacity>
       			</View>

		)
	}

const styles = StyleSheet.create({
	text:{
		marginTop:35,
		fontSize:40,
		color: 'white',
		alignSelf: 'center',

	},
	text2:{
		marginTop:35,
		fontSize:30,
		color: 'white',
		alignSelf: 'center',
	},
	viewbutton:{
		height: 50,
		borderBottomWidth: 1,
		alignItems: 'center',
		backgroundColor:'#FDE93A',
		borderRadius: 10,
	},
	textbutton: {
		fontSize:25,
		paddingTop: 12,
		color: 'black'

	},
	button:{
		padding:20,
		margin:10,
		width: 200, 
		alignSelf: 'center',
	},
	viewofall:{
		paddingTop: 50,
		backgroundColor:'#000000',
		flex: 1
	},
	logo: {
    	width: 240,
    	height: 240,
   		marginLeft:85,
    	marginTop:25,
    },
});


export default WelcomePage;
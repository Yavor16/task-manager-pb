import {
  Button,
  Text,
  View,
} from "react-native";
import styles from "../styles/SignInPageStyle";
import React, { useState } from "react";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../../App";
import { createTextInput } from "../common";
import { addUserToDatabase, getUserIdByEmail } from "../services/SignInScreenService";
import { NavigationNames } from "../constants";
import emailjs from "@emailjs/browser";
import { generateConfirmationCode } from "../common";
import dotenv from 'dotenv';
dotenv.config();

type SignInScreenProps = {
  navigation: NavigationProp<RootStackParamList, typeof NavigationNames.SIGNIN_SCREEN>;
};

const SignInScreen: React.FC<SignInScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const handleInputChange = (text: string) => {
    setEmail(text);
  };

  const handleSignIn = async () => {
    await addUserToDatabase(email).then((result) => {
      if (result) {
        navigateToHomeScreen(result);
      }
    });
  };

  const handleLogin = async () => {
    let templateParams = {
      to_name: `${email}`,
      code: `122`,
      name: `test`
    };
    console.log('ENVIADOS: ', JSON.stringify(templateParams));
    
    if (process.env.SERVICE_ID && process.env.TEMPLATE_ID && process.env.PUBLIC_KEY) {
      
      emailjs.send(process.env.SERVICE_ID, process.env.TEMPLATE_ID, templateParams, process.env.PUBLIC_KEY).then(
        function (response) {
          console.log('SUCCESS!', response.status, response.text);
        },
        function (error) {
          console.log('FAILED...', error);
        }
      );
      
      console.log(generateConfirmationCode(6));
  }
    
    // await getUserIdByEmail(email).then((result) => {
    //   if (result) {
    //     navigateToHomeScreen(result.id);
    //   }
    // });
  };

  const navigateToHomeScreen = (id: string) => {
    navigation.navigate(NavigationNames.HOME_SCREEN, { userId: id });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      {createTextInput("", "Enter email", email, handleInputChange)}
      <Button title="Register" onPress={() => handleSignIn()} />
      <Button title="Login" onPress={() => handleLogin()} />
    </View>
  );
};

export default SignInScreen;

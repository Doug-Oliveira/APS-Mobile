import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, KeyboardAvoidingView, TouchableOpacity, ScrollView, SafeAreaView, Platform} from "react-native";
import { TextInput} from 'react-native-paper';

import {styles} from './styles';

export function Home(){

  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const sendRequest = (event: React.FormEvent<HTMLFormElement>) =>{
    
    event.preventDefault();

    fetch('url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        city: cityData,
        state: stateData
      },
    })
      .then(res => {
        return res.json()
      })
      .then(data => console.log(data))
      .catch(error => console.log('ERROR'))
  }

  return(
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height" } enabled>
       
          <View style={styles.container}>
            <form onSubmit={sendRequest}>
              <TextInput style={styles.input_password}
              placeholder="Cidade"
              value={city}

              onChange={(e) => setCity(e.target.value)}
              />
              <TextInput style={styles.input_password}
              placeholder="Estado"
              value={state} 
              onChange={(e) => setState(e.target.value)}
              />
              <TouchableOpacity style={styles.btn} activeOpacity={0.7}> 
                <Text style={styles.text_btn}>
                  <button type="submit">
                    Ver Dados
                  </button>
                </Text>
              </TouchableOpacity>
            </form>
          </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
)};
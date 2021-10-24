import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, KeyboardAvoidingView, TouchableOpacity, ScrollView, SafeAreaView, Platform, Button, FlatList} from "react-native";
import { TextInput} from 'react-native-paper';
import { Component } from "react"; 
import { useForm, SubmitHandler } from 'react-hook-form'

import {styles} from './styles';

export default class Home extends Component{
  /*
  var state = {
    "city_name": "Rio de Janeiro",
    "date": "19/10/2021",
    "temp": 17,
    "category": "Good",
    "CO": 1.07921,
    "NO2": 21.284,
    "hours": "23:14"
  },
  */
  
  constructor(props) {
    super(props);
    this.state = {
      teste: 0
    };
  }

  
  async sendRequest() :Promise <JSON> {
    
    const response = await fetch('http://localhost:3300/air-quality', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        city: "SaoPaulo",
        state:  "SP"
      })
    })
      .then(async res => {
        return res.json()
      })
      .then(data => {
        this.setState({teste: data})
        console.log(this.state.teste)
        
      })
      .catch(error => console.log(error.message))
  }

    async funcao() :Promise <JSON>{
      const response = await this.sendRequest()

    }

  render(){
    return(
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height" } enabled>
            <View style={styles.container}>
              <form>
                <Text>{this.state.teste.city_name}</Text>
                <Text>{this.state.teste.date}</Text>
                <Text>{this.state.teste.temp}</Text>
                <Text>{this.state.teste.category}</Text>
                <Text>{this.state.teste.CO}</Text>
                <Text>{this.state.teste.NO2}</Text>
                <Text>{this.state.teste.hours}</Text>
                <Button title="Ok"
                onPress={ () => this.funcao()}/>
              </form>
            </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    )
  }
}
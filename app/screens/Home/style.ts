import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({

  container:{
    position: 'relative',
    width:'100%',
    height:'40%',
    backgroundColor: '#55e6c9',
  },

  input_password:{
    alignSelf: "center",
    width: 350,
    height: 69,
    marginTop: 120
  },

  font_styled:{
    color: "#82de26",
  },

  plantation_card:{
    alignSelf: "center",
    width: 355,
    height: 220,
    marginTop: 70,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    shadowOffset: { width: 2, height: 2 },
    shadowColor: '#8c8c8c',
    shadowRadius: 10,
  },

  btn:{
    alignSelf: "center",
    marginTop: 80,
    width: 350,
    height: 69,
    borderRadius: 4,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },

  text_btn:{
    fontSize: 20,
    color: theme.colors.font_light,
    fontWeight: "bold"
  },
});
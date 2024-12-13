import { Pressable, StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import InputForm from "../components/InputForm";
import { useDispatch } from "react-redux";
import { Color } from "../global/myColors";
import { useSignUpMutation } from "../services/authServices";
import { setUser } from "../features/userSlice";
import {signUpSchema} from '../validations/signUpSchema'
import {useSQLiteContext} from 'expo-sqlite';


const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [errorMail, setErrorMail] = useState('');
  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [errorConfirmPassword, setErrorConfirmPassword] = useState('');
  const db = useSQLiteContext();
  
  const dispatch = useDispatch()
  const [triggerSignUp, result] = useSignUpMutation()

  const goToLogin = () => {
    navigation.navigate('Login')
  }

  useEffect(()=>{
    if(result.isSuccess) {
      dispatch(
        setUser({
          email: result.data.email,
          idToken: result.data.idToken,
          localId: result.data.localId
        })
      )
    }
  }, [result])

  const onSubmit = () => {

    try {
      setErrorPassword('')
      setconfirmPassword('')
      setErrorConfirmPassword('')
      signUpSchema.validateSync({email, password, confirmPassword})
      triggerSignUp({email, password, returnSecureToken: true})

    } catch (error) {
        switch (error.path) {
          case "email":
            setErrorMail(error.message);
          case "password":
            setErrorPassword(error.message);
          case "confirmPassword":
            setErrorConfirmPassword(error.message);
          default:
            break;
          }
      }

  }


  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.title}>Registrarse</Text>
        <InputForm 
            label={"e-Mail"} 
            onChange={setEmail} 
            error={errorMail} 
        />
        <InputForm
          label={"Contraseña"}
          onChange={setPassword}
          error={errorPassword}
          isSecure={true}
        />
        <InputForm
          label={"Confirmar contraseña"}
          onChange={setconfirmPassword}
          error={errorConfirmPassword}
          isSecure={true}
        />
        <Pressable onPress={onSubmit} style={({pressed}) => [styles.pressable, {opacity: pressed ? 0.6 : 1}]}>
            <Text style={styles.txtPressable}>Registrarse</Text>
        </Pressable>
        <Text style={styles.sub}>Ya tienes cuenta?</Text>
        <Pressable onPress={() => goToLogin()}>
            <Text style={styles.subLink}>Ingresar</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:Color.appBG
  },
  container: {
    width: "90%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.appBG,
    gap: 15,
    paddingVertical: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    fontFamily: "Josefin",
    color: 'white'
  },
  sub: {
    fontSize: 14,
    fontFamily: "Josefin",
    color: 'white',
  },
  subLink: {
    fontSize: 14,
    fontFamily: "Josefin",
    textDecorationLine:'underline',
    color:'white',
  },
  pressable:{
    marginTop:10,
    backgroundColor: Color.cardBG,
    width:200,
    height:40,
    justifyContent:'center',
    alignItems:'center',
    paddingVertical: 7,
    borderRadius: 5
},
txtPressable:{
    color:'white'
}
});
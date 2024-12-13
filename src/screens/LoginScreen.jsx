import { Pressable, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import InputForm from "../components/InputForm";
import { Color } from "../global/myColors";
import { useSignInMutation } from "../services/authServices";
import { useDispatch } from "react-redux";
import { setUser } from "../features/userSlice";
import { insertSession } from "../persistence";
import { useSQLiteContext } from "expo-sqlite";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [triggerSignIn, result] = useSignInMutation()
  const dispatch = useDispatch()

  const db = useSQLiteContext();
  useEffect(() => {
    if(result?.data && result.isSuccess){
      let res = insertSession({
        db:db,
        email: result.data.email,
        localId: result.data.localId,
        token: result.data.idToken
      })
      if(res){
        dispatch(setUser({
          email: result.data.email,
          token: result.data.idToken,
          localId: result.data.localId
        }))
      }
    }
}, [result])


  const goToSignup = () => {
    navigation.navigate('Signup')
  }
  const onSubmit = ()=> {
    triggerSignIn({email, password, returnSecureToken: true})
  }

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.title}>Ingresar</Text>
        <InputForm label={"e-Mail"} onChange={setEmail} error={""} />
        <InputForm
          label={"Contraseña"}
          onChange={setPassword}
          error={""}
          isSecure={true}
        />
        <Pressable onPress={onSubmit} style={({pressed}) => [styles.pressable, {opacity: pressed ? 0.6 : 1}]}>
            <Text style={styles.txtPressable}>Ingresar</Text>
        </Pressable>
        <Text style={styles.sub}>No tienes una cuenta?</Text>

        <Pressable onPress={() => goToSignup()}>
          <Text style={styles.subLink}>Registrarse</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.appBG
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
    color:'white'
  },
  sub: {
    fontSize: 14,
    color: "black",
    color:'white'
  },
  subLink: {
    fontSize: 14,
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
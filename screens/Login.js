import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity,ActivityIndicator } from 'react-native';
import firebase from '../firebase/fire.js'
import "firebase/auth";



const Login = (props) => {

    const [email, setEmail] = React.useState(null);
    const [password, setPassword] = React.useState(null);
    const [error, setError] = React.useState('');
    
    const loginUser = async() =>{
      try{
          firebase.auth().signInWithEmailAndPassword(email,password);
          props.navigation.navigate('Home')
         
      }catch(err){
          setError(err.message);
      }
    }
    const onPress = () => {
        props.navigation.navigate('CreateUser')
        
    }

    // if(!loading){
    //   return(
    //     <View>
    //       <ActivityIndicator size="large" color="#9e9e9e"/>
    //     </View>
    //   )
    // }

    return(
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenides a MiLibro!</Text>
      
      <Text style={styles.text}>
          Email
      </Text>
      <TextInput
        style={styles.textInput}
        onChangeText={setEmail}
        value={email}
        placeholder="Ingrese su email"
      />
      
      <Text style={styles.text}>
          Contraseña
      </Text>
      <TextInput
        style={styles.textInput}
        onChangeText={setPassword}
        value={password}
        placeholder="Ingrese su contraseña"
        keyboardType="default"
        secureTextEntry={true}
      />

      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={loginUser} style={styles.button}>
            <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity> 
  
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity> 
      </View>


      {
                error? <Text style={{color:'red'}}>{error}</Text> : null
      }


    </View>


    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'cadetblue', alignItems: 'center', justifyContent: 'center'},
    title: { fontSize: 30, fontWeight: 'bold', color: 'white' },
    text: { fontSize: 12 , marginTop: 18, fontWeight: 'bold', color: 'white', textAlign: 'left'},
    // textInput: { height: 40, width: 300, margin: 1, borderWidth: 0, backgroundColor: 'white', borderRadius: 100,  },
    textInput: { width: '90%', marginBottom: 10, padding: 10, borderWidth: 0, backgroundColor: 'white', borderRadius: 100,  },
    
    button: {backgroundColor: 'rgb(7, 69, 71)', padding: 15, width: "48%" ,borderRadius: 100 },
    buttonText: { fontSize: 16, color: 'white', alignSelf: 'center', fontWeight: 'bold'},
    
    btnContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      width : "90%"

    }
  });

export default Login
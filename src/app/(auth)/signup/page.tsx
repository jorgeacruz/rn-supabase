import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, StatusBar, SafeAreaView, ScrollView, Alert} from 'react-native';
import Colors from '@/constants/colors';
import { router } from 'expo-router';
import { useState } from 'react';
import { supabase } from '../../../lib/supabase';

export default function Signup() {


    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setloading] = useState(false);

    async function handleSignup(){
      
      setloading(true);
      
      const {data, error} = await supabase.auth.signUp({
        email: email,
        password: password,
        options:{
          data:{
            name: nome
          }
        }
      })

      if(error){
        Alert.alert('Error', error.message)
        return;
      }

      setloading(false);
      router.replace('/')
     
    }

 return (
  
   <View style={style.container}>
    <StatusBar hidden={true}/>
        <Image source={require('../../../images/player2.png')} style={style.image}/>
        
        <View style={style.boxTitle}>
            <Text style={style.title}>L.A. PaintBall</Text>
            <Text style={{color:'#fff', textAlign:'center', fontSize:16, fontWeight:'bold'}}>A Melhor Arena da Zona Norte RJ.</Text>
        </View>
        <View style={style.loginBox}>
            <Text style={{color:'#fff', fontSize:20, fontWeight:'bold'}}> Faça seu Cadastro </Text>
            <TextInput
              value={nome}
              onChangeText={setNome} 
              style={style.inputs} 
              placeholder='Digite seu nome' 
              placeholderTextColor={'#fff'}
            />
            <TextInput 
              value={email}
              onChangeText={setEmail}
              style={style.inputs} 
              placeholder='Digite seu email' 
              placeholderTextColor={'#fff'}
              autoCapitalize='none'
            />
            <TextInput 
              value={password}
              onChangeText={setPassword}
              style={style.inputs} 
              placeholder='Digite sua senha' 
              placeholderTextColor={'#fff'} 
              secureTextEntry={true}
            />
            <TouchableOpacity style={style.loginBottom} onPress={handleSignup}>
                <Text style={{fontSize:18, fontWeight:700}}>
                  { loading ? 'Carregando ...' : 'Cadastrar minha conta'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.back()}>
                    <Text style={{color:'#fff', paddingTop:10}}>Já sou cadastrado. Voltar</Text>    
            </TouchableOpacity>
        </View>
   </View>
   
  );
}

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.zinc
    },
    image:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        resizeMode:'cover',
        width:'100%',
        opacity:0.5
    },
    loginBox:{
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        bottom:40,
        width:'100%',
        gap:10
    },
    inputs:{
        borderWidth:1,
        borderColor:'#fff',
        borderRadius:3,
        width:'80%',
        padding:10,
        textAlign:'center',
        color:'#FBC605',
        fontSize:16
    },
    loginBottom:{
        borderRadius:3,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#FBC605",
        padding:10,
        width:'80%',
    },
    boxTitle:{
        position:'absolute',
        top:50,
    },
    title:{
        fontWeight:'bold',
        fontSize:45,
        color:'#FBC605'
    }
    

});
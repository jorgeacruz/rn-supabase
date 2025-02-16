import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, StatusBar, Alert} from 'react-native';
import Colors from '@/constants/colors';
import { Link } from 'expo-router';
import { useState } from 'react';
import { supabase } from '@/src/lib/supabase';
import { router } from 'expo-router';

export default function Login() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setloading] = useState(false);

    async function handleSignin(){
        setloading(true);

        const {data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password:password
        })

        if(email == '' || password == '') {

            Alert.alert('Email ou Password não podem estar vazios');
            return;

        } else if (error) 
            {
            Alert.alert('error', 'Erro de conexão')
            return;
        }

        setloading(false);
        router.replace('/(panel)/profile/page');

    }
    
 return (
   <View style={style.container}>
    <StatusBar hidden={true}/>
        <Image source={require('../../../images/player.png')} style={style.image}/>
        
        <View style={style.boxTitle}>
            <Text style={style.title}>L.A. PaintBall</Text>
            <Text style={{color:'#fff', textAlign:'center', fontSize:18}}>A Melhor Arena da Zona Norte RJ.</Text>
        </View>
        <View style={style.loginBox}>
            <Text style={{color:'#fff', fontSize:20, fontWeight:'bold'}}> Faça seu Login </Text>
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
            <TouchableOpacity style={style.loginBottom} onPress={handleSignin}>
                <Text style={{fontSize:18, fontWeight:700}}>
                    {loading ? 'Carregando ...' : 'Acessar minha conta'}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Link href='/(auth)/signup/page'>
                    <Text style={{color:'#fff', paddingTop:10}}>Não possuo conta! Cadastrar</Text>
                </Link>
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
        opacity:0.2
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
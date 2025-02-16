import { View, Text, StyleSheet, TouchableOpacity, Alert }  from 'react-native';
import { router } from 'expo-router';
import { supabase } from '@/src/lib/supabase';



export default function Profile() {
  
  async function hanbleLogout(){
    
    const { error } = await supabase.auth.signOut();
    router.replace('/')

  }

 return (
   <View style={style.container}>
    <Text>Profile</Text>
    <TouchableOpacity style={style.bt} onPress={hanbleLogout}>
      <Text style={{color:'#fff'}}>Voltar</Text>
    </TouchableOpacity>
   </View>
  );
}

const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    bt:{
      backgroundColor:'#000',
      padding:8,
      width:'50%',
      justifyContent:'center',
      alignItems:'center'
    }
})
import { Stack, router } from 'expo-router'
import { AuthProvider, useAuth } from '../contexts/AuthContext'
import { useEffect } from 'react'
import { supabase } from '../lib/supabase'


export default function MainLayout(){
  
  return(
    <Stack>
      <Stack.Screen 
        name='index' 
        options={{ headerShown:false }}
      />

      <Stack.Screen 
      name='(auth)/signin/page' 
      options={{ headerShown:false }}
      />

      <Stack.Screen 
      name='(auth)/signup/page' 
      options={{ headerShown:false }}
      />

      <Stack.Screen 
      name='(panel)/profile/page' 
      options={{ headerShown:false }}
      />
    </Stack>
  )
}
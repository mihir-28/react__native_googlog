
import React  from 'react'
import { Button, StatusBar, View, StyleSheet, Text, Image,Alert } from 'react-native'
import {
  GoogleSignin 
} from '@react-native-google-signin/google-signin';

const  App =()=> {

  const _signin = async()=>{
   
      GoogleSignin.configure({
        scopes: [], 
        webClientId: '26768215587-etlcmp7oor7lqekv7ru914s3afa381kk.apps.googleusercontent.com', 
        offlineAccess: true,  
      });
   
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo =await GoogleSignin.signIn();
      console.log("userinfo",userInfo)
      Alert.alert(userInfo.user.name);
    } catch (error) {
      console.log("error")
    }

  
  }

   
    return (
      <View style={styles.container}>
        <StatusBar
          animated={true}
          backgroundColor="#6495ED"
          barStyle={'default'}
        />

        <Text style={{ marginTop: 20, marginBottom: 20, fontSize: 20, fontWeight: "bold" }}>Hello world </Text>


        <Image source={require('E:/recnat/Googlog/Indian3.png')}
          style={{ width: 100, height: 100, alignItems: 'center', borderRadius: 10, marginBottom: 20 }}
        />
        <Button
          title="login with Google"
          onPress={_signin}
          style={styles.btn}
        />

      </View>
    )
  
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
    marginVertical: 16,
    marginBottom: 20,

  },
  btn: {
    alignItems: 'center',
    paddingTop: 20,
    marginTop: 20,
    marginVertical: 16,
    marginBottom: 20,
    borderRadius: 10,
  },
});
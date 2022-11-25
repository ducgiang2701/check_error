import React, {useEffect, useState} from 'react';
import { View, StyleSheet} from 'react-native';
import { Button, InputForm } from './component';
const Component = () => {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const account = {email, pwd};

  useEffect(() => {
    console.log('account', account);
  }, [account]);

  return (
    <View style={{backgroundColor: darkMode ? 'darkgrey' : 'pink'}}>
      <InputForm 
        title={'Email'} 
        value={email} 
        onChangeText={v => setEmail(v)} 
        key={'key'} 
        keyboardType={'email-address'} 
        inputStyle={styles.input}/>
    <InputForm 
        title={'Password'} 
        value={pwd} 
        onChangeText={v => setPwd(v)} 
        key={'password'} 
        secureTextEntry={true}
        inputStyle={styles.input}/>
    <Button 
        text={'toggle darkmode'} 
        onPress={() => setDarkMode(old => !old)} 
        buttonStyles={styles.button} 
        textStyles={
          {backgroundColor: darkMode ? 'deeppink' : 'grey'}
        }/>
    </View>
  );
};

const styles = StyleSheet.create({
  input:{
    borderWidth: 1
  }  
  
})

export default Component;

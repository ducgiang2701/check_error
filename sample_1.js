import React, {useState} from 'react';
import {View,StyleSheet} from 'react-native';
import {InputForm, Button} from './component';

const Component = () => {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const onSubmit = () => {
    console.log({email, pwd});
  };
  return (
    <View>
      <InputForm 
        title={'Email'} 
        value={email} 
        onChangeText={(v)=>setEmail(v)} 
        key={'email'} 
        keyboardType={'email-address'}
        secureTextEntry={false}
        containerStyle={styles.container}
        titleStyle={styles.title}
        inputStyle={styles.input}
      />
      <InputForm 
        title={'Password'} 
        value={pwd} 
        onChangeText={(v)=>setPwd(v)} 
        key={'password'} 
        secureTextEntry={true}
        containerStyle={styles.container}
        titleStyle={styles.title}
        inputStyle={styles.input}
      />
      <Button 
        text={'Submit'} 
        onPress={onSubmit} 
        textStyles={styles.text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{

  },
  title:{

  },
  input:{

  },
  text:{
    backgroundColor: 'pink'
  }
})

export default Component;

import React, {useEffect, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View, StyleSheet} from 'react-native';
import { Button, InputForm } from './component';

const Component = () => {
  const [fullname, setFullname] = useState('');
  const [firstname, setFN] = useState('');
  const [lastname, setLN] = useState('');

  useEffect(() => {
    setFullname(`${firstname} ${lastname}`);
  }, [firstname, lastname]);

  return (
    <View>
      <InputForm 
        title={'firstname'} 
        value={firstname} 
        onChangeText={v => setFN(v)}
        key={'firstname'} 
        inputStyle={styles.input}/>
      
      <InputForm 
        title={'lastname'} 
        value={lastname} 
        onChangeText={v => setLN(v)}
        key={'lastname'} 
        inputStyle={styles.input}/>
      
      <Text style={{backgroundColor: 'pink'}}>Fullname: {fullname}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input:{
    borderWidth: 1
  }
})

export default Component;

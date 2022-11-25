import React, {useEffect, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View, StyleSheet} from 'react-native';
import { Button } from './component';


const Component = () => {
  const [count, setCount] = useState(0);

  const adjustCount = amount => {
    // problem 1
    setCount(count + amount);
    // problem 2
    console.log('count', count);
  };

  return (
    <View>
      <Button 
        text={'-'} 
        onPress={() => adjustCount(-1)} 
        buttonStyle={styles.button} 
        textStyles={styles.text}/>
      <Text>Count: {count}</Text>
      <Button 
        text={'+'} 
        onPress={() => adjustCount(-1)} 
        buttonStyles={styles.button} 
        textStyles={styles.text}/>
    </View>
  );
};

const styles = StyleSheet.create({
  button:{

  },
  text:{
    backgroundColor: 'pink'
  }
})

export default Component;

import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View,StyleSheet} from 'react-native';

export default InpuForm = ({value, 
  onChangeText, 
  title, 
  key, 
  keyboardType, 
  secureTextEntry, 
  containerStyle,
  titleStyle, 
  inputStyle}) => {
  return (
    <View style={containerStyle}>
      <Text style={titleStyle}>{title}</Text>
      <TextInput
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        key={key}
        secureTextEntry={secureTextEntry}
      />
    </View>
  )
}
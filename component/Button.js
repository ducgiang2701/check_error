import React, {useEffect, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View, StyleSheet} from 'react-native';

export default Button = ({onPress, buttonStyles, textStyles, text}) => {
  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress}>
        <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  )
}
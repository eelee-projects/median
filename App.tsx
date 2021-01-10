import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput } from 'react-native';
import { Input, Button } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function App() {
  const [value, onChangeText] = useState('Useless Placeholder');
  const [date, setDate] = useState(new Date())

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/road3.jpeg')} style={{width: '100%', height: '100%'}} />
      <View style={styles.overlay} />
      <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, alignItems: 'center'}}>
        <Image source={require('./assets/white-logo.png')} style={styles.logo}/>
        <View style={styles.input}>
          <Input placeholder='address' label='location 1' inputContainerStyle={styles.inputStyle} labelStyle={styles.inputLabel}/>
          <Input placeholder='address' label='location 2' inputContainerStyle={styles.inputStyle} labelStyle={styles.inputLabel}/>
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode='time'
            is24Hour={true}
            display="default"

        />
          <Button type='solid' title='median' />
        </View>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
   backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(69,85,117,0.7)',
  },
  logo: {
    flex: 1,
    justifyContent: 'flex-start',
    resizeMode: 'center',
  },
  input: {
    flex: 1,
    width: '70%',
    justifyContent: 'flex-start',
    resizeMode: 'center',
  },
  inputStyle: {
    backgroundColor: '#fff'
  },
  inputLabel: {
    color: '#fff'
  }

});


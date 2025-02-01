import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
// import ButtonPrimary from '../components/ui/ButtonPrimary';
import {Colors} from '../constants/Colors';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
// import InputPrimary from '../components/ui/InputPrimary';

const Login = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.backgound}>
        <View style={styles.container}>
          <View>
            <Text style={styles.logo}>Foodora</Text>
          </View>
          <View style={styles.inputcontainer}>
            <View style={styles.input}>
              <Text style={styles.text}>{'+ 993'}</Text>
            </View>
            <View style={styles.input2}>
              {/* <InputPrimary placeholder="Phone number" /> */}
            </View>
          </View>
          <View style={styles.continue}>
            <Text style={styles.privacytext}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
              voluptatum quidem.
            </Text>
            {/* <ButtonPrimary text="Continue" /> */}
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Login;

const styles = StyleSheet.create({
  backgound: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    width: '90%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputcontainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    flexDirection: 'row',
  },
  input: {
    backgroundColor: Colors.input,
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderRadius: 8,
  },
  input2: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: 300,
    color: Colors.text,
  },
  logo: {
    fontSize: 34,
    fontWeight: 900,
  },
  continue: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
  },
  privacytext: {
    fontSize: 12,
    color: Colors.border,
    textAlign: 'center',
  },
});

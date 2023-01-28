import * as React from 'react';
import {View, Text, StyleSheet, Button, Pressable} from 'react-native';

const SignUp = () => {
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={{fontSize: 45, color: 'black', fontWeight: 'bold'}}>
          Medium
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 25,
            textAlign: 'center',
            paddingHorizontal: 60,
            paddingTop: 20,
          }}>
          Ideas that set your mind in motion
        </Text>
      </View>
      <View style={styles.buttons}>
        <Pressable style={styles.button}>
          <Text style={styles.text}>Sign in With Google</Text>
        </Pressable>
        <Pressable style={styles.button} >
          <Text style={styles.text}>Sign in With GitHub</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.text}>Sign in With Twitter</Text>
        </Pressable>
        <Text style = {{textAlign:'center',paddingTop:10,color:'black'}}>Already have an Account ? Sign In</Text>
      </View>
      <View style={styles.footer}>
        <Text style = {{paddingHorizontal:10,textAlign:'center'}}>Bt creating an account, I accept Medium's{"\n"}
          <Text>Terms and Conditions</Text>
        </Text>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#dae4f5',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  header: {
    alignItems: 'center',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 90,
    borderRadius: 4,
    marginVertical: 10,
    elevation: 3,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
});

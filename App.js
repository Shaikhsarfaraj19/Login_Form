import { View, Text, Button, TextInput, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { use, useState } from 'react';


export default function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateForm = () => {
    let errors ={};
    if(username === ''){
      errors.username = 'Username is required';
    }
    if(password === ''){
      errors.password = 'Password is required';
    }
    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Form Submitted',username,password);
      setUsername('');
      setPassword('');
      setError('');
    }
  };
  return (
    <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={Platform.os === "ios" ? 100 : 0} style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>Username</Text>
        <TextInput style={styles.input} placeholder='Enter your username' value={username} onChangeText={setUsername} />
        {error.username ? (<Text style={styles.errorText}>{error.username}</Text>) : null}
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} placeholder='Enter your password' secureTextEntry value={password} onChangeText={setPassword} />
        {error.password ? (<Text style={styles.errorText}>{error.password}</Text>) : null}
        <Button title="Login" onPress={handleSubmit} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: "#f5f5f5",
  },
  form: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  }

});
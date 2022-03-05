import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';

const App = () => {
  const [num1, setnum1] = useState('');
  const [num2, setnum2] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(res => {
        setProduct(res);
      })
      .catch(error => Alert.alert(error));
  }, []);

  const Cal = () => {
    if (
      operator === '+' ||
      operator === '-' ||
      operator === '-' ||
      operator === '*' ||
      operator === '/'
    ) {
      if (operator === '+') {
        let temp: any = parseInt(num1) + parseInt(num2);
        setResult(temp);
        // console.log(temp);
      }
      if (operator === '-') {
        let temp: any = parseInt(num1) - parseInt(num2);
        setResult(temp);
        //  console.log(temp);
      }
      if (operator === '*') {
        let temp: any = parseInt(num1) * parseInt(num2);
        setResult(temp);
        //  console.log(temp);
      }
      if (operator === '/') {
        let temp: any = parseInt(num1) / parseInt(num2);
        setResult(temp);
        //  console.log(temp);
      }
    } else {
      Alert.alert('Invalid operator');
    }
  };

  return (
    <SafeAreaView style={styles.containerWraper}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputStyle}
            onChangeText={num => setnum1(num)}
            keyboardType="number-pad"
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputStyle}
            onChangeText={num => setOperator(num)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputStyle}
            onChangeText={num => setnum2(num)}
            keyboardType="number-pad"
          />
        </View>
        <View style={{marginTop: 15}}>
          <Text>=</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputStyle}>
            <Text>{result === '' ? 0 : result}</Text>
          </TextInput>
        </View>
      </View>

      <TouchableOpacity onPress={() => Cal()} style={styles.btnResult}>
        <Text style={styles.btnText}>Show Result</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerWraper: {
    flex: 1,
    padding: 15,
    backgroundColor: '#E5E5E5',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  inputContainer: {
    borderWidth: 2,
    marginBottom: 10,
    borderRadius: 8,
    borderColor: '#A52A2A',
    fontSize: 16,
  },

  inputStyle: {
    fontSize: 14,
    paddingLeft: 10,
  },
  btnResult: {
    backgroundColor: '#0000FF',
    borderRadius: 10,
    marginTop: 50,
    paddingVertical: 10,
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});
export default App;

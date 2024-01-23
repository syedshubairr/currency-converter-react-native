import React, {useState} from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Snackbar from 'react-native-snackbar';
import {currencyByRupee} from './constants';
import CurrencyBtn from './components/CurrencyBtn';
function App(): React.JSX.Element {
  const [inputValue, setInputValue] = useState('');
  const [resultValue, setResult] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');

  const handlePress = (targetVal: currency) => {
    if (!inputValue) {
      return Snackbar.show({
        text: 'Enter Value to convert',
        textColor: '#000000',
        backgroundColor: '#E5E4E2',
        marginBottom: 2,
      });
    }
    const inputAmount = parseFloat(inputValue);
    if (!isNaN(inputAmount)) {
      const convertedResult = inputAmount * targetVal.value;
      const result = `${targetVal.symbol} ${convertedResult.toFixed(2)} ❤️`;
      setResult(result);
      setTargetCurrency(targetVal.name);
    } else {
      return Snackbar.show({
        text: 'Not a valid number',
        textColor: '#000000',
        backgroundColor: '#990012',
      });
    }
  };

  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.rupeesContainer}>
            <Text style={styles.rupee}>PKR</Text>
            <TextInput
              maxLength={14}
              value={inputValue}
              clearButtonMode="always" //only for iOS
              onChangeText={setInputValue}
              keyboardType="number-pad"
              placeholder="Enter Amount"
            />
          </View>
          {resultValue && (
            <Text style={styles.rupeesContainer}>{resultValue}</Text>
          )}
        </View>
        <View style={styles.bottomContainer}>
          <FlatList
            numColumns={3}
            data={currencyByRupee}
            keyExtractor={item => item.name}
            renderItem={({item}) => (
              <Pressable
                style={[
                  styles.button,
                  targetCurrency === item.name && styles.selected,
                ]}
                onPress={() => handlePress(item)}>
                <CurrencyBtn {...item} />
              </Pressable>
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#51515f',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,

    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,
    margin: 12,
    height: 60,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});

export default App;

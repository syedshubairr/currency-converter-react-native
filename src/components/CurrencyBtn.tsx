import {View, Text, StyleSheet} from 'react-native';
import type {PropsWithChildren} from 'react';
import React from 'react';
type CurrencyBtnProps = PropsWithChildren<{
  name: string;
  flag: string;
}>;

const CurrencyBtn = (props: CurrencyBtnProps): JSX.Element => {
  return (
    <View style={style.btnContainer}>
      <Text style={style.flag}>{props.flag}</Text>
      <Text style={style.name}>{props.name}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  btnContainer: {
    alignItems: 'center',
  },
  flag: {
    fontSize: 24,
    color: '#ffffff',
    marginBottom: 4,
  },
  name: {
    fontSize: 14,
    color: '#000000',
    marginBottom: 4,
  },
});

export default CurrencyBtn;

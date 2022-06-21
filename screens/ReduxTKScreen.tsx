import { View, Text } from 'react-native';
import React, { useEffect, useState, VFC } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import tw from 'tailwind-rn';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';
import { Button, Input } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import {
  addByPayload,
  decrement,
  increment,
  selectCount,
} from '../slices/counterSlice';

type Props = NativeStackScreenProps<RootStackParamList, 'ReduxTK'>;

export const ReduxTKScreen: VFC<Props> = ({ navigation }) => {
  const [amount, setAmount] = useState('0');

  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const incrementAmount = Number(amount) || 0;

  useEffect(() => {
    console.log('mounted Redux ToolKit');
    return () => {
      console.log('un-mounted Redux ToolKit');
    };
  }, []);

  return (
    <View style={tw('flex-1 bg-gray-300 justify-center items-center')}>
      <Text>Redux ToolKit {count}</Text>
      <View style={tw('my-3')}>
        <Button
          title="Go to FlexBox"
          onPress={() => navigation.navigate('FlexBox')}
        />
      </View>
      <View style={tw('my-1')}>
        <Button title="increment" onPress={() => dispatch(increment())} />
      </View>
      <View style={tw('my-1')}>
        <Button title="decrement" onPress={() => dispatch(decrement())} />
      </View>
      <Input
        placeholder="type add number"
        leftIcon={<FontAwesome name="pencil" size={24} color="gray" />}
        value={amount}
        onChangeText={(txt: string) => setAmount(txt)}
        autoCompleteType={undefined}
      />
      <View style={tw('my-1')}>
        <Button
          title="increment by amount"
          onPress={() => {
            dispatch(addByPayload(incrementAmount));
            setAmount('0');
          }}
        />
      </View>
    </View>
  );
};

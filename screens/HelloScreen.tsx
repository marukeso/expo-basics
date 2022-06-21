import { View, Text } from 'react-native';
import React, { useCallback, useEffect, useState, VFC } from 'react';
import tw from 'tailwind-rn';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';
import { Button, Input } from 'react-native-elements';
import { Child } from '../components/Child';
import { FontAwesome } from '@expo/vector-icons';

type Props = NativeStackScreenProps<RootStackParamList, 'Hello'>;

export const HelloScreen: VFC<Props> = ({ navigation }) => {
  const [text, setText] = useState('');
  const [printText, setPrintText] = useState('');

  useEffect(() => {
    console.log('mounted Hello');
    return () => {
      console.log('un-mounted Hello');
    };
  }, []);

  const printMsg = useCallback(() => {
    console.log(`Print: ${printText}`);
  }, [printText]);

  return (
    <View style={tw('flex-1 bg-gray-300 justify-center items-center')}>
      <Text>Hello</Text>
      <View style={tw('my-3')}>
        <Button
          title="Go to ReduxTK"
          onPress={() => navigation.navigate('ReduxTK')}
        />
      </View>
      <Input
        placeholder="type print text"
        leftIcon={<FontAwesome name="pencil" size={24} color="gray" />}
        value={text}
        onChangeText={(txt: string) => setText(txt)}
        autoCompleteType={undefined}
      />
      <Text>{text}</Text>
      <Input
        placeholder="type print text"
        leftIcon={<FontAwesome name="pencil" size={24} color="gray" />}
        value={printText}
        onChangeText={(txt: string) => setPrintText(txt)}
        autoCompleteType={undefined}
      />
      <Text>{printText}</Text>
      <Child printMsg={printMsg} />
    </View>
  );
};

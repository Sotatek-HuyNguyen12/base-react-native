import React from 'react';
import {Controller} from 'react-hook-form';
import {StyleSheet, Text, TextInput, View} from 'react-native';

interface FormInputProps {
  name: string;
  control: any;
  register: any;
  error?: any;
  placeholder?: string;
  label?: string;
  editable?: boolean;
}

const FormInput = (props: FormInputProps) => {
  const {
    name,
    control,
    error,
    placeholder,
    label,
    editable = true,
    register,
  } = props;
  const styles = myStyles;

  const renderInput = ({field}) => {
    const {onChange, onBlur, value} = field;
    return (
      <TextInput
        {...register(name)}
        placeholder={placeholder}
        onBlur={e => {
          onBlur(e);
        }}
        onChangeText={e => {
          onChange(e);
        }}
        value={value}
        style={styles.input}
        placeholderTextColor={'gray'}
        editable={editable}
      />
    );
  };
  return (
    <View>
      {label && <Text>{label}</Text>}
      <Controller control={control} render={renderInput} name={name} />
      {error && error?.message && <Text>{error.message}</Text>}
    </View>
  );
};

export default FormInput;

const myStyles = StyleSheet.create({
  input: {
    height: 40,
    width: '100%',
    borderBottomWidth: 0.2,
  },
});

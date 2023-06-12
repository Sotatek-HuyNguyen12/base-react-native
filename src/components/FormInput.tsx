import React from 'react';
import {Controller} from 'react-hook-form';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface FormInputProps {
  name: string;
  control: any;
  register: any;
  error?: any;
  placeholder?: string;
  label?: string;
  editable?: boolean;
  secure?: boolean;
  showLeft?: boolean;
  showRight?: boolean;
  onPressRight?: () => void;
}

const FormInput: React.FC<FormInputProps> = ({
  name,
  control,
  error,
  placeholder,
  label,
  editable = true,
  register,
  secure = false,
  showRight = false,
  onPressRight,
  ...rest
}) => {
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
        autoCapitalize={'none'}
        importantForAutofill="no"
        autoComplete="off"
        secureTextEntry={secure}
        {...rest}
      />
    );
  };

  const renderRight = () => {
    return (
      <TouchableOpacity onPress={onPressRight} style={styles.rightComponent}>
        <View />
      </TouchableOpacity>
    );
  };

  return (
    <View>
      {label && <Text>{label}</Text>}
      <View style={styles.inputContainer}>
        <Controller control={control} render={renderInput} name={name} />
        {showRight && renderRight()}
      </View>
      {error && error?.message && <Text>{error.message}</Text>}
    </View>
  );
};

export default FormInput;

const myStyles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    borderBottomWidth: 0.2,
    flexDirection: 'row',
    paddingVertical: 1,
  },
  input: {
    height: 40,
    flex: 1,
  },
  rightComponent: {
    width: 40,
    backgroundColor: 'gray',
  },
});

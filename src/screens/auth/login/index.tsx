import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import loginSchema from './schema';
import FormInput from 'components/FormInput';
import {navigate} from 'utils/NavigationUtils';

const initialValue = {
  email: '',
  password: '',
};

const LoginScreen = () => {
  const styles = myStyles;
  const {
    control,
    formState: {errors},
    handleSubmit,
    register,
  } = useForm({
    defaultValues: initialValue,
    resolver: yupResolver(loginSchema),
  });
  const onSubmit = async data => {
    console.log(data);
    navigate('Main');
  };

  return (
    <View style={styles.container}>
      <FormInput
        control={control}
        name="email"
        error={errors.email}
        placeholder="Email"
        label="Email"
        register={register}
      />
      <FormInput
        control={control}
        name="password"
        error={errors.password}
        placeholder="Password"
        label="Password"
        register={register}
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default LoginScreen;

const myStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderBottomWidth: 0.2,
  },
});

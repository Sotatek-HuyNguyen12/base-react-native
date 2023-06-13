import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import FormInput from 'components/FormInput';
import LoginViewModel from './loginViewModel';
import RightIcon from 'components/RightIcon';

const LoginScreen = () => {
  const styles = myStyles;
  const {
    state,
    handleHidePwd,
    control,
    errors,
    handleSubmit,
    register,
    LOGIN_DATA_FORM,
    onSubmit,
    isPassword,
    renderIconVisible,
  } = LoginViewModel();
  const IconRight = renderIconVisible(state.hidePassword);
  return (
    <View style={styles.container}>
      {LOGIN_DATA_FORM.map((item, index) => {
        return (
          <FormInput
            control={control}
            name={item.name}
            error={errors[`${item.name}`]}
            placeholder={item.placeholder}
            label={item.label}
            register={register}
            key={`${item.name}-${index}`}
            secure={isPassword(item.name) ? state.hidePassword : false}
            rightComponent={
              isPassword(item.name) && (
                <RightIcon onPress={handleHidePwd} icon={<IconRight />} />
              )
            }
          />
        );
      })}
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

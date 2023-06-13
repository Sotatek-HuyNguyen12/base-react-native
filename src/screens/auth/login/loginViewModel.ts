import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {clone} from 'ramda';
import {loginDataForm, loginFieldName} from './model';
import {yupResolver} from '@hookform/resolvers/yup';
import {navigate} from 'utils/NavigationUtils';
import loginSchema from './schema';
import Svgs from 'assets/svgs';

const initialValue = {
  email: '',
  password: '',
};

const LoginViewModel = () => {
  const [state, setState] = useState({
    hidePassword: true,
  });

  const LOGIN_DATA_FORM = clone(loginDataForm);

  const {
    control,
    formState: {errors},
    handleSubmit,
    register,
  } = useForm({
    mode: 'all',
    defaultValues: initialValue,
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async data => {
    console.log(data);
    navigate('Main');
  };

  const handleHidePwd = () => {
    setState({...state, hidePassword: !state.hidePassword});
  };

  const isPassword = name => {
    return name === loginFieldName.password;
  };

  const isHidePassword = () => {
    return state.hidePassword;
  };

  const renderIconVisible = (hide: boolean) => {
    const Icon = Svgs[`IcVisibility${hide ? 'Off' : ''}`];
    return Icon;
  };

  return {
    state,
    handleHidePwd,
    control,
    errors,
    handleSubmit,
    register,
    LOGIN_DATA_FORM,
    onSubmit,
    isHidePassword,
    isPassword,
    renderIconVisible,
  };
};

export default LoginViewModel;

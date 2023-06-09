import {NO_WHITE_SPACE, VALID_EMAIL, VALID_PASSWORD} from 'utils/validate';
import * as yup from 'yup';

const loginSchema = yup.object({
  email: yup
    .string()
    .required('This Field is required.')
    .email('Email is invalid.')
    .matches(VALID_EMAIL, 'Email is invalid.'),
  password: yup
    .string()
    .required('This Field is required.')
    .matches(VALID_PASSWORD, 'Password is invalid.')
    .matches(NO_WHITE_SPACE, 'Password is invalid.'),
});

export default loginSchema;

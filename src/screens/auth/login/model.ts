const loginFieldName = {
  email: 'email',
  password: 'password',
};

const loginDataForm = [
  {
    name: loginFieldName.email,
    type: 'input-text',
    placeholder: 'Email',
    label: 'Email',
  },
  {
    name: loginFieldName.password,
    type: 'input-text',
    placeholder: 'Password',
    label: 'Password',
  },
];

export {loginFieldName, loginDataForm};

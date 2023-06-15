import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {userSelector, userActions} from 'reduxSaga/user/userSlice';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  useEffect(() => {
    dispatch(userActions.getUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(user);

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default HomeScreen;

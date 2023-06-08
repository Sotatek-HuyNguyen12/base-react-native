import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {userActions, userSelector} from 'reduxSaga/user/userSlice';

const Home = () => {
  const styles = myStyles;
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  console.log('====================================');
  console.log('user', user);
  console.log('====================================');
  useEffect(() => {
    dispatch(userActions.getUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

const myStyles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;

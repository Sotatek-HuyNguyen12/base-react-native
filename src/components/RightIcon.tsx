import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

interface ComponentProps {
  onPress?: () => void;
  icon?: React.ReactNode;
}

const RightIcon: React.FC<ComponentProps> = ({onPress, icon}) => {
  const styles = myStyles;
  return (
    <TouchableOpacity onPress={onPress} style={styles.rightComponent}>
      {icon ? <>{icon}</> : null}
    </TouchableOpacity>
  );
};

export default React.memo(RightIcon);

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
    justifyContent: 'center',
    alignItems: 'center',
  },
});

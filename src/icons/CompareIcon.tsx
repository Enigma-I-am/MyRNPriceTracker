import React from 'react'; //{type PropsWithChildren}
import {StyleSheet, useColorScheme} from 'react-native';

import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  iconHorizontalMargin: {marginHorizontal: 10},
});

const CompareIcon = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const iconColor = isDarkMode ? '#FFFFFF' : '#FFFFFF';
  return (
    <MaterialCommunityIcon
      name="compare-horizontal"
      size={22}
      color={iconColor}
      style={styles.iconHorizontalMargin}
    />
  );
};

export default CompareIcon;

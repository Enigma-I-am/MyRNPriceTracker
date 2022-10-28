import React from 'react';
import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import {Rate} from '../models/ApiResponse';

const BottomSheetModalComponent = (item: {item: Rate; iconPair: Element}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const textColor = {
    color: isDarkMode ? 'white' : 'black',
  };
  return (
    <View style={styles.contentContainer}>
      <Text style={[styles.title, textColor]}>Coin Details 📈</Text>
      <View style={styles.iconsContainer}>
        <>{item.iconPair}</>
      </View>
      <Text style={[styles.price, textColor]}>
        {item.item.rate.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
      </Text>

      <Text style={styles.key}>key: {item.item.key}</Text>
    </View>
  );
};

export default BottomSheetModalComponent;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
  price: {
    fontSize: 30,
    fontWeight: '400',
    marginBottom: 50,
  },
  key: {fontSize: 10, color: 'grey'},
  iconsContainer: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
    marginBottom: 20,
  },
  materialIconMargin: {marginHorizontal: 20},
});

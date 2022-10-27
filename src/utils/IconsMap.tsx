import React from 'react'; //{type PropsWithChildren}
import {View, StyleSheet} from 'react-native';
import CompareIcon from '../icons/CompareIcon';
import * as icon from '../icons/index';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  iconHorizontalMargin: {marginHorizontal: 10},
});

export const IconsMap = () => {
  const priceicons: {[key: string]: Element} = {
    btcngn: (
      <View style={styles.row}>
        <icon.BtcSvgComponent />
        <CompareIcon />
        <icon.NgnSvgComponent />
      </View>
    ),
    btcbusd: (
      <View style={styles.row}>
        <icon.BtcSvgComponent />
        <CompareIcon />
        <icon.BusdSvgComponent />
      </View>
    ),
    dashbusd: (
      <View style={styles.row}>
        <icon.DashSvgComponent />
        <CompareIcon />
        <icon.BusdSvgComponent />
      </View>
    ),
    dashngn: (
      <View style={styles.row}>
        <icon.DashSvgComponent />
        <CompareIcon />
        <icon.NgnSvgComponent />
      </View>
    ),
    ethngn: (
      <View style={styles.row}>
        <icon.EthSvgComponent />
        <CompareIcon />
        <icon.NgnSvgComponent />
      </View>
    ),
    usdtngn: (
      <View style={styles.row}>
        <icon.UsdtSvgComponent />
        <CompareIcon />
        <icon.NgnSvgComponent />
      </View>
    ),
    tronusdtngn: (
      <View style={styles.row}>
        <icon.TronSvgComponent />
        <CompareIcon />
        <icon.NgnSvgComponent />
      </View>
    ),
    busdngn: (
      <View style={styles.row}>
        <icon.BusdSvgComponent />
        <CompareIcon />
        <icon.NgnSvgComponent />
      </View>
    ),
    bnbngn: (
      <View style={styles.row}>
        <icon.BnbSvgComponent />
        <CompareIcon />
        <icon.NgnSvgComponent />
      </View>
    ),
    cusdngn: (
      <View style={styles.row}>
        <icon.CusdSvgComponent />
        <CompareIcon />
        <icon.NgnSvgComponent />
      </View>
    ),
    btcbtc: (
      <View style={styles.row}>
        <icon.BtcSvgComponent />
        <CompareIcon />
        <icon.BtcSvgComponent />
      </View>
    ),
    dashdash: (
      <View style={styles.row}>
        <icon.DashSvgComponent />
        <CompareIcon />
        <icon.DashSvgComponent />
      </View>
    ),
    tronusdttronusdt: (
      <View style={styles.row}>
        <icon.TronSvgComponent />
        <CompareIcon />
        <icon.TronSvgComponent />
      </View>
    ),
    busdbusd: (
      <View style={styles.row}>
        <icon.BusdSvgComponent />
        <CompareIcon />
        <icon.BusdSvgComponent />
      </View>
    ),
    cusdcusd: (
      <View style={styles.row}>
        <icon.CusdSvgComponent />
        <CompareIcon />
        <icon.CusdSvgComponent />
      </View>
    ),
    etheth: (
      <View style={styles.row}>
        <icon.EthSvgComponent />
        <CompareIcon />
        <icon.EthSvgComponent />
      </View>
    ),
    bnbbnb: (
      <View style={styles.row}>
        <icon.BnbSvgComponent />
        <CompareIcon />
        <icon.BnbSvgComponent />
      </View>
    ),
    usdtusdt: (
      <View style={styles.row}>
        <icon.UsdtSvgComponent />
        <CompareIcon />
        <icon.UsdtSvgComponent />
      </View>
    ),
    btcusd: (
      <View style={styles.row}>
        <icon.BtcSvgComponent />
        <CompareIcon />
        <icon.UsdSvgComponent />
      </View>
    ),
    dashusd: (
      <View style={styles.row}>
        <icon.DashSvgComponent />
        <CompareIcon />
        <icon.UsdSvgComponent />
      </View>
    ),
    ethusd: (
      <View style={styles.row}>
        <icon.EthSvgComponent />
        <CompareIcon />
        <icon.UsdSvgComponent />
      </View>
    ),
    bnbusd: (
      <View style={styles.row}>
        <icon.BnbSvgComponent />
        <CompareIcon />
        <icon.UsdSvgComponent />
      </View>
    ),
    usdtusd: (
      <View style={styles.row}>
        <icon.UsdtSvgComponent />
        <CompareIcon />
        <icon.UsdSvgComponent />
      </View>
    ),
    cusdusd: (
      <View style={styles.row}>
        <icon.CusdSvgComponent />
        <CompareIcon />
        <icon.UsdSvgComponent />
      </View>
    ),
    busdusd: (
      <View style={styles.row}>
        <icon.BusdSvgComponent />
        <CompareIcon />
        <icon.UsdSvgComponent />
      </View>
    ),
    bnbbusd: (
      <View style={styles.row}>
        <icon.BnbSvgComponent />
        <CompareIcon />
        <icon.BusdSvgComponent />
      </View>
    ),
    ethbusd: (
      <View style={styles.row}>
        <icon.EthSvgComponent />
        <CompareIcon />
        <icon.BusdSvgComponent />
      </View>
    ),
    fusdbusd: (
      <View style={styles.row}>
        <icon.FusdSvgComponent />
        <CompareIcon />
        <icon.BusdSvgComponent />
      </View>
    ),
    usdtbusd: (
      <View style={styles.row}>
        <icon.UsdtSvgComponent />
        <CompareIcon />
        <icon.BusdSvgComponent />
      </View>
    ),
    cusdbusd: (
      <View style={styles.row}>
        <icon.CusdSvgComponent />
        <CompareIcon />
        <icon.BusdSvgComponent />
      </View>
    ),
    tronusdtbusd: (
      <View style={styles.row}>
        <icon.TronSvgComponent />
        <CompareIcon />
        <icon.BusdSvgComponent />
      </View>
    ),
    tronusdtusd: (
      <View style={styles.row}>
        <icon.TronSvgComponent />
        <CompareIcon />
        <icon.UsdSvgComponent />
      </View>
    ),
  };

  return {priceicons};
};

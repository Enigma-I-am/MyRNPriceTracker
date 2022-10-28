import React from 'react'; //{type PropsWithChildren}
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

import {Searchbar} from 'react-native-paper';
import {useRef, useMemo, useCallback} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import usePriceTracker from './src/hooks/usePriceTrackerHook';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomSheetModalComponent from './src/components/BottomSheetModalComponent';
import {IconsMap} from './src/utils/IconsMap';
import CustomBackground from './src/components/CustomBottomSheetBackGround';

const App = () => {
  const {
    error,
    currencies,
    searchItems,
    searchInput,
    filteredRates,
    rates,
    setDetailsRate,
    detailsRate,
    setIconPair,
    iconPair,
  } = usePriceTracker();
  const {priceicons} = IconsMap();
  const isDarkMode = useColorScheme() === 'dark';

  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['40%', '25%'], []);

  // callbacks
  const usePresentModalPress = (item: string) =>
    useCallback(() => {
      if (rates !== null) {
        const value = rates[item];
        setIconPair(item);
        setDetailsRate(value);
        bottomSheetModalRef.current?.present();
      }
    }, [item]);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const backgroundStyle: ViewStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
    padding: 16,
  };

  const borderStyle: ViewStyle = {
    borderColor: isDarkMode ? 'white' : 'black',
  };

  const indicatorColor: ViewStyle = {
    backgroundColor: isDarkMode ? 'white' : 'black',
  };

  const RenderItem = ({item}: {item: string}) => {
    const icons = item.replace(/[^a-zA-Z0-9 ]/g, '').toLocaleLowerCase();
    return (
      <TouchableOpacity
        testID="flatlist_render_item"
        onPress={usePresentModalPress(item)}>
        <View style={[styles.TextViewStyle, borderStyle]}>
          <Text style={{color: isDarkMode ? Colors.lighter : Colors.darker}}>
            {item.replace(/[^a-zA-Z0-9 ]/g, '')}
          </Text>
          <>{priceicons[icons]}</>
        </View>
      </TouchableOpacity>
    );
  };

  return error !== null ? (
    <TouchableOpacity
      style={styles.centerView}
      onPress={() => {
        // reload();
      }}>
      <View style={styles.centerView}>
        <Text>Error Loading Rates</Text>
        <MaterialCommunityIcon name="reload" size={30} />
      </View>
    </TouchableOpacity>
  ) : (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.viewPadding}>
        <Searchbar
          testID="search_bar"
          elevation={0}
          style={[styles.SearchBarStyle, borderStyle]}
          placeholder="Search"
          onChangeText={searchItems}
          value={searchInput}
        />

        <FlatList
          testID="coin_flatlist"
          data={searchInput.length > 1 ? filteredRates : currencies}
          keyExtractor={(item, index) => item + index}
          renderItem={item => <RenderItem item={item.item} />}
        />
        <BottomSheetModal
          handleIndicatorStyle={indicatorColor}
          backgroundComponent={CustomBackground}
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}>
          <BottomSheetModalComponent
            item={detailsRate}
            iconPair={
              priceicons[
                iconPair.replace(/[^a-zA-Z0-9 ]/g, '').toLocaleLowerCase()
              ]
            }
          />
        </BottomSheetModal>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centerView: {justifyContent: 'center', alignItems: 'center', flex: 1},
  SearchBarStyle: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#E91E63',
    margin: 5,
    marginBottom: 15,
  },
  TextViewStyle: {
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  highlight: {
    fontWeight: '700',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  viewPadding: {padding: 10},
  iconHorizontalMargin: {marginHorizontal: 10},
});

export default App;

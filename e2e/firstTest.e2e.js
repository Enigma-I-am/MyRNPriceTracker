import {render} from 'react-native-testing-library';

/* eslint-disable no-undef */
describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have search bar', async () => {
    await expect(element(by.id('search_bar'))).toBeVisible();
  });

  it('should have coin flatlist', async () => {
    await expect(element(by.id('coin_flatlist'))).toBeVisible();
  });
});

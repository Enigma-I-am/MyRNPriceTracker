import {useEffect, useState} from 'react';
import {APIResponse, Rate} from '../models/ApiResponse';

const usePriceTracker = () => {
  const [rates, setRate] = useState<{[key: string]: Rate} | null>(null);
  const [currencies, setCurrencies] = useState<string[]>([]);
  const [filteredRates, setFilteredRates] = useState<string[]>([]);
  const [searchInput, setSearchInput] = useState('');
  const [detailsRate, setDetailsRate] = useState<Rate>({rate: 0, key: ''});
  const [iconPair, setIconPair] = useState<string>('');

  const searchItems = (searchValue: string) => {
    setSearchInput(searchValue);
    if (searchInput !== '') {
      const filteredData = currencies.filter(item => {
        return item.toLowerCase().includes(searchInput.toLowerCase());
      });
      setFilteredRates(filteredData);
    } else {
      setFilteredRates(currencies);
    }
  };

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let apiUrl = 'https://staging-biz.coinprofile.co/v3/currency/rate';

    fetch(apiUrl)
      .then(res => {
        return res.json();
      })
      .then((data: APIResponse) => {
        console.log(Object.keys(data.data.rates));

        const apiRates = data.data.rates;
        // const mydata = ;
        const extractedCurrencies = Object.keys(data.data.rates);
        setCurrencies(() => extractedCurrencies);
        setRate(() => apiRates);
      })

      .catch(err => {
        console.log(err);
        setError('Error fetching rates from server : ' + err);
      });
  }, [error]);

  return {
    rates,
    error,
    currencies,
    searchItems,
    searchInput,
    filteredRates,
    setDetailsRate,
    detailsRate,
    iconPair,
    setIconPair,
  };
};

export default usePriceTracker;

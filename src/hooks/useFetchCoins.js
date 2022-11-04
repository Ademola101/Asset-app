import { useQuery } from '@tanstack/react-query';


export const useFetchCoins = () => {
  const { data, isLoading, isError } = useQuery(['coins'], () =>
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd').then((res) => res.json() ));

  return { data, isLoading, isError };
};


export const useFetchMarketData = (id) => {
  const { data, isLoading, isError } = useQuery(['marketData', id], () =>
    fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=1`).then((res) => res.json() ));

  return { data, isLoading, isError };
};
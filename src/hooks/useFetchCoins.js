import { useQuery } from '@tanstack/react-query';


export const useFetchCoins = () => {
  const { data, isLoading, isError } = useQuery(['coins'], () =>
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd').then((res) => res.json() ));

  return { data, isLoading, isError };
};
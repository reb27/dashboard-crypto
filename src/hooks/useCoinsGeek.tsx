import { useState, useEffect } from 'react';
import { CoinGeekService } from '../services';

//Return all the ten top coins
export const useCoinsGeek = () => {
  const [coins, setCoins] = useState<any[]>([]);
  
  const getTopCoins = useEffect(() => {
    CoinGeekService.getTopCoins().then((response) => {
      setCoins(response.data)
    }).catch((error) => {
      console.log(error)
    })
}, [])
  
  return {
    coins,
    getTopCoins
  };
};




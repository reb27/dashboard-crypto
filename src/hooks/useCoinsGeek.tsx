import { useState, useEffect } from "react";
import { CoinGeekService } from "../services";

//Return all the ten top coins
export const useCoinsGeek = () => {
  const [coins, setCoins] = useState<any[]>([]);

  const getTopCoins = useEffect(() => {
    CoinGeekService.getTopCoins()
      .then((response) => {
        setCoins(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return {
    coins,
    getTopCoins,
  };
};

export const getCoinById = (id: string) => {
  const [coin, setCoin] = useState<any[]>([]);

  const getCoinById = useEffect(() => {
    CoinGeekService.getCoinById(id)
      .then((response) => {
        setCoin(response.data);
      })
      .catch((error) => {
        console.info(error);
      });
  }, []);

  return {
    coin,
    getCoinById,
  };
};

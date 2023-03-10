import { Api } from "../providers";

const getTopCoins = () =>
  Api.get(
    "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
  );

const getCoinById = (id: string) => Api.get("coins/" + id);

export const CoinGeekService = {
  getTopCoins,
  getCoinById
};

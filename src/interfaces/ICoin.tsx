export interface ICoin {
    id: string;
    name: string;
    symbol: string;
    current_price: number;
    total_volume: number;
    market_cap: number;
    price_change_percentage_24h: number;
    image: string;
    market_cap_rank: number
}


export interface ICoinCard {
    name: string;
    current_price: number;
    price_change_percentage_24h: number;
}



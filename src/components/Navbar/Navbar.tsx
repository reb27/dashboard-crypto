import { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../Icon/Icon';
import { Logo } from '../Logo';
import { Button } from '../Button';
import { Input } from '../Input';
import { getCoinById } from "../../hooks";
import { debounce } from 'lodash';

interface NavItemProps {
  item: string;
  selected?: boolean;
  onClick: () => void;
}

const NavWrapper = styled.div`
  display: flex;
  background: #ffff;
  width: 100%;
  height: 65px;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 15px 70px 15px 70px;
  @media (max-width: 800px) {
    flex-direction: column;
    height: auto;
    font-size: 10px;
    padding: 10px;
    width: 100%;

  }
  @media (max-width: 1024px) {


  }
`;

const NavItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 28px;
  @media (max-width: 800px) {
    width: 100%;
    height: auto;
    font-size: 10px;
    padding: 10px;
    gap: 6px;


  }
  @media (max-width: 1024px) {


  }
`;

const NavSearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  @media (max-width: 800px) {
    width: 100%;
    font-size: 10px;
    gap: 6px;

  }
`;


const NavItem = ({ item, selected, onClick }: NavItemProps): JSX.Element => (
  <div>
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        position: 'relative',
        borderRight: '1px solid transparent',
      }}
    >
      <div>{item}</div>
      {selected && <Icon variant="notificacao" />}
    </div>
  </div>
);

const NavbarButton = styled(Button).attrs({ as: 'div' })`
`;

export const Navbar: React.FC = () => {
  const [selected, setSelected] = useState('');


  const handleItemClick = (item: string) => {
    setSelected(item);
  };

  // const callCoinGeckoAPI = (coinId:string) => {
  //   fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`)
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  //     .catch(error => console.error(error));
  // };
  
  // const handleInputChange = (newValue: string) => {
  //   callCoinGeckoAPI(newValue);
  //   console.log("entrei aqui")
  // };
  return (
    <NavWrapper>
      <Logo />
      <NavItemWrapper>
        <NavItem item="Cryptocurrencies" selected={selected === 'Cryptocurrencies'} onClick={() => handleItemClick('Cryptocurrencies')} />
        <NavItem item="Exchanges" selected={selected === 'Exchanges'} onClick={() => handleItemClick('Exchanges')} />
        <NavItem item="NFT" selected={selected === 'NFT'} onClick={() => handleItemClick('NFT')} />
        <NavItem item="CrypTown" selected={selected === 'CrypTown'} onClick={() => handleItemClick('CrypTown')} />
        <NavItem item="Portfolio" selected={selected === 'Portfolio'} onClick={() => handleItemClick('Portfolio')} />
        <NavItem item="Watchlist" selected={selected === 'Watchlist'} onClick={() => handleItemClick('Watchlist')} />
        <NavItem item="Products" selected={selected === 'Products'} onClick={() => handleItemClick('Products')} />
      </NavItemWrapper>
      <NavSearchWrapper>
        <NavbarButton variant="default">
          <Icon variant="diamond" />
          Log in
        </NavbarButton>
        <NavbarButton variant="primary">Sign up</NavbarButton>
        <Input  icon="search" placeholder="Buscar" />
      </NavSearchWrapper>

    </NavWrapper>
  );
};

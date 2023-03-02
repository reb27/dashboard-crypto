import { useState, useCallback, useEffect, Fragment } from 'react';

import { useCoinsGeek } from '../hooks';
import { Navbar } from '../components/Navbar/Navbar';
import { Text } from '../components/Text/Text';
import { Wrapper } from '../components/Wrapper/Wrapper';
import { Carousel } from '../components/Carousel/Carousel';
import { Table } from '../components/Table';


export const Home = () => {
  const { coins } = useCoinsGeek();

  const items = [
    {
      title: 'Card 1',
      description: 'Description for card 1',
      isActive: false
    },
    {
      title: 'Card 2',
      description: 'Description for card 1',
      isActive: true
    },
    {
      title: 'Card 3',
      description: 'Description for card 1',
      isActive: true
    },
    {
      title: 'Card 4',
      description: 'Description for card 1',
      isActive: true
    },
    {
      title: 'Card 5',
      description: 'Description for card 1',
      isActive: true
    },

    {
      title: 'Card 6',
      description: 'Description for card 1',
      isActive: true
    },

    {
      title: 'Card 7',
      description: 'Description for card 1',
      isActive: true
    },

    {
      title: 'Card 8',
      description: 'Description for card 1',
      isActive: true
    },

    {
      title: 'Card 9',
      description: 'Description for card 1',
      isActive: true
    },

    {
      title: 'Card 10',
      description: 'Description for card 1',
      isActive: true
    }
  ];





  return (
    <Wrapper
      width="100%"
      height="100%"
      display='flex'
    >
      <Navbar />
      <Wrapper >
        <Text>Preço das criptomoedas por valor de mercado</Text>
      </Wrapper>

      <Carousel
        cards={items}
      />
      <Table data={coins} />
    </Wrapper>




  );

};


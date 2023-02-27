import { useState, useCallback, useEffect } from 'react';

import {useCoinsGeek}  from '../hooks';
import { Row } from '../components/Navbar/Navbar';
import { Logo } from '../components/Logo/Logo';

export const Home = () => {
  const { coins } = useCoinsGeek();

  return (
    <Row>
      <Logo/>
    </Row>
    
  );
};
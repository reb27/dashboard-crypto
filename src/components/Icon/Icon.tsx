import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

type IconProps = {
  variant: string;
  imageLink?: string;
};

const StyledIcon = styled.img`
  width: 22px;
  height: 22px;
  &.notificacao {
    position: absolute;
    top: -12px;
    left: calc(100% - 5px);
    width: 11px;
    height: 11px;
    border-radius: 50%;
  }
`;

export const Icon: React.FC<IconProps> = ({ variant, imageLink }) => {
  const [iconSrc, setIconSrc] = useState();

  useEffect(() => {
    const mount = async () => {
      const result = await import(`../../../public/${variant}.svg`);
      if (result) {
        setIconSrc(result.default);
      }
    };

    mount();
  }, [variant]);


  if(variant == 'symbol') {
    return (
      <StyledIcon
        src={imageLink}
        alt="Coin Symbol"
      />
    );
  }

  return (
    <StyledIcon
      src={iconSrc}
      alt={variant}
      className={variant === 'notificacao' ? 'notificacao' : ''}
    />
  );
};




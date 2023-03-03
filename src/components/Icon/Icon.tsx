import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

type IconProps = {
  variant: string;
  imageLink?: string;
  width?: string;
  height?: string;
};



export const Icon: React.FC<IconProps> = ({ variant, imageLink, width, height }) => {

  const StyledIcon = styled.img`
  width: ${width || '22px'};
  height: ${height || '22px'};
  &.notificacao {
    position: absolute;
    top: -12px;
    left: calc(100% - 5px);
    width: 11px;
    height: 11px;
    border-radius: 50%;
  }
`;

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




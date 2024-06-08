import React from 'react';
import Reveal from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';

const moveUp = keyframes`
0%{
  opacity: 0;
  transform: translateY(0);
}
40%{
  opacity: 1;
  transform: translateY(-1.25rem);
}
100%{
  opacity: 1;
  transform: translateY(0);
}
`;

const CustomAnimation = ({ children }: any) => {
  return (
    <Reveal keyframes={moveUp} triggerOnce={true}>
      {children}
    </Reveal>
  );
};

export default CustomAnimation;

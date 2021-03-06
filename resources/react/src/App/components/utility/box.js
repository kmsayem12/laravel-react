import React from 'react';
import BoxTitleWrapper from './boxTitle';
import { BoxWrapper } from './styles/box.style';

export default props => (
  <BoxWrapper
    className={`${props.className} boxWrapper`}
    style={props.style}
  >
    <BoxTitleWrapper title={props.title} subtitle={props.subtitle} />
    {props.children}
  </BoxWrapper>
);

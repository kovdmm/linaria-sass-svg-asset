import { styled } from '@linaria/react';
import exampleIcon from '../icons/exampleIcon.svg';

const Icon = styled.div`
  width: 100px;
  height: 100px;
`;

export const ImportIcon = styled(Icon)`
  background: #f55 url(${exampleIcon});

  &:hover {
    background-color: #5f5;
  }
`;

export const InlineIcon = styled(Icon)`
  background: #ff5 url('../icons/exampleIcon.svg');

  &:hover {
    background-color: #5ff;
  }
`;
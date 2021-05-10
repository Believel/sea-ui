import React from 'react';
import { Button } from 'antd';
import { ButtonProps } from 'antd/lib/button';
import styled from 'styled-components';
import { generate } from '@ant-design/colors';

interface IButtonProps extends ButtonProps {
  color?: string;
}
let StyledComponent = styled(Button)``;
export default (props: IButtonProps) => {
  const { color, ...antdProps } = props;
  if (color) {
    const colors = generate(color);
    StyledComponent = styled(Button)`
      &.ant-btn-primary {
        background-color: ${colors[5]};
        border-color: ${colors[5]};
        &:hover,
        &:focus {
          background-color: ${colors[4]};
          border-color: ${colors[4]};
        }

        &:active,
        &.active {
          background-color: ${colors[6]};
          border-color: ${colors[6]};
        }
      }
    `;
  }
  return <StyledComponent {...antdProps} />;
};

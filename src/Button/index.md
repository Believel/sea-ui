## Button

Demo:

```tsx
/**
 * title: Button 组件
 * desc: 继承 antd button, 支持自定义配置按钮颜色
 */
import React from 'react';
// 使用当前的包名来引入
import { Button } from 'seaui';
import styled from 'styled-components';
import 'antd/dist/antd.less';

const Container = styled.div`
  button {
    margin-right: 20px;
  }
`;
export default () => (
  <Container>
    <Button key="primary" type="primary">
      Primary
    </Button>
    <Button key="link" type="link">
      Link
    </Button>
    <Button key="custom" type="primary" color="#92445a">
      Custom
    </Button>
  </Container>
);
```

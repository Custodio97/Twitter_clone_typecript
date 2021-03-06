import React from 'react';

import MenuBar from '../MenuBar';
import Main from '../Main';
import SideBar from '../Sidebar';

import { Container, Wrapper } from './style';

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <Main />
        <SideBar />
      </Wrapper>
    </Container>
  );
};

export default Layout;
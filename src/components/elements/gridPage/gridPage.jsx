import React from 'react';
import styled from 'styled-components';

import Grid from '../../shared/grid/grid';
import Cell from '../../shared/cell/cell';

const GridPage = () => {

  const Header = styled.div`
    background-color: blue;
    height: 100%;
  `

  const Main = styled.div`
    background-color: yellow;
    height: 100%;
  `

  const Sidebar = styled.div`
    background-color: red;
    height: 100%;
  `

  const Footer = styled.div`
    background-color: green;
    height: 100%;
  `

  return (
    <Grid
      columns="50px 50px 50px 50px"
      areas={[
      "header header header header",
      "main main . sidebar",
      "footer footer footer footer"
    ]}
    >
      <Cell area="header"><Header /></Cell>
      <Cell area="main"><Main /></Cell>
      <Cell area="sidebar"><Sidebar /></Cell>
      <Cell area="footer"><Footer /></Cell>
    </Grid>
  )
}

export default GridPage;
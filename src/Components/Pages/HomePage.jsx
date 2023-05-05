import React from 'react'
import Styles from "../Template"
import styled from "styled-components"

const MyFact = styled.li`
  font-size: 20px;
`;

const MyList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
`;

const HomePage = () => {
  return (
    <Styles>
      <MyList>
        <MyFact> I like kick-box </MyFact>
        <MyFact> I like swimming </MyFact>
        <MyFact> I like sport  </MyFact>
      </MyList>
    </Styles>
  );
};

export default HomePage;
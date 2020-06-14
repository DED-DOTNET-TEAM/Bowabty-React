import React from "react";
import styled from "styled-components";
const View = ({children}) => {
    return(
        <StyledView>{children}</StyledView>
    )
}
export default View;
const StyledView = styled.section`
  display: flex;
  justify-content: space-evenly;
  margin 0 20px;
  padding: 20px 0;
  height: fit-content;
  min-height:400px;
  align-items: center;
  background-color: #F6F4F5;
  flex-wrap: wrap;
`;
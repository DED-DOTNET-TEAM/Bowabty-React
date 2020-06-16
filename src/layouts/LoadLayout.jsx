import React from "react";
import styled from "styled-components";

const LoadLayout = () => {
  return (
    <StyledLoadLayout>
      <StyledHeader />
      <StyledNavigation />
      <StyledUserContent />
      <StyledPage />
    </StyledLoadLayout>
  );
};
export default LoadLayout;

export const StyledPage = styled.section`
  margin: 0 20px;
  height: 71vh;
  background-color: #f6f4f5;
`;
export const StyledLoadLayout = styled.main`
  letter-spacing: 0.2px;
  background-color: transparent;
  box-sizing: border-box;
  min-height: 92%;
`;
export const StyledHeader = styled.header`
  width: 100%;
  height: 72px;
  box-sizing: border-box;
  padding: 0px 30px;
  justify-content: space-between;
  text-align: center;
  display: inline-flex;
  flex-direction: row-reverse;
  flex-wrap: nowrap;
  user-select: none;
`;
export const StyledNavigation = styled.nav`
  justify-content: space-between;
  width: 100%;
  background-color: #3c4652;
  height: 6.3rem;
  box-shadow: 0px 7px 5px 0px rgba(0, 0, 0, 0.31);
  text-align: center;
  display: inline-flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;
export const StyledUserContent = styled.section`
  margin: 0;
  padding: 20px 50px 0px 50px;
  height: 99px;
  width: 100%;
  justify-content: space-around;
  text-align: center;
  display: inline-flex;
  flex-direction: row-reverse;
  flex-wrap: nowrap;
  box-sizing: border-box;
`;
export const StyledServicesContainer = styled.div`
  position: relative;
  margin: 15px 25px 22px 25px;
  background-color: #f6f4f5;
  padding: 30px 0px 0px 0px;
  transition: all 0.5s ease-in-out;
  height: 230px;
`;
export const StyledMyService = styled.div`
  display: inline-flex;
  flex-wrap: nowrap;
  direction: rtl;
  justify-content: space-around;
  height: 100%;
  min-height: 400px;
  max-height: 400px;
  align-items: center;
  padding: 50px 10px;
  width: 100%;
  background-color: #f6f4f5;
  box-sizing: border-box;
`;
export const StyledView = styled.section`
  margin 0 20px;
  height: 46%;
`;

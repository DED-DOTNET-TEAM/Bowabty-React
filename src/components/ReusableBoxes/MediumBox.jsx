import React, {useContext} from "react";
import styled from "styled-components";
import 'react-multi-carousel/lib/styles.css';
import {DiractionContext} from "../../contexts/DiractionContext";
import { device } from "../../device";

 const MediumBox = ({children, ...rest}) => {
    const [isLTR] = useContext(DiractionContext);
    console.log("MediumBox rerendred")
    return (
        <StyledInner {...rest} isLTR={isLTR}>
            {children}
        </StyledInner>
    );
}
export default MediumBox;

const StyledInner = styled.div`
    height: 320px;
    margin: 20px 0;
    width: 45%;
    min-width: 45%;
    direction: rtl;
    box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.09);
    background-color: white;
    border-radius: 15px;
    z-index: 0;
    ${ ({
        isLTR}) => isLTR && ` direction: ltr;
        `}
    border-bottom: 6px solid ${props => props.primary
        ? "#3497DB"
        : "#000000"};
     @media ${device.mobileL} {
         margin-top:10px;
         width: 100%;
         height: fit-content;
       };
       @media ${device.tablet} {
         height: 340px;
       };
  `;
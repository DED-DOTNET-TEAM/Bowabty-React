import React, {useContext} from "react";
import Carousel from "react-multi-carousel";
import styled from "styled-components";
import { Link } from "react-router-dom";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    }
  };
  const StyledElement = styled.div`
  width: 135px;
  height: 160px;
  display: block;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.05);

  &:hover {
    filter: grayscale(80%);
    transition: all 0.5s;
  }
`;
const StyledElementTitle= styled.div`
  display: inline;
`;
const StyledDescription = styled.div`
  display: inline;
  overflow-wrap: break-word;
`;
const Styledh6 = styled.h6`
  font-size: calc(4px + 0.4vw);
  opacity: 0.6;
  color: black
`;
const Styledh5 = styled.h5`
  -webkit-text-stroke: 0.5px black !important;
  -webkit-text-fill-color: black !important;
  font-size: 15px;
`;
const ServicesCarousel = ({ deviceType, list}) => {
  const itemsList = useContext(list);
    return (
      <Carousel
        autoPlay
        infinite={true}
        autoPlaySpeed={2500}
        centerMode={true}
        deviceType="desktop"
        itemClass="image-item"
        sliderClass="carousel-slider"
        responsive={responsive}
      >
        {itemsList.slice(0, itemsList.length).map((item, index) => {
          return (
            <StyledElement key={index}>
            <Link to={"/ServiceID="+index}>  
                <div style={{padding: `30px 30px 0px 30px`}}>
                <img src={item.Icon} alt="" width="42" />
                </div>
            <StyledElementTitle className="element-title">
              <Styledh5 className="bold-text">
                 {item.Title}
               </Styledh5>
             </StyledElementTitle>
            <StyledDescription className="element-description">
              <Styledh6 dir="auto">
              {item.Description}
               </Styledh6>
             </StyledDescription> 
            </Link>
            </StyledElement>
          );
        })}
      </Carousel>
    );
  };
  
  export default ServicesCarousel;
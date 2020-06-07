import React, {useState, useEffect, useContext} from "react";
import styled from "styled-components";
import { useTranslation, Trans } from "react-i18next";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faLifeRing,
    faTasks,
    faBatteryHalf,
    faCog,
    faInfo,
    faSlidersH
} from '@fortawesome/free-solid-svg-icons';
import {faFileAlt} from '@fortawesome/free-regular-svg-icons';

import {faYoutube, faFacebookF, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {Link} from "react-router-dom";
import Tab from "./tab";
import Dropdown from "./dropdown";
import {DropdownItem} from 'reactstrap';
import {DiractionContext} from "../../contexts/DiractionContext";

const StyledNavigation = styled.nav `
    justify-content: space-between;
    width: 100%;
    background-color: #3C4652;
    height: 66px;
    box-shadow: 0px 7px 5px 0px rgba(0, 0, 0, 0.31);
    text-align: center;
    display: inline-flex;
    flex-direction: row-reverse;
    flex-wrap: nowrap;
    ${({ isLTR }) => isLTR && `
    direction: rtl;
  `}

`;
const StyledRightSection = styled.div `
    display: inline-flex;
    justify-content: space-around;
    flex-direction: row-reverse;
    flex-wrap: nowrap;
    
`;
const StyledLeftSection = styled.div `
    clear: both;
    display: inline-flex;
    flex-direction: row-reverse;
    flex-wrap: nowrap;
`;
const StyledNavTab = styled.div `
    margin: 1px 7px;
    background: transparent;
    text-decoration: none;
    color: white;
    outline: none !important;
    border: none !important;
    min-width: 90px;
    transition: all 0.5s;
    padding: 6px 12px;
    & > * {
        color: white;
        outline: none;
        border: none;
    }
    &:hover  {
        outline: none;
        border: none;
        background-color: #fff;
        border-radius: 5px;
      }
      &:hover > * {
        color: black !important;
      }
    &:focus{
        background-color: #fff !important;
        color: black !important;
        border-radius: 5px;
        outline: none !important;
        border: none !important;
      }
`;
const StyledDropdown = styled.div`
    margin: 1px 7px;
`;
const StyledSocialBox = styled.div `
    justify-content: space-around;
    display: inline-flex;
    flex-direction: row-reverse;
    flex-wrap: nowrap;
    

    width: 200px;
    & > div {
        max-width: 35px;
    }
`;
const StyledSocialPosition = styled.div `
    display: block;
    width: 70px;
    color: white;
    line-height: 4.5;
    & > i {
        font-size: 25px;  
    }
    & > * {
        color: white;
    }
`;
const StyledLangaugeBox = styled.div `
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    min-width: 110px;
    
    & > i{
        font-size: 16.2px;
        transition: all 0.1s;
        box-shadow: -10px 35px 46px -12px rgba(0,0,0,0.75);
    }
`;
const StyledVerticalLine = styled.div `
    margin-top: 20px;
    opacity: 0.4;
    border-left: 1px solid #F6F4F5;
    height: 30px;
`;
const StyledLangaugePosition = styled.div `
    line-height: 4.6 !important;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    & > * {
        color: white;
    }
`;
const DropItem ={
    color: 'black',
    width: '100%',
    padding: '12px 16px',
    textDecoration: 'none',
    display: 'block',
    textAlign: 'right',
    border:'none',
    borderBottom: '2px dashed #C0C0C0',
}
const LinkStyles = {
    textDecoration: 'none',
    color: 'black',
}
const Navigation = () => {
    console.log("Navigation rerendred")
    const { t, i18n } = useTranslation();
    const [ lng, setLng] = useState('ar');
    const [isLTR, setIsLTR] = useContext(DiractionContext);
    const changeLanguage = () => {
        setLng(lng === 'ar' ? 'en' : 'ar');
        setIsLTR(isLTR === true ? false : true )
      };
    useEffect(()=>{
        if (i18n.language === lng) return;
        i18n.changeLanguage(lng);
        console.log("Navigation rerendred useeffect")
    },[lng]);

    return (
        <StyledNavigation isLTR={isLTR}>
            <StyledRightSection>
                <StyledNavTab >
                    <Tab path={"/meeting"} icon={faLifeRing} text={ <Trans i18nKey={"navigation.meetings"} t={t} >الإجتماعات</Trans>}/>
                </StyledNavTab>
                <StyledDropdown>
                    <Dropdown icon={faTasks}  text={ <Trans i18nKey={"navigation.tasks.name"} t={t}>المهام</Trans>}>
                        <DropdownItem style={DropItem}>
                            <Link style={LinkStyles} to="/1" >اختيار</Link>
                        </DropdownItem>
                        <DropdownItem divider/>
                        <DropdownItem style={DropItem}>
                            <Link style={LinkStyles} to="/1" >اختيار</Link>
                        </DropdownItem>
                        <DropdownItem divider/>
                        <DropdownItem style={DropItem}>
                            <Link style={LinkStyles} to="/1" >اختيار</Link>
                        </DropdownItem>
                        <DropdownItem divider/>
                    </Dropdown>
                </StyledDropdown>
                <StyledNavTab>
                    <Tab path={"/myorders"} icon={faBatteryHalf} text={ <Trans i18nKey={"navigation.myOrders"} t={t} >طلباتي</Trans>}/>
                </StyledNavTab>
                <StyledDropdown >
                    <Dropdown icon={faCog} text={ <Trans i18nKey={"navigation.administration.name"} t={t}>إدارة النظام</Trans>}>
                        <DropdownItem style={DropItem}>
                            <Link style={LinkStyles} to="/user" >المستخدم</Link>
                        </DropdownItem >
                        <DropdownItem divider/>
                        <DropdownItem style={DropItem}>
                            <Link style={LinkStyles} to="/useroles" >صلاحيات المستخدم</Link>
                        </DropdownItem>
                        <DropdownItem divider/>
                    </Dropdown>
                </StyledDropdown>
                <StyledDropdown >
                    <Dropdown icon={faInfo} text={ <Trans i18nKey={"navigation.others.name"} t={t}>أخرى</Trans>}>
                        <DropdownItem style={DropItem}>
                            <Link style={LinkStyles} to="/user" >المستخدم</Link>
                        </DropdownItem>
                        <DropdownItem divider/>
                        <DropdownItem style={DropItem}>
                            <Link style={LinkStyles} to="/useroles" >صلاحيات المستخدم</Link>
                        </DropdownItem>
                    </Dropdown>
                </StyledDropdown>
                <StyledDropdown>
                    <Dropdown icon={faFileAlt} text={ <Trans i18nKey={"navigation.reports.name"} t={t}>إدارة النظام</Trans>}>
                        <DropdownItem style={DropItem}>
                            <Link style={LinkStyles} to="/user" >المستخدم</Link>
                        </DropdownItem>
                        <DropdownItem divider/>
                        <DropdownItem style={DropItem}>
                            <Link style={LinkStyles} to="/useroles" >صلاحيات المستخدم</Link>
                        </DropdownItem>
                    </Dropdown>
                </StyledDropdown>
            </StyledRightSection>
            <StyledLeftSection>
                <StyledSocialBox>
                    <StyledSocialPosition>
                        <Link   className="social-icon" to="/">
                            <FontAwesomeIcon  size="1x" icon={faYoutube}>
                                
                            </FontAwesomeIcon>
                        </Link>
                    </StyledSocialPosition>
                    <StyledSocialPosition>
                        <Link  className="social-icon" to="/">
                            <FontAwesomeIcon  size="1x" icon={faInstagram}/>
                        </Link>
                    </StyledSocialPosition>
                    <StyledSocialPosition>
                        <Link  className="social-icon" to="/">
                            <FontAwesomeIcon  size="1x" icon={faTwitter}/>
                        </Link>
                    </StyledSocialPosition>
                    <StyledSocialPosition>
                        <Link  className="social-icon" to="/">
                            <FontAwesomeIcon size="1x" icon={faFacebookF}/>
                        </Link>
                    </StyledSocialPosition>
                </StyledSocialBox>
                <StyledLangaugeBox>
                    <StyledVerticalLine/>
                    <StyledLangaugePosition className="langauge-select">
                        <i  onClick={changeLanguage} ><Trans i18nKey={"navigation.language"} t={t}>English</Trans></i>
                    </StyledLangaugePosition>
                    <StyledVerticalLine/>
                </StyledLangaugeBox>
                <StyledNavTab>
                    <Tab path={"/"} icon={faSlidersH} text={<Trans i18nKey={"navigation.settings"} t={t}>الاعدادات</Trans>} />
                </StyledNavTab>
            </StyledLeftSection>
        </StyledNavigation>
    );
}
export default Navigation;
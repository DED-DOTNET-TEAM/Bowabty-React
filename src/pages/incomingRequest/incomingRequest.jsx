import React, {useContext, useEffect}  from "react";
import ODataStore from "devextreme/data/odata/store";
import styled from "styled-components";
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import {TitleContext} from "../../contexts/TitleContext";
import {useTranslation} from "react-i18next";
import DataGrid, {
    Column,
    Grouping,
    GroupPanel,
    Pager,
    Paging,
    SearchPanel
  } from "devextreme-react/data-grid";

    
  const renderCelleHeader = (data) => {
    return <StyledHeader>{data.column.caption}</StyledHeader>;
  }
  const renderGridCell = (data) => {
  return <StyledCell>{data.text}</StyledCell>;
  }
  const renderGridLastCell = (data) => {
  return <StyledLastCell>{data.text}</StyledLastCell>;
  }

  const IncomingRequest = () => {
    console.log("IncomingRequest rerendred")
    const [Title, setTitle] = useContext(TitleContext);
    const {t} = useTranslation();   
          useEffect(()=>{
            if(Title !==t("IncomingRequest:title")){
                setTitle(t("IncomingRequest:title"))
            }
        })
      return (
          <StyledPage>
          <StyledContainer>
            <StyledMdContainer  className="dx-viewport">
            <div className="demo-container">
                <DataGrid
                dataSource={testdata}
                showColumnLines={false}
                // showRowLines={true}
                allowColumnReordering={true}
                // showBorders={true}
                rtlEnabled={true}
                ShowHorizontalLines={false}
                // rowAlternationEnabled={true}
                
                >
                <GroupPanel visible={true} emptyPanelText={t('IncomingRequest:emptyPanelText')}/>
                <SearchPanel visible={true} highlightCaseSensitive={true} placeholder={t('IncomingRequest:placeholder')}/>
                {/* <Grouping autoExpandAll={true} /> */}
    
                {/* <Column dataField="الطلب" groupIndex={0} /> */}
                <Column caption={t('IncomingRequest:orderNumber')}  alignment={"center"} headerCellRender={renderCelleHeader} cellRender={renderGridCell} dataField="orderNumber" dataType="number" width={150} />
                <Column caption={t('IncomingRequest:orderType')}  alignment={"center"} headerCellRender={renderCelleHeader} cellRender={renderGridCell} dataField="orderType" dataType="string" />
                <Column caption={t('IncomingRequest:orderDetails')}  alignment={"center"} headerCellRender={renderCelleHeader} cellRender={renderGridCell} dataField="orderDetails" dataType="string" />
                <Column caption={t('IncomingRequest:OrderDate')}  alignment={"center"} headerCellRender={renderCelleHeader} cellRender={renderGridCell} dataField="orderDate" dataType="date" />
                <Column caption={t('IncomingRequest:issuerName')}  alignment={"center"} headerCellRender={renderCelleHeader} cellRender={renderGridCell} dataField="issuerName" dataType="string" />
                <Column caption={t('IncomingRequest:orderStatus')}  alignment={"center"} headerCellRender={renderCelleHeader} cellRender={renderGridLastCell} dataField="orderStatus" dataType="string"/>
    
                {/* <Pager allowedPageSizes={pageSizes} showPageSizeSelector={true} /> */}
                <Paging defaultPageSize={8} />
                </DataGrid>
            </div>
            </StyledMdContainer>
        </StyledContainer>
        </StyledPage>
      );
    }
  export default IncomingRequest;
  
  const pageSizes = [10, 25, 50, 100];
  const testdata = [
    {
      "orderNumber": "32131",
      "orderType": "القرطاسية",
      "orderDetails": "طلب آلة حاسبة",
      "orderDate":"21/12/2018",
      "issuerName": "فادي محمد احمد",
      "orderStatus": "تم الإغلاق ✔"
    },
    {
      "orderNumber": "42343",
      "orderType": "الصيانة لمكتبي",
      "orderDetails": "إنارة",
      "orderDate": "25/12/2018",
      "issuerName": "مصطفى خالد ايماعيل",
      "orderStatus": "تحت الإجراء ⏳"
    },
    {
      "orderNumber": "34342",
      "orderType": "طلبات متنوعة",
      "orderDetails": "حجز عزبة عوافي",
      "orderDate": "01/11/2018",
      "issuerName": "محمد علي باشا",
      "orderStatus": "منجز ❕"
    },
    {
      "orderNumber": "32131",
      "orderType": "الموارد البشرية",
      "orderDetails": "شهادة راتب",
      "orderDate": "05/11/2018",
      "issuerName": "يزن محمد احمد",
      "orderStatus": "تحت الإجراء ⏳"
    },
    {
      "orderNumber": "32131",
      "orderType": "القرطاسية",
      "orderDetails": "طلب آلة حاسبة",
      "orderDate":"21/12/2018",
      "issuerName": "فادي محمد احمد",
      "orderStatus": "تم الإغلاق ✔"
    },
    {
      "orderNumber": "42343",
      "orderType": "الصيانة لمكتبي",
      "orderDetails": "إنارة",
      "orderDate": "25/12/2018",
      "issuerName": "مصطفى خالد ايماعيل",
      "orderStatus": "تحت الإجراء ⏳"
    },
    {
      "orderNumber": "34342",
      "orderType": "طلبات متنوعة",
      "orderDetails": "حجز عزبة عوافي",
      "orderDate": "01/11/2018",
      "issuerName": "محمد علي باشا",
      "orderStatus": "منجز ❕"
    },
    {
      "orderNumber": "32131",
      "orderType": "الموارد البشرية",
      "orderDetails": "شهادة راتب",
      "orderDate": "05/11/2018",
      "issuerName": "يزن محمد احمد",
      "orderStatus": "تحت الإجراء ⏳"
    },
    {
      "orderNumber": "32131",
      "orderType": "القرطاسية",
      "orderDetails": "طلب آلة حاسبة",
      "orderDate":"21/12/2018",
      "issuerName": "فادي محمد احمد",
      "orderStatus": "تم الإغلاق ✔"
    },
    {
      "orderNumber": "42343",
      "orderType": "الصيانة لمكتبي",
      "orderDetails": "إنارة",
      "orderDate": "25/12/2018",
      "issuerName": "مصطفى خالد ايماعيل",
      "orderStatus": "تحت الإجراء ⏳"
    },
    {
      "orderNumber": "34342",
      "orderType": "طلبات متنوعة",
      "orderDetails": "حجز عزبة عوافي",
      "orderDate": "01/11/2018",
      "issuerName": "محمد علي باشا",
      "orderStatus": "منجز ❕"
    },
    {
      "orderNumber": "32131",
      "orderType": "الموارد البشرية",
      "orderDetails": "شهادة راتب",
      "orderDate": "05/11/2018",
      "issuerName": "يزن محمد احمد",
      "orderStatus": "تحت الإجراء ⏳"
    },
  ];

  const StyledPage = styled.div`
  margin: 0 20px;
  height: 71%;
`;
const StyledContainer = styled.div`
  display: inline-flex;
  flex-wrap: nowrap;
  direction: rtl;
  justify-content: space-around;
  height: 69vh;
  min-height:69vh;
  max-height:69vh;
  padding: 50px 10px;
  width: 100%;
  background-color: #F6F4F5;
  box-sizing: border-box;
  margin 0 auto;
`;
const StyledMdContainer = styled.div`
  height: fit-content;
  min-height: 300px;
  width: 80%;
  padding: 20px;
  min-width: 45%;
  height: initial;
  box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.09);
  background-color: white;
  border-radius: 15px;
  z-index: 0;
  border-bottom: 6px solid ${props => props.primary
      ? "#3497DB"
      : "#000000"};
`;
const StyledCell = styled.div`
  color: #6F6F6F;
  font-weight: 300;
  padding: 7px 0;
  border:none;
  background:#f5f5f5;
  font-family: 'Cocon Next Arabic', Sans-Serif;
`; 
const StyledLastCell = styled.div`
  color: #6F6F6F;
  font-weight: 300;
  padding: 7px 0;
  margin:0 30px;
  border:none;
  background:#f5f5f5;
  font-family: 'Cocon Next Arabic', Sans-Serif;
`; 
const StyledHeader = styled.p`
color: #333;
font-weight: 300;
border:none;
font-size:15px;
font-family: 'Cocon Next Arabic', Sans-Serif;
`; 
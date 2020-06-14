import React, {useContext, useEffect}  from "react";
import styled from "styled-components";
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import {TitleContext} from "../../contexts/TitleContext";
import {useTranslation} from "react-i18next";
import DataGrid, { Column, GroupPanel, Paging, SearchPanel} from "devextreme-react/data-grid";

  const renderCelleHeader = (data) => {
    return <StyledHeader>{data.column.caption}</StyledHeader>;
  }
  const renderGridCell = (data) => {
  return <StyledCell>{data.text}</StyledCell>;
  }
  const renderGridLastCell = (data) => {
  return <StyledLastCell>{data.text}</StyledLastCell>;
  }

  const MyOrders = () => {
    console.log("myOrders rerendred")
    const [Title, setTitle] = useContext(TitleContext);
    const {t} = useTranslation();   
          useEffect(()=>{
            if(Title !==t("myOrders:title")){
                setTitle(t("myOrders:title"))
            }
        })
      return (
            <StyledMdContainer  className="dx-viewport">
            <div className="demo-container">
            <DataGrid
                width={870}
                dataSource={testdata}
                showColumnLines={false}
                // showRowLines={true}
                allowColumnReordering={true}
                // showBorders={true}
                rtlEnabled={true}
                ShowHorizontalLines={false}
                // rowAlternationEnabled={true}
                
                >
                <GroupPanel visible={true} emptyPanelText={t('myOrders:emptyPanelText')}/>
                <SearchPanel visible={true} highlightCaseSensitive={true} placeholder={t('myOrders:placeholder')}/>
                {/* <Grouping autoExpandAll={true} /> */}
    
                {/* <Column dataField="الطلب" groupIndex={0} /> */}
                <Column caption={t('IncomingRequest:orderNumber')}  alignment={"right"} dataField="orderNumber" dataType="number" width={100} />
                <Column caption={t('IncomingRequest:orderType')}  alignment={"right"} dataField="orderType" dataType="string" width={150}/>
                <Column caption={t('IncomingRequest:orderDetails')}  alignment={"right"}  dataField="orderDetails" dataType="string" width={150}/>
                <Column caption={t('IncomingRequest:OrderDate')}  alignment={"right"} dataField="orderDate" dataType="date" width={150} />
                <Column caption={t('IncomingRequest:issuerName')}  alignment={"right"}  dataField="issuerName" dataType="string" width={170}/>
                <Column caption={t('IncomingRequest:orderStatus')}  alignment={"center"}  dataField="orderStatus" dataType="string" width={150}/>
                {/* <Pager allowedPageSizes={pageSizes} showPageSizeSelector={true} /> */}
                <Paging defaultPageSize={8} />
                </DataGrid>
            </div>
            </StyledMdContainer>
      );
    }
  export default MyOrders;

  // const pageSizes = [10, 25, 50, 100];
  const testdata = [
    {
      "orderNumber": "32131",
      "orderType": "القرطاسية",
      "orderDetails": "طلب آلة حاسبة",
      "orderDate":"21/12/2018",
      "issuerName": "فادي محمد احمد",
      "orderStatus": "تم الإغلاق"
    },
    {
      "orderNumber": "42343",
      "orderType": "الصيانة لمكتبي",
      "orderDetails": "إنارة",
      "orderDate": "25/12/2018",
      "issuerName": "مصطفى خالد ايماعيل",
      "orderStatus": "تحت الإجراء "
    },
    {
      "orderNumber": "34342",
      "orderType": "طلبات متنوعة",
      "orderDetails": "حجز عزبة عوافي",
      "orderDate": "01/11/2018",
      "issuerName": "محمد علي باشا",
      "orderStatus": "منجز "
    },
    {
      "orderNumber": "32131",
      "orderType": "الموارد البشرية",
      "orderDetails": "شهادة راتب",
      "orderDate": "05/11/2018",
      "issuerName": "يزن محمد احمد",
      "orderStatus": "تحت الإجراء "
    },
    {
      "orderNumber": "32131",
      "orderType": "القرطاسية",
      "orderDetails": "طلب آلة حاسبة",
      "orderDate":"21/12/2018",
      "issuerName": "فادي محمد احمد",
      "orderStatus": "تم الإغلاق "
    },
    {
      "orderNumber": "42343",
      "orderType": "الصيانة لمكتبي",
      "orderDetails": "إنارة",
      "orderDate": "25/12/2018",
      "issuerName": "مصطفى خالد ايماعيل",
      "orderStatus": "تحت الإجراء "
    },
    {
      "orderNumber": "34342",
      "orderType": "طلبات متنوعة",
      "orderDetails": "حجز عزبة عوافي",
      "orderDate": "01/11/2018",
      "issuerName": "محمد علي باشا",
      "orderStatus": "منجز "
    },
    {
      "orderNumber": "32131",
      "orderType": "الموارد البشرية",
      "orderDetails": "شهادة راتب",
      "orderDate": "05/11/2018",
      "issuerName": "يزن محمد احمد",
      "orderStatus": "تحت الإجراء "
    },
    {
      "orderNumber": "32131",
      "orderType": "القرطاسية",
      "orderDetails": "طلب آلة حاسبة",
      "orderDate":"21/12/2018",
      "issuerName": "فادي محمد احمد",
      "orderStatus": "تم الإغلاق "
    },
    {
      "orderNumber": "42343",
      "orderType": "الصيانة لمكتبي",
      "orderDetails": "إنارة",
      "orderDate": "25/12/2018",
      "issuerName": "مصطفى خالد ايماعيل",
      "orderStatus": "تحت الإجراء"
    },
    {
      "orderNumber": "34342",
      "orderType": "طلبات متنوعة",
      "orderDetails": "حجز عزبة عوافي",
      "orderDate": "01/11/2018",
      "issuerName": "محمد علي باشا",
      "orderStatus": "منجز"
    },
    {
      "orderNumber": "32131",
      "orderType": "الموارد البشرية",
      "orderDetails": "شهادة راتب",
      "orderDate": "05/11/2018",
      "issuerName": "يزن محمد احمد",
      "orderStatus": "تحت الإجراء "
    },
  ];
const StyledMdContainer = styled.div`
  height: fit-content;
  min-height: 540px;
  padding: 20px 20px 0 20px;
  margin-top:40px;
  box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.09);
  background-color: white;
  border-radius: 15px;
  z-index: 0;
  border-bottom: 6px solid ${props => props.primary
      ? "#3497DB"
      : "#000000"};
    .dx-pages, .dx-group-panel-message, .dx-texteditor-input, .dx-placeholder{
      font-family: 'CoconNextArabic-Bold', Sans-Serif;
    }
    .x-datagrid-headers{
      border: none !important;
    }
    .dx-datagrid-nowrap{
      border: none !important;
    }
    .dx-datagrid-headers .dx-datagrid-table .dx-row > td {
      border: none !important;
      border-bottom: #333 solid 1px !important;
    }
    .dx-datagrid-header-panel {
      border: none !important;
    }
    .dx-datagrid-header-panel .dx-toolbar {
      margin-bottom: 0px !important;
    }
    .dx-datagrid .dx-row > td{
      padding: 7px 0;
    }
    .dx-datagrid .dx-row > td {
      padding: 7px 0; 
    } 
    .dx-datagrid-headers .dx-datagrid-table .dx-row > td { 
      padding-bottom:0;
    }
`;
const StyledCell = styled.div`
  color: #6F6F6F;
  font-weight: 300;
  padding: 7px 4px;
  border:none;
  background:#f5f5f5;
  font-family: 'CoconNextArabic-Bold', Sans-Serif ;
`; 
const StyledLastCell = styled.div`
  color: #6F6F6F;
  font-weight: 300;
  padding: 7px 0;
  margin:0 5px 0 0;
  border:none;
  background:#f5f5f5;
  font-family: 'CoconNextArabic-Bold', Sans-Serif ;
`; 
const StyledHeader = styled.p`
color: #333;
font-weight: 300;
padding: 0 4px;
border:none;
font-size:15px;
font-family: 'CoconNextArabic-Bold', Sans-Serif;
`; 
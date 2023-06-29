import React from 'react';
import { Breadcrumb, Divider, Layout, Menu, theme } from 'antd';
import netflixImage from "../images/netflixlogo.png";
import "./homelayout.css";
import CarouselPrepare from '../CarouselMakers/CarouselPrepare';
const { Header, Content, Footer } = Layout;

const HomeLayout = ({netflixData}) => {


  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          background: "#4e4e4e",
          height: "89px"
        }}
      >
        <div className="demo-logo" >
            <img src={netflixImage}></img>
        </div>
       
      </Header>
      <Content className="site-layout" style={{ padding: '0 50px' }}>
       
        <div style={{ padding: 24, minHeight: 380}}>
            {netflixData && Object.keys(netflixData).length && Object.keys(netflixData).map(e=>{
                return (
                    <div>
                        <CarouselPrepare  categoryData = {netflixData[e]} categoryName = {e.toUpperCase().replace("_", " ")}/>
                        <Divider></Divider>
                    </div>
                    
                )
            })}
           
            
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  );
};

export default HomeLayout;
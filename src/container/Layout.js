import React from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import  "../App.css";
import Searchbar from "../component/searchbar"; 
import RecipeList from "../container/recipeList";

const { Header, Content, Footer } = Layout;

const CustomLayout = () =>{
    return(

    <Layout className="layout">
        <Header>
            <div className="logo" />
            <Menu  className="homeMenu" theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">Home</Menu.Item>
                <Menu.Item key="2">About</Menu.Item>
                <Menu.Item key="3">Contact</Menu.Item>
            </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content">
                <Searchbar />
                <RecipeList/>
            </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Recipe App ©2020 Created </Footer>
  </Layout>


    );
}
export default CustomLayout;
  





  
import React, {Component} from 'react';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import {Button} from 'antd';
import {Layout, Menu, Breadcrumb, Icon,Modal,message,Popover} from 'antd';
import './App.css';
import SpiderForm from './Spider/SpiderForm';
import SpiderState from './Spider/SpiderState';
const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;


@observer
class App extends Component {

    showModal = () => {
        //this.refs.spiderForm.setProps({spiderState:new SpiderState()});
        this.props.appState.setVisible(true)
    }

    render() {
        return (
            <Layout>
                <Header className="header">
                    <div className="logo"/>
                </Header>
                <Layout>
                    <Sider width={200} style={{background: '#fff'}}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['16']}
                            defaultOpenKeys={['sub1']}
                            style={{height: '100%'}}
                            onClick={({item, key, keyPath})=>{ message.info(keyPath)}}
                        >
                            <SubMenu key="sub1" title={<span><Icon type="user"/>配置5</span>}>
                                <Menu.Item key="1">option1</Menu.Item>
                                <Menu.Item key="2">option{this.props.appState.timer}</Menu.Item>
                                <Menu.Item key="3">option3</Menu.Item>
                                <Menu.Item key="4">option4</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span>
                                <Popover
                                content={<a onClick={this.showModal}>新建爬虫</a>}
                                trigger="hover"
                                placement="rightTop"
                            >
                            <Icon type="laptop"/>应用
                          </Popover></span>}>
                                <Menu.Item key="5">option5</Menu.Item>
                                <Menu.Item key="6">option6</Menu.Item>
                                <Menu.Item key="7">option7</Menu.Item>
                                <Menu.Item key="8">option8</Menu.Item>
                                <SubMenu key="sub3" title={<span>subnav 3</span>}>
                                    <Menu.Item key="9">option9</Menu.Item>
                                    <Menu.Item key="10">option10</Menu.Item>
                                    <Menu.Item key="11">option11</Menu.Item>
                                    <Menu.Item key="12">option12</Menu.Item>
                                    <SubMenu key="sub4" title={<span>subnav 3</span>}>
                                        <Menu.Item key="13">option9</Menu.Item>
                                        <Menu.Item key="14">option10</Menu.Item>
                                        <Menu.Item key="15">option11</Menu.Item>
                                        <Menu.Item key="16">option12</Menu.Item>
                                    </SubMenu>
                                </SubMenu>
                            </SubMenu>

                        </Menu>
                    </Sider>
                    <Layout style={{padding: '0 24px 24px'}}>
                        <Breadcrumb style={{margin: '12px 0'}}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 280}}>
                            Content
                        </Content>
                    </Layout>
                </Layout>

                <SpiderForm ref="spiderForm" appState={this.props.appState} />
                <DevTools />
            </Layout>
        );
    }

    onReset = () => {
        this.props.appState.resetTimer();
    }
}
;

export default App;

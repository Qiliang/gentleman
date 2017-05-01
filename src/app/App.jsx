import React, {Component} from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import {Button} from 'antd';
import {Layout, Menu, Breadcrumb, Icon, Modal, message, Popover} from 'antd';
import _ from 'lodash';
import './App.css';
import SpiderForm from './Spider/SpiderForm';
import SpiderCodeForm from './Spider/SpiderCodeForm';
const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;


@observer
class App extends Component {

    showSpiderForm = () => {
        this.refs.spiderForm.show();
    }

    showSpiderCodeForm = () => {
        this.refs.spiderCodeForm.show();
    }

    async componentDidMount() {
        await this.props.appState.refreshSpider();
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
                            onClick={({item, key, keyPath}) => {
                                message.info(keyPath)
                            }}
                        >
                            <SubMenu key="sub1" title={<span><Icon type="user"/>配置5</span>}>
                                <Menu.Item key="1">option1</Menu.Item>
                                <Menu.Item key="2">option{this.props.appState.timer}</Menu.Item>
                                <Menu.Item key="3">option3</Menu.Item>
                                <Menu.Item key="4">option4</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={<Popover
                                    content={<a onClick={this.showSpiderForm}><Icon type="plus-circle-o" />爬虫</a>}
                                    trigger="hover"
                                    placement="rightTop"
                                >
                            <Icon type="laptop"/>应用
                          </Popover>}>
                                {
                                    _.map(this.props.appState.spiders, (item, index) =>
                                        (
                                            <SubMenu key={item.name}
                                                     title={
                                                          <Popover
                                                              content={<a onClick={this.showSpiderCodeForm}><Icon type="plus-circle-o" />脚本</a>}
                                                              trigger="hover"
                                                              placement="rightTop">
                                                              <Icon type="schedule"/>{item.name}</Popover>}></SubMenu>
                                        )
                                    )
                                }
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

                <SpiderForm ref="spiderForm" appState={this.props.appState}/>
                <SpiderCodeForm ref="spiderCodeForm"  appState={this.props.appState}/>
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

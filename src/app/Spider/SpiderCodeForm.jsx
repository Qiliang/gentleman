import React, {Component} from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import http from '../http';
import {Form, Icon, Input, Button, Modal} from 'antd';

const FormItem = Form.Item;


function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

@observer
class SpiderCodeForm extends Component {

    @observable spiderCodeName = 'abc';
    @observable visible = false;

    show = () => {
        this.visible = true;
    }
    handleOk = (e) => {
        this.visible = false;
    }
    handleCancel = (e) => {
        this.visible = false;
    }

    componentDidMount() {
        //this.props.form.validateFields();
    }

    handleSubmit = async (e) => {
        //let response = await http.post('/api/spiders', {name: this.spiderName});
        console.log(response)
        this.visible = false;
    }



    render() {
        return (
            <Modal title="爬虫脚本" visible={this.visible} footer={null}
                   onOk={this.handleOk} onCancel={this.handleCancel}
            >
                <div>
                    <FormItem>
                        <Input prefix={<Icon type="user"
                                             style={{fontSize: 13}}/>} value={this.spiderCodeName}
                               onChange={({target}) =>this.spiderCodeName = target.value }
                               placeholder="爬虫脚本名称"/>

                    </FormItem>
                    <FormItem>
                        <Button
                            type="primary"
                            onClick={this.handleSubmit}
                        >
                            保存
                        </Button>
                    </FormItem>
                </div>
            </Modal>
        );

    }
}

export default SpiderCodeForm;
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
class SpiderForm extends Component {

    @observable spiderName = 'sbd';

    handleOk = (e) => {
        console.log(e);
        this.props.appState.setVisible(false);
    }
    handleCancel = (e) => {
        console.log(e);
        this.props.appState.setVisible(false);
    }

    componentDidMount() {
        this.props.form.validateFields();
    }

    handleSubmit = (e) => {
        console.log(this.name)
        e.preventDefault();
        let response= http.post("/api/spiders",{
            name: this.spiderName
        });
        console.log(response)
        this.props.form.validateFields((err, values) => {
            if (!err) {

            }
        });
    }


    renderForm = () => {
        const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;
        const nameError = isFieldTouched('userName') && getFieldError('name');
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem>
                    {/*{getFieldDecorator('name', {*/}
                    {/*rules: [{required: true, message: '请输入爬虫名称!'}],*/}
                    {/*})(*/}
                        <Input prefix={<Icon type="user"
                                             style={{fontSize: 13}}/>} value={this.spiderName} onChange={({target}) => this.spiderName = target.value}  placeholder="爬虫名称"/>
                    {/*)}*/}
                </FormItem>
                <FormItem>
                    <Button
                        type="primary"
                        htmlType="submit"
                        disabled={hasErrors(getFieldsError())}
                    >
                        保存
                    </Button>
                </FormItem>
            </Form>
        )
    }

    render() {
        return (
            <Modal title="爬虫" visible={this.props.appState.visible} footer={null}
                   onOk={this.handleOk} onCancel={this.handleCancel}
            >
                <this.renderForm />

            </Modal>
        );

    }
}

export default Form.create()(SpiderForm);
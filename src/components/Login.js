import React, { Component } from "react";
import { Form, Input, Button, Checkbox } from 'antd';

import { ActionCreators } from '../actions';
import { connect } from 'react-redux';


const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 8,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 8,
    },
  };


class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn : false
    }
  }
  componentDidUpdate(){
    if(this.props.loggedIn)
    this.props.history.push('/employeeList');
  }

  render(){
    return(
      <>
      <Form
   {...layout}
   name="basic"
   initialValues={{
     remember: true,
   }}
   onFinish={(values)=>this.props.login(values)}
   className="form"
 >
   <Form.Item
     label="Username"
     name="username"
     rules={[
       {
         required: true,
         message: 'Please input your username!',
       },
     ]}
   >
     <Input />
   </Form.Item>

   <Form.Item
     label="Password"
     name="password"
     rules={[
       {
         required: true,
         message: 'Please input your password!',
       },
     ]}
   >
     <Input.Password />
   </Form.Item>

   <Form.Item {...tailLayout} name="remember" valuePropName="checked">
     <Checkbox>Remember me</Checkbox>
   </Form.Item>

   <Form.Item {...tailLayout}>
     <Button type="primary" htmlType="submit">
       Submit
     </Button>
   </Form.Item>
 </Form>
 </>
  )
  }

}

const mapDispatchToProps = (dispatch) => {
  return{
    login:(values)=>dispatch(ActionCreators.Login(values))
  }
}
const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
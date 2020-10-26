import React, { Component } from "react";
import { Table,message } from 'antd';
import employeeData from '../json/employeeList.json';

import { connect } from 'react-redux';

class EmployeeList extends Component {
    constructor(props){
      super(props);
      this.state={
          data:[]
      }
    }
    componentDidMount(){
        if(this.props.loggedIn)
        this.setState({
            data:employeeData.user
        })
        else
        message.error("Authentication failed",5)
    }
    render(){
       
        const columns = [
            {
                title: 'Id',
                dataIndex: 'id',
                key: 'id',
            },
            {
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: 'Age',
              dataIndex: 'age',
              key: 'age',
            },
            {
              title: 'Gender',
              dataIndex: 'gender',
              key: 'gender',
            },
            {
                title: 'Email',
                dataIndex: 'email',
                key: 'email',
            },
            {
                title: 'Phone No',
                dataIndex: 'phoneNo',
                key: 'phoneNo',
            },
          ];
      return(
        <Table columns={columns} dataSource={this.state.data} />
      )
    }
}
const mapStateToProps = (state) => {
    return {
      loggedIn: state.loggedIn
    };
  };
  export default connect(mapStateToProps, null)(EmployeeList);
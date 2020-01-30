import React from 'react';
import classNames from 'classnames';
import {
    Button,
    ButtonGroup,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    Label,
    FormGroup,
    Input,
    Table,
    Row,
    Col,
    UncontrolledTooltip
  } from "reactstrap";

  class Login extends React.Component {
      constructor(props) {
          super(props);
          this.state = {};
      }

      render() {
          return (
              <>
                <div className="content">
                    LOGIN COMPONENT HERE
                </div>
              </>
          )
      }
  }

  export default Login;
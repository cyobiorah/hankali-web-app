import React from 'react';
import className from 'classnames';
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

  class FormBuilder extends React.Component {
      constructor(props) {
          super(props);
          this.state = {};
      }

      render() {
          return (
              <>
                <div className="content">
                    FORM BUILDER CONTENT HERE
                </div>
              </>
          )
      }
  }

  export default FormBuilder;
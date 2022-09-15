import { Component } from "react";

import AdminLTE, {
  Sidebar,
  Content,
  Row,
  Col,
  Box,
  Button,
  DataTable
} from "adminlte-2-react";

class Table extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    table_title : this.props.table_title,
    table_subtitle : this.props.table_subtitle,
    box_title : this.props.box_title,
    data: this.props.table_data
  }

  componentDidMount() {
    this.setState({
      table_title : this.props.table_title,
      table_subtitle : this.props.table_subtitle,
      box_title : this.props.box_title,
      data: this.props.table_data
    })
  }

  render() {
    if(!this.state.data || this.state.data.length) 
      return;
    else
    return (
      <div className="bg-image">
        <Content
          title={this.state.table_title}
          subTitle={this.state.table_subtitle}
          browserTitle={this.state.table_title}
        >
          <Row>
            <Col xs={12}>
            <Box
                title={this.state.box_title}
                type="primary"
              >
                <table className="table table-striped table-bordered table-hover text-center">
                <thead className="thead-dark">
                  <tr>
                    <th>Book Id</th>
                    <th>Name</th>
                    <th>Author</th>
                    <th>Price</th>
                    <th>Language</th>
                    <th>Quantity</th>
                    <th>Pages</th>
                    <th>Category</th>
                  </tr>
                  </thead>
                  <tbody>
                {
                  this.state.data.map((p, i) => {
                    return(
                      <tr key={'d' + i}>
                        <td>{p.bid}</td>
                        <td>{p.bname}</td>
                        <td>{p.bauthor}</td>
                        <td>{p.bprice}</td>
                        <td>{p.blanguage}</td>
                        <td>{p.bquantity}</td>
                        <td>{p.bpages}</td>
                        <td>{p.bcategory}</td>
                      </tr>
                      )
                    })
                  }
                  </tbody>
                  </table>
              </Box>
            </Col>
          </Row>
        </Content>
      </div>
    );
  }
}

export default Table;

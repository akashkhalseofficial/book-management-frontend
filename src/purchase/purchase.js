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
import PurchaseConfirm from "./purchaseConfirm";

class Purchase extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    data : [
        {
            id : 16,
            name : 'Lord of the Rings',
            author : 'JK Rowlings',
            price : 250,
            language : 'English',
            quantity : 1,
            pages : '340',
            category : 'Text Book'
        },{
            id : 16,
            name : 'Lord of the Rings',
            author : 'JK Rowlings',
            price : 250,
            language : 'English',
            quantity : 1,
            pages : '340',
            category : 'Text Book'
        },{
            id : 16,
            name : 'Lord of the Rings',
            author : 'JK Rowlings',
            price : 250,
            language : 'English',
            quantity : 1,
            pages : '340',
            category : 'Text Book'
        },{
            id : 16,
            name : 'Lord of the Rings',
            author : 'JK Rowlings',
            price : 250,
            language : 'English',
            quantity : 1,
            pages : '340',
            category : 'Text Book'
        },{
            id : 16,
            name : 'Lord of the Rings',
            author : 'JK Rowlings',
            price : 250,
            language : 'English',
            quantity : 1,
            pages : '340',
            category : 'Text Book'
        },{
            id : 16,
            name : 'Lord of the Rings',
            author : 'JK Rowlings',
            price : 250,
            language : 'English',
            quantity : 1,
            pages : '340',
            category : 'Text Book'
        },{
            id : 16,
            name : 'Lord of the Rings',
            author : 'JK Rowlings',
            price : 250,
            language : 'English',
            quantity : 1,
            pages : '340',
            category : 'Text Book'
        },{
            id : 16,
            name : 'Lord of the Rings',
            author : 'JK Rowlings',
            price : 250,
            language : 'English',
            quantity : 1,
            pages : '340',
            category : 'Text Book'
        },{
            id : 16,
            name : 'Lord of the Rings',
            author : 'JK Rowlings',
            price : 250,
            language : 'English',
            quantity : 1,
            pages : '340',
            category : 'Text Book'
        }
    ],
    confirmData : {},
    confirm : false
  }

  componentDidMount() {
  }

  render() {
    if(!this.state.data) 
      return;
    else if(!this.state.confirm)
    return (
       <>
        <Content
          title="Books shelf"
          subTitle="Order book from below shelf"
          browserTitle="Books shelf"
        >
          <Row>
            <Col xs={12}>
            {/* <Home /> */}
            <Box
                title="Order Book"
                type="primary"
              >
                <table class="table table-striped table-bordered table-hover text-center">
                <thead class="thead-dark">
                  <tr>
                    {

                        Object.keys(this.state.data[0]).map((keys, i ) => {
                            console.log(keys)
                            return(
                                <th>{keys}</th>
                            )
                            })
                    }
                  </tr>
                  </thead>
                  <tbody>
                {
                  this.state.data.map((p, i) => {
                    return(
                      <tr key={'d' + i} onClick={(e) => {
                        console.log(p);
                        let d = p;
                        d['total_order_price'] = d['price']
                        d['order'] = 'rent'
                        this.setState({
                          confirmData : d,
                          confirm : true
                        })
                      }}>
                        <td>{p.id}</td>
                        <td>{p.name}</td>
                        <td>{p.author}</td>
                        <td>{p.price}</td>
                        <td>{p.language}</td>
                        <td>{p.quantity}</td>
                        <td>{p.pages}</td>
                        <td>{p.category}</td>
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
      </>
    ) 
    else 
    return (
      <PurchaseConfirm book_data={this.state.confirmData} />
    )
  }
}

export default Purchase;

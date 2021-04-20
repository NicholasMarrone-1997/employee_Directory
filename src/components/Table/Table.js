import { Component } from 'react';
import "./Table.css";
import Row from "../Row/Row";
import axios from 'axios';

class Table extends Component {
  constructor(props){
    super(props);
    this.state = {
        value: '',
        employeeList: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }
    

    handleChange(event) {
        this.setState({value: event.target.value});
        console.log(this.state.value);
    }

    componentDidMount() {
        axios.get(`https://randomuser.me/api/?results=20&nat=us`)
          .then(res => {
            this.setState({ employeeList: res.data.results });
            console.log(res.data.results);
          });
      }

    render() { 
        return this.state.employeeList.length ? (  
            <div className="table-container">
                <div className="search">
                    <form className="form">
                        <input
                            className="form-input"
                            type="search"
                            placeholder="Search"
                            aria-label="search"
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                        <button className="button" type="submit">
                            Search
                        </button>
                    </form>
                </div>

                <div className="table">
                    {/*table*/} 
                    <table>
                        <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                        </thead>
                        <tbody>

                        {/*looping here*/}
                        {this.state.employeeList.map((data, index) => {
                            return <Row key={index}
                             gender={data.gender}
                             name={`${data.name.title} ${data.name.first} ${data.name.last}`}
                             email={data.email}
                             picture={data.picture.large}
                             phone={data.phone}
                            />
                        })
                    }
                    </tbody>
                    </table>       
                </div>
            </div>
         ) : null;
    }
}
 
export default Table;
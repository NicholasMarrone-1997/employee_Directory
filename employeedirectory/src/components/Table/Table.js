import { Component } from 'react';
import "./Table.css";
import Row from "../Row/Row";

class Table extends Component {
  constructor(props){
    super(props);
    this.state = {
        value: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }
    

    handleChange(event) {
        this.setState({value: event.target.value});
        console.log(this.state.value);
    }

    render() { 
        return ( 
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
                            <th>Col1</th>
                            <th>Col2</th>
                            <th>Col3</th>
                            <th>Col4</th>
                            <th>Col5</th>
                        </thead>
                        {/*looping here*/}
                        {/* {this.state.data.map((data, index) => {
                            return <Row 
                             gender={data.gender}
                             name={data.name}
                             email={data.email}
                             picture={data.picture}
                            />
                        })} */}
                    </table>       
                </div>
            </div>
         );
    }
}
 
export default Table;
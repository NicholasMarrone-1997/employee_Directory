import "./Row.css";

{/* row component is each row of the table */}
{/* data comes in from props */}


const Row = (props) => {
    return ( 
        <tr>
            <td><img src={props.picture} alt={props.name}></img></td>
            <td>{props.name}</td>
            <td>{props.gender}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
        </tr>
     );
}
 
export default Row;
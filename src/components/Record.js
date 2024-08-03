import React, { Component} from 'react';


export default class Record extends Component {
  render() {
    return (
      <tbody>
       {this.props.records.map((record, index) => {
          let statusColor = 'is-white';

          if(record['Status'] === 'Cancelled') {
            statusColor = 'is-danger';
          } else if (record['Status'] === 'Filled') {
            statusColor = 'is-warning';
          } else {
            statusColor = 'is-white';
          }

          return(
            <tr key={index} className={statusColor}>
              <td>{record['Time']}</td>
              <td>{record['Side']}</td>
              <td>{record['OrderType']}</td>
              <td>{record['CcyPair']}</td>
              <td>{record['Price']}</td>
              <td>{record['Amount']}</td>
              <td>{record['Status']}</td>
            </tr>
          )
        })
       }
      </tbody>
    );
  }
}
import React, { Component } from 'react';


class Ajax extends Component{
  constructor(){
    super();
    this.state = {
      data : null,
      error: null
    };
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
    let _url = 'http://www.ebi.ac.uk/ols/api/ontologies/efo/terms';
    let ref = this;
    // depends on global $
    $.ajax({
      url: _url,
      dataType: 'JSON',
      success: (_data) => {
        ref.setState({
          data: _data
        });
      },
      error: function (xhr, textStatus, errorThrown) {
        ref.setState({
          error :textStatus
        });
        throw('API error: ', errorThrown);
      }
    });
  }

  displayfectchedData(){
    let i =1;
    let data = this.state.data._embedded.terms.map(obj =>{
      return(
        <tr className="data_row" key={i++}>
          <td>{obj.iri}</td>
          <td>{obj.label}</td>
        </tr>
      );
    }
    );

    return(
      <table className='ajax_table'>
        <tbody>
        <tr>
          <th>Iri</th>
          <th>Label</th>
        </tr>
        {data}
        </tbody>
      </table>
    );
  }

  render(){
    return(
      <div className='ajax_container'>
        {
          this.state.error &&
          this.state.error
        }
        {
          this.state.data &&
          this.displayfectchedData()
        }
      </div>
    );
  }
}


export default Ajax;

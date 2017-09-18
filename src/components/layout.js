import React, { Component } from 'react';
import { Link } from 'react-router';
import userdata from './data/userData';

import style from './style.css';

class Layout extends Component {

  constructor(){
    super();
    this.state ={
      suggestions : []
    };
  }

  changedSearch(e){
    if(e.target.value !== null && e.target.value!== ''){
      let suggestions = userdata.filter((user) =>{
        return user.username.includes(e.target.value) || user.email.includes(e.target.value);
      });
      this.setState({
        suggestions: suggestions
      });
    }else{
      this.setState({
        suggestions: []
      });
    }
  }

  displaySuggestions(){
    let i = 1;
    let suggestions = this.state.suggestions.map((user)=>
      <li className="list-group-item" key={i++}> {user.username} : {user.email} </li>
    );
    return (
      <ul className="list-group align-right">
        {suggestions}
      </ul>
    );
  }


  render () {
    return (
      <div>
        <nav className='navbar navbar-inverse navbar-fixed-top'>
          <div className='container-fluid'>
            <div className='navbar-header'>
              <button aria-controls='navbar' aria-expanded='false' className='navbar-toggle collapsed' data-target='#navbar' data-toggle='collapse' type='button'>
                <span className='sr-only'>Toggle navigation</span>
                <span className='icon-bar' />
                <span className='icon-bar' />
                <span className='icon-bar' />
              </button>
              <a className='navbar-brand' href='#'>Home</a>
            </div>
            <div className='navbar-collapse collapse' id='navbar'>
              <form className='navbar-form navbar-right'>
                <input className='form-control' onChange={this.changedSearch.bind(this)} placeholder='Search...' type='text' />
              </form>
            </div>
          </div>
        </nav>
        <div className='container-fluid'>
          <div className={`${style.mydropdown} row application-row`}>
            <div className='col-lg-offset-8 col-lg-4'>
              {
                this.state.suggestions.length>0 &&
                this.displaySuggestions()
              }
            </div>
          </div>
          <div className={`row application-row ${style.container}`}>
            <div className='col-sm-12 main'>
              <div className='row'>
                <div className='col-sm-2 main'>
                  <ul className='nav nav-pills nav-stacked'>
                    <li>
                      <Link to='/'>Home</Link>
                    </li>
                    <li>
                      <Link to='papers'>Papers</Link>
                    </li>
                    <li>
                      <Link to='users'>Users</Link>
                    </li>
                    <li>
                      <Link to='ajax'>Ajax</Link>
                    </li>
                  </ul>
                </div>
                <div className='col-sm-10 main'>
                  {this.props.children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  children: React.PropTypes.object
};

export default Layout;

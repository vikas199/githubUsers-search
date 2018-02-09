import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions/usersActions'
import UsersList from './usersList'
import './searchForm.css'

class SearchForm extends Component {
    state = {
        value: '',
        cursor:0,
        
    }

    handleKeyDown = (e)  => {
        const { cursor } = this.state
        // arrow up/down button should select next/previous list element
        if (e.keyCode === 38 && cursor > 0) {
          this.setState( prevState => ({
            cursor: prevState.cursor - 1
          }))
        } else if (e.keyCode === 40 && cursor < this.props.usersList.items.length - 1) {
          this.setState( prevState => ({
            cursor: prevState.cursor + 1
          }))
        }
        else if(e.keyCode === 13){
            window.open(this.props.usersList.items[cursor].html_url)
        }
      }   
      
    onInputChange = (event) => {
        this.setState({ value: event.target.value })
        this.props.users_fetch(event.target.value)
    }

  
     
    render() {
        let res = null;
        if (this.props.usersList.items) {
            res = (
                <UsersList results={this.props.usersList.items} cursor={this.state.cursor} />
            )
        }
        return (
            <div className="search">
                <p>GitUser Search</p>
                <input
                    onChange={this.onInputChange}
                    className="searchBar"
                    type="text"
                    placeholder="Search a user" required
                    value={this.state.value} 
                    onKeyDown={ this.handleKeyDown }
                    />
                {res}

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        usersList: state.usersReducer.usersResults
    }
}

const mapDispatchToProps = dispatch => {
    return {
        users_fetch: (value) => dispatch(actions.userFetch(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
import React, { Component } from 'react';
import './usersList.css'

class UsersList extends Component{
    
      render(){
        const data = this.props.results
      
       let userData=null
        if(data){
             userData = (
                <ul>{data.map((user, index) => {
                    return (
                        <li className={this.props.cursor === index ? 'active' : '' } key={user.login}>
                            <a href = {user.html_url} target="_blank">
                            <img src={user.avatar_url}  className="image" />
                            <span>{user.login}</span>
                            </a>
                        </li>
                    )
                })}</ul>
            )
        }
       else{
           return <p>Loading....!!!</p>
        }
     return(
         <div className="userData">
             {userData}
         </div>
        )
    }
}

export default UsersList;
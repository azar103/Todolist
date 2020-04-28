import React from 'react'
import './Item.css'
import axios from 'axios'
import { Redirect } from 'react-router'
class Item extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
        this.state = {
            redirectTo: false,
            checkedClicked: false
        }
       
    }
    _delete = () => {
        axios.delete('http://localhost:3001/api/todo/'+this.props.todo._id)
             .then(() => {
                 this.setState({
                     redirectTo: true   
                 }) 
             })
        }

    _displayChecked = () => {
        this.setState({
            checkedClicked: !this.state.checkedClicked
        })
    }    

    render() {
        if(this.state.redirectTo){
            return(<Redirect to="/" /> )
        }else {

            return(
                <div className="item">
                     {!this.state.checkedClicked ?  this.props.todo.todoText
                     
                     : <span style={{textDecoration: 'line-through'}}> {this.props.todo.todoText}</span>}
                       <div className="group-btn">
                       <div 
                       id="trash"
                       onClick={this._delete}
                       >
                       <i className="fa fa-trash"
                       ></i>
                       </div>
                       <div
                         id="check"
                         onClick={this._displayChecked}   
                       >
                       <i className="fa fa-check"></i>
                       </div>
                        <div
                          id="edit"                     
                        >
                       <i className="fa fa-edit"   
                       ></i>
                       </div>
                       </div>
                </div>
           )
        }
        
    }
}


export default Item
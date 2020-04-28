import React from 'react'
import './ListItem.css'
import Item from './Item'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
class ListItem extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            todo: '',
            redirectTo: false
        }
    }


    componentDidMount() {
      axios.get('http://localhost:3001/api/todo')
             .then((res) => {
                  this.setState({
                      items: res.data
                  })
             })
    }

    _handleChangeItem = (event) => {
        this.setState({
            todo: event.target.value
        })
    }

    _postToDo = (e) => {
        if(e.key === 'Enter') {
            const todo = {
                todoText: this.state.todo
            }
            axios.post('http://localhost:3001/api/todo', todo)  
        }
            

       
    }


    render() {
   

        return(
            <div className="wrapper">
             <div className="header">
             <form onSubmit={this._postToDo}>
             <input type="text" 
                    placeholder="Entrer une TODO" 
                    value={this.state.todo} 
                    onChange={this._handleChangeItem} 
                    onKeyDown={this._postToDo}
                     />
             </form>    


             </div>
             <div className="list-todo">
             {this.state.items.map((todo, index) => 
                 <Item 
                   key={index}
                   todo={todo}
                 />
                 
                 )}
              </div>   
              </div>    
         
         )
       }
     }
          
     
       
    

export default ListItem
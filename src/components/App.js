import React from 'react'

import Footer from './Footer'
import Header from './Header'
import Main from './Main'

import TodoItem from './TodoItem'
import ContactCard from './ContactCard'


// const App = () =>  <div className = "todo-list"><TodoItem /> <TodoItem /> <TodoItem /> <TodoItem /> </div> // Can use the error function

function App() {
    return (
        <div className="contacts">
            <ContactCard
                contact={{name:"Mr Whiskerson", imgUrl:"http://placekitten.com/300/200", phone: "(212) 513-020", email: "mudaybr@gmail.com" }} 
          
            />

            <ContactCard
                contact = {{name:"Cumbersome",imgUrl:"http://placekitten.com/200/100", phone:"(212) 513-020", email:"vinay@gmail.com"}}
                
            />

            <ContactCard
                contact = {{name:"CDestroyer", imgUrl:"http://placekitten.com/300/100", phone:"(212) 513-020", email:"radan@gmail.com"}}
                
            />
            <ContactCard
                contact = {{name:"Felix", imgUrl:"http://placekitten.com/200/200", phone: "(212) 513-020", email:"kritten@gmail.com"}}
                
            />
            
        </div>
    )
}

export default App
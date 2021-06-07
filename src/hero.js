import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import {fire} from './firebase'

const Hero = ({handleLogout, user, tasks}) =>{


  const [inputText, setInputText] = useState("");
  const [todos, setTodos]= useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos]= useState([]);
  

  useEffect(()=>{
    getLocalTodos();
    getTasksfromFb();
  },[]);

  useEffect(()=>{
    filterHandler();
    saveLocalTodos();
    saveDatatoFb();
  },[todos,status]);


 
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
        case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
        default :
        setFilteredTodos(todos);  
    }
  };
  const saveLocalTodos =()=>{
     localStorage.setItem('todos', JSON.stringify(todos));
  };


  const getLocalTodos =()=>{
    if(localStorage.getItem("todos")=== null)
      localStorage.setItem("todos", JSON.stringify([]));
    else
      {
        let localtodo = JSON.parse(localStorage.getItem('todos'));
        setTodos(localtodo);

      }
  };
  
  const saveDatatoFb = () =>{
    
    fire
    .database()
    .ref()
    .child(user.uid)
    .set(
      todos,
      err => {
        console.log(err);
      }
      )
  }

  const getTasksfromFb = () =>{
    fire.database().ref().child(user.uid).on('value', snapshot =>{
      if(snapshot.val()!=null){
        setTodos(snapshot.val());
        console.log(snapshot.val())
      }
    });
  };

    return(
        <section className='hero'>
            <nav>
                <h2>welcome</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
            <div className ="task-container">
              <Form 
              todos={todos} 
              setTodos={setTodos} 
              inputText={inputText } 
              setInputText={setInputText}
              setStatus={setStatus}
              />
              <TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos} />
            </div>
        </section>
    )
}

export default Hero;
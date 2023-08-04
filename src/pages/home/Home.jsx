import React, { useRef, useEffect } from 'react'
import "./home.css"
import Header from '../../components/header/Header'
import Todos from '../../components/todos/Todos'
import { useDispatch, useSelector } from 'react-redux'
import { todoActions } from '../../store/reducer/todo-slice'

const Home = () => {
  const todos = useSelector(state => state.todo.todos);
  console.log(todos)
  const dispatch = useDispatch();
  const addNewTodo = useRef();
  const handleSubmit = () => {
    const todo = addNewTodo.current.value;
    console.log(todo)
    dispatch(todoActions.addNewTodo({ todo }));
    addNewTodo.current.value = "";
  };

  useEffect(() => {
    const keyDownHandler = event => {
      if (event.key === 'Enter') {
        event.preventDefault();
        handleSubmit();
      }
    };
    document.addEventListener('keydown', keyDownHandler);
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  return (
    <div className='homeContainer'>
      <Header />

      <div className="mb-3 inputContainer">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter a Todo</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" ref={addNewTodo}></textarea>
      </div>

      <h3 className='todoHeading'>Todos</h3>
      {todos.length ?
        todos?.map((item, index) => (
          <Todos key={index} item={item} index={index} />

        )) :
        <div className='empty'>Nothing in todos!</div>
      }
    </div>
  )
}

export default Home
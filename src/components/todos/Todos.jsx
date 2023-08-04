import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import "./todos.css"
import Edit from '../edit/Edit'
import { todoActions } from '../../store/reducer/todo-slice';
const Todos = ({ item, index }) => {
  const dispatch = useDispatch();
  const [openEdit, setOpenEdit] = useState(false);
  const deleteTodo = (index) => {
    dispatch(todoActions.deleteTodo({ index }));
  }
  return (
    <ul className="list-group todosContainer">
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {item}
        <div className='buttonContainer'>
          <button type="button" className="btn btn-danger" onClick={() => deleteTodo(index)}>Delete</button>
          <button type="button" className="btn btn-warning" onClick={() => setOpenEdit(true)}>Edit</button>
        </div>
      </li>
      {openEdit && <Edit openEdit={openEdit} setOpenEdit={setOpenEdit} todo={item} index={index} />}
    </ul>
  )
}

export default Todos
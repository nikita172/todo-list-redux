import React, { useRef } from 'react'
import "./edit.css"
import { useDispatch } from 'react-redux'
import { todoActions } from '../../store/reducer/todo-slice'
const Edit = ({ openEdit, setOpenEdit, todo, index }) => {
  const dispatch = useDispatch();
  const editTodo = useRef();

  const setTodo = (index) => {
    if (editTodo.current.value != "") {
      const todo = editTodo.current.value;
      dispatch(todoActions.editTodo({ todo, index }));
      setOpenEdit(false)
    }

  }
  return (
    <div className='editForm'>
      <div className="mb-3 ">
        <label for="exampleFormControlTextarea1" class="form-label">Edit Todo</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" ref={editTodo}>{todo}</textarea>
        <div className='buttons'>
          <button type="button" className="btn btn-danger" onClick={() => setOpenEdit(false)}>X</button>
          <button type="button" className="btn btn-warning" onClick={() => setTodo(index)}>Edit</button>
        </div>
      </div>

    </div>



  )
}

export default Edit
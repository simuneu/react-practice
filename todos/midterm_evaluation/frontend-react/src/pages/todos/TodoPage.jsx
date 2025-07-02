import React, { useEffect, useState } from 'react'
import Header from '../../components/ui/Header'
import { useNavigate } from 'react-router-dom';
import { todos as initialTodos } from '../utils/data';
import TodoList from '../../components/todo/TodoList';
import TodoFilter from '../../components/todo/TodoFilter';
import TodoForm from '../../components/todo/TodoForm';
import ConfirmDialog from '../../components/ui/ConfirmDialog';
import TodoAction from '../../components/ui/TodoAction';
import TodoState from '../../components/ui/TodoState';

// App.jsx에서 props전달받음
function TodoPage({ currentUser, onLogout }) {

  const navigate = useNavigate();

  //todos는 바뀔수 있기 때문에 state
  const [todos, setTodos] = useState([]);
  const [currentFilter, setCurrentFilter] = useState('all');
  const [showTodoFrom, setShowTodoForm] = useState(false);

  const [showConfirmDialog, setShowConfirmDialog] = useState(false)
  const [todoToDelete, setTodoToDelete] =useState(null);

  useEffect(() => {
    setTodos(initialTodos);
  }, [])

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  if (!currentUser) {
    navigate('/login');
    return null;
  }

  //TodoForm에서 data를 사용하기 위해 prop 내려줌
  const handleAddTodo = (newTodo) => {
    setTodos(prevTodos => [...prevTodos, newTodo]);
  }

  const handleToggleComplete=(todoId)=>{
    setTodos(
      prevTodos=>prevTodos.map(todo=>
        todo.id === todoId ?{...todo, isCompleted:!todo.isCompleted}:todo
      )
    )
  }

  const handleDeleteTodo=(todoId)=>{
    setTodoToDelete(todoId)
    setShowConfirmDialog(true)
  }

  const handleFilterChange=(filter)=>{
    setCurrentFilter(filter)
  }

  const handleConfirmDelete=()=>{
    if(todoToDelete){
      setTodos(prevTodos=>prevTodos.filter(todo=>
        todo.id !== todoToDelete
      ))
        setTodoToDelete(null)
    }
    setShowConfirmDialog(false)
  }
  const handleCancelDelete=()=>{
    setTodoToDelete(null)
    setShowConfirmDialog(false)

  }

  return (
    <div className="bg-light">
      <Header currentUser={currentUser} onLogout={handleLogout} />
      <div className='container mt-4'>
        <div className="d-flex justify-content-between align-items-center mb-4">
            <TodoState
              todos={todos}/>
            <TodoAction
              onAddClick={()=>setShowTodoForm(true)}
              currentFilter={currentFilter}
              onFilterChange={handleFilterChange}
            />
         
        </div>
        <TodoList todos={todos} 
        currentFilter={currentFilter}
        onToggleComplete={handleToggleComplete}
        onDeleteTodo={handleDeleteTodo}
        />
        <TodoForm 
          show={showTodoFrom}
          onClose={() =>  setShowTodoForm(false)}
          onAddTodo = {handleAddTodo}//TodoFrom에 props내려주기
        />
        <ConfirmDialog
          show={showConfirmDialog}
          title="할 일 삭제"
          message="정말 할 일을 삭제하시겠습니까?"
          confirmText='삭제'
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      </div>
    </div>
  )
}

export default TodoPage
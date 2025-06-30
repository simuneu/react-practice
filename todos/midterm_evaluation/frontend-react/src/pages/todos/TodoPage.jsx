import React, { useEffect, useState } from 'react'
import Header from '../../components/ui/Header'
import { useNavigate } from 'react-router-dom';
import { todos as initialTodos } from '../utils/data';
import TodoList from '../../components/todo/TodoList';
import TodoFilter from '../../components/todo/TodoFilter';
import TodoForm from '../../components/todo/TodoForm';

// App.jsx에서 props전달받음
function TodoPage({ currentUser, onLogout }) {

  const navigate = useNavigate();

  //todos는 바뀔수 있기 때문에 state
  const [todos, setTodos] = useState([]);
  const [currentFilter, setCurrentFilter] = useState('all');
  const [showTodoFrom, setShowTodoForm] = useState(false);

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

  return (

    <div className="bg-light">
      <Header currentUser={currentUser} onLogout={handleLogout} />
      <div className='container mt-4'>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2>할 일 목록</h2>
          </div>
          <div className="d-flex gap-2">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => setShowTodoForm(true)}
            >
              할 일 추가
            </button>

            {/* TodoFilter에서 props를 받음 */}
            <TodoFilter currentFilter={currentFilter}
            // onFilterChange={handleFilterChange}
            />
          </div>
        </div>
        <TodoList todos={todos} currentFilter={currentFilter} />
        <TodoForm 
          show={showTodoFrom}
          onClose={() =>  setShowTodoForm(false)}
          onAddTodo = {handleAddTodo}//TodoFrom에 props내려주기
        />
      </div>
    </div>
  )
}

export default TodoPage
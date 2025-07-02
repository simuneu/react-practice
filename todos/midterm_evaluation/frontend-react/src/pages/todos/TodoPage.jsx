import React, { useEffect, useState } from 'react'
import Header from '../../components/ui/Header'
import {useNavigate } from 'react-router-dom';
import TodoList from '../../components/todo/TodoList';
import TodoForm from '../../components/todo/TodoForm';
import ConfirmDialog from '../../components/ui/ConfirmDialog';
import TodoAction from '../../components/ui/TodoAction';
import TodoState from '../../components/ui/TodoState';
import {useTodo} from '../../context/TodoContext'
import {useAuth} from '../../context/AuthContext'

// App.jsx에서 props전달받음
function TodoPage() {

  const navigate = useNavigate();
  const {
    todos, 
    currentFilter, 
    showTodoFrom, 
    showConfirmDialog, 
    todoToDelete, 

    handleToggleComplete, 
    handleDeleteTodo, 
    handleConfirmDelete, 
    handleCancelDelete, 
    handleAddTodo, 
    handleFilterChange, 
    openTodoForm, 
    closeTodoForm,
  }=useTodo()

  const {logout, currentUser}=  useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!currentUser) {
    navigate('/login');
    return null;
  }

  return (
    <div className="bg-light">
      <Header currentUser={currentUser} onLogout={handleLogout} />
      <div className='container mt-4'>
        <div className="d-flex justify-content-between align-items-center mb-4">
            <TodoState
              todos={todos}/>
            <TodoAction
              onAddClick={openTodoForm}
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
          onClose={closeTodoForm}
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
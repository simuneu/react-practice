import React, { useEffect, useState } from 'react'
import Header from '../../components/ui/Header'
import {useNavigate } from 'react-router-dom';
import TodoList from '../../components/todo/TodoList';
import TodoForm from '../../components/todo/TodoForm';
import ConfirmDialog from '../../components/ui/ConfirmDialog';
import TodoAction from '../../components/ui/TodoAction';
import TodoState from '../../components/ui/TodoStats';
import {useTodo} from '../../context/TodoContext'
import {useAuth} from '../../context/AuthContext'
import {useTodos, useAddTodo, useToggleTodo, useDeleteTodo} from '../../hooks/useTodos'
import LoadingSpinner from '../../components/ui/LoadingSpinner'

// App.jsx에서 props전달받음
function TodoPage() {

  const navigate = useNavigate();
  const {currentUser, logout}=  useAuth();
  const {currentFilter, setCurrentFilter} = useState('all')

  const {showTodoFrom, setShowTodoForm } = useState(false)
  const {showConfirmDialog, setShowConfirmDialog} = useState(false)
  const {todoToDelete, setTodoToDelete} = useState(null);

  const {todos, isLoading, error, stats}= useTodos();

  const addTodoMutation = useAddTodo();
  const toggleTodoMutation = useToggleTodo();
  const deleteTodoMutation = useDeleteTodo();

  const handleFilterChange = (filter)=>{
    setCurrentFilter(filter);
  }
  
  const handleDeleteTodo = (todoId)=>{
    setTodoToDelete(todoId);
    setShowConfirmDialog(true);
  }

  const handleCancelDelete=()=>{
    setTodoToDelete(null)
    setShowConfirmDialog(false);
  }

  const handleAddTodo = async (newTodo)=>{
    try{
      await addTodoMutation.mutateAsync(newTodo);
      setShowTodoForm(false);
      return {success:true}
    }catch(e){
      return {success:false, error:e.message}
    }
  }

  //상태 값 변경
  const handleToggleComplete = async (todoId)=>{
    try{
      await toggleTodoMutation.mutateAsync({
        todoId, 
        isCompleted: !todoId.isCompleted
      })
    }catch(e){

    }
  }

  //삭제
  const handleConfirmDelete=async()=>{
    if(!todoToDelete) return 
    try{
      await deleteTodoMutation.mutateAsync(todoToDelete)
      setTodoToDelete(null)
    }catch(e){

    }finally{
      setShowConfirmDialog(false)
    }
  }

  const openTodoForm=()=>setShowTodoForm(true);
  const closeTodoForm =()=>setShowTodoForm(false)

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!currentUser) {
    navigate('/login');
    return null;
  }

  if(isLoading){
    return (
      <div className='bg-light min-vh-100'>
        <Header currentUser={currentUser} onLogout={handleLogout}/>
        <div className='container mt-4'>
          <LoadingSpinner/>
        </div>
      </div>
    )
  }

if (error) {
    return (
      <div className="bg-light min-vh-100">
        <Header currentUser={currentUser} onLogout={handleLogout} />
        <div className="container mt-4">
          <div className="alert alert-danger" role="alert">
            <h4 className="alert-heading">데이터를 불러오는데 실패했습니다!</h4>
            <p>{error.message}</p>
            <hr />
            <button
              className="btn btn-outline-danger"
              onClick={() => window.location.reload()}
            >
              페이지 새로고침
            </button>
          </div>
        </div>
      </div>
    );
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
import React, {createContext, useContext, useEffect, useState} from "react";
import {todos as initialTodos} from '../pages/utils/data'
const TodoContext = createContext();

export const TodoProvider = ({children})=>{
  const [todos, setTodos] = useState([]);
  const [currentFilter, setCurrentFilter] = useState('all');

  const [showTodoFrom, setShowTodoForm] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false)
  const [todoToDelete, setTodoToDelete] =useState(null);
  
  useEffect(() => {
    setTodos(initialTodos);
  }, [])

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

  const handleDeleteTodo=(todoId)=>{
    setTodoToDelete(todoId)
    setShowConfirmDialog(true)
  }
  
  const handleAddTodo = (newTodo) => {
    setTodos(prevTodos => [...prevTodos, newTodo]);
  }

  const handleFilterChange=(filter)=>{
    setCurrentFilter(filter)
  }

  const handleToggleComplete=(todoId)=>{
    setTodos(
      prevTodos=>prevTodos.map(todo=>
        todo.id === todoId ?{...todo, isCompleted:!todo.isCompleted}:todo
      )
    )
  }

  const openTodoForm = ()=>setShowTodoForm(true)
  const closeTodoForm = ()=>setShowTodoForm(false)

  const value = {
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
  }

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  )
}

export const useTodo=()=>{
  const context = useContext(TodoContext)
  if(!context){
    throw new Error("error !!!!!!!!!!!!!!!")
  }
  return context
}
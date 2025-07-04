import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { todoAPI, todoStats } from "../pages/utils/data";

//전체 조회
export const useTodos = (filter = 'all')=>{
  const {data, isLoading, error, refetch} = useQuery({
    queryKey:['todos'], 
    queryFn: todoAPI.fetchTodos,
    staleTime: 5*6*1000, //5분 동안 fresh상태 유지
  })
  
  const filteredTodos = TodoStats.filteredTodos(data, filter)
  const sortedTodos = TodoStats.sortTodos(filteredTodos);
  const stats = TodoStats.calculateStats(sortedTodos);
  // const stats = TodoStats.calculateStats(data);
  
  return {todos :sortedTodos, isLoading, error, stats}
}

//추가
export const useAddTodo=()=>{
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn:todoAPI.addTodo,
    onMutate:async(newTodo)=>{
      await queryClient.cancelQueries(['todos'])
      const previousTodos = queryClient.getQueriesData(['todos'])

      queryClient.setQueryData(['todos'], (old=[])=>[
        ...old, 
        {...newTodo, 
          id:initialTodos.reduce((maxId, todos)=>
            Math.max(maxId, todos.id)+1, 0),
          id:Date.now()
        }
      ])
      return {previousTodos}
    },
    onError:(err, newTodo, context)=>{
      if(context?.previousTodos){
        queryClient.setQueryData(['todos'], context.previousTodos);
      }
    },
    onSettled:()=>{
      queryClient.invalidateQueries(['todos']);
    }
  })

}
//삭제
export const useDeleteTodo=()=>{
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:todoAPI.deleteTodo, 
    onMutate:async(todoId)=>{
      await queryClient.cancelQueries(['todos']);
      const previousTodos = queryClient.getQueryData(['todos'])
      queryClient.setQueryData(['todos'], (old=[])=>
        old.filter(todo=>todo.id !== todoId)
      )
      return {previousTodos};
    },
    onError:(err, todoId, context)=>{
      if(context?.previousTodos){
        queryClient.setQueryData(['todos'], context.previousTodos)
      }
    },
    onSettled:()=>{
      queryClient.invalidateQueries(['todos'])
    },
  })
}

//상태 값 변경
export const useToggleTodo=()=>{
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn:({todoId, isCompleted})=> todoAPI.toggleTodo(todoId, isCompleted),
    onMutate:async ({todoId, isCompleted})=>{
      await queryClient.cancelQueries(['todos']);
      const previousTodos = queryClient.getQueryData(['todos']);
      queryClient.setQueryData(['todos'], (old =[])=>
        old.map(todo=>
          todo.id === todoId ? {...todo, isCompleted} :todo
        )
      );
      return {previousTodos};
    },
    onError:(err, variables, context)=>{
      if(context?.previousTodos){
        queryClient.setQueryData(['todos'], context.previousTodos);
      }
    },
    onSettled:()=>{
      queryClient.invalidateQueries(['todos'])
    },
  })
}
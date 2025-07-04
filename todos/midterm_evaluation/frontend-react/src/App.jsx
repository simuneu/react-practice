import {Routes, Route, BrowserRouter} from "react-router-dom"
import LoginPage from './pages/auth/LoginPage'
import TodoPage from "./pages/todos/TodoPage";
import "./assets/styles/App.css"
import { AuthProvider, useAuth} from "./context/AuthContext";
import { TodoProvider } from "./context/TodoContext";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOption :{
    queries:{
      staleTime:5*60*1000, //5분간 데이터 fresh로 유지
      cacheTime:10*60*1000, //10분간 캐시유지
      retry:3,  //실패 3번 재시도
      refetchError:false, //창 포커스시 자동 새로고림 비활성
    },
  }
})

const AppRouter = ()=>{
  const {loading}=useAuth();
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />}/>
      <Route path="/todo" element={<TodoPage/>} />
      <Route path='*' element={<LoginPage replace/>}/>
    </Routes>
  )
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <TodoProvider>
            <AppRouter/>
          </TodoProvider>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

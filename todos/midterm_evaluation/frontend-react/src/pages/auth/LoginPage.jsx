import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { users } from '../utils/data';
import { useAuth } from '../../context/AuthContext';

// console.log("LoginPage 렌더링됨");
function LoginPage() {
  const navigate = useNavigate();
  const {currentUser, login} = useAuth();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  useEffect(() => {
    if (currentUser) {
      navigate('/todo')
    }
  }, [currentUser, navigate])
  
  
  const handleSubmit = (e) => {
    e.preventDefault();

    // 로그인 검사
    // 입력값이 없는 경우
    if (!email || !password) {
      setErrorMessage('모든 항목을 입력해주세요.');
      return;
    }

    const foundUser = users.find(user =>
      user.email === email &&
      user.password === password
    )

    if (foundUser) {
      // localStorage에 저장
      setErrorMessage(''); // 에러 메시지 초기화
      login({ email: foundUser.email })
      // navigate('/todo')
    } else {
      setErrorMessage('잘못된 이메일 또는 비밀번호 입니다.');
    }
  }

  // 테스트 계정 클릭 핸들러 추가
  const handleTestAccountClick = (testEmail, testPassword) => {
    setEmail(testEmail);
    setPassword(testPassword);
    setErrorMessage(''); // 에러 메시지 초기화
  }

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="card p-4 shadow-sm" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="card-title text-center mb-4">로그인</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">이메일 주소</label>
            <input 
              type="email" 
              className="form-control" 
              id="email"
              placeholder="name@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">비밀번호</label>
            <input 
              type="password" 
              className="form-control" 
              id="password" 
              placeholder="비밀번호" 
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          
          {/* 에러 메시지 실제로 표시 */}
          {errorMessage && (
            <p className="text-danger text-center">{errorMessage}</p>
          )}
          
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">로그인</button>
          </div>
        </form>

        {/* 테스트 계정 섹션 */}
        <div className="mt-4 pt-3 border-top">
          <h6 className="text-muted text-center mb-3">테스트 계정</h6>
          <div className="small text-muted">
            <div className="mb-2">
              <button 
                type="button" 
                className="btn btn-outline-secondary btn-sm w-100 mb-1" 
                onClick={() => handleTestAccountClick('user1@example.com', 'password123')}
              >
                <strong>일반 사용자:</strong> user1@example.com / password123
              </button>
            </div>
            <div className="mb-2">
              <button 
                type="button" 
                className="btn btn-outline-secondary btn-sm w-100 mb-1" 
                onClick={() => handleTestAccountClick('admin@example.com', 'adminpass')}
              >
                <strong>관리자:</strong> admin@example.com / adminpass
              </button>
            </div>
            <div className="mb-2">
              <button 
                type="button" 
                className="btn btn-outline-secondary btn-sm w-100" 
                onClick={() => handleTestAccountClick('guest@example.com', 'guest')}
              >
                <strong>게스트:</strong> guest@example.com / guest
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
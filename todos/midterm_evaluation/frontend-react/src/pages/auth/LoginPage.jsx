import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userAPI } from '../utils/data';
import { useAuth } from '../../context/AuthContext';

function LoginPage() {

  const navigate = useNavigate();

  // 아이디, 비번은 계속 바뀌니까 useState 사용
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [loading, setLoading] = useState(false);

  const { currentUser, login } = useAuth();

  useEffect(() => {
    if (currentUser) {
      navigate('/todo')
    }
  }, [currentUser, navigate])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // 로그인 검사
    // 입력값이 없는 경우
    if (!email || !password) {
      setErrorMessage('모든 항목을 입력해주세요.');
      setLoading(false);
      return;
    }


    try {
      const result = await userAPI.login(email, password)
      if (result.success) {
        setErrorMessage(''); // 에러 메시지 초기화
        login({ email: result.user.email });
        navigate('/todo');
      }

    } catch (e) {
      setErrorMessage('잘못된 이메일 또는 비밀번호 입니다.');
    } finally {
      setLoading(false);
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
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              disabled={loading}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">비밀번호</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="비밀번호"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              disabled={loading}
            />
          </div>

          {/* 에러 메시지 실제로 표시 */}
          {errorMessage && (
            <p className="text-danger text-center">{errorMessage}</p>
          )}

          <div className="d-grid">
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? (
                <>
                  <span className='spinner-border spinner-border-sm me-2' role='status' aria-hidden='true'></span>
                  로그인 중...
                </>
              ) : "로그인"}
            </button>
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
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import instance from '../../apis/instance.js';

const KakaoCallback = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        // URL에서 authorization code 추출
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        const error = urlParams.get('error');

        // 에러가 있는 경우 (사용자가 로그인 취소 등)
        if (error) {
          console.error('카카오 로그인 에러:', error);
          navigate('/login');
          return;
        }

        if (!code) {
          console.error('Authorization code가 없습니다.');
          navigate('/login');
          return;
        }

        // 백엔드 서버에 authorization code를 보내고 JWT 토큰을 받음
        const response = await instance.post('/oauth2/authorization/kakao', { code });

        // 백엔드에서 받은 JWT 토큰을 localStorage에 저장
        const { token, user } = response.data;
        
        if (!token) {
          throw new Error('토큰을 받지 못했습니다.');
        }

        localStorage.setItem('token', token);
        
        // 사용자 정보도 함께 저장 (선택사항)
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
        }

        // 로그인 성공 후 메인 페이지로 이동
        navigate('/');

      } catch (error) {
        console.error('카카오 로그인 에러:', error);
        setError('로그인 처리 중 오류가 발생했습니다.');
        
        // 3초 후 로그인 페이지로 이동
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      } finally {
        setLoading(false);
      }
    };

    fetchToken();
  }, [navigate]);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-red-500 mb-4">{error}</div>
        <div className="text-gray-500">잠시 후 로그인 페이지로 이동합니다...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mb-4"></div>
      <div>카카오 로그인 처리 중...</div>
    </div>
  );
};

export default KakaoCallback;
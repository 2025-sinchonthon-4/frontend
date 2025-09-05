import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const KakaoCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchToken = async () => {
      // URL에서 authorization code 추출
      const code = new URL(window.location.href).searchParams.get('code');
      if (code) {
        try {
          // 백엔드 서버에 authorization code를 보내고 JWT 토큰을 받음
          const response = await axios.post('/api/auth/kakao', { code });

          // 백엔드에서 받은 JWT 토큰을 localStorage에 저장
          const { token } = response.data;
          localStorage.setItem('token', token);

          // 로그인 성공 후 메인 페이지로 이동
          navigate('/');

        } catch (error) {
          console.error('카카오 로그인 에러:', error);
          // 에러 발생 시 로그인 페이지로 리디렉션
          navigate('/login');
        }
      }
    };

    fetchToken();
  }, [navigate]);

  return (
    <div>
      카카오 로그인 처리 중...
    </div>
  );
};

export default KakaoCallback;
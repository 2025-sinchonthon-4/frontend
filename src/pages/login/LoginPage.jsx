const LoginPage = () => {
  const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
  const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;

  const handleKakaoLogin = () => {
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    window.location.href = kakaoURL;
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-4 bg-white">
      {/* 로고 영역 */}
      <div className="mb-10">
        <img src="/logo.svg" alt="Logo" />
      </div>

      <div className="text-xl font-medium text-center">
        1cm의 지식으로 뇌를 깨우다!<br/>하루 상식 퀴즈 플랫폼
      </div>

      <div className="text-6xl font-semibold mb-10">
        Cenchi
      </div>

      {/* 카카오 로그인 버튼 */}
      <button
        onClick={handleKakaoLogin}
        className="cursor-pointer"
      >        
        <img src="/kakao-login-medium-wide.png"/>
      </button>
    </div>
  );
};

export default LoginPage;
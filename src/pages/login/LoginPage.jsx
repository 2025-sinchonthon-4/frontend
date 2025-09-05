const LoginPage = () => {
  const handleKakaoLogin = () => {
    // Spring Security OAuth2 방식으로 변경
    // 백엔드의 OAuth2 엔드포인트로 직접 리다이렉션
    const backendOAuthUrl = `${import.meta.env.VITE_API_BASE_URL}/oauth2/authorization/kakao`;
    window.location.href = backendOAuthUrl;
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-4 bg-white">
      {/* 로고 영역 */}
      <div className="mb-10">
        <img src="/logo.svg" alt="Logo" />
      </div>

      <div className="text-xl font-medium text-center">
        1cm의 지식으로 뇌를 깨우다!<br/>하루 상식 충전 플랫폼
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
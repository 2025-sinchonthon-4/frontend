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
      <div className="flex items-center justify-center w-64 h-64 mb-15 bg-gray-200 text-gray-700 text-xl font-bold rounded-lg">
        로고
      </div>

      {/* 카카오 로그인 버튼 */}
      <button
        onClick={handleKakaoLogin}
        className="cursor-pointer"
      >
        <img src="/kakao-login.svg" alt="카카오 로그인" />
      </button>
    </div>
  );
};

export default LoginPage;
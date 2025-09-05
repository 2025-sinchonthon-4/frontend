const LoginPage = () => {
  const handleKakaoLogin = () => {
    // 여기에 카카오 로그인 로직을 구현
    alert('카카오 로그인 버튼 클릭');
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-4 bg-white">
      {/* 로고 영역 */}
      <div className="flex items-center justify-center w-64 h-64 mb-15 bg-gray-200 text-gray-700 text-xl font-bold rounded-lg">
        로고
      </div>

      {/* 카카오 로그인 버튼 */}
      <img src="/kakao-login.svg" alt="카카오 로그인" onClick={handleKakaoLogin} />
    </div>
  );
};

export default LoginPage;
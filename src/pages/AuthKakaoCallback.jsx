import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const AuthKakaoCallback = () => {
    // URL의 쿼리 파라미터를 읽어오는 hook
    const [searchParams] = useSearchParams();
    // 페이지 이동을 위한 hook
    const navigate = useNavigate();

    useEffect(() => {
        // URL에서 accessToken과 needsOnboarding 값을 추출합니다.
        const accessToken = searchParams.get('accessToken');
        const needsOnboarding = searchParams.get('needsOnboarding') === 'true';

        if (accessToken) {
            // 1. 발급받은 Access Token을 localStorage에 저장합니다.
            localStorage.setItem('accessToken', accessToken);
            console.log("Access Token 저장 성공!");

            // 2. 온보딩 필요 여부에 따라 적절한 페이지로 이동시킵니다.
            if (needsOnboarding) {
                console.log('온보딩이 필요하여 추가 정보 입력 페이지로 이동합니다.');
                navigate('/interest'); // 온보딩 페이지 경로
            } else {
                console.log('메인 페이지로 이동합니다.');
                navigate('/'); // 메인 페이지 경로
            }
        } else {
            // 토큰이 없는 경우 에러 처리
            console.error("카카오 로그인에 실패했습니다.");
            navigate('/login-error'); // 로그인 에러 페이지 경로
        }
    }, [searchParams, navigate]);

    // 사용자에게는 로딩 중이라는 화면을 보여줍니다.
    return (
        <div>
            <h1>로그인 처리 중입니다.</h1>
            <p>잠시만 기다려주세요...</p>
        </div>
    );
};

export default AuthKakaoCallback;
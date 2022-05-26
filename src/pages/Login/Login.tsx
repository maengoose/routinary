import * as Styled from './style';

const Login: React.FC = () => {
  // const REST_API_KEY = '5af42f065a8d4e342c4249779e84b76e';
  // const REDIRECT_URI = 'http://localhost:3000/oauth/kakao/callback';
  // const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleClickLogin = () => {
    // window.location.href = KAKAO_AUTH_URL;
  };

  //TODO: 버튼 이미지 보이게 하기
  return (
    <div>
      <Styled.LoginButton onClick={handleClickLogin} />
    </div>
  )
}

export default Login;
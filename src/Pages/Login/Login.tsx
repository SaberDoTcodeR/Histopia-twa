import LoginCart from '../../components/LoginModules/LoginCart'
import withWallet from '../../images/NewLogin/WithWallet.svg'
import WithWalletBack from '../../images/NewLogin/WithWalletBack.webp'
import GuestType from '../../images/NewLogin/GuestType.webp'
import Histopia from '../../images/NewLogin/Histopia.webp'
import styled from 'styled-components'
import LoginBackground from '../../images/Home/RegisterNow.webp'
import { useTonhubConnect } from 'react-ton-x'

export default function Login() {
  const connect = useTonhubConnect()

  const connectTON = () => {
    if(connect.state.type === "pending")
    window.location.href = connect.state.link.replace(
      'ton://',
      'https://tonhub.com/',
    )
  }

  return (
    <>
      <LoginContainer>
        <LoginOverLay>
          <LoginLeftBox>
            <LoginHistopia src={Histopia} alt="histopia" />
            <LoginLeftBoxtext>Join the Battle and Earn ERA</LoginLeftBoxtext>
          </LoginLeftBox>
          <LoginRightBox>
            <LoginCart
              text={withWallet}
              buttonBackground={WithWalletBack}
              typeIcon={GuestType}
              onClick={connectTON}
            />
          </LoginRightBox>
        </LoginOverLay>
      </LoginContainer>
    </>
  )
}

const LoginContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${LoginBackground});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`

const LoginOverLay = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(
    90deg,
    rgba(54, 59, 93, 0.6) 0%,
    rgba(78, 20, 84, 0.7) 52.6%,
    rgba(33, 8, 37, 0.8) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`

const LoginLeftBox = styled.div`
  height: 100%;
  width: 57%;
  background-color: rgba(1, 1, 1, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 50%;
  }
`

const LoginRightBox = styled.div`
  height: 100%;
  width: 43%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(1, 1, 1, 0.5);

  @media screen and (max-width: 600px) {
    justify-content: unset;
    width: 100%;
    align-items: center;
  }
`

const LoginHistopia = styled.img`
  width: 20vw;
  user-select: none;
  -webkit-user-drag: none;

  @media screen and (max-width: 600px) {
    width: 40vw;
    position: relative;
    top: 12%;
  }
`

const LoginLeftBoxtext = styled.p`
  font-family: Mouser;
  box-shadow: none;
  font-size: 2.5vw;
  text-align: center;
  font-weight: lighter;
  user-select: none;
  color: #fff;

  @media screen and (max-width: 600px) {
    font-size: 5vw;
    padding: 0;
    margin: 0;
    position: relative;
    top: 15%;
  }
`

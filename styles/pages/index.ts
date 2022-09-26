import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;

.container_login {
  width: 60vh;
  height: 45vh;
  background: rgba(255, 255, 255,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  padding: 2vh;
  margin: 2vh;
}
.login_form .container_email,
.login_form .container_pwd,
.login_form .text_form {
  margin-bottom: 20px;
}
.login_form .container_email .text_label,
.login_form .container_pwd .text_label {
  font-size: 14px;
}
.login_form .container_email #ipt_eml,
.login_form .container_pwd #ipt_pwd {
  height: 4vh;
  width: 45vh;
  padding: 2px 5px;
  border-radius: 2px;
  background: rgba(255, 255, 255, .5);
}
.login_form .btn_log {
  margin-top: 5vh;
  display: flex;
  justify-content: center;
}
.login_form .btn_log > input {
  background: ${props => props.theme.colors.secondary};
  opacity: 90%;
  cursor: pointer;
  padding: 1vh 10vh;
  border-radius: 5px;
}
.login_form .btn_log > input:hover {
  opacity: 1;
}
.login_form .alert_form {
  background: #DB2B2D;
  color: white;
  border-radius: 4px;
  text-align: center;
  margin: 10px 0 20px 0;
  padding: 10px 5px;
  font-size: 14px;
  display: none;
}
`

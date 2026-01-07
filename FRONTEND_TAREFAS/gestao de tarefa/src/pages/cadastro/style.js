import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to right, #1f4037, #99f2c8);
  font-family: 'Poppins', sans-serif;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #ffffff;
  margin-bottom: 32px;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 360px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 32px 28px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const ImputLabel = styled.label`
  font-size: 1rem;
  color: #eeeeee;
  margin-bottom: 6px;

  span {
    color: #ff6b6b;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px;
  background-color: rgba(255, 255, 255, 0.2);
  border: 1px solid transparent;
  border-radius: 10px;
  color: #ffffff;
  font-size: 1rem;
  transition: 0.3s;

  &::placeholder {
    color: #dddddd;
  }

  &:focus {
    outline: none;
    border-color: #00bcd4;
    box-shadow: 0 0 6px #00bcd4;
    background-color: rgba(255, 255, 255, 0.25);
  }
`;

export const Button = styled.button`
  padding: 14px;
  background: linear-gradient(to right, #00c6ff, #0072ff);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 10px;
  transition: 0.3s;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 0 10px #0072ff;
  }
`;

export const JaSouCadastrado = styled.button`
  padding: 14px;
  background: linear-gradient(to right, #38ef7d, #11998e);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 16px;
  transition: 0.3s;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 0 10px #11998e;
  }
`;

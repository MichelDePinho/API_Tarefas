import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to right, #1f4037, #99f2c8);
  font-family: 'Poppins', sans-serif;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #ffffff;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 350px;
  background: #ffffffdd;
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const ImputLabel = styled.label`
  font-size: 1.1rem;
  margin-bottom: 6px;
  color: #444;

  span {
    color: #e74c3c;
    font-weight: bold;
  }
`;

export const Input = styled.input`
  padding: 14px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 1rem;
  background-color: #f9f9f9;
  transition: all 0.3s;

  &:focus {
    outline: none;
    border-color: #66a6ff;
    box-shadow: 0 0 0 3px rgba(102, 166, 255, 0.2);
  }
`;

export const Button = styled.button`
  padding: 14px;
  background: linear-gradient(to right, #007bff, #00b4db);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 10px;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 123, 255, 0.4);
  }
`;

export const Cadastrar = styled.button`
  padding: 14px;
  background: linear-gradient(to right, #28a745, #43e97b);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 18px;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(40, 167, 69, 0.4);
  }
`;

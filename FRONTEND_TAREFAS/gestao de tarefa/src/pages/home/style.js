import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  background: linear-gradient(to right, #1f4037, #99f2c8);
  font-family: 'Poppins', sans-serif;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 24px 40px;
  background: #0f2027;
  color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
`;

export const BarraPesquisaWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  margin: 0 30px;
`;

export const BarraPesquisa = styled.div`
  display: flex;
  align-items: center;
  max-width: 450px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

export const InputPesquisa = styled.input`
  padding: 12px 16px;
  border: none;
  font-size: 16px;
  width: 100%;
  color: #333;
  background: transparent;
  outline: none;

  &::placeholder {
    color: #aaa;
  }
`;

export const ButtonPesquisar = styled.button`
  background: #00c6ff;
  background: linear-gradient(to right, #0072ff, #00c6ff);
  color: #fff;
  border: none;
  padding: 12px 18px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  font-weight: bold;

  &:hover {
    filter: brightness(1.1);
  }
`;

export const ButtonSair = styled.button`
  background: linear-gradient(to right, #ff416c, #ff4b2b);
  color: #fff;
  border: none;
  padding: 12px 20px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 1200px;
  padding: 40px 20px;
`;

export const InputAdicionarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 700px;
  margin-bottom: 30px;
`;

export const ImputTarefa = styled.input`
  padding: 16px;
  border: none;
  border-radius: 12px 0 0 12px;
  width: 100%;
  font-size: 16px;
  background-color: rgba(255, 255, 255, 0.9);
  outline: none;
  color: #333;

  &::placeholder {
    color: #999;
  }
`;

export const ButtonAdicionar = styled.button`
  background: linear-gradient(to right, #00b09b, #96c93d);
  color: #fff;
  border: none;
  padding: 16px 24px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 0 12px 12px 0;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    filter: brightness(1.1);
  }
`;

export const ContainerTarefas = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  padding: 28px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
`;

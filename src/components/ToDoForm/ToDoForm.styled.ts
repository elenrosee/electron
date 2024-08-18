import {styled }from "styled-components";
import { Breakpoints, MQ } from "../../common";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  padding: 10px;

  height: 80px;
  width: calc(100vw - 20px);
  min-width: 300px;
  max-width: 1100px;

  border-radius: 15px;
  background-color: #003d74;
  box-shadow:
    0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  ${MQ(Breakpoints.md)} {
    flex-direction: row;
    align-items: center;
    height: 60px;
    padding: 0 20px;
  }
`;

export const AddToDoForm = styled.form`
  display: flex;
  position: relative;

  & input {
    background-color: #f0f8ff;
    padding: 5px 40px 5px 10px;

    border-radius: 8px;

    border: none;
    outline: none;

    height: 30px;
    width: calc(100vw - 40px);
    min-width: 280px;

    &::placeholder {
      color: black;
    }

    ${MQ(Breakpoints.md)} {
      width: 280px;
    }
  }
`;

export const Btn = styled.button`
  background-color: #29abe2;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;

  width: 26px;
  height: 26px;

  position: absolute;
  right: 2px;
  top: 2px;

  border-radius: 8px;

  & svg {
    width: 20px;
    height: 20px;
  }
`;

export const Title = styled.h1`
  color: #f0f8ff;
  font-size: 18px;

  margin-right: 10px;

  ${MQ(Breakpoints.md)} {
    font-size: 24px;
  }
`;

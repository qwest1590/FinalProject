import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Background } from "../../App";
import background from "../../images/bicycleRiding.jpg";
import { Button } from "../Button/Button";
import { Logo, CompanyName } from "../Header/Header";
import logo from "../../images/logo.jpg";
import { useNavigate } from "react-router-dom";

const PageWrapper = styled.div`
  height: 100vh;
`;

export const FormWrapper = styled.div`
  height: 650px;
  width: 600px;
  background: linear-gradient(#d4e8f5, #abc9db, #58a9db);
  border-radius: 10px;
  display: flex;
  flex-flow: column;
  padding: 15px;
  box-sizing: border-box;
  margin: auto;
  margin-top: 100px;
  form {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-self: center;
    width: 580px;
  }
  @media (max-width: 610px) {
    width: 375px;
    form {
      justify-self: center;
      width: 350px;
    }
  }
  h1 {
    background: linear-gradient(
      to right,
      #1526bd 0%,
      #c616cc 50%,
      #6006d6 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    border-bottom: 2px solid #1526bd;
  }
  button {
    width: 95%;
    margin-top: 60px;
    align-self: center;
  }
`;

export const LabelInput = styled.div`
  padding-top: 20px;
  label {
    font-size: 1.2rem;
  }
  input {
    width: 564px;
    height: 30px;
    margin-top: 8px;
    border-radius: 5px;
    border: none;
    filter: drop-shadow(0 0 0.75rem #58a9db);
    padding-left: 15px;
    font-size: 1.2rem;
    @media (max-width: 610px) {
      width: 335px;
    }
    &:focus {
      outline: 1px solid #6006d6;
    }
  }
`;

export const ErrorMessage = styled.div`
  height: 47px;
  width: 320px;
  background-color: #f77066;
  margin-top: 10px;
  border-radius: 10px;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1.2rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  button {
    margin-left: 5px;
  }
`;

export const Registration = () => {
  const [newEmploye, setNewEmploye] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    clientId: "",
    approved: true,
  });

  const [errorMessage, setErrorMessage] = useState({
    visible: false,
    message: "",
  });
  const navigate = useNavigate();
  const onClickExitButton = () => navigate("/");

  const formVerification = () => {
    const mailRexExp = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    if (!newEmploye.email.match(mailRexExp)) {
      setErrorMessage({ visible: true, message: "Incorrect Email" });
      return;
    }
    if (newEmploye.password.length < 8) {
      setErrorMessage({
        visible: true,
        message: "Password should be contain more then 8 characters",
      });
      return;
    }
    if (newEmploye.clientId === "") {
      setErrorMessage({
        visible: true,
        message: "Please enter your cliendID",
      });
      return;
    }
    setErrorMessage({ visible: false, message: "" });
    return true;
  };

  return (
    <>
      <Background src={background} alt="background"></Background>
      <PageWrapper>
        <Header>
          <Logo>
            {" "}
            <img src={logo} alt="logo"></img>
          </Logo>
          <CompanyName>BikeStories</CompanyName>
          <Button
            name="Exit"
            color="#0aa758"
            onClick={onClickExitButton}
          ></Button>
        </Header>
        <FormWrapper>
          <form onSubmit={(e) => e.preventDefault()}>
            <h1>Registration Form</h1>
            <ErrorMessage
              style={
                errorMessage.visible
                  ? { visibility: "initial" }
                  : { visibility: "hidden" }
              }
            >
              {errorMessage.message}
            </ErrorMessage>
            <LabelInput>
              <label>
                Enter your Email:
                <input
                  type={"text"}
                  placeholder="Example123@mail.ru"
                  onChange={(e) =>
                    setNewEmploye((prevState) => ({
                      ...prevState,
                      email: e.target.value,
                    }))
                  }
                ></input>
              </label>
            </LabelInput>
            <LabelInput>
              <label>
                Enter your Password:
                <input
                  type={"password"}
                  placeholder={"Password"}
                  onChange={(e) =>
                    setNewEmploye((prevState) => ({
                      ...prevState,
                      password: e.target.value,
                    }))
                  }
                ></input>
              </label>
            </LabelInput>
            <LabelInput>
              <label>
                FirstName:
                <input
                  type={"text"}
                  placeholder="Dmitriy"
                  onChange={(e) =>
                    setNewEmploye((prevState) => ({
                      ...prevState,
                      firstName: e.target.value,
                    }))
                  }
                ></input>
              </label>
            </LabelInput>
            <LabelInput>
              <label>
                LastName:
                <input
                  type={"text"}
                  placeholder="Vorobyev"
                  onChange={(e) =>
                    setNewEmploye((prevState) => ({
                      ...prevState,
                      lastName: e.target.value,
                    }))
                  }
                ></input>
              </label>
            </LabelInput>
            <LabelInput>
              <label>
                ClientID:
                <input
                  type={"text"}
                  placeholder="Your ClientID"
                  onChange={(e) =>
                    setNewEmploye((prevState) => ({
                      ...prevState,
                      clientId: e.target.value,
                    }))
                  }
                ></input>
              </label>
            </LabelInput>
            <Button
              name="Create"
              color="#0aa758"
              onClick={() => console.log(formVerification())}
            ></Button>
          </form>
        </FormWrapper>
      </PageWrapper>
    </>
  );
};

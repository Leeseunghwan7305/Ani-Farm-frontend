import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../../components/navbar";
import { Container } from "../../components/navbar/styles";
import { useForm, SubmitHandler } from "react-hook-form";
import * as S from "./styles";
import Footer from "../../components/footer";

interface ISignUp {
  Nick: String;
  id: String;
  password: String;
  passwordCheck: String;
}

const SignUpPage = () => {
  const { register, handleSubmit } = useForm<ISignUp>();
  const onSubmit: SubmitHandler<ISignUp> = (data) => console.log(data);
  return (
    <>
      <S.SignContainer>
        <Navbar />
        <S.SignBox>
          <S.Title>회원 가입</S.Title>
          <S.SignForm onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="nick">닉네임</label>
            <S.Input
              id="nick"
              placeholder="닉네임을 입력하세요"
              {...register("Nick")}
            />
            <label htmlFor="id">아이디</label>
            <S.Input
              id="id"
              placeholder="아이디를 입력하세요"
              {...register("id")}
            />
            <label htmlFor="password">비밀번호</label>
            <S.Input
              id="password"
              placeholder="비밀번호를 입력하세요"
              {...register("password")}
            />
            <label htmlFor="passwordCheck">비밀번호 확인</label>
            <S.Input
              id="passwordCheck"
              placeholder="비밀번호를 입력하세요"
              {...register("passwordCheck")}
            />
            <S.Button type="submit">가입하기</S.Button>
          </S.SignForm>
        </S.SignBox>
        <Footer />
      </S.SignContainer>
    </>
  );
};

export default SignUpPage;

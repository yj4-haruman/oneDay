import { Link, useNavigate } from "react-router-dom";
import Button from "../component/Button";
import InputBox from "../component/InputBox";
import Socials from "../component/Socials";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { apiPostRegister } from "../api";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const navigate = useNavigate();

  const { mutate } = useMutation(apiPostRegister, {
    onSuccess: (data) => {
      if (data?.result === true) {
        // 성공하면 로그인 페이지로 이동
        navigate("/users/login");
      }
    },
    onSettled: (data) => {
      if (data?.result === false) {
        setError("username", {
          message: data.message,
        });
      }
    },
  });

  const onValid = (formData) => {
    mutate(formData);
    // console.log(formData);
  };

  return (
    <>
      <Link to="/" className="text-center flex flex-col items-center w-16 mx-1">
        <IoMdArrowRoundBack size="35px" />
        <span className="font-semibold">홈페이지</span>
      </Link>
      <div className="w-full flex justify-center py-16">
        <div className="max-w-screen-sm w-full flex flex-col gap-8 px-4">
          {/* 회원가입 타이틀 */}
          <div className="flex flex-col gap-2">
            <div className="w-full text-center text-4xl font-bold mb-1 text-mainBlue">회원가입</div>
            <div className="w-full text-center text-neutral-600">
              회원가입이 되어 있다면{" "}
              <Link to="/users/login" className="hover:text-mainBlue hover:underline underline-offset-2">
                로그인하기
              </Link>
            </div>
          </div>
          {/* 회원가입 Form 영역 */}
          <form onSubmit={handleSubmit(onValid)} className="flex flex-col gap-4">
            {/* 아이디 */}
            {/* <input
            {...register("username", {
              required: "아이디는 필수입력사항입니다",
              minLength: {
                value: 3,
                message: "아이디는 최소 3글자 이상이어야 합니다.",
              },
            })}
            type="text"
            placeholder="username"
          /> */}

            <InputBox
              register={register}
              name="username"
              type="text"
              placeholder="아이디"
              errorOption={{
                required: "아이디는 필수 입력사항입니다",
                minLength: {
                  value: 2,
                  message: "아이디는 최소 2글자 이상이어야 합니다.",
                },
              }}
              errors={errors?.username?.message}
            />
            {/* 이메일 */}
            <InputBox
              register={register}
              name="email"
              type="email"
              placeholder="이메일"
              errorOption={{
                required: "이메일은 필수 입력사항입니다",
                pattern: {
                  value: /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/,
                  message: "이메일 형식을 지켜주세요",
                },
              }}
              errors={errors?.email?.message}
            />
            {/* 전화번호 */}
            <InputBox
              register={register}
              name="phone"
              type="tel"
              placeholder="전화번호"
              errorOption={{
                required: "전화번호는 필수 입력사항입니다",
                pattern: {
                  value: /^\d{3}-\d{3,4}-\d{4}$/,
                  message: "전화번호 형식을 지켜주세요 (예: 010-1234-5678)",
                },
              }}
              errors={errors?.phone?.message}
            />

            {/* 비밀번호 */}
            <InputBox
              register={register}
              name="password"
              type="password"
              placeholder="패스워드"
              errorOption={{
                required: "패스워드는 필수 입력사항입니다.",
                minLength: {
                  value: 4,
                  message: "패스워드는 최소 4자 이상이어야 합니다.",
                },
              }}
              errors={errors?.password?.message}
            />
            {/* 비밀번호 확인 */}
            <InputBox
              register={register}
              name="password2"
              type="password"
              placeholder="패스워드 확인"
              errorOption={{
                required: "패스워드 확인은 필수 입력사항입니다.",
                validate: (value, form) => {
                  return value === form.password || "패스워드 확인은 패스워드와 같아야 합니다";
                },
              }}
              errors={errors?.password2?.message}
            />
            {/* <select className="input-custom" {...register("hobby")}>
            <option disabled hidden selected>
              선택하세요
            </option>
            <option value="1">달리기</option>
            <option value="2">축구</option>
            <option value="3">농구</option>
            <option value="4">독서</option>
          </select> */}
            {/* 콤보박스 취미 */}
            {/* {data?.result === false && (
            <span className="text-red-500 text-sm">{data?.message}</span>
          )} */}
            <Button type="submit" text="회원가입" />
          </form>
          {/* 소셜 로그인 */}
          <Socials />
        </div>
      </div>
    </>
  );
}

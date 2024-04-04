import { Link } from "react-router-dom";
import InputBox from "../component/InputBox";
import Button from "../component/Button";
import Socials from "../component/Socials";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { apiPostLogin } from "../api";
import useUser from "../component/useUser";
import { IoMdArrowRoundBack } from "react-icons/io";
// import App from "../App";

export default function LogIn() {
  const queryClient = useQueryClient();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { mutate } = useMutation(apiPostLogin, {
    onSuccess: () => {
      queryClient.invalidateQueries("getUser");
    },
  });

  const onValid = (formData) => {
    mutate(formData);
  };

  const data = useUser();

  return (
    <>
      <Link to="/" className="text-center flex flex-col items-center w-16 mx-1">
        <IoMdArrowRoundBack size="35px" />
        <span className="font-semibold">홈페이지</span>
      </Link>
      <div>
        {data?.isLogin === true ? (
          (window.location.href = "/")
        ) : (
          <div className="w-full flex justify-center py-16">
            <div className="max-w-screen-sm w-full flex flex-col gap-8 px-4">
              {/* 로그인 타이틀 */}

              <div className="flex flex-col gap-2">
                <div className="w-full text-center text-4xl font-bold mb-1 text-mainBlue">로그인</div>
                <div className="w-full text-center text-neutral-600">
                  아직 회원이 아니라면&nbsp;
                  <Link to="/users/signup" className="hover:text-mainBlue hover:underline underline-offset-2">
                    가입하기
                  </Link>
                </div>
              </div>
              {/* 로그인 form 영역 */}
              <form onSubmit={handleSubmit(onValid)} className="flex flex-col gap-4">
                {/* 아이디 */}
                <InputBox
                  register={register}
                  name="username"
                  type="text"
                  placeholder="아이디"
                  errorOption={{
                    required: "아이디는 필수 입력사항입니다.",
                  }}
                  errors={errors?.username?.message}
                />
                {/* 비밀번호 */}
                <InputBox
                  register={register}
                  name="password"
                  type="password"
                  placeholder="패스워드"
                  errorOption={{
                    required: "패스워드는 필수 입력사항입니다.",
                  }}
                  errors={errors?.password?.message}
                />
                {/* 버튼 */}
                <Button type="submit" text="로그인" />
              </form>
              {/* 소셜로그인 */}
              <Socials />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

"use client";

import { CONSTRAINTS } from "@/utils/constraints";
import { useRef, useState } from "react";
import { Register, RegisterWithGithub, RegisterWithGoogle } from "./buttons";
// @ts-ignore
import { experimental_useFormState as useFormState } from "react-dom";

import { RegisterAction } from "@/utils/actions/auth/register";
import { useToast } from "@/utils/useToast";

export default function Form() {
  const [emailChanged, setEmailChanged] = useState(false);
  const [usernameChanged, setUsernameChanged] = useState(false);
  const [passwordChanged, setPasswordChanged] = useState(false);
  const [confirmPasswordChanged, setConfirmPasswordChanged] = useState(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const initialState = {
    type: "",
    message: "",
  };

  const [state, action] = useFormState(RegisterAction, initialState);
  useToast({
    message: state.message,
    type: state.type,
    //  successRoute: "/verify",
    //  successMessage: "Successfully Registered",
  });
  return (
    <>
      <form
        action={action}
        className="flex h-full w-full flex-col items-center justify-start gap-3"
      >
        <div className="relative flex h-fit w-full flex-col items-center justify-center md:w-fit">
          <input
            type="email"
            ref={emailRef}
            required
            minLength={CONSTRAINTS.EMAIL.MIN_LENGTH}
            name="email"
            className=" flex h-[50px] w-[95%] flex-col items-start justify-center border-[3px] border-black p-2 text-black focus:border-4 focus:outline-0  md:w-[400px]"
            onChange={(e) => {
              if (e.currentTarget.value.length > 0) setEmailChanged(true);
              else setEmailChanged(false);
            }}
          />
          <label
            onClick={() => {
              if (emailRef.current) emailRef.current.focus();
            }}
            className={`${
              emailChanged ? "hidden " : "block "
            }  absolute left-5 text-[20px] font-medium text-black text-opacity-60 md:left-3`}
            htmlFor="email"
          >
            Email
          </label>
        </div>

        <div className="relative flex h-fit w-full flex-col items-center justify-center md:w-fit">
          <input
            type="text"
            required
            ref={usernameRef}
            minLength={CONSTRAINTS.USERNAME.MIN_LENGTH}
            maxLength={CONSTRAINTS.USERNAME.MAX_LENGTH}
            name="username"
            className=" flex h-[50px] w-[95%] flex-col items-start justify-center border-[3px] border-black p-2 text-black focus:border-4 focus:outline-0  md:w-[400px]"
            onChange={(e) => {
              if (e.currentTarget.value.length > 0) setUsernameChanged(true);
              else setUsernameChanged(false);
            }}
          />
          <label
            onClick={() => {
              if (usernameRef.current) usernameRef.current.focus();
            }}
            className={`${
              usernameChanged ? "hidden " : "block "
            }  absolute left-5 text-[20px] font-medium text-black text-opacity-60 md:left-3`}
            htmlFor="username"
          >
            Username
          </label>
        </div>
        <div className="relative flex h-fit w-full flex-col items-center justify-center md:w-fit">
          <input
            type="password"
            required
            minLength={CONSTRAINTS.PASSWORD.MIN_LENGTH}
            maxLength={CONSTRAINTS.PASSWORD.MAX_LENGTH}
            ref={passwordRef}
            name="password"
            className=" flex h-[50px] w-[95%] flex-col items-start justify-center border-[3px] border-black p-2 text-black focus:border-4 focus:outline-0  md:w-[400px]"
            onChange={(e) => {
              if (e.currentTarget.value.length > 0) setPasswordChanged(true);
              else setPasswordChanged(false);
            }}
          />
          <label
            onClick={() => {
              if (passwordRef.current) passwordRef.current.focus();
            }}
            className={`${
              passwordChanged ? "hidden " : "block "
            }  absolute left-5 text-[20px] font-medium text-black text-opacity-60 md:left-3`}
            htmlFor="password"
          >
            Password
          </label>
        </div>
        <div className="relative flex h-fit w-full flex-col items-center justify-center md:w-fit">
          <input
            type="password"
            required
            ref={confirmPasswordRef}
            minLength={CONSTRAINTS.PASSWORD.MIN_LENGTH}
            maxLength={CONSTRAINTS.PASSWORD.MAX_LENGTH}
            name="confirm"
            className=" flex h-[50px] w-[95%] flex-col  items-start justify-center border-[3px] border-black p-2 text-black focus:border-4 focus:outline-0  md:w-[400px]"
            onChange={(e) => {
              if (e.currentTarget.value.length > 0)
                setConfirmPasswordChanged(true);
              else setConfirmPasswordChanged(false);
            }}
          />
          <label
            onClick={() => {
              if (confirmPasswordRef.current)
                confirmPasswordRef.current.focus();
            }}
            className={`${
              confirmPasswordChanged ? "hidden " : "block "
            }  absolute left-5 text-[20px] font-medium text-black  text-opacity-60 md:left-3`}
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
        </div>
        <Register />
      </form>
      <div className="flex h-full w-full flex-col items-center justify-start gap-3">
        <RegisterWithGoogle />
        <RegisterWithGithub />
      </div>
    </>
  );
}

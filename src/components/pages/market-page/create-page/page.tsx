"use client"
import React, { useState } from "react";
import { Step1 } from "./step1";
import { Step2 } from "./step2";
import Step3 from "./step3";

type Props = {};

const CreatePage = (props: Props) => {
  const [Step, setStep] = useState(0);
  return (
    <main className=" bg-[#c9d2e7] min-h-screen w-full relative ">
      <div className=" absolute left-1/3 bg-gradient-to-tr from-[#f6d6f7] to-[#ffdce0] blur-2xl w-24 h-44"></div>
      <div className=" absolute left-2/3 top-1/2 bg-gradient-to-tr from-[#faeefb] to-[#f7e9ea] blur-[80px] w-44 h-44"></div>

      {
      Step === 0 ? <Step1 setStep={setStep}/> : Step === 1 ? <Step2 setStep={setStep}/> : <Step3 setStep={setStep}/>
        }
    </main>
  );
};

export default CreatePage;

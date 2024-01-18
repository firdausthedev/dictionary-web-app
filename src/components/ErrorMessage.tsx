"use client";

import AppContext from "@/context/app/AppContext";
import { useContext } from "react";

const ErrorMessageComponent = () => {
  const { state } = useContext(AppContext);

  if (!state.loading && state.response && "message" in state.response) {
    return (
      <div className={`mt-12 flex flex-col gap-5 text-center ${state.fonts}`}>
        <p className="text-6xl">😕</p>
        <h1 className="text-xl font-bold capitalize">{state.response.title}</h1>
        <p className="text-lg font-normal">{state.response.message}</p>
      </div>
    );
  }
};

export default ErrorMessageComponent;

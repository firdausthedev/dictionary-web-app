"use client";

import AppContext from "@/context/app/AppContext";
import { useContext } from "react";
import Spinner from "./Spinner";

const Loading = () => {
  const { state } = useContext(AppContext);
  if (state.loading) {
    return (
      <div className="mt-10 flex items-center justify-center">
        <Spinner />
      </div>
    );
  }
};

export default Loading;

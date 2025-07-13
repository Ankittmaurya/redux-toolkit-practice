import { Signup } from "@/components/forms/Signup";
import React from "react";

export const SignupPage =()=> {
    return(
        <div className="flex flex-wrap w-full h-screen items-stretch">
            <div className="w-full md:w-8/12">
                <div className="w-full h-full">
                    <img src="" alt="" />
                </div>
            </div>
            <div className="w-full md:w-4/12 p-5 md:p-10 lg:p-20">
                <div className="p-6 py-10 border border-solid border-gray-400 bg-white rounded-xl">
                    <Signup />
                </div>
            </div>
        </div>
    )
}
"use client"; // Mark the component as a client component

import React from "react";
import { Button } from "../ui/button";
import { signOutAction } from "@/lib/actions/auth.action";
import { LogOut } from "lucide-react";



const SignOut = () => {
  return (
	<form
	action={signOutAction}
  >
	<Button 
  variant="ghost" 
  type="submit" 
  className="p-2 rounded-full hover:bg-red-50  text-white bg-red-800 hover:text-red-500 transition-colors"
  aria-label="Sign Out"
>
  <LogOut className="h-5 w-5" />
</Button>

  </form>
  );
};

export default SignOut;

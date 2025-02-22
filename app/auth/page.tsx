"use client"
import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {userAuth} from '@/utils/firebase'
import { useDispatch } from 'react-redux';
import { setUser } from '@/store/index';
import { redirect } from 'next/navigation'

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSignup = async () => {
    const userCred = await createUserWithEmailAndPassword(userAuth, email, password);
    dispatch(setUser(userCred["user"].uid));
    redirect('/')
  };

  const handleLogin = async () => {
    const userCred = await signInWithEmailAndPassword(userAuth, email, password);
    dispatch(setUser(userCred["user"].uid));
    redirect('/')
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold">Login / Signup</h1>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="border p-2 w-full mt-2" />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="border p-2 w-full mt-2" />
      <button onClick={handleSignup} className="bg-blue-500 text-white px-4 py-2 mt-4 w-full">Sign Up</button>
      <button onClick={handleLogin} className="bg-gray-500 text-white px-4 py-2 mt-2 w-full">Login</button>
    </div>
  );
}

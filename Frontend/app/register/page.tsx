"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import database from "../api/database";
import axios from "axios";

export default function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();


  const handleSubmit = async () => {
    database.post('/register', {
      firstName: firstName,
      lastName: lastName,
      emailAddress: email,
      password: password
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    database.post('/login', {
      emailAddress: email,
      password: password
    })

    router.push('/dashboard')
  }

  return (
    <div className="flex justify-center mt-8">
      <div style={{ minWidth: "30%" }}>
        <div className="flex min-h-full shadow-lg flex-1 flex-col justify-center 
px-6 py-12 lg:px-8 bg-white">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="flex justify-center">
              {/* <Image src="/login.gif" height={100} width={100} /> */}
            </div>
            <h2 className="mt-1 text-center text-2xl font-bold leading-9 
tracking-tight text-gray-900">
              Create a new account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
            <div>
                <label
                  htmlFor="firstname"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    id="firstname"
                    name="firstname"
                    type="firstname"
                    autoComplete="firstname"
                    onChange={(event) => setFirstName(event.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 
text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 
sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="lastname"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    id="lastname"
                    name="lastname"
                    type="lastname"
                    autoComplete="lastname"
                    onChange={(event) => setLastName(event.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 
text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 
sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={(event) => setEmail(event.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 
text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 
sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    onChange={(event) => setPassword(event.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 
shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="confirmpassword"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Confirm Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="confirmpassword"
                    name="confirmpassword"
                    type="password"
                    autoComplete="current-password"
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 
text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 
sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="button"
                  onClick={handleSubmit}
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <span
                onClick={() => router.push('/')}
                className="font-semibold leading-6 text-indigo-600 
hover:text-indigo-500 cursor-pointer"
              >
                Sign In
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
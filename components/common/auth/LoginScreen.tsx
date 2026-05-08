


'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import {
  Mail,
  Lock,
  ShieldCheck,
  User,
} from 'lucide-react';

import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Logo from '@/components/common/Logo';

import {
  loginUser,
} from '@/src/lib/api';
import { storage } from '@/src/lib/storage';


export default function LoginScreen() {
  const router = useRouter();
  const [role, setRole] = useState<
  "admin" | "user"
>("user");

const [email, setEmail] =
  useState("");

const [password, setPassword] =
  useState("");

const [loading, setLoading] =
  useState(false);

//  const handleLogin = () => {
//   setRole(role);

//   if (role === "admin") {
//     router.push("/admin/dashboard");
//   } else {
//     router.push("/dashboard");
//   }
// };


const handleLogin = async () => {

  try {

    setLoading(true);

    const data =
      await loginUser({
        email,
        password,
        role,
      });

    // SAVE TOKEN
    storage.setToken(
      data.token
    );

    // SAVE USER
    storage.setUser(
      data.user
    );
  

    // PROFILE CHECK
   if (!data.user.profileCompleted) {

  if (data.user.role === 'admin') {

    router.push('/admin/profile');

  } else {

    router.push('/dashboard/profile');

  }

  return;
}

    // ROLE CHECK
    if (
      data.user.role === 'admin'
    ) {

      router.push(
        '/admin/dashboard'
      );

    } else {

      router.push('/dashboard');

    }

  } catch (error: any) {

    alert(error.message);

  } finally {

    setLoading(false);

  }

};

  return (
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-[#F5F7FB]
        px-6
        py-10
      "
    >
      {/* CONTAINER */}
      <div
        className="
          w-full
          max-w-[1100px]
          grid
          lg:grid-cols-2
          bg-white
          rounded-[32px]
          overflow-hidden
          border
          border-[#E8ECF4]
          shadow-sm
        "
      >
        {/* LEFT PANEL */}
        <div
  className="
    hidden
    lg:flex
    flex-col
    items-center
    justify-center
    text-center
    bg-[#30364F]
    p-12
    relative
    overflow-hidden
  "
>
          {/* BG CIRCLE */}
          <div
            className="
              absolute
              -top-20
              -right-20
              w-72
              h-72
              rounded-full
              bg-white/5
            "
          />

          <div
            className="
              absolute
              bottom-0
              left-0
              w-64
              h-64
              rounded-full
              bg-[#E1D9BC]/10
            "
          />

          {/* LOGO */}
          {/* <div className="relative z-10">
            <Logo
              size="lg"
              inverted
            />
          </div> */}


        {/* LOGO */}
<div className="relative z-10 flex items-center gap-2 mb-10">

  {/* ICON */}
  <div
    className="
      w-14
      h-14
      rounded-2xl
      bg-white
      flex
      items-center
      justify-center
      shadow-sm
      flex-shrink-0
    "
  >
    <span className="text-[#232B5D] font-bold text-2xl">
      ₹
    </span>
  </div>

  {/* LOGO TEXT */}
  <h1
    className="
      text-white
      text-4xl
      tracking-tight
      leading-none
    "
    style={{
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
    }}
  >
    LoanSys
  </h1>

</div>

          {/* CONTENT */}
          <div className="relative z-10">
            <p className="text-[#E1D9BC] text-sm tracking-[0.2em] uppercase mb-4">
              Loan Management Platform
            </p>

            <h1
              className="
                text-white
                text-5xl
                leading-[1.1]
                tracking-tight
              "
              style={{
                fontFamily:
                  'var(--font-display)',
              }}
            >
              Smart Loan
              <br />
              Management
              <br />
              For Modern Finance
            </h1>

            <p className="text-[#C8D3DA] mt-6 text-base leading-7 max-w-md">
              Manage applications, approvals,
              repayments and customer records
              from one secure platform.
            </p>
          </div>

          {/* STATS */}
          {/* <div className="relative z-10 flex gap-4">
            <div className="bg-white/10 backdrop-blur rounded-2xl px-5 py-4">
              <p className="text-[#C8D3DA] text-xs">
                Active Loans
              </p>

              <h3 className="text-white text-2xl font-semibold mt-1">
                12.5K
              </h3>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl px-5 py-4">
              <p className="text-[#C8D3DA] text-xs">
                Customers
              </p>

              <h3 className="text-white text-2xl font-semibold mt-1">
                8.2K
              </h3>
            </div>
          </div> */}
        </div>

        {/* RIGHT PANEL */}
        <div
          className="
            flex
            items-center
            justify-center
            p-8
            lg:p-14
          "
        >
          <div className="w-full max-w-md">
            {/* MOBILE LOGO */}
            <div className="lg:hidden mb-10">
              <Logo />
            </div>

            {/* HEADER */}
            <div className="mb-8">
              <h2
                className="
                  text-[38px]
                  leading-tight
                  text-[#30364F]
                "
                style={{
                  fontFamily:
                    'var(--font-display)',
                }}
              >
                Welcome Back
              </h2>

              <p className="text-[#8A9BAA] mt-2">
                Login to continue to LoanSys
              </p>
            </div>

            {/* ROLE TOGGLE */}
            <div
              className="
                bg-[#F5F7FB]
                rounded-2xl
                p-1.5
                flex
                mb-6
              "
            >
              <button
                onClick={() =>
                  setRole('user')
                }
                className={`
                  flex-1
                  h-11
                  rounded-xl
                  text-sm
                  font-medium
                  transition-all
                  ${
                    role === 'user'
                      ? 'bg-[#30364F] text-white shadow-sm'
                      : 'text-[#30364F]'
                  }
                `}
              >
                <div className="flex items-center justify-center gap-2">
                  <User size={16} />
                  User
                </div>
              </button>

              <button
                onClick={() =>
                  setRole('admin')
                }
                className={`
                  flex-1
                  h-11
                  rounded-xl
                  text-sm
                  font-medium
                  transition-all
                  ${
                    role === 'admin'
                      ? 'bg-[#30364F] text-white shadow-sm'
                      : 'text-[#30364F]'
                  }
                `}
              >
                <div className="flex items-center justify-center gap-2">
                  <ShieldCheck size={16} />
                  Admin
                </div>
              </button>
            </div>

            {/* FORM */}
            <div className="space-y-5">
              <Input
  label="Email Address"
  type="email"
  placeholder="Enter your email"
  leftIcon={<Mail size={18} />}
  value={email}
  onChange={(e) =>
    setEmail(e.target.value)
  }
/>

             <Input
  label="Password"
  type="password"
  placeholder="Enter password"
  leftIcon={<Lock size={18} />}
  value={password}
  onChange={(e) =>
    setPassword(e.target.value)
  }
/>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-[#4A5270]">
                  <input
                    type="checkbox"
                    className="rounded"
                  />

                  Remember me
                </label>

                <button
                  className="
                    text-sm
                    font-medium
                    text-[#30364F]
                  "
                >
                  Forgot Password?
                </button>
              </div>

              <Button
  size="md"
  onClick={handleLogin}
>
  {loading
    ? 'Loading...'
    : 'Login'}
</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
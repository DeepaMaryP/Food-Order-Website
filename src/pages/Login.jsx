import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { doLogin } from '../helpers/loginHelper'
import { storeDefaultDish } from '../helpers/dishHelper';
import { login, logout } from '../redux/slice/userSlice';

export default function Login() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const [error, SetError] = useState("");
  const [loginData, setLoginData] = useState(
    {
      email: 'admin@gmail.com',
      password: 'admin'
    }
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData(prevLogIn => ({
      ...prevLogIn,
      [name]: [value]
    }))
  }

  const onSubmit = (event) => {
    event.preventDefault();
    SetError('');

    if (user.isLoggedIn) {
      dispatch(logout())
      navigate('/home');
    } else {
      const isLoggedIn = doLogin(loginData.email, loginData.password)
      if (isLoggedIn) {
        storeDefaultDish();
        dispatch(login('Admin'))
        navigate('/admin/dishes');
      } else {
        SetError("Incorrect UserName or Password")
      }
    }
  }

  return (
    <div className="flex w-1/3 mx-auto flex-1 flex-col justify-center mt-14 pb-5 border rounded-lg ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                readOnly={user.isLoggedIn}
                autoComplete="email"
                value={loginData.email}
                onChange={handleChange}
                className="block w-full rounded-md border bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                Password
              </label>
              {!user.isLoggedIn &&
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>}
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                readOnly={user.isLoggedIn}
                value={loginData.password}
                onChange={handleChange}
                required
                autoComplete="current-password"
                className="block border w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
          {error.length > 0}
          <div>
            <span className='text-red-400 p-5'>{error}</span>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {!user.isLoggedIn &&
                <span>Sign in</span>}
              {user.isLoggedIn &&
                <span>Sign Out</span>}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
import { useState, useEffect } from 'react';
import Alert from '../components/Alert';
import { useAppContext } from '../context/appContext';
import { useNavigate } from 'react-router-dom';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);
  const { user, isLoading, showAlert, displayAlert, registerUser, loginUser } =
    useAppContext();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }
    const currentUser = { name, email, password };
    if (isMember) {
      loginUser({
        currentUser,
        alertText: 'Login Successful! Redirecting...',
      });
    } else {
      registerUser({
        currentUser,
        alertText: 'User Created! Redirecting...',
      });
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/home');
      });
    }
  }, [user, navigate]);

  return (
    <div className="grid  h-screen w-full">
      <nav className="top-0 mt-0 flex justify-between items-center w-full h-20  bg-gradient-to-b from-black to-gray-900 text-gray-200 fixed">
        <div>
          <h1 className="text-5xl font-signature  ml-2">Henry Anene</h1>
        </div>
      </nav>
      <div className="bg-gradient-to-b from-blue-800 to bg-purple-900 flex flex-col justify-center">
        <form
          className="max-w-[400px] lg:max-w-[500px] w-full mx-auto bg-white p-8 px-8 rounded-xl"
          onSubmit={onSubmit}
        >
          <div>
            <h2 className="text-4xl font-bold text-center">
              {values.isMember ? 'Login' : 'Register'}
            </h2>
            {showAlert && <Alert />}
            {/* name input */}
            {!values.isMember && (
              <div className="flex flex-col py-2">
                <label htmlFor="name">Name</label>
                <input
                  className="rounded-lg bg-gray-200 mt-1 p-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none"
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                />
              </div>
            )}

            {/* email input */}
            <div className="flex flex-col py-2">
              <label htmlFor="name">Email</label>
              <input
                className="rounded-lg bg-gray-200 mt-1 p-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
            </div>
            {/* password input */}
            <div className="flex flex-col py-2">
              <label htmlFor="name">Password</label>
              <input
                className="rounded-lg bg-gray-200 mt-1 p-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="w-full my-5 py-2 bg-yellow-300 text-white rounded-lg hover:bg-yellow-400"
              disabled={isLoading}
            >
              Submit
            </button>
            <div className="flex justify-center py-2">
              <p>
                {values.isMember ? 'Not a member yet?' : 'Already a member?'}
                <button
                  type="button"
                  onClick={toggleMember}
                  className="text-purple-800"
                >
                  {values.isMember ? 'Register' : 'Login'}
                </button>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register;

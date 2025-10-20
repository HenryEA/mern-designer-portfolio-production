import { useAppContext } from '../context/appContext';

const Alert = () => {
  const { alertType, alertText } = useAppContext();
  return (
    <div className="w-full my-5 py-2 bg-yellow-400 font-bold rounded-lg text-center text-white">
      {alertText}
    </div>
  );
};

export default Alert;

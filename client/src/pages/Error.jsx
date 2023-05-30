import { Link } from 'react-router-dom';
import img from '../assets/image/notfound.svg';

const Error = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center ">
      <div justify-center>
        <div>
          <img
            src={img}
            alt="not-found"
            className="sm:max-w-xs md:max-w-sm lg:max-w-md xl: max-w-lg"
          />
        </div>
        <div className="flex flex-col h-24 items-center py-2">
          <h3 className="text-bold text-3xl">Ohh! page not found</h3>
          <p>We can't seem to find the page you're looking for</p>
          <Link to="/" className="text-blue-500 py-3">
            BACK HOME
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;

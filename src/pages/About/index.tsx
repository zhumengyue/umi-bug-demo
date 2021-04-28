import { Link } from 'umi';

const pageAbout = () => {
  return (
    <div>
      <h1>About</h1>
      <h1>
        <Link to="/home">Go to home</Link>
      </h1>
    </div>
  );
};

export default pageAbout;

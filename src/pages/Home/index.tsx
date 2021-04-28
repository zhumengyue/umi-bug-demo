import { Link } from 'umi';

const PageHome = () => {
  return (
    <div>
      <h1>Home</h1>
      <h1>
        <Link to="/about">Go to about</Link>
      </h1>
    </div>
  );
};

export default PageHome;

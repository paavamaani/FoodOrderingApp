import { useRouteError } from 'react-router-dom';

const Error = () => {
  const errors = useRouteError();

  return (
    <h1>
      {errors.status} {errors.statusText}
    </h1>
  );
};

export default Error;

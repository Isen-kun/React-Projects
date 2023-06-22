import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Page Not Found</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia,
        veniam eligendi! Quisquam consectetur quia sint at ipsum et vel quidem
        repellat odio officia cupiditate perferendis natus, quas facilis.
        Obcaecati, iure?
      </p>

      <p>
        Go to the <Link to="/">Homepage</Link>
      </p>
    </div>
  );
};

export default NotFound;

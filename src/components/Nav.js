// link component
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <Link to="/">
        <div>Home</div>
      </Link>

      <Link to="/homepage">
        <div>Employee Directory</div>
      </Link>
    </div>
  );
}

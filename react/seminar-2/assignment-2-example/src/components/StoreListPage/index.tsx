import { Link } from "react-router-dom";

export default function StoreListPage() {
  return (
    <div>
      list store
      <p>
        <Link to="/stores/1">the only store we have</Link>
      </p>
    </div>
  );
}

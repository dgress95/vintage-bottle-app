import Nav from "../components/Nav";
import CreateBottle from "../components/CreateBottle";
import "../styles/admin.css";

function AdminDashboard() {
  return (
    <>
      <Nav />
      <div className="form-area">
        <CreateBottle />
      </div>
    </>
  );
}

export default AdminDashboard;

import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
function Dashboard() {

  const [data, setdata] = useState([]);
  useEffect(() => getdata(), []);
  const getdata = () => {
    fetch(`${process.env.REACT_APP_API_URL}/clientdata/alldata`)
      .then((data) => data.json())
      .then((res) => setdata(res.reverse()));
  };
  const deletearticle = (id) => {
    fetch(`${process.env.REACT_APP_API_URL}/clientdata/delete/${id}`, {
      method: "DELETE",
    }).then(() => getdata());
  };

  const [current, setcurrent] = useState(1);
  const records = 5;
  const lastIndex = current * records;
  const firstIndex = lastIndex - records;
  const page = data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(data.length / records);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  function previous() {
    if (current !== 1) {
      setcurrent(current - 1);
    }
  }

  function next() {
    if (current !== npage) {
      setcurrent(current + 1);
    }
  }

  return (
    <>
      <section className="dashboard-container">
        <div className="page-tittle">List Of Datas</div>

        <table id="space" className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Name</th>

              <th scope="col">Email</th>
              <th scope="col">Card Number</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
       <tbody>
            {page.map((data, i) => {
              return (
                <>
                  <tr className="row-data" key={i}>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.number}</td>
                    <td onClick={() => deletearticle(data._id)}>
                      <DeleteIcon className="icon-delete" />
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>

        <div className="page-container">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li id="new" className="page-item">
                <Link onClick={previous} className="page-link" to="#">
                  Previous
                </Link>
              </li>
              <div className="paginations">
                page {current} of {numbers.length}
              </div>

              <li className="page-item">
                <Link onClick={next} className="page-link" to="#">
                  Next
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
}

export default Dashboard;

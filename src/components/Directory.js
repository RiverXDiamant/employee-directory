// import components
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function EmployeeDirectory() {
  const directory = [
    {
      name: "Garth Marenghi",
      title: "President and CEO",
      number: "678-859-7469",
      email: "g.marenghi@darkplace.org",
      img: "../images/garth_marenghis.jpg",
    },
    {
      name: "Dr. Rick Dagless M.D.",
      title: "Cardio Pulmonary Specialist",
      number: "678-923-4765",
      email: "dr.rdagless@darkplace.org",
      img: "../images/garth_marenghis_darkplace_rick.jpg",
    },
    {
      name: "Dr. Elizabeth Asher",
      title: "Chief Neurosurgeon",
      number: "678-996-3025",
      email: "dr.lizasher@darkplace.org",
      img: "../images/garth_marenghis_darkplace_liz.jpg",
    },
    {
      name: "Thorton Reed",
      title: "CFO",
      number: "678-931-8876",
      email: "t.reed@darkplace.org",
      img: "../images/garth_marenghis_darkplace_reed.jpg",
    },
    {
      name: "Dr. Lucien Sanchez",
      title: "Orthopedic Surgeon",
      number: "678-891-3004",
      email: "dr.lsanchez@darkplace.org",
      img: "../images/garth_marenghis_darkplace_todd.jpg",
    },
    {
      name: "Roy Trenneman",
      title: "Software Engineer III",
      number: "678-932-7015",
      email: "r.trenneman@darkplace.org",
      img: "../images/the_it_crowd_roy.jpg",
    },
    {
      name: "Maurice Moss",
      title: "Software Engineer II",
      number: "0118-999-88199-9119-725-3",
      email: "m.moss@darkplace.org",
      img: "../images/the_it_crowd_moss.jpg",
    },
  ];

  return (
    <>
      <h1>Darkplace Hospital Directory</h1>
      <div>
        <SearchBar />
      </div>
      <div className="employee-homepage">
        {directory.map((employee) => {
          const { name, title, number, email, img } = employee;

          return (
            <>
              <div className="employee-directory">
                <div className="employee-photo">
                  <img src={`/images/${img}`} alt={`${name}`} />
                </div>
                <div className="employee-info">
                  <Link to={`/employeepage/${name}`}>
                    <span className="name">
                      <strong>{name}</strong>
                    </span>
                  </Link>

                  <span className="title">{title}</span>
                  <br />

                  <span className="number">
                    <strong>Work Phone:</strong> {number}
                  </span>

                  <span className="email">
                    <strong>Email:</strong> {email}
                  </span>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

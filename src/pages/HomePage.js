// link component
import { Link } from "react-router-dom";

export default function HomePage(props) {
  // employee array
  const directory = [
    {
      name: "Garth Marenghi",
      title: "President and CEO",
      number: "678-859-7469",
      email: "g.marenghi@darkplace.org",
    },
    {
      name: "Dr. Rick Dagless M.D.",
      title: "Cardio Pulmonary Specialist",
      number: "678-923-4765",
      email: "dr.rdagless@darkplace.org",
    },
    {
      name: "Dr. Elizabeth Asher",
      title: "Chief Neurosurgeon",
      number: "678-996-3025",
      email: "dr.lizasher@darkplace.org",
    },
    {
      name: "Thorton Reed",
      title: "CFO",
      number: "678-931-8876",
      email: "t.reed@darkplace.org",
    },
    {
      name: "Dr. Lucien Sanchez",
      title: "Orthopedic Surgeon",
      number: "678-891-3004",
      email: "dr.lsanchez@darkplace.org",
    },
    {
      name: "Roy Trenneman",
      title: "Software Engineer III",
      number: "678-932-7015",
      email: "r.trenneman@darkplace.org",
    },
    {
      name: "Maurice Moss",
      title: "Software Engineer II",
      number: "0118-999-88199-9119-725-3",
      email: "m.moss@darkplace.org",
    },
  ];

  return (
    <div className="employee-homepage">
      {directory.map((employee) => {
        const { name, title, number, email } = employee;

        return (
          <>
            <div className="employee-directory">
              <div className="employee-photo">
                <img href="" alt={`${name}`} />
              </div>
              <div className="employee-info">
                <Link to={`/employeepage/${name}`}>
                  <span className="name">
                    <strong>{name}</strong>
                  </span>
                </Link>

                <span className="title">{title}</span>

                <span className="number">{number}</span>

                <span className="email">{email}</span>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

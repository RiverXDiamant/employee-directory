export default function EmployeePage(employee) {
  const { name, title, number, email } = employee;
  return (
    <>
      <h2>Employee Page</h2>
      <div className="employee-show-page">
        <div className="single-employee-info">
          <div className="employee-page-photo">
            <img href="" alt={name} />
          </div>
          <span className="name">{name}</span>
          <span className="title">{title}</span>
          <span className="number">{number}</span>
          <span className="email">{email}</span>
        </div>
      </div>
    </>
  );
}

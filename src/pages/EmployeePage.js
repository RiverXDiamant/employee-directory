export default function EmployeePage(directory) {
  const { name, title, number, email } = directory;
  return (
    <>
      <h2>Employee Page</h2>
      <div className="employee-show-page">
        <div className="single-employee-info">
          <div className="employee-page-photo">
            <img src="" alt={name} />
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

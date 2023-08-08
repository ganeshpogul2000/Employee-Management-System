import React, { useEffect, useState } from 'react';
import { useParams ,Link} from 'react-router-dom';
import EmployeeService from '../service/EmployeeService';

const ViewEmployeeComponent = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    EmployeeService.getEmplyeeById(id).then((res) => {
      setEmployee(res.data);
    });
  }, [id]);

  return (
    <div>
      <br />
      <div className="card col-md-6 offset-md-3">
        <h3 className="text-center">View Employee Details</h3>
        <div className="card-body">
          <div className="row">
            <label>Employee First Name:</label>
            <div>{employee.firstNm}</div>
          </div>
          <div className="row">
            <label>Employee Last Name:</label>
            <div>{employee.lastNm}</div>
          </div>
          <div className="row">
            <label>Employee Email ID:</label>
            <div>{employee.email}</div>
          </div>
        </div>
      </div>
      <Link to='/employees'>
        <button className='btn btn-primary'>Back</button>
      </Link>
    </div>
  );
};

export default ViewEmployeeComponent;

import React, { useState, useEffect } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import EmployeeService from '../service/EmployeeService'; 

export default function ListOfEmployeeComponent(){
  const [employees, setEmployees] = useState([]); 
  const navigate = useNavigate();

  useEffect(() => {
    EmployeeService.getEmployee().then((res) => {
      setEmployees(res.data);
    });
  }, []);

  const editEmployee =(id)=>{
    navigate(`/add-employee/${id}`);
  };

  const deleteEmployee =(id)=>{
    EmployeeService.deleteEmployee(id).then(res => {
      setEmployees(employees.filter(employee => employee.id != id));
    })
  };

  const viewEmployee =(id)=>{
    // EmployeeService.getEmplyeeById(id).then((res) => {
    //   setEmpRedirect(
    //     {
    //       id: res.data.id, firstNm: res.data.firstNm, lastNm: res.data.lastNm, email: res.data.email
    //     }
    //   );
    //   console.log((res.data));
    //   console.log({empRedirect});
    //   navigate("/view-employee" , {state: {empRedirect}});
    // });

    // const e= employees.find(e=>(e.id) === id);
    // setEmpRedirect({
    //     id: e.id, firstNm: e.firstNm, lastNm: e.lastNm, email: e.email
    // });
  //   setEmpRedirect((prevEmpRedirect)=>{
  //     return {id: e.id, firstNm: e.firstNm, lastNm: e.lastNm, email: e.email};
  // });

    
    // navigate("/view-employee" , {state: empRedirect});

    navigate(`/view-employee/${id}`);
  };

  return (
    <div>
      <h2 className='text-center'>Employee List</h2>
      <Link to='/add-employee/_add'>
        <button className='btn btn-primary'>Add Employee</button>
      </Link>
      <div className='row'>
        <table className='table table-striped table-bordered'>
          <thead>
            <tr>
              <th>Employee First Name</th>
              <th>Employee Last Name</th>
              <th>Employee Email Id</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.firstNm}</td>
                <td>{employee.lastNm}</td>
                <td>{employee.email}</td>
                <td>
                  <button onClick={()=>editEmployee(employee.id)} className='btn btn-info mx-2'>Update</button>
                  <button onClick={()=>deleteEmployee(employee.id)} className='btn btn-danger mx-2'>Delete</button>
                  <button onClick={()=>viewEmployee(employee.id)} className='btn btn-info '>View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
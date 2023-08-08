import React, { Component,useState,useEffect } from 'react'
import { Link ,useNavigate, useParams} from 'react-router-dom';
import EmployeeService from '../service/EmployeeService';

const CreateEmployeeComponent = () => {
  const {id} =useParams();
  const [firstNm, setFirstNm] = useState('');
  const [lastNm, setLastNm] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if(id!= '_add'){ 
      EmployeeService.getEmplyeeById(id).then((res) => {
        let employee = res.data;
        setEmail(employee.email);
        setFirstNm(employee.firstNm);
        setLastNm(employee.lastNm);
      });
    }else{return}
    
  }, []);

  const changeFirstNmHandler = (event) => {
    setFirstNm(event.target.value);
  };

  const changeLastNmHandler = (event) => {
    setLastNm(event.target.value);
  };

  const changeEmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const saveOrUpdateEmployee = (event) => {
    event.preventDefault();
    let employee = {
      firstNm: firstNm,
      lastNm: lastNm,
      email: email,
    };
    console.log('employee => ' + JSON.stringify(employee));

    if(id === '_add'){ 
      EmployeeService.createEmployee(employee).then((res) => {
        navigate('/employees');
      });
     }
     else{
      EmployeeService.updateEmplyee(id,employee).then((res) => {
        navigate('/employees');
      });
     }
    
  };

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='card col-md-6 offset-md-3 offset-md-3'>
            {
              id === '_add' ? <h3 className='text-center'>Add Employee</h3> : <h3 className='text-center'>Update Employee</h3>
            }
            <div className='card-body'>
              <form>
                <div className='form-group'>
                  <label>First Name</label>
                  <input
                    placeholder='First Name'
                    name='firstNm'
                    className='form-control'
                    value={firstNm}
                    onChange={changeFirstNmHandler}
                  />
                </div>
                <div className='form-group'>
                  <label>Last Name</label>
                  <input
                    placeholder='Last Name'
                    name='lastNm'
                    className='form-control'
                    value={lastNm}
                    onChange={changeLastNmHandler}
                  />
                </div>
                <div className='form-group'>
                  <label>Email Id</label>
                  <input
                    placeholder='Email Id'
                    name='email'
                    className='form-control'
                    value={email}
                    onChange={changeEmailHandler}
                  />
                </div>
                <button className='btn btn-success' onClick={saveOrUpdateEmployee}>
                  {id === '_add' ? `Save` : `Update`}
                </button>
                <Link to='/employees'>
                  <button
                    className='btn btn-danger'
                    style={{ marginLeft: '10px' }}
                  >
                    Cancel
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEmployeeComponent;

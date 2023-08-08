import axios from 'axios';

const Employee_Api_Base_Uri ="http://localhost:8081/api"
class EmployeeService{
     getEmployee(){
        return axios.get(Employee_Api_Base_Uri+ "/getAll");
     }

     createEmployee(employee){
        return axios.post(Employee_Api_Base_Uri + "/addEmployee", employee);
     }

     updateEmplyee(id,employee){
      return axios.put(Employee_Api_Base_Uri + "/updateEmployee/" +id , employee);
     }

     getEmplyeeById(id){
      return axios.get(Employee_Api_Base_Uri + "/getEmployee/"+ id);
     }

     deleteEmployee(id){
      return axios.delete(Employee_Api_Base_Uri + "/deleteEmployee/" + id);
     }
}

export default new EmployeeService();
import axios from 'axios'

export const baseUrl = `http://dummy.restapiexample.com/api/v1`
export const employeesUrl = `${baseUrl}/employees`
export const createUrl = `${baseUrl}/create`

export const getAllEmployees = async () => {
    return await axios.get(employeesUrl).then(res => res.data.data)
}

export const postNewEmployee = (name, salary) =>{
    return axios.post(createUrl,{name, salary})
}
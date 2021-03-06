import axios from "axios"
const SPACEX_BASE_URL='https://api.spacexdata.com/v3';

export const getPastLaunches=()=>{
    return axios.get(`${SPACEX_BASE_URL}/launches/past`);
}

export const getCompanyInfo=()=>{
    return axios.get(`${SPACEX_BASE_URL}/info`);
}
export const getAllLaunches = () =>{
    return axios.get(`${SPACEX_BASE_URL}/launches`)
}
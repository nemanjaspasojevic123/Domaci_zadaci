import { getPastLaunches } from '../services/spacex_service'

const SelectList = () => {
    const selectYear = document.createElement('select');
    selectYear.className = 'select-list';
    getPastLaunches().then(response => {
        let { data } = response;
        let niz = [];
        data.forEach(element => {
            if(!niz.includes(element.launch_year)){
                niz.push(element.launch_year);
                let option = document.createElement('option');
                option.text = element.launch_year;
                option.value = element.launch_year;
                selectYear.add(option);
            }
        });
    }); 
    return selectYear;
}

export default SelectList;
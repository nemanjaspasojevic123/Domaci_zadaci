import LaunchList from "./components/launch_list";
import HeaderList from "./components/header_list";
import SelectList from "./components/select";
const app = document.querySelector('#app');


const header = document.createElement('header');
const filters = document.createElement('section');
const launch_list = LaunchList();
const header_list = HeaderList();

const selectList = SelectList();

selectList.addEventListener('change', ()=>{
    const list = document.querySelector(".launch-list");
    app.replaceChild(LaunchList(selectList.value),list);
});


filters.appendChild(selectList);

app.append(header_list, filters, launch_list, header)



import LaunchList from "./components/launch_list";
import HeaderList from "./components/header_list";
const app = document.querySelector('#app');

// const header1 = Header1()

const header = document.createElement('header');
const filters = document.createElement('section');
const launch_list = LaunchList();
const header_list = HeaderList();

const footer = document.createElement('footer');

app.append(header_list, launch_list, header, filters, footer)



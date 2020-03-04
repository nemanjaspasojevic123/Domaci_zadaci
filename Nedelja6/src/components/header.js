const Header1 = (header) => {
    // Object destructuring
    // let {
    //     name,
    //     founder,
    //     founded,
    //     launch_sites 
    // } = header;
    const div = document.createElement('div');
    div.className = 'header';

    div.innerHTML=`<span>${header.data.name}<br><br> ${header.data.summary}</span>`
    return div;
}
export default Header1;
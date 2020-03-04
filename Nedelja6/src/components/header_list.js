import { getCompanyInfo } from '../services/spacex_service'
import Header1 from './header';

const HeaderList = () => {
    
    const div = document.createElement('div');
    div.className = 'header-list';
    getCompanyInfo().then(response => {
        div.appendChild(Header1(response))
    });
    return div
}

export default HeaderList;
import customerTypePieFactory from './customerTypePieFactory';
import PieChart from 'components/pieChart';
import { getCustomerSource } from 'servers/mock';

const CompanyCustomerTypePie = customerTypePieFactory(PieChart,getCustomerSource,(res) => {

    let data = [];
    data.push({
        name: '老用户',
        y: res[0].oldCustomer
    });
    data.push({
        name: '新用户',
        y: res[0].newCustomer
    });

    return data;
});

export default CompanyCustomerTypePie;
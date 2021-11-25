import CustomerIcon from '@material-ui/icons/People';
import CustomerEdit from './CustomerEdit';
import CustomerList from './CustomerList';
import CustomerShow from './CustomerShow';

const customers = {
  list: CustomerList,
  edit: CustomerEdit,
  show: CustomerShow,
  icon: CustomerIcon,
};

export default customers;

import ProductIcon from '@material-ui/icons/Collections';
import ProductList from './ProductList';
import ProductEdit from './ProductEdit';
import ProductCreate from './ProductCreate';

const products = {
  list: ProductList,
  create: ProductCreate,
  edit: ProductEdit,
  icon: ProductIcon,
};

export default products;

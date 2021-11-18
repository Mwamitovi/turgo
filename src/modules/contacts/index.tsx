/* eslint-disable import/no-anonymous-default-export */
import { ContactShow } from './ContactShow';
import { ContactList } from './ContactList';
import { ContactEdit } from './ContactEdit';
import { ContactCreate } from './ContactCreate';

const contacts = {
  list: ContactList,
  show: ContactShow,
  edit: ContactEdit,
  create: ContactCreate,
};

export default contacts;

import {action, makeObservable, observable} from 'mobx';
import menuList from '../data/menuList';

class Products {
  list = menuList;

  constructor() {
    makeObservable(this, {
      list: observable,
      addProduct: action,
      removeProduct: action,
    });
  }

  addProduct(id, cnt) {
    this.list.find(el => el.id === id).count = cnt;
    this.list.find(el => el.id === id).isAdded = true;
  }

  removeProduct(id) {
    this.list.find(el => el.id === id).isAdded = false;
  }
}

const products = new Products();

export default products;

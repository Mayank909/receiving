import { GetterTree } from "vuex";
import ProductState from "./ProductState";
import RootState from "../../RootState";

const getters: GetterTree<ProductState, RootState> = {
  getSearchProducts(state) {
    return state.products.list;
  },
  getCurrent (state) {
    return state.current;
  },
  getUpdateShipmentProducts(state) {
    return state.updateShipmentProducts;
  },
};
export default getters;

import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      cart: [],
    };
  },
  mutations: {
    ADD_TO_CART(state, item) {
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === item.id && cartItem.size === item.size
      );
      if (existingItem) {
        existingItem.quantity += item.quantity; // grega
      } else {
        state.cart.push(item); // suma si esta
      }
    },
    REMOVE_FROM_CART(state, itemToRemove) {
      const index = state.cart.findIndex(
        (item) => item.id === itemToRemove.id && item.size === itemToRemove.size
      );
      if (index !== -1) {
        state.cart.splice(index, 1); // Elimina
      }
    },
  },
  actions: {
    addToCart({ commit }, item) {
      commit("ADD_TO_CART", item); // Acción para agregar un elemento al carrito
    },
    removeFromCart({ commit }, itemId) {
      commit("REMOVE_FROM_CART", itemId); // Acción para eliminar un elemento del carrito
    },
  },
  getters: {
    cartItems: (state) => state.cart, // Obtiene todos los elementos del carrito
    cartCount: (state) => state.cart.length, // Obtiene la cantidad total de elementos en el carrito
    cartTotal: (state) =>
      state.cart.reduce((total, item) => total + item.price * item.quantity, 0), // Calcula el total a pagar en el carrito
  },
  cartItems: (state) => state.cart,
});

export default store;

import { ref } from 'vue';

const checkoutItems = ref([]);

export const useStore = () => {
  const addToCheckout = (product) => {
    const existingProduct = checkoutItems.value.find(item => item.id === product.id);
    if (!existingProduct) {
      checkoutItems.value.push({ ...product, quantity: 1 });
    } else {
      existingProduct.quantity++;
    }
  };

  const removeFromCheckout = (product) => {
    const existingProduct = checkoutItems.value.find(item => item.id === product.id);
    if (existingProduct && existingProduct.quantity > 1) {
      existingProduct.quantity--;
    } else {
      checkoutItems.value = checkoutItems.value.filter(item => item.id !== product.id);
    }
  };

  return {
    checkoutItems,
    addToCheckout,
    removeFromCheckout,
  };
};

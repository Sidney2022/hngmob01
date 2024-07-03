<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Checkout</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <template v-if="checkoutItems.length > 0">
        <ion-list>
          <ion-item v-for="item in checkoutItems" :key="item.id">
            <ion-label>
              <h2>{{ item.name }}</h2>
              <p>Price: ${{ item.price.toFixed(2) }}</p>
              <p>Quantity: {{ item.quantity }}</p>
            </ion-label>
            <ion-button @click="addToCheckout(item)">+</ion-button>
            <ion-button @click="removeFromCheckout(item)">-</ion-button>
          </ion-item>
        </ion-list>
        <ion-item>
          <ion-label>
            <h2>Total: ${{ total.toFixed(2) }}</h2>
          </ion-label>
        </ion-item>
        <ion-button expand="full" @click="navigateToOrderSuccess">Place Order</ion-button>
      </template>
      <template v-else>
        <ion-text color="danger">
          <h2>Your cart is empty.</h2>
        </ion-text>
      </template>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from '../store';
import { useRouter } from 'vue-router';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonButton, IonText } from '@ionic/vue';

const router = useRouter();
const { checkoutItems, addToCheckout, removeFromCheckout } = useStore();

const total = computed(() => {
  return checkoutItems.value.reduce((acc, item) => acc + (item.price * item.quantity), 0);
});

const navigateToOrderSuccess = () => {
  router.push('/order-success');
};
</script>

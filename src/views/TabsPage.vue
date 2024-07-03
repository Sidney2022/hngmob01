<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/products">
          <ion-icon aria-hidden="true" :icon="menu" />
          <ion-label>Products</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/checkout">
          <ion-icon :icon="cart" />
          <ion-label>Checkout</ion-label>
        </ion-tab-button>
       
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>


<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { menu, square, triangle, cart,  } from 'ionicons/icons';

</script>

<template>
  <ion-app>
    <ion-router-outlet id="main-content" />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';

export default {
  components: {
    IonApp,
    IonRouterOutlet
  }
};
</script>

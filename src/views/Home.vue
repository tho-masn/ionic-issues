<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Blank</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div id="container">
        <div
          @click="setModalOpen(true)"
        >
          Open modal
        </div>

        <ModalExample
          v-if="isModalOpen"
          @did-dismiss="setModalOpen(false)"
        />

      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import ModalExample from '@/components/ModalExample.vue'

export default {
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    ModalExample,
  },

  data () {
    return {
      isPopoverOpen: false,
      popoverEvent: null,
      isModalOpen: false
    }
  },

  methods: {
    setModalOpen(value) {
      this.isModalOpen = value
    }
  }
};
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>

<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Blank</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div @click="isModalOpen = true">
        Open Modal
      </div>

      {{isModalOpen}}

      <BaseModal
        v-if="isModalOpen"
        @click:close="isModalOpen = false"
      >
        test<br>
        test<br>
        test<br>
        test<br>
        test<br>
        test<br>
        test<br>
        test<br>
        test<br>
        test<br>
        test<br>
        test<br>
        test<br>
        test<br>
        test<br>
        test<br>
        test<br>
        test<br>
        test<br>
        test<br>
        test<br>
        test<br>
        test<br>
        test<br>
        test<br>
        test<br>
        test<br>
        test<br>
        test<br>
        test<br>
        test<br>
        test<br>
        test<br>
        test<br>
        test<br>
        test<br>
        test<br>

        <div
          slot="fixed"
        >
          <div
            style="width: 50px; height: 50px; background-color: yellow;"
          />
        </div>
      </BaseModal>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import BaseModal from '@/views/BaseModal'

export default {
  components: {
    BaseModal,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
  },

  data () {
    return {
      isModalOpen: false
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

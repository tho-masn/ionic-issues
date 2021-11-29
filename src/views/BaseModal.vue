<template>
  <ion-modal
    :is-open="true"
    :swipe-to-close="true"
    @did-dismiss="closeModal"
  >
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Modal</ion-title>

          <ion-buttons
            slot="end"
          >
            <ion-icon
              :icon="iconClose"
            />
          </ion-buttons>
        </ion-toolbar>
      </ion-header>

      <ion-content
        :class="$props.class"
      >
        <slot />
      </ion-content>
    </ion-page>
  </ion-modal>
</template>

<script>
import {
  IonModal,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonIcon,
} from '@ionic/vue'
import { close as iconClose } from 'ionicons/icons'

export default {
  components: {
    IonModal,
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonIcon
  },

  data () {
    return {
      iconClose
    }
  },

  methods: {
    closeModal () {
      this.$emit('click:close')
    }
  }
}
</script>

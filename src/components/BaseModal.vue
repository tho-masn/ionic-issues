<template>
  <ion-modal
    :is-open="true"
    :swipe-to-close="true"
    @did-dismiss="closeModal()"
  >
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Test</ion-title>

          <ion-buttons
            slot="end"
          >
            <div
              @click="closeModal"
            >
              <ion-icon :icon="iconClose" />
            </div>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>

      <ion-content>
        <slot />
      </ion-content>
    </ion-page>
  </ion-modal>
</template>

<script>
import { IonModal, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonIcon } from '@ionic/vue'
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

  props: {
    class: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      iconClose,
      isOpen: true
    }
  },

  methods: {
    closeModal () {
      this.$emit('click:close')
    }
  }
}
</script>

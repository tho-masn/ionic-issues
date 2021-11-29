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
            v-if="$slots.headerLeft"
            slot="start"
          >
            <slot
              name="headerLeft"
            />
          </ion-buttons>

          <ion-buttons
            slot="end"
          >
            <ion-button
              v-if="!$slots.headerRight"
              @click="closeModal"
            >
              <ion-icon
                :icon="iconClose"
              />
            </ion-button>

            <slot
              v-if="$slots.headerRight"
              name="headerRight"
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
  IonButton,
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
    IonButton,
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

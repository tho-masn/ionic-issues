<template>
  <ion-modal
    :is-open="isOpen"
    :swipe-to-close="true"
    @did-dismiss="closeModal"
    :presenting-element="presentingElement"
  >
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>{{ title }}</ion-title>

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
            <div
              v-if="!$slots.headerRight"
              @click="closeModal"
            >
              <ion-icon
                :icon="iconClose"
                class="text-4xl text-gray-500"
              />
            </div>

            <slot
              v-if="$slots.headerRight"
              name="headerRight"
            />
          </ion-buttons>
        </ion-toolbar>
      </ion-header>

      <ion-content
        class="h-full"
      >
        <div
          class="pt-4 min-h-full bg-gray-100"
          :class="$props.class"
        >
          <slot />
        </div>
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
    title: {
      type: String,
      required: true
    },

    class: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      iconClose,
      isOpen: false,
      presentingElement: document.getElementById('main-content')
    }
  },

  created () {
    this.isOpen = true
  },

  methods: {
    closeModal () {
      if (!this.isOpen) {
        return
      }

      this.isOpen = false
      this.$emit('click:close')
    }
  }
}
</script>

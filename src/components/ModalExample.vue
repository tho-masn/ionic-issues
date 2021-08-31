<template>
  <BaseModal
    title="test"
  >
    <div
      @click="onClickOpenSubPage"
    >
      Open menu
    </div>

    <Teleport
      v-if="renderMenu"
      :to="teleportTo"
    >
      <ion-menu
        menu-id="test"
        side="end"
        content-id="main-content"
        max-edge-start="0"
        type="overlay"
        style="--width: 100%; position: absolute; z-index: 999999"
      >
        <ion-header>
          <ion-toolbar>
            <ion-title>Sub page</ion-title>

            <ion-buttons slot="start">
              <ion-button
                @click="onClickBack"
              >
                <ion-icon
                  :icon="iconChevronBack"
                  class="text-3xl"
                />

                <div>
                  back
                </div>
              </ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>

        <ion-content
          style="--background: #eeeeee;"
        >
          <div class="mt-4 h-full">
            Sub page
          </div>
        </ion-content>
      </ion-menu>
    </Teleport>
  </BaseModal>
</template>

<script>
import BaseModal from '@/components/BaseModal.vue'
import { modalController, menuController } from '@ionic/vue'
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon } from '@ionic/vue'
import { chevronBack as iconChevronBack } from 'ionicons/icons'

export default {
  components: {
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonButton,
    IonIcon,
    BaseModal
  },

  data () {
    return {
      renderMenu: false,
      teleportTo: null,
      iconChevronBack
    }
  },

  beforeUnmount () {
    menuController.close()
  },

  methods: {
    async onClickOpenSubPage () {
      this.teleportTo = await this.getTeleportTo()
      this.renderMenu = true

      this.$nextTick(() => {
        menuController.enable(true, 'test')
        menuController.open('test')
      })
    },

    async getTeleportTo () {
      const modalOnTop = await modalController.getTop()

      const teleportTarget = modalOnTop.querySelector('.ion-page')

      return teleportTarget
    },

    async onClickBack () {
      await menuController.close()
      this.renderMenu = false
    }
  }
}
</script>

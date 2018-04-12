<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title>My App - Index</f7-nav-title>
    </f7-navbar>
    <f7-block>
      <f7-list>
        <f7-list-button title="Lista 1"
                        footer="Lorem ipsum dolor sit amet, consectetur ..."
                        href="/lists/1"
                        ></f7-list-button>
        <f7-list-button title="Lista 2"
                        footer="Ut enim ad minim veniam ..."
                        href="/lists/2"
                        ></f7-list-button>
      </f7-list>
    </f7-block>
    <f7-popup ref="popupNewList">
      <f7-view>
        <f7-page>
          <f7-navbar title="Nueva lista">
            <f7-nav-right>
              <f7-link popup-close>Cerrar</f7-link>
            </f7-nav-right>
          </f7-navbar>
          <f7-list form>
            <f7-list-item>
              <f7-label>Nombre</f7-label>
              <f7-input type="text"
                        placeholder="Lista de compras..."
                        :value="name"
                        @input="name = $event.target.value"
                        ></f7-input>
            </f7-list-item>
            <f7-list-item>
              <f7-button raised fill @click="createList">Crear</f7-button>
            </f7-list-item>
          </f7-list>
        </f7-page>
      </f7-view>
    </f7-popup>
    <f7-fab color="blue" raised @click="newList">
      <f7-icon f7="add"></f7-icon>
    </f7-fab>
  </f7-page>
</template>
<script>
export default {
  data() {
    return {
      name: '',
    }
  },
  methods: {
    newList() {
      this.getNewListPopup().open(true)
    },
    createList() {
      this.getNewListPopup().close(true)

      
      this.name = ''
    },
    getNewListPopup() {
      return this.$f7.popup.get(this.$refs.popupNewList.$el)
    }
  }
}
</script>

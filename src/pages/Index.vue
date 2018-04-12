<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title>My App - Index</f7-nav-title>
    </f7-navbar>
    <f7-list>
      <f7-list-item v-for="item, id in list"
                    :key="item['.key']"
                    swipeout
                    :title="item.name"
                    @click="showList(item['.key'])"
                    :href="'/lists/' + item['.key']"
                    >
                        <f7-swipeout-actions>
                          <f7-swipeout-button close color="blue">Editar</f7-swipeout-button>
                          <f7-swipeout-button @click="deleteList(item['.key'])" delete>Eliminar</f7-swipeout-button>
                        </f7-swipeout-actions>
                      </f7-list-item>
    </f7-list>
    <f7-popup ref="popupNewList">
      <f7-view>
        <f7-page>
          <f7-navbar title="Nueva lista">
            <f7-nav-right>
              <f7-link popup-close>Cerrar</f7-link>
            </f7-nav-right>
          </f7-navbar>
          <f7-list>
            <f7-list-item>
              <f7-label>Nombre</f7-label>
              <f7-input type="text"
                        placeholder="Lista de compras..."
                        :value="name"
                        @input="name = $event.target.value"
                        autofocus
                        ></f7-input>
            </f7-list-item>
            <f7-list-item>
              <f7-button raised fill @click="createList" >Crear</f7-button>
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
import firebase from '../services/firebase'

export default {
  data() {
    return {
      name: '',
    }
  },
  firebase: {
    list: firebase.database().ref('lists'),
  },
  methods: {
    deleteList(key) {
      firebase.database().ref('lists/' + key).remove()
    },
    showList(key) {
      this.$f7Router.navigate('/lists/' + key)
    },
    newList() {
      this.getNewListPopup().open(true)
    },
    createList() {
      let name = this.name.replace(/\s+/g, ' ').replace(/(^\s+|\s+$)/g, '')
      if (!name) {
        return
      }
      this.getNewListPopup().close(true)

      firebase.database().ref('lists').push({ name })

      this.name = ''
    },
    getNewListPopup() {
      return this.$f7.popup.get(this.$refs.popupNewList.$el)
    }
  }
}
</script>

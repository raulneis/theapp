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
                          <f7-swipeout-button @click="deleteList(item['.key'])" delete>Eliminar</f7-swipeout-button>
                        </f7-swipeout-actions>
                      </f7-list-item>
    </f7-list>
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
      firebase.database().ref('lists/' + key).remove().then(() => {
        this.$f7.toast.create({
          text: 'La lista se eliminó correctamente',
          closeTimeout: 2000,
        }).open()
      })
    },
    showList(key) {
      this.$f7Router.navigate('/lists/' + key)
    },
    newList() {
      this.$f7Router.navigate('/lists/new')
    }
  }
}
</script>

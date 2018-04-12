<template>
  <f7-page v-if="item">
    <f7-navbar :title="item.name" back-link="Back"></f7-navbar>
    <f7-block-title>No hay items en la lista.</f7-block-title>
  </f7-page>
</template>

<script>
import firebase from '../services/firebase'

export default {
  data() {
    return {
      item: null,
    }
  },
  computed: {
    id() {
      return this.$f7route.params.id
    }
  },
  mounted() {
    firebase.database().ref('lists/' + this.id).on('value', (snapshot) => {
      this.item = snapshot.val()
    })
  }
}
</script>
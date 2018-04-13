<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
          <f7-link icon-if-ios="f7:arrow_left" icon-if-md="material:arrow_back" href="/"></f7-link>
        </f7-nav-left>
        <f7-nav-title>Nueva lista</f7-nav-title>
    </f7-navbar>
    <f7-card>
      <f7-card-header>Crear una nueva lista</f7-card-header>
      <f7-card-content>
        <f7-list>
          <f7-list-item>
            <f7-label>Nombre</f7-label>
            <f7-input type="text"
                      placeholder="Compras..."
                      :value="name"
                      @input="name = $event.target.value"
                      autofocus
                      ></f7-input>
          </f7-list-item>
          <f7-list-item>
            <f7-label>Descripción</f7-label>
            <f7-input type="textarea"
                      placeholder="Las cosas que hay que comprar..."
                      :value="description"
                      @input="description = $event.target.value"
                      autofocus
                      ></f7-input>
          </f7-list-item>
        </f7-list>
        <br>
        <f7-button @click="createList" class="col" raised fill>Crear</f7-button>
      </f7-card-content>
    </f7-card>
  </f7-page>
</template>

<script>
import firebase from '../services/firebase'

export default {
  data() {
    return {
      name: '',
      description: '',
    }
  },
  methods: {
    createList() {
      let name = this.name.replace(/\s+/g, ' ').replace(/(^\s+|\s+$)/g, '')
      let description = this.description
      if (!name) {
        return
      }

      let key = firebase.database().ref('lists').push({
        name,
        description
      }).key

      this.name = ''
      this.description = ''
      this.$f7Router.navigate('/lists/' + key)
    }
  }
}
</script>
<template>
  <f7-page v-if="list">
    <f7-navbar>
      <f7-nav-left>
          <f7-link icon-if-ios="f7:arrow_left" icon-if-md="material:arrow_back" :href="'/lists/' + key"></f7-link>
        </f7-nav-left>
        <f7-nav-title>{{ list.name }}</f7-nav-title>
    </f7-navbar>
    <f7-card>
      <f7-card-header>Crear un nuevo item</f7-card-header>
      <f7-card-content>
        <f7-list>
          <f7-list-item>
            <f7-label>Nombre</f7-label>
            <f7-input type="text"
                      placeholder="Comprar fideos..."
                      :value="name"
                      @input="name = $event.target.value"
                      autofocus
                      ></f7-input>
          </f7-list-item>
          <f7-list-item>
            <f7-label>Descripción</f7-label>
            <f7-input type="textarea"
                      placeholder="Los fideos deben ser tallarines..."
                      :value="description"
                      @input="description = $event.target.value"
                      autofocus
                      ></f7-input>
          </f7-list-item>
        </f7-list>
        <br>
        <f7-button @click="createItem" class="col" raised fill>Crear</f7-button>
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
      list: null,
    }
  },
  computed: {
    key() {
      return this.$f7route.params.id
    }
  },
  methods: {
    createItem() {
      let name = this.name.replace(/\s+/g, ' ').replace(/(^\s+|\s+$)/g, '')
      let description = this.description
      if (!name) {
        return
      }

      let key = firebase.database().ref('lists/' + this.key + '/items').push({
        name,
        description,
        done: false
      }).key

      this.$f7.toast.create({
        text: 'El item se creó correctamente',
        closeTimeout: 2000,
      }).open()

      this.name = ''
      this.description = ''
      this.$f7Router.navigate('/lists/' + key)
    }
  },
  mounted() {
    firebase.database().ref('lists/' + this.key).on('value', (snapshot) => {
      this.list = snapshot.val()
    })
  }
}
</script>
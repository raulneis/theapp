<template>
  <f7-page v-if="list">
    <f7-navbar>
      <f7-navbar>
        <f7-nav-left>
          <f7-link icon-if-ios="f7:arrow_left" icon-if-md="material:arrow_back" href="/"></f7-link>
        </f7-nav-left>
        <f7-nav-title>{{ list.name }}</f7-nav-title>
      </f7-navbar>
    </f7-navbar>
    <f7-toolbar :tabbar="true">
      <f7-link tab-link="#tab-list" tab-link-active>
        <f7-icon if-ios="f7:menu" if-md="material:format_list_numbered"></f7-icon>
      </f7-link>
      <f7-link tab-link="#tab-config">
        <f7-icon if-ios="f7:filter" if-md="material:settings"></f7-icon>
      </f7-link>
    </f7-toolbar>
    <f7-tabs animated>

      <f7-tab id="tab-list" tab-active>
        <f7-block>
          <f7-card v-if="list.description">
            <f7-card-content>{{ list.description }}</f7-card-content>
          </f7-card>
        </f7-block>
        <f7-block>
          <f7-list v-if="list.items && list.items.length">
            <f7-list-item v-for="item in list.items" :title="item.name" :key="item['.key']"></f7-list-item>
          </f7-list>
          <p v-else>No hay elementos en la lista</p>
        </f7-block>

        <f7-fab color="blue" raised @click="newItem">
          <f7-icon f7="add"></f7-icon>
        </f7-fab>
      </f7-tab>

      <f7-tab id="tab-config">
        <f7-block>
          <f7-card>
            <f7-card-header>Editar</f7-card-header>
            <f7-card-content>
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
              <f7-button @click="editList" class="col" fill>Guardar</f7-button>
            </f7-card-content>
          </f7-card>
          <f7-card>
            <!-- <f7-card-header>Eliminar esta lista</f7-card-header> -->
            <f7-card-content>
              <f7-button @click="deleteList" class="col" color="red" fill>Eliminar lista</f7-button>
            </f7-card-content>
          </f7-card>
        </f7-block>
      </f7-tab>
    </f7-tabs>
  </f7-page>
</template>

<script>
import firebase from '../services/firebase'

export default {
  data() {
    return {
      list: null,
      name: '',
      description: '',
    }
  },
  computed: {
    key() {
      return this.$f7route.params.id
    }
  },
  methods: {
    showMenu() {
      this.$f7.actions.create({
        buttons: [{
          text: 'Editar',
          color: 'blue',
          onClick: () => {
            // this.$f7.dialog.alert('', 'Editar')
          },
        }, {
          text: 'Eliminar lista',
          color: 'red',
          onClick: () => {
            this.$f7.dialog.alert('Eliminar')
          },
        },]
      }).open(true)
    },
    editList() {
      this.list.name = this.name
      this.list.description = this.description
      firebase.database().ref('lists/' + this.key).update(this.list).then(() => {
        this.$f7.toast.create({
          text: 'La lista se actualizó correctamente',
          closeTimeout: 2000,
        }).open()
      })
    },
    deleteList() {
      firebase.database().ref('lists/' + this.key).remove().then(() => {
        this.$f7.toast.create({
          text: 'La lista se eliminó correctamente',
          closeTimeout: 2000,
        }).open()
      })
      this.$f7Router.navigate('/')
    },
    newItem() {
      this.$f7Router.navigate('/lists/' + this.key + '/items/new')
    }
  },
  mounted() {
    firebase.database().ref('lists/' + this.key).on('value', (snapshot) => {
      this.list = snapshot.val()
      this.name = this.list ? this.list.name : ''
      this.description = this.list ? this.list.description : ''
    })
  }
}
</script>
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
      <f7-block>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt alias quae minima eius qui laborum consequuntur, nesciunt autem, assumenda maiores, repellendus doloremque ipsam sed illum veritatis. Aperiam necessitatibus, doloribus tenetur.</p>
      </f7-block>
    </f7-popup>
    <f7-fab color="blue" raised @click="newList">
      <f7-icon f7="add"></f7-icon>
    </f7-fab>
  </f7-page>
</template>
<script>
export default {
  methods: {
    newList() {
      this.$f7.popup(this.$refs.popupNewList).open(true)
    }
  }
}
</script>

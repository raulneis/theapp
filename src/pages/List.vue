<template>
  <f7-page>
    <f7-navbar title="Lista" back-link="Back"></f7-navbar>
    <f7-block-title>Lista {{ id }}</f7-block-title>
    <f7-block strong>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, ab et facere. Architecto porro laborum harum quaerat id explicabo animi labore ad, hic qui odit nam voluptatum! Quo, qui, corporis!</p>
    </f7-block>
  </f7-page>
</template>

<script>
export default {
  computed: {
    id() {
      return this.$f7route.params.id
    }
  }
}
</script>
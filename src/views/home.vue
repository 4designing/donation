<template>
<div>
  <app-header></app-header>
  <app-about></app-about>
  <app-compaigns></app-compaigns>
  <app-contact></app-contact>
</div>
</template>
<script>
import header from '../components/home/header.vue' 
import about from '../components/home/about.vue' 
import compaigns from '../components/home/compaigns.vue'
import contact from '../components/home/contact.vue'
export default {
  components:{
      'app-header' : header,
      'app-about' : about,
      'app-compaigns' : compaigns,
      'app-contact' : contact
  }
};
</script>
<style>
</style>
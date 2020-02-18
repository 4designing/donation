<template>
 <div id="app">

 
 <router-view name='nav'></router-view>
 <app-sign></app-sign>
 <router-view></router-view>
 <router-view name='footer'></router-view>

 </div>
</template>

<script>


import signForm from './components/signForm.vue'
export default {
components:{

  'app-sign' : signForm
}


};
</script>
<style>
@import './css/custom.css';
#app{
      position: absolute;
    top: 0;
    width: 100%;
}
</style>
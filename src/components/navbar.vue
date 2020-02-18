
<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <a href="#">
        <img src="../assets/iclogo.png" alt="iclogox" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <Menu :size="30"></Menu>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href>HOME</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">ABOUT US</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#partners">OUR PARTNERS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#compaigns">COMPAIGNS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">CONTACT US</a>
          </li>
        </ul>
        <div class="text-center btns-group" v-if="signs">
          <button class="btn" @click="changeStateSignIn()">SIGN IN</button>
          <div class="clearfix d-lg-none"></div>
          <button class="btn" @click="changeStateSignUp()">SIGN UP</button>
        </div>

        <router-link tag="span" to="profile" class="profile" v-if="showProfile()" :key='key'>
          <img src="../images/accountIcon.png" alt /> PROFILE
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import Menu from "vue-material-design-icons/Menu.vue";

export default {
  data() {
    return {
      profile: false,
      signs:true,
      key: 0
    };
  },
  components: {
    Menu
  },
  methods: {
    changeStateSignIn() {
      this.$store.dispatch("actionSignIn", !this.$store.getters.getSignIn)
      this.$store.dispatch("actionSignUp", false)
    },
    changeStateSignUp() {
      this.$store.dispatch("actionSignUp", !this.$store.getters.getSignUp)
      this.$store.dispatch("actionSignIn", false)
    },
    showProfile(){
      this.profile= this.$store.getters.getProfile
     this.$store.dispatch("actionSignIn", false)
      this.key=1
      return this.profile
    }
  },
  watch:{
    profile(){
      this.signs=false
    this.$forceUpdate();
    }
  }
};
</script>
<style>
.profile {
  font-size: 17px;
}
</style>
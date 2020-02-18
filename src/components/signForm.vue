<template>
  <div>
    <div class="forms" v-if="showSignIn()">
      <close :size="30" @click="closeForm()"></close>
      <div class="forms-content">
        <!-- Sign In -->
        <div class="dropdown row">
          <form>
            <div class="form-group">
              <h3 class="text-center mb-3">Sign in</h3>
              <label>EMAIL</label>
              <input type="email" class="form-control" v-model="user.email"/>
            </div>
            <div class="form-group">
              <label>PASSWORD</label>
              <input type="password" class="form-control" v-model="user.password"/>
            </div>
            <button type="submit" class="btn float-right" @click.prevent="signIn()">Submit</button>
          </form>
        </div>
      </div>
    </div>
    <div class="forms" v-if="showSignUp()">
      <close :size="30" @click="closeForm()"></close>
      <div class="forms-content">
        <!-- Sign Up -->
        <div class="dropdown row" v-if="signupForm">
          <form>
            <div class="form-group">
              <h3 class="text-center mb-3">Sign up</h3>
              <label>FULL NAME</label>
              <input type="text" class="form-control" v-model="user.fullName" />
            </div>
            <div class="form-group">
              <label>EMAIL</label>
              <input type="email" class="form-control" v-model="user.email" />
            </div>
            <div class="form-group">
              <label>PASSWORD</label>
              <input type="password" class="form-control" v-model="user.password" />
            </div>
            <div class="form-group">
              <label>CONFIRM PASSWORD</label>
              <input type="password" class="form-control" v-model="user.confirmPassword" />
            </div>
            <button type="submit" class="btn float-right" @click.prevent="showActivation()">CONTINUE</button>
          </form>
        </div>
        <!-- activation -->
        <div class="dropdown row" v-if="signupActivation">
          <form class="text-center">
            <div class="form-group">
              <h3 class="text-center mb-3">Activation</h3>
              <label>ENTER THE ACTIVATION CODE</label>
              <input type="text" class="form-control" />
            </div>
            <button type="submit" class="btn float-right" @click.prevent="showSuccess()">SUBMIT</button>
          </form>
        </div>
        <!-- success activation -->
        <div class="dropdown row text-center" v-if="signupSuccess">
          <div class="col-12">
            <checkIcon :size="89"></checkIcon>
          </div>
          <div class="col-12">
            <h1>SUCCESS</h1>
            <p>Redirecting...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import checkIcon from "vue-material-design-icons/CheckCircleOutline.vue";
import close from "vue-material-design-icons/Close.vue";
export default {
  components: {
    checkIcon,
    close
  },
  data() {
    return {
      signupForm: true,
      signupActivation: false,
      signupSuccess: false,
      user: {
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
      },
      code:""
    };
  },
  methods: {
    closeForm() {
      this.$store.dispatch("actionSignIn", false);
      this.$store.dispatch("actionSignUp", false);
    },
    showSignIn() {
      return this.$store.getters.getSignIn;
    },
    showSignUp() {
      return this.$store.getters.getSignUp;
    },
    showActivation() {
      this.$store.dispatch('signup', this.user);
      this.signupForm = false;
      this.signupActivation = true;
    },
    showSuccess() {
      this.signupActivation = false;
      this.signupSuccess = true;
    },
    signIn(){
      this.$store.dispatch('signin', this.user)
    }
  },
};
</script>

<style>
</style>
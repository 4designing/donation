<template>
  <div id="donation">
    <info :size="40"></info>
    <div class="container">
      <div class="row mb-4">
        <div class="col-12">
          <span>
            <arrowLeft :size="19"></arrowLeft>
          </span>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <div class="steps">
            <ul class="list-group list-group-horizontal text-center">
              <li class="list-group-item active col-3">DONATE</li>
              <li class="list-group-item col-3">INFO</li>
              <li class="list-group-item col-3">PAYMENT</li>
              <li class="list-group-item col-3">DONE</li>
            </ul>
          </div>
          <div class="step-content">
            <router-view></router-view>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="donation" v-if="showInfo">
            <close :size="30"></close>
            <div class="imgContainer">
              <img src="../images/compaigns/01.png" alt="help the children" />
              <span class="donateBtn">Help Children</span>
            </div>
            <div class="mx-3 mt-5 pb-3">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dicta exercitationem eligendi minima odit laboriosam repellendus aliquam ratione praesentium, repudiandae quae eos eum totam. Id ex blanditiis reiciendis alias tenetur?</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus necessitatibus quibusdam expedita natus quisquam a saepe commodi sunt eveniet laborum nemo pariatur, atque id fuga nulla accusantium veniam corporis temporibus.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import arrowLeft from "vue-material-design-icons/ArrowLeft.vue";
import close from "vue-material-design-icons/Close.vue";
import info from "vue-material-design-icons/InformationOutline.vue";
export default {
  components: {
    arrowLeft,
    close,
    info
  },
  data() {
    return {
      showInfo: "true"
    };
  }
};
</script>

<style >
.close-icon {
  position: absolute;
  top: 15px;
  left: 15px;
  z-index: 999999;
  background: rgba(0, 0, 0, 0.5);
  padding: 2px;
}
@media screen and (max-width: 992px) {
  .donation p {
    margin-left: 40px;
    margin-right: 40px;
  }
}
</style>
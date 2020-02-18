<template>
  <div id="compaigns" class="section">
    <div class="section-content">
      <div class="container">
        <div class="row">
          <Carousel :perPageCustom="[[0, 1], [992, 2]]" style="width: 100%">
            <Slide v-for="compaign in compaigns" :key="compaign.id">
              <div class="col-12">
                <div class="donation">
                  <h1>0{{compaign.id}}</h1>
                  <h3>{{compaign.title}}</h3>
                  <div class="imgContainer">
                    <img src="../../images/compaigns/01.png" alt="help the children" />
                    <router-link
                      tag="span"
                      class="donateBtn"
                      @click.native="saveID(compaign.id)"
                      :to="{name:'donate', query:{id:compaign.id, step:'donate'}}"
                    >DONATE NOW</router-link>
                    <div class="progress" >
                      <div
                        class="progress-bar"
                        role="progressbar"
                        :style="{width: compaign.donationPercent+'%'}"
                      ></div>
                    </div>
                    <div class="percent" :style="{marginLeft:compaign.donationPercent+'%'}">
                      <span>{{compaign.donationPercent}}%</span>
                    </div>
                  </div>
                  <p>{{compaign.detail}}</p>
                  <div class="row">
                    <div class="col-lg-3 col-4">
                      <div class="title">CAMPAIGN VALUE</div>
                      <div class="mount">£20.000</div>
                    </div>
                    <div class="col-lg-3 col-4">
                      <div class="title">CAMPAIGN VALUE</div>
                      <div class="mount">£20.000</div>
                    </div>
                    <div class="col-lg-3 col-4">
                      <div class="title">CAMPAIGN VALUE</div>
                      <div class="mount">£20.000</div>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
          </Carousel>
        </div>
      </div>
    </div>
    <a href="#app">
      <arrowup :size="30"></arrowup>
    </a>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import arrowup from "vue-material-design-icons/ChevronUp.vue";
export default {
  data() {
    return {
      compaigns: this.$store.state.compaigns,
    };
  },
  components: {
    Carousel,
    Slide,
    arrowup
  },
  methods:{
    saveID(id){
      this.$store.commit('setCurrentID', id)
    }
  }
};
</script>
<style scoped>
</style>
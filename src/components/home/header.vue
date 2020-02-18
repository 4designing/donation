<template>
  <div id="header" class="section">
    <div class="section-content">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h1 class="fw-700">Welcome</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia asperiores, numquam vero a!</p>
            <a href="#compaigns"><button class="btn btn-primary">DONATE NOW</button></a>
          </div>
          <div class="col-lg-6">
            <video width="100%" controls>
              <source src="movie.mp4" type="video/mp4" />
              <source src="movie.ogg" type="video/ogg" />Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
    
    <a href="#about"><arrowdown :size="30"></arrowdown></a>
  </div>
</template>
<script>
import arrowdown from "vue-material-design-icons/ChevronDown.vue";

export default {
  components: {
    arrowdown
  },
  data() {
    return {
      
    };
  },
  
};
</script>
<style scoped>
</style>
<template>
  <div id="about" >
    <div class="about-content section">
      <div class="section-content">
        <div class="container">
          <div class="abt">
            <div class="row">
              <div class="offset-lg-2 col-lg-8">
                <div class="logo ml-auto"></div>
                <h5 class="fw-700">Broadcasting from the heart of London</h5>
                <hr class="float-lg-left" />
                <div class="clearfix"></div>
                <p>Lorem ipsum dolor sit amet perferendis quidem accusamus adipisci. Tempore, et minus.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, odio pariatur. Repellendus exercitationem est iusto commodi</p>
                <button class="btn btn-primary float-lg-right">READ MORE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="partners" class="section">
      <div class="section-content">
        <div class="container">
          <div class="row">
            <h6 class="col-lg-12 text-center mb-3">OUR PARTNERS</h6>
            <div class="col-lg-2 col-4">
              <img src="../../images/partners/pt1.png" alt />
            </div>
            <div class="col-lg-2 col-4">
              <img src="../../images/partners/pt2.png" alt />
            </div>
            <div class="col-lg-2 col-4">
              <img src="../../images/partners/pt3.png" alt />
            </div>
            <div class="col-lg-2 col-4">
              <img src="../../images/partners/pt4.png" alt />
            </div>
            <div class="col-lg-2 col-4">
              <img src="../../images/partners/pt5.png" alt />
            </div>
            <div class="col-lg-2 col-4">
              <img src="../../images/partners/pt6.png" alt />
            </div>
          </div>
        </div>
      </div>
      <a href="#app"><arrowup :size="30"></arrowup></a>
    </div>
    
  </div>
</template>
<script>
import arrowup from "vue-material-design-icons/ChevronUp.vue";
export default {
  components: {
    arrowup
  }
};
</script>
<style scoped>
</style>
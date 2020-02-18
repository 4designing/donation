<template>
  <div>
    <form>
      <div class="form-group">
        <label for="inputAddress">FULL NAME *</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="Your full name" />
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputEmail4">EMAIL *</label>
          <input type="email" class="form-control" id="inputEmail4" placeholder="Your email" />
        </div>
        <div class="form-group col-md-6">
          <label for="inputPassword4">PHONE NUMBER</label>
          <input
            type="text"
            class="form-control"
            id="inputPassword4"
            placeholder="Your phone number"
          />
        </div>
      </div>
      <div class="form-group">
        <label for="inputAddress2">MESSAGE (OPTIONAL)</label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="7"
          placeholder="Type your message here"
        ></textarea>
      </div>
    </form>
    <router-link tag="button" class="btn float-right" :to="{name:'payment', query:{id:this.$store.getters.getCurrentID, step: 'payment'}}">CONTINUE</router-link>
  </div>
</template>
<script>
export default {};
</script>
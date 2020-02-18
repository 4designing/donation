<template>
  <div id="contact" class="section">
    <div class="section-content">
      <div class="container">
        <h1>SAY HI !</h1>
        <form class="col-lg-8 offset-lg-2">
          <div class="form-group">
            <label for="inputAddress">FULL NAME *</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="Your full name" />
          </div>
          <div class="form-row">
            <div class="form-group col-lg-6">
              <label for="inputEmail4">EMAIL *</label>
              <input type="email" class="form-control" id="inputEmail4" placeholder="Your Email"/>
            </div>
            <div class="form-group col-lg-6">
              <label for="inputPassword4">PHONE</label>
              <input type="text" class="form-control" id="inputPassword4" placeholder="Your Phone number"/>
            </div>
          </div>
          <div class="form-group">
            <label for="inputAddress2">MESSAGE *</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" placeholder="Type your message here"></textarea>
          </div>
          <center>
            <button type="submit" class="btn">
              <span class="badge">
                <img src="../../images/send.png" alt="">
              </span> SEND
            </button>
          </center>
        </form>
      </div>
    </div>
  </div>
</template>
<script>

</script>

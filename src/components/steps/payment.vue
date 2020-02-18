<template>
  <div>
    <form>
      <div class="form-group">
        <select class="form-control" id="exampleFormControlSelect1">
          <option>VISA</option>
          <option>MASTERCARD</option>
          <option>WEEPAY</option>
          <option>PAYPAL</option>
          <option>VISA ELECTRON</option>
        </select>
      </div>
      <div class="form-group mt-5">
        <label for="inputAddress">CARD HOLDER NAME</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="Your name" />
      </div>
      <div class="form-group">
        <label for="inputAddress2">CARD NUMBER</label>
        <input
          type="text"
          class="form-control"
          id="inputAddress2"
          placeholder="Your credit card number"
        />
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputEmail4">EXPIRE DATE</label>
          <input type="email" class="form-control" id="inputEmail4" placeholder="Expiration date" />
        </div>
        <div class="form-group col-md-6">
          <label for="inputPassword4">CCV</label>
          <input type="password" class="form-control" id="inputPassword4" placeholder="CCV code" />
        </div>
      </div>
      <div class="form-group">
        <div class="form-check">
          <label class="check">
            Add gift Aid
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
        </div>
      </div>
    </form>
    <div class="clearfix"></div>
    <div class="gift" v-if="true">
      <h1>Add Gift Aid</h1>
      <h6>
        Turn your
        <span>£100</span> donation into
        <span>£125</span> at no extra cost
      </h6>
      <hr />
      <p>I confirm that I am UK taxpayer and I understand that if I pay less income tax and/or capital gains tax in the current tax year than the amount of Gift Aid claimed on all my donations it is my responsibility to pay the difference.</p>
      <hr />
      <h6>Please read and confirm the following statements:</h6>
      <p>This is my own money. I am not paying donations made by a third party, e. g. money collected at an event, the pub, a company donation or a donation from a friend or a family member.</p>
      <p>I am not receiving anything in return for my donation, e. g. book, auction prize, ticket to an event.</p>
      <p>I am not making a donation as part of a sweepstake, raffle or lottery.</p>
      <form>
        <div class="form-row">
          <div class="form-group col-12">
            <div class="form-check">
              <label class="check">
                I confirm.
                <input type="checkbox" checked="checked" />
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
          <div class="form-group col-12">
            <div class="form-check">
              <label class="check">
                No, do not add a Gift Aid
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
        </div>
      </form>
      <p
        class="font-italic"
      >Gift Aid is a government scheme for UK charities to reclaim the tax you have paid and gain 25% more at no cost or hassle to you.</p>
    </div>
    <router-link tag="button" class="btn float-right" :to="{name:'done', query:{id:this.$store.getters.getCurrentID, step: 'done'}}">CONTINUE</router-link>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
input {
  height: 60px;
}
</style>
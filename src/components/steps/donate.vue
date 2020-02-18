<template>
  <div class="donate-section">
    <form>
      <label>CAMPAIGN TO DONATE</label>
      <div class="donation-title">
        <span>Help Children</span>
        <span class="float-right">£ 100</span>
      </div>
      <!-- Sponsor for orphans -->
      <div class="form-row">
        <div class="form-group col-lg-5 col-12 offset-lg-1">
          <div class="form-check">
            <label class="check">
              Sponsor for 1 orphan
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
        <div class="form-group col-lg-5 col-12">
          <div class="form-check">
            <label class="check">
              Sponsor for 2 orphans
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
        <div class="form-group col-lg-5 col-12 offset-lg-1">
          <div class="form-check">
            <label class="check">
              Sponsor for 3 orphan
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
        <div class="form-group col-lg-5 col-12">
          <div class="form-check">
            <label class="check">
              Sponsor for 4 orphan
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
      </div>

      <!-- Donation Amount to Choose-->
      <p class="mt-3">HOW MUCH WOULD YOU LIKE TO DONATE? *</p>
      <div class="donation-amount">
        <div class="row">
          <div class="col-lg-2 col-6 offset-lg-1">
            <span>£5</span>
          </div>
          <div class="col-lg-2 col-6">
            <span>£5</span>
          </div>
          <div class="col-lg-2 col-6">
            <span>£5</span>
          </div>
          <div class="col-lg-2 col-6">
            <span>£5</span>
          </div>
          <div class="col-lg-2 col-6">
            <span>£5</span>
          </div>
          <div class="col-lg-2 col-6 offset-lg-1">
            <span>£5</span>
          </div>
          <div class="col-lg-2 col-6">
            <span class="active">£100</span>
          </div>
          <div class="col-lg-2 col-6">
            <span>£5</span>
          </div>
          <div class="col-lg-4 col-12">
            <span>Other</span>
          </div>
        </div>
      </div>

      <!-- Total Donation Section -->
      <p class="mt-3 choose-splite">Choose a split payment plan</p>
      <div class="row total-donation">
        <div class="col-lg-10 offset-lg-1">
          <span>Total Donation</span>
          <span class="float-right">£ 50</span>
          <hr />
          <span class="float-right">per month</span>
        </div>
      </div>

      <!-- Payment Plan Selection -->
      <div class="form-group">
        <label for="exampleFormControlSelect1">PAYMENT PLAN</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option>Laylat Al-Qadr</option>
          <option>Eid Al-Fitr</option>
          <option>Eid Al-Adha</option>
        </select>
      </div>
      <!-- Payment Plan : Laylat Al-Qadr  and Eid Al-Fitr -->
      <!-- Laylat Al-Qadr -->
      <h6 class="ml-3">Duration of this payment plan is 10 days.</h6>
      <div class="form-row my-4 payment-selection">
        <div class="form-group col-lg-6 col-12">
          <div class="form-check">
            <label class="check">
              Choose the amount for each day seperately
              <input type="radio" name="amount1" />
              <span class="radiomark"></span>
            </label>
          </div>
        </div>
        <div class="form-group col-lg-6 col-12">
          <div class="form-check">
            <label class="check">
              Higher amount on odd nights
              <input type="radio" name="amount1" />
              <span class="radiomark"></span>
            </label>
          </div>
        </div>
        <div class="form-group col-lg-6 col-12">
          <div class="form-check">
            <label class="check">
              Split the amount equally
              <input type="radio" name="amount1" />
              <span class="radiomark"></span>
            </label>
          </div>
        </div>
        <div class="form-group col-lg-6 col-12">
          <div class="form-check">
            <label class="check">
              Higher amount on 27th day of Ramadan
              <input type="radio" name="amount1" />
              <span class="radiomark"></span>
            </label>
          </div>
        </div>
      </div>

      <p>HOW MUCH WOULD YOU LIKE TO DONATE EACH DAY?</p>

      <div class="donation-amount">
        <div class="row justify-content-center">
          <!-- 10 DIVs for Laylat Al-Qadr , 2 DIVs for Eid Al-Fitr -->
          <div class="offset-lg-1"></div>
          <div class="col-lg-2 col-6">
            <span>£900</span>
          </div>
          <div class="col-lg-2 col-6">
            <span>£5</span>
          </div>
          <div class="col-lg-2 col-6">
            <span>£5</span>
          </div>
          <div class="col-lg-2 col-6">
            <span>£5</span>
          </div>
          <div class="col-lg-2 col-6">
            <span>£5</span>
          </div>
          <div class="offset-lg-1"></div>
          <div class="col-lg-2 col-6">
            <span>£5</span>
          </div>
          <div class="col-lg-2 col-6">
            <span>£100</span>
          </div>
          <div class="col-lg-2 col-6">
            <span>£5</span>
          </div>
          <div class="col-lg-2 col-6">
            <span>£100</span>
          </div>
          <div class="col-lg-2 col-6">
            <span>£5</span>
          </div>
        </div>
      </div>
    </form>
    <router-link tag="button" class="btn float-right" :to="{name:'info', query:{id:this.$store.getters.getCurrentID, step: 'info'}}">CONTINUE</router-link>
  </div>
</template>
<script>
export default {
};
</script>

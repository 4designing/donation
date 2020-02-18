<template>
  <div class="profile-page section">
    <div class="section-content">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 edit">
            <div class>
              <img
                src="../images/profileImg.png"
                alt="User Image"
                class="profileImg mx-auto d-block"
              />
            </div>
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">CHANGE NAME *</label>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1"><img src="../images/pen.png" alt=""></span>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">EMAIL</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">CHANGE NAME *</label>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1"><img src="../images/pen.png" alt=""></span>
                  </div>
                </div>
              </div>
              <div class="form-group mb-5">
                <label for="exampleInputPassword1">CONFIRM PASSWORD *</label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
              </div>
              <span class="logout">
                <img src="../images/logout.png" alt />LOG OUT
              </span>
              <button type="submit" class="btn btn-primary float-right">UPDATE</button>
            </form>
          </div>

          <div class="col-lg-5 offset-lg-2 ">
              <h6>LAST TRANSACTIONS</h6>
              <div class="transactions">
                  <div class="transaction">
                      <span>Building a mosque</span>
                      <span class="float-right">
                          <span>£20.000 - £100</span>
                          <span><img src="../images/mount.png" class="ml-3" alt=""></span>
                      </span>
                  </div>
                  <hr>
                  <div class="transaction">
                      <span>Building a mosque</span>
                      <span class="float-right">
                          <span>£20.000 - £100</span>
                          <span><img src="../images/mount.png" class="ml-3" alt=""></span>
                      </span>
                  </div>
                  <hr>
                  <div class="transaction">
                      <span>Building a mosque</span>
                      <span class="float-right">
                          <span>£20.000 - £100</span>
                          <span><img src="../images/mount.png" class="ml-3" alt=""></span>
                      </span>
                  </div>
                  <hr>
                  <div class="transaction">
                      <span>Building a mosque</span>
                      <span class="float-right">
                          <span>£20.000 - £100</span>
                          <span><img src="../images/mount.png" class="ml-3" alt=""></span>
                      </span>
                  </div>
                  <hr>
                  <div class="transaction">
                      <span>Building a mosque</span>
                      <span class="float-right">
                          <span>£20.000 - £100</span>
                          <span><img src="../images/mount.png" class="ml-3" alt=""></span>
                      </span>
                  </div>
                  <hr>
                  <div class="transaction">
                      <span>Building a mosque</span>
                      <span class="float-right">
                          <span>£20.000 - £100</span>
                          <span><img src="../images/mount.png" class="ml-3" alt=""></span>
                      </span>
                  </div>
                  <hr>
                  <div class="transaction">
                      <span>Building a mosque</span>
                      <span class="float-right">
                          <span>£20.000 - £100</span>
                          <span><img src="../images/mount.png" class="ml-3" alt=""></span>
                      </span>
                  </div>
                  <hr>
                  <div class="transaction">
                      <span>Building a mosque</span>
                      <span class="float-right">
                          <span>£20.000 - £100</span>
                          <span><img src="../images/mount.png" class="ml-3" alt=""></span>
                      </span>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>

</style>
<template>
  <div class="header-container">
    <nav class="nav-container flex space-between align-center">
      <div class="first-nav-container-div">
        <div class="first-nav-container-div-inner">
          <router-link class="link" to="/"> 
            <img alt="Vue logo"  class="logo-img" src="https://www.jerusalemgold.com/EN/Images/logo_gold.png">
          </router-link>
          <router-link class="link" to="/"> Home
          </router-link>
          <router-link class="link" to="/about">
            <div class="flex align-center">
              <span class="nav-txt">About</span>
            </div>
          </router-link>
          <router-link class="link" to="/about">
            <div class="flex align-center">
              <span class="nav-txt">Contact Us</span>
            </div>
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style>
.nav-bar {
  width: 300px;
}
</style>

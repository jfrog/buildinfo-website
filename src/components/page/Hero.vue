<template>
  <div class="hero position-relative">
    <g-image
      class="hero-image"
      src="~/assets/images/homepage/hero/background-right.png"
    />
    <div class="bi-content d-flex justify-content-between mt-3 mt-md-0">
      <div class="content">
        <h1>Build Info</h1>
        <p class="text-white mb-0 pb-0">Metadata at your command</p>
      </div>
      <div class="right-bar pt-2">
        <GithubButton />
      </div>
    </div>
  </div>  
</template>

<script>

import GithubButton from '../buttons/Github'

export default {
  components: {
    GithubButton
  }
}
</script>

<style lang="scss">
  .hero {
    background-color: #000;
    padding-top: 60px;
    padding-bottom: 50px;
    .hero-image {
      position: absolute;
      right: 0;
      height: 100%;
      width: auto;
      top: 0;
      z-index: 0;
    }
    .content {
      position: relative;
      z-index: 1;
    }
  }
</style>
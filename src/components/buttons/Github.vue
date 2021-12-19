<template>
  <a
    class="github-link d-inline-flex align-items-center text-decoration-none"
    href="https://github.com/jfrog/build-info-go"
    target="_blank"
    rel="noopener nofollow"
  >
    <GithubSVG />
    <span>View on Github</span>
  </a>
</template>

<script>
import GithubSVG from '~/assets/images/svg-icons/github.svg'
export default {
  name: 'GithubButton',
  components: {
    GithubSVG
  }
}
</script>

<style lang="scss">
  $button-color: #40BE46;
  $button-hover-color: #fff;
  .github-link {
    gap: 12px;
    padding: 8px 18px 8px 15px;
    border: 1px solid $button-color;
    border-radius: 6px;
    position: relative;
    transition: all 0.32s ease;
    background: rgba(black, .5);
    svg {
      path {
        fill: $button-color;
        transition: all 0.32s ease;
      }
    }
    &:hover {
      border: 1px solid $button-hover-color;
      color: $button-hover-color;
      background: black;
      svg {
        path {
          fill: $button-hover-color;
        }
      }
    }
    @media screen and (max-width: 576px) {
      position: absolute;
      top: 10px;
      right: 10px;
      gap: 8px;
      padding: 6px 12px 6px 9px;
      font-size: 80%;
      svg {
        max-height: 25px;
      }
    }
  }
</style>


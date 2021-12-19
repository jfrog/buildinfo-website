<template>
  <a
    class="button-link d-inline-flex align-items-center text-decoration-none"
    :href="url"
    :target="getTarget()"
    :rel="getRel()"
  >
    <slot name="before"></slot>
    <span>{{label}}</span>
    <slot name="after"></slot>
  </a>
</template>

<script>

import config from '../../../gridsome.config'

export default {
  name: 'Button',
  props: {
    url: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    // svgIcon: {
    //   type: [String, Object],
    //   default: ''
    // }
  },
  methods: {
    getTarget() {
      if (this.isSafeHostname(this.url)) {
        return "_self"
      } else {
        return "_blank"
      }
    },
    getRel() {
      if (this.isSafeHostname(this.url)) {
        return ""
      } else {
        return "noopener nofollow"
      }
    },
    cleanHost(str) {
      if (str.startsWith('www.')) {
        return str.substring(4, str.length)
      } 
      return str
    },
    isSafeHostname() {
      const {hostname} = new URL(this.$props.url)
      const finalHostname = this.cleanHost(hostname)
      const siteURLObj = new URL(config.siteUrl)
      const siteHostname = siteURLObj.hostname
      const finalSiteHostName = this.cleanHost(siteHostname)
      if (finalHostname === finalSiteHostName) {
        return true
      }
      return false
    }
  },
}
</script>

<style lang="scss">
  $button-color: #40BE46;
  $button-hover-color: #fff;
  .button-link {
    gap: 8px;
    padding: 8px 14px 8px 12px;
    border: 1px solid $button-color;
    border-radius: 6px;
    position: relative;
    transition: all 0.32s ease;
    background: rgba(black, .5);
    svg {
      width: 30px;

      path {
        color: $button-color;
        transition: all 0.32s ease;
      }
    }
    &:hover {
      border: 1px solid $button-hover-color;
      color: $button-hover-color;
      background: black;
      svg {
        path {
          color: $button-hover-color;
        }
      }
    }
    @media screen and (max-width: 576px) {
      gap: 8px;
      font-size: 80%;
      padding: 6px 12px 6px 9px;
      font-size: 80%;
      svg {
        max-height: 25px;
      }
    }
  }
</style>


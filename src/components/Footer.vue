<template>
  <footer class="page-footer font-small teal py-5">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center">
        <div class="footer-copyright text-left">Buildinfo | by
          <a target="_blank" rel="noopener" href="https://jfrog.com/"> JFrog</a>
        </div>
        
        <Button
          label="Download"
          url="https://github.com/jfrog/build-info-go#download-cli-executable"
        >
          <template v-slot:after>
            <DownloadIcon />
          </template>
        </Button>
      </div>
    </div>
    
  </footer>
</template>

<script>
  import Button from '../components/buttons/Button'
  import DownloadIcon from '~/assets/images/svg-icons/download.svg'
  export default {
    name: 'Footer',
    
    components: {
      Button,
      DownloadIcon
    },
  }
</script>

<style lang="scss">
footer {
  color: white;
  width: 100%;
  margin-top: 6rem;
  background-color: #000;
}
</style>

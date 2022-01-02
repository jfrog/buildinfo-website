<template>
  <Layout>
    
    <h2>What is Build&nbsp;Info</h2>
    <p>
    Build-info is the metadata of a build. It includes all the details about the build broken down into segments that include version history, artifacts, project modules, dependencies, and everything that was required to create the build. In short, it is a snapshot of the components used to build your application, collected by the build agent.
    </p>
    <g-image
      class="img-fluid"
      src="~/assets/images/homepage/content/first-image.png"
    />

    <h2>Why Do I Care About Metadata</h2>
    <p>
With the build-info we can easily achieve traceability of our builds, giving us the power to analyze them and get the information about the artifacts we’re using. Mainly where they’re coming from and how they are being used. This information is crucial to helping us improve the quality of our builds as well as ensure their security.
    </p>    
    <h2>What information is stored in the build info</h2>
    <p>Build-info includes all the metadata for our binary lifecycle. It is all the information collected by the build agent which includes details about the build. The build-info includes the list of project modules, artifacts, dependencies, environment variables and more. When using this open source tool, the client collects the build-info and outputs the information in a JSON format. </p>
<vue-code-highlight language="json">
  <pre>
    {{json_code}}
  </pre>
</vue-code-highlight>
    <h2>Comparing your builds</h2>
<p>In case your build fails, the build-info can help debug any issues by comparing to a previous build. Doing this comparison will allow you to investigate the changes such as new artifacts added, dependencies deleted and more.
</p>
 <h2>Security risks with open source software</h2>
<p>Open Source Software is amazing but it is not without its faults or vulnerabilities. Free code can make your build run smoothly but it can also contain active threats to your project, code, business, customers, and overall software environment. This has been proven time and time again with the recent hacks to SolarWinds, the Colonial Pipeline Hack, Equifax and many others. Knowing what metadata is contained within your build can help you identify known vulnerabilities and malicious code.</p>
 <h2>How Do I Get the BuildInfo?</h2>
<p>The build-info capability is a core functionality that is part of the JFrog Platform. The JFrog team has now made it available to the community as a separate component enabling you to easily retrieve the build-info for your builds.

To get started, download the build-info open source project. </p>

    <g-image
      class="img-fluid"
      src="~/assets/images/homepage/content/sec-image.gif"
    />
  </Layout>
</template>

<script>
import { component as VueCodeHighlight } from 'vue-code-highlight';
import 'prism-es6/components/prism-markup-templating';
import 'prism-es6/components/prism-json';

export default {
  metaInfo: {
    title: 'JFrog Build Info',
    description: 'Metadata at your command',
    script: [
      { innerHTML: '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is Build Info?","acceptedAnswer":{"@type":"Answer","text":"Build-info is the metadata of a build. It includes all the details about the build broken down into segments that include version history, artifacts, project modules, dependencies, and everything that was required to create the build. In short, it is a snapshot of the components used to build your application, collected by the build agent."}},{"@type":"Question","name":"Why Do I Care About Metadata?","acceptedAnswer":{"@type":"Answer","text":"With the build-info we can easily achieve traceability of our builds, giving us the power to analyze them and get the information about the artifacts we’re using. Mainly where they’re coming from and how they are being used. This information is crucial to helping us improve the quality of our builds as well as ensure their security."}},{"@type":"Question","name":"What information is stored in the build info?","acceptedAnswer":{"@type":"Answer","text":"Build-info includes all the metadata for our binary lifecycle. It is all the information collected by the build agent which includes details about the build. The build-info includes the list of project modules, artifacts, dependencies, environment variables and more. When using this open source tool, the client collects the build-info and outputs the information in a JSON format."}},{"@type":"Question","name":"How Do I Get the BuildInfo?","acceptedAnswer":{"@type":"Answer","text":"The build-info capability is a core functionality that is part of the JFrog Platform. The JFrog team has now made it available to the community as a separate component enabling you to easily retrieve the build-info for your builds."}}]}', type: 'application/ld+json' }
    ],
  },
  data() {
    return {
      json_code: `{
        "agent": {},
        "buildAgent": {
          "name": "GENERIC"
        },
        "modules": [
          {
            "type": "go",
            "id": "github.com/jfrog/build-info-go",
            "dependencies": [
              {
                "id": "github.com/pmezard/go-difflib:v1.0.0",
                "type": "zip",
                "sha1": "f200e2a5211b527ef2d2ff301718ccc4ad5c705b",
                "md5": "fb72df530a7f3fca56ccc192c9f30a58"
              },
              {
                "id": "github.com/russross/blackfriday/v2:v2.0.1",
                "type": "zip",
                "sha1": "afd8cfd78a268f5aaa7b86924145c333ea65c603",
                "md5": "8b04dcc4504ca8943c91a4b6cc59cda3"
              },
              {
                "id": "github.com/stretchr/testify:v1.7.0",
                "type": "zip",
                "sha1": "53b5c82ff76628b33b04017e8c81fbc1875f5737",
                "md5": "3cb74476ca750cb267db738a4db2f534"
              },
              {
                "id": "github.com/urfave/cli/v2:v2.3.0",
                "type": "zip",
                "sha1": "0f882edb17acb1c544f6d53c5afa1d6d2add1308",
                "md5": "81a81c77ec9b2721e0229a66d5f77a83"
              },
              {
                "id": "gopkg.in/check.v1:v0.0.0-20161208181325-20d25e280405",
                "type": "zip",
                "sha1": "66ade2d7ec84edaaa9b95e00f79f00b5ac5b1ca2",
                "md5": "5937b6bf7a94c4e0e10c98c7ae7cb7ea"
              },
              {
                "id": "gopkg.in/yaml.v3:v3.0.0-20200313102051-9f266ea9e77c",
                "type": "zip",
                "sha1": "ec896ba2dc97dc3aa33066686b74259520428e00",
                "md5": "b8faa9934f8e54c43766ce7b4b2e0d49"
              },
              {
                "id": "github.com/cpuguy83/go-md2man/v2:v2.0.0-20190314233015-f79a8a8ca69d",
                "type": "zip",
                "sha1": "5586c962d5149ce9d73190ae61bab99ed56d4c7f",
                "md5": "ca2d6e511be9be839f06e049e710063e"
              },
              {
                "id": "github.com/shurcoo!l/sanitized_anchor_name:v1.0.0",
                "type": "zip",
                "sha1": "fd4810a945b887a2e0f0ebb760131e13dca566ae",
                "md5": "90b29aa5c53c3df1b2b80e4d7220b1e3"
              },
              {
                "id": "github.com/davecgh/go-spew:v1.1.0",
                "type": "zip",
                "sha1": "d3e0e482506ae14c36fdf2dfb57f796235d87319",
                "md5": "6b9ae88321948b256d8110455142e498"
              },
              {
                "id": "github.com/jfrog/gofrog:v1.1.1",
                "type": "zip",
                "sha1": "438ad3217d4ccbcb20bca8bfa5c1aa5aa704f9ed",
                "md5": "dc8cea2a1424c6abd4af2a74d2e680e2"
              }
            ]
          }
        ],
        "started": "2021-12-20T14:25:52.747+0200"
      }`,
    }
  },
  components: {
    VueCodeHighlight
  }
}
</script> 
<style src="vue-code-highlight/themes/prism-okaidia.css"></style>

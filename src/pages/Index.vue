<template>
  <Layout>
    
    <h2>What is Build&nbsp;Info?</h2>
    <p>
    Buildinfo is the metadata of a build. It includes all the details about the build broken down into segments that include version history, artifacts, project modules, dependencies, and everything that was required to create the build. In short, it is a snapshot of the components used to build your application, collected by the build agent.
    </p>
    <g-image
      class="img-fluid"
      src="~/assets/images/homepage/content/first-image.png"
    />

    <h2>Why Do I Care About Metadata?</h2>
    <p>
With the Buildinfo we can easily achieve traceability of our builds, giving us the power to analyze them and get the information about the artifacts we’re using. Mainly where they’re coming from and how they are being used. This information is crucial to helping us improve the quality of our builds as well as ensure their security.
    </p>    
    <h2>What information is stored in the build info?</h2>
    <p>Buildinfo includes all the metadata for our binary lifecycle. It is all the information collected by the build agent which includes details about the build. The Buildinfo includes the list of project modules, artifacts, dependencies, environment variables and more. When using this open source tool, the client collects the Buildinfo and outputs the information in a JSON format. </p>
<vue-code-highlight language="json">
  <pre>
    {{json_code}}
  </pre>
</vue-code-highlight>
    <h2>Comparing your builds</h2>
<p>In case your build fails, the Buildinfo can help debug any issues by comparing to a previous build. Doing this comparison will allow you to investigate the changes such as new artifacts added, dependencies deleted and more.
</p>
 <h2>Security risks with open source software</h2>
<p>Open Source Software is amazing but it is not without its faults or vulnerabilities. Free code can make your build run smoothly but it can also contain active threats to your project, code, business, customers, and overall software environment. This has been proven time and time again with the recent hacks to SolarWinds, the Colonial Pipeline Hack, Equifax and many others. Knowing what metadata is contained within your build can help you identify known vulnerabilities and malicious code.</p>
 <h2>How Do I Get the BuildInfo?</h2>
<p>The Buildinfo capability is a core functionality that is part of the JFrog Platform. The JFrog team has now made it available to the community as a separate component enabling you to easily retrieve the Buildinfo for your builds.

To get started, download the Buildinfo open source project. </p>

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
          "id": "github.com/stretchr/testify:v1.7.0",
          "type": "zip",
          "requestedBy": [
            [
              "github.com/jfrog/gofrog:v1.1.1",
              "github.com/jfrog/build-info-go"
            ],
            [
              "github.com/jfrog/build-info-go"
            ]
          ],
          "sha1": "53b5c82ff76628b33b04017e8c81fbc1875f5737",
          "md5": "3cb74476ca750cb267db738a4db2f534",
          "sha256": "5a46ccebeff510df3e2f6d3842ee79d3f68d0e7b1554cd6ee93390d68b6c6b34"
        },
        {
          "id": "gopkg.in/yaml.v3:v3.0.0-20200313102051-9f266ea9e77c",
          "type": "zip",
          "requestedBy": [
            [
              "github.com/stretchr/testify:v1.7.0",
              "github.com/jfrog/gofrog:v1.1.1",
              "github.com/jfrog/build-info-go"
            ],
            [
              "github.com/stretchr/testify:v1.7.0",
              "github.com/jfrog/gofrog:v1.1.1",
              "github.com/jfrog/build-info-go"
            ],
            [
              "github.com/stretchr/testify:v1.7.0",
              "github.com/jfrog/build-info-go"
            ]
          ],
          "sha1": "ec896ba2dc97dc3aa33066686b74259520428e00",
          "md5": "b8faa9934f8e54c43766ce7b4b2e0d49",
          "sha256": "acf19ccb4fca983b234a39ef032faf9ab70e759680673bb3dff077e77fee20fe"
        },
        {
          "id": "github.com/kr/pretty:v0.2.1",
          "type": "zip",
          "requestedBy": [
            [
              "gopkg.in/check.v1:v1.0.0-20201130134442-10cb98267c6c",
              "github.com/jfrog/build-info-go"
            ]
          ],
          "sha1": "e808602a157cdd88fc8984f27895fffd3d15ce8c",
          "md5": "353d5783d72d7e5b4409747b0be33177",
          "sha256": "80af0452082052d1b3265d7cb8985d464d4be222c27e14658e95632c222761e5"
        },
        {
          "id": "github.com/bradleyjkemp/cupaloy/v2:v2.6.0",
          "type": "zip",
          "sha1": "079e9f3594bab1a396ab9fe2d3fc5f5de1e7282a",
          "md5": "0aba1848e0f4de1bd5dcabd9569bf8f8",
          "sha256": "362b2b0446926332be700b60629d8788f622969d861fbcff7e65ccb97ed07fb3"
        },
        {
          "id": "github.com/urfave/cli/v2:v2.3.0",
          "type": "zip",
          "requestedBy": [
            [
              "github.com/jfrog/build-info-go"
            ]
          ],
          "sha1": "0f882edb17acb1c544f6d53c5afa1d6d2add1308",
          "md5": "81a81c77ec9b2721e0229a66d5f77a83",
          "sha256": "bef25aedf2f3ac498094ec9cd216bca61ddf5f2eb7b1ecd850bbfb6053fe4103"
        },
        {
          "id": "github.com/minio/sha256-simd:v1.0.1-0.20210617151322-99e45fae3395",
          "type": "zip",
          "requestedBy": [
            [
              "github.com/jfrog/build-info-go"
            ]
          ],
          "sha1": "f091f68b7467e6dfb5ce28ae894b295525e59d47",
          "md5": "572ef4681740cfdacbbe601587609622",
          "sha256": "bb36b77f985b4ef963517202dbce3a9c72ffc7b90d70143ab4cd176981aa4c72"
        },
        {
          "id": "github.com/pkg/errors:v0.8.0",
          "type": "zip",
          "requestedBy": [
            [
              "github.com/jfrog/gofrog:v1.1.1",
              "github.com/jfrog/build-info-go"
            ],
            [
              "github.com/jfrog/build-info-go"
            ]
          ],
          "sha1": "f539bd34de2d4ab21c2865065eebc072c37c1194",
          "md5": "4030db591c8aca36aec6773ca552d95f",
          "sha256": "e4fa69ba057356614edbc1da881a7d3ebb688505be49f65965686bcb859e2fae"
        },
        {
          "id": "github.com/davecgh/go-spew:v1.1.1",
          "type": "zip",
          "sha1": "0f9760bda0c6ccacac5e57f62d0f5ad9c7dab03f",
          "md5": "feef6644bd69286382139b28be3f0b91",
          "sha256": "6b44a843951f371b7010c754ecc3cabefe815d5ced1c5b9409fb2d697e8a890d"
        },
        {
          "id": "github.com/cpuguy83/go-md2man/v2:v2.0.0-20190314233015-f79a8a8ca69d",
          "type": "zip",
          "requestedBy": [
            [
              "github.com/urfave/cli/v2:v2.3.0",
              "github.com/jfrog/build-info-go"
            ]
          ],
          "sha1": "5586c962d5149ce9d73190ae61bab99ed56d4c7f",
          "md5": "ca2d6e511be9be839f06e049e710063e",
          "sha256": "38ea243c30ed1729d62ec8df91357ab040ac4967cc42d409b7600e0266f7e23c"
        },
        {
          "id": "github.com/!cyclone!d!x/cyclonedx-go:v0.4.0",
          "type": "zip",
          "sha1": "4fd24140c9d75be7361f204809ac509cfbec7d21",
          "md5": "2ac70bf2397c5bb980ccfd3dac6bd24d",
          "sha256": "329d65e011bde22c18a6210869b5ebe10cd943d53352b14d53d0b442007f279e"
        },
        {
          "id": "github.com/klauspost/cpuid/v2:v2.0.6",
          "type": "zip",
          "requestedBy": [
            [
              "github.com/minio/sha256-simd:v1.0.1-0.20210617151322-99e45fae3395",
              "github.com/jfrog/build-info-go"
            ]
          ],
          "sha1": "1ed6884c9ee6ecf98727186591ec597771bd9abe",
          "md5": "e5a4769c581330d21ea90f433cec2ad0",
          "sha256": "514cbd03b0ded074640a9034af2cbc87490167a6d622a8c4bf478e153d8366e2"
        },
        {
          "id": "github.com/kr/text:v0.2.0",
          "type": "zip",
          "requestedBy": [
            [
              "github.com/jfrog/build-info-go"
            ]
          ],
          "sha1": "7d227e9c9516bd2a9617dfec9b150df1cc8d2ef3",
          "md5": "52630c25195715aa3b747ed34c8c1536",
          "sha256": "368eb318f91a5b67be905c47032ab5c31a1d49a97848b1011a0d0a2122b30ba4"
        },
        {
          "id": "gopkg.in/check.v1:v1.0.0-20201130134442-10cb98267c6c",
          "type": "zip",
          "requestedBy": [
            [
              "github.com/jfrog/build-info-go"
            ]
          ],
          "sha1": "19bf400c2215e26dce7b3e966b0035d3c1dbdc87",
          "md5": "dcd82e15e290fa75348922f38492dae7",
          "sha256": "f555684e5c5dacc2850dddb345fef1b8f93f546b72685589789da6d2b062710e"
        },
        {
          "id": "github.com/buger/jsonparser:v1.1.1",
          "type": "zip",
          "requestedBy": [
            [
              "github.com/jfrog/build-info-go"
            ]
          ],
          "sha1": "e0c54d96564262a70bc7ed33fb3ee2b15596f68f",
          "md5": "7ab77d10951f73b96b9c19a6cca51bb1",
          "sha256": "be17ef1b44c22eac645eeac80f0e26cdfc70d77262e631358e00c2aa817eab8c"
        },
        {
          "id": "github.com/pmezard/go-difflib:v1.0.0",
          "type": "zip",
          "requestedBy": [
            [
              "github.com/stretchr/testify:v1.7.0",
              "github.com/jfrog/gofrog:v1.1.1",
              "github.com/jfrog/build-info-go"
            ],
            [
              "github.com/stretchr/testify:v1.7.0",
              "github.com/jfrog/gofrog:v1.1.1",
              "github.com/jfrog/build-info-go"
            ],
            [
              "github.com/stretchr/testify:v1.7.0",
              "github.com/jfrog/build-info-go"
            ],
            [
              "github.com/cpuguy83/go-md2man/v2:v2.0.0-20190314233015-f79a8a8ca69d",
              "github.com/urfave/cli/v2:v2.3.0",
              "github.com/jfrog/build-info-go"
            ]
          ],
          "sha1": "f200e2a5211b527ef2d2ff301718ccc4ad5c705b",
          "md5": "fb72df530a7f3fca56ccc192c9f30a58",
          "sha256": "de04cecc1a4b8d53e4357051026794bcbc54f2e6a260cfac508ce69d5d6457a0"
        },
        {
          "id": "github.com/shurcoo!l/sanitized_anchor_name:v1.0.0",
          "type": "zip",
          "sha1": "fd4810a945b887a2e0f0ebb760131e13dca566ae",
          "md5": "90b29aa5c53c3df1b2b80e4d7220b1e3",
          "sha256": "0af034323e0627a9e94367f87aa50ce29e5b165d54c8da2926cbaffd5834f757"
        },
        {
          "id": "github.com/russross/blackfriday/v2:v2.0.1",
          "type": "zip",
          "requestedBy": [
            [
              "github.com/cpuguy83/go-md2man/v2:v2.0.0-20190314233015-f79a8a8ca69d",
              "github.com/urfave/cli/v2:v2.3.0",
              "github.com/jfrog/build-info-go"
            ]
          ],
          "sha1": "afd8cfd78a268f5aaa7b86924145c333ea65c603",
          "md5": "8b04dcc4504ca8943c91a4b6cc59cda3",
          "sha256": "496079bbc8c4831cd0507213e059a925d2c22bd1ea9ada4dd85815d51b485228"
        },
        {
          "id": "github.com/jfrog/gofrog:v1.1.1",
          "type": "zip",
          "requestedBy": [
            [
              "github.com/jfrog/build-info-go"
            ]
          ],
          "sha1": "438ad3217d4ccbcb20bca8bfa5c1aa5aa704f9ed",
          "md5": "dc8cea2a1424c6abd4af2a74d2e680e2",
          "sha256": "137a603a124b5bfc14d13e17dbc8f50143aa64149cf0441b5ad10f59e08e72e4"
        }
      ]
    }
  ],
  "started": "2022-01-11T19:13:50.430+0200"
}`,
    }
  },
  components: {
    VueCodeHighlight
  }
}
</script> 


<style src="vue-code-highlight/themes/prism-okaidia.css"></style>


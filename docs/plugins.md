# serverless-offline

Install serverless-offline

```bash
npm install serverless-offline --save
```

Add it in `.yml` file

<img width="899" alt="image" src="https://github.com/pabloluceroschneider/node-aws-serverless/assets/43233080/cbe25000-5edc-4597-a0d1-04594f39fad8">
<br /><br />

Run `serverless offline`

<img width="661" alt="image" src="https://github.com/pabloluceroschneider/node-aws-serverless/assets/43233080/56f8f56f-9d81-4636-8f50-67ab17128bd1">
<br /><br />


Now we can test locally

<img width="857" alt="image" src="https://github.com/pabloluceroschneider/node-aws-serverless/assets/43233080/9a65aee7-b37e-4b14-9e9f-0aa48453d627">
<br /><br />

# moment

```bash
npm install moment-timezone -s
```

[5-Moment](https://github.com/pabloluceroschneider/node-aws-serverless/blob/master/5-Moment/handler.js)

<img width="858" alt="image" src="https://github.com/pabloluceroschneider/node-aws-serverless/assets/43233080/325efeff-d39a-475c-a1e4-a6c4450b62f6">
<br /><br />

# prune 

See the [serverless-prune-plugin](https://www.serverless.com/plugins/serverless-prune-versions) available

This plugin for the Serverless Framework removes old versions of AWS Lambda functions - important because if left to it's own devices each time the Serverless Framework is used to update your Lambda or Lambda Layer code in AWS **it creates a new version**. But if you aren't using the old versions then no harm, no foul - right? Unfortunately not, because for each and every version that's created AWS Lambda stores the source code used by that version for you, and there's a hard limit of **only 75GB available per account** for storage of this source code. By removing old versions this plugin keeps you from hitting this storage limit, letting you worry about features instead of account limits.

```bash
serverless prune -n 2 --dryRun
```

See [configuration](https://github.com/pabloluceroschneider/node-aws-serverless/blob/37686c8e226469da0fbd15b5c2c927f5da65e5de/5-Moment/serverless.yml#L11)


# include dependencies

```bash
npm i serverless-plugin-include-dependencies --save
```

<img width="487" alt="image" src="https://github.com/pabloluceroschneider/node-aws-serverless/assets/43233080/ff4f026e-2b5b-42f1-a403-bfb177a56fff">
<br /><br />

<img width="794" alt="image" src="https://github.com/pabloluceroschneider/node-aws-serverless/assets/43233080/b36fcfc5-3d57-4ef6-8095-a147b66f345e">
<br /><br />

1.7 MB < ~28 MB.

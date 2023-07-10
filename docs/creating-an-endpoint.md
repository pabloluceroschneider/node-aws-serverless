# Creating an endpoint

Create a serverless endpoint by running the following command. 

```bash
serverless create -t aws-nodejs --path 3-HelloWorldAPI -n HelloWorldAPI
```

<img width="910" alt="image" src="https://github.com/pabloluceroschneider/node-aws-serverless/assets/43233080/b81e216c-b291-4463-8456-39493060a809">
<br/>


### Create an API

Modify the name of the function with your requirements:

<img width="363" alt="image" src="https://github.com/pabloluceroschneider/node-aws-serverless/assets/43233080/0944b834-1411-4e5b-a0e9-c9f0c63a05a3">
<br /><br />


Then, deploy it by running this command:

```bash
serverless deploy
# serverless deploy --verbose  // shows logs of deployment
# serverless --info            // shows on console the Service Information (region, stage, stack, endpoint, functions)
```

<img width="656" alt="image" src="https://github.com/pabloluceroschneider/node-aws-serverless/assets/43233080/631eaa41-7062-4db6-af63-5d278bcba9a0">
<br />
<img width="650" alt="image" src="https://github.com/pabloluceroschneider/node-aws-serverless/assets/43233080/bb9d5054-0b3e-4cab-aa24-59b06902ffcb">
<br /><br />


You can make a request from postman:

<img width="1193" alt="image" src="https://github.com/pabloluceroschneider/node-aws-serverless/assets/43233080/0e96a804-74c4-4e5d-af88-c2608058ffad">
<br /><br />

It is also accessible from the console

```bash
serverless invoke --function hello
```

<img width="660" alt="image" src="https://github.com/pabloluceroschneider/node-aws-serverless/assets/43233080/90a0bf0c-5f7b-4db2-8a18-8c34734c7a00">


### Logs

```bash
serverless logs -f {function_name} --tail
```

--tail: optional. shows the stack error

# POST method

https://github.com/pabloluceroschneider/node-aws-serverless/tree/master/4-Post-Method

<img width="859" alt="image" src="https://github.com/pabloluceroschneider/node-aws-serverless/assets/43233080/95a10286-a480-4254-8563-cc1c93843095">
<br /><br />

Next >
[Plugins](https://github.com/pabloluceroschneider/node-aws-serverless/blob/master/docs/plugins.md)

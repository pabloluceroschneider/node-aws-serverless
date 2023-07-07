## Install Node

```bash
brew install node
```

## Setup aws credentials

```bash
sudo npm install serverless -g
```

Check the version
```bash
serverless -v

$ SDK 2.3.2

serverless --version
```

Configure
```bash
serverless config credentials --provider aws --key {key} --secret {secret}
```

### How to generate an aws secret key?

1. Entrar a Security Credentials
<img width="400" alt="image" src="https://github.com/pabloluceroschneider/node-aws-serverless/assets/43233080/d5ea0f7c-1fca-402f-87b1-4c7062f227d4">
<br /><br />

3. Create user
<img width="400" alt="image" src="https://github.com/pabloluceroschneider/node-aws-serverless/assets/43233080/469e65ae-3224-4dd3-9820-c8151a87716d">
<br /><br />

4. Create User Groups

Permissions Policies

<img width="400" alt="image" src="https://github.com/pabloluceroschneider/node-aws-serverless/assets/43233080/4c084811-7839-4982-bca6-9a810f42487a">
<br /><br />

Ending

<img width="400" alt="image" src="https://github.com/pabloluceroschneider/node-aws-serverless/assets/43233080/1ced9783-48d0-439a-8edf-813a9ac90315">
<br /><br />

Download the .csv file

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
<img width="319" alt="image" src="https://github.com/pabloluceroschneider/node-aws-serverless/assets/43233080/35bb670f-8c67-472c-85d5-3a6c089a04ae">

2. Crear nuevo usuario
<img width="843" alt="image" src="https://github.com/pabloluceroschneider/node-aws-serverless/assets/43233080/b857ab12-faa7-403d-96d8-f6b2d0307ab5">


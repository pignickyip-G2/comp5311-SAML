# Comp5311
This is a project for PolyU COMP5311 SAML 

## Installation
Go install below module

```Go install
npm install express 
npm install express-session 
npm install cookie-parser 
npm install body-parser 
npm install passport 
npm install passport-saml

```

## Docker image
refer to this
https://hub.docker.com/repositoray/docker/pignickyip/comp5311-saml
```
docker run —-name=testsamlidp -p 8080:8080 -p 8443:8443 -e SIMPLESAMLPHP_SP_ENTITY_ID=comp5311-saml -e SIMPLESAMLPHP_SP_ASSERTION_CONSUMER_SERVICE=http://localhost:4300/login/callback  -d kristophjunge/test-saml-idp

```
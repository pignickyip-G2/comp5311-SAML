# Comp5311
This is a project for PolyU COMP5311

## Installation
Go install below module

```node
body-parser 
ejs 
eslint 
express
fs
joi
nodemon
path 
ldap-authentication (--save)
```

## Docker image
refer to this
https://hub.docker.com/repositoray/docker/pignickyip/comp5311 
```
docker run -p 389:389 -p 636:636 --env LDAP_ORGANISATION="comp5311" --env LDAP_DOMAIN="comp5311-project.polyu" --env LDAP_ADMIN_PASSWORD="testN123" --name comp5311-project-ldap-service --hostname comp5311-project-ldap-service --detach pignickyip/comp5311:v1
```
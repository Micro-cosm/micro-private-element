

# MicroPrivateElement

A micro-frontend(**mife**...like "wife":) bootstrap that authenticates mife users against Firebase and provides access to a configured mife [realm](https://github.com/Micro-cosm/micro-realm).
This project is similar to [micro-private](https://github.com/Micro-cosm/micro-private), but differs by its use of several web components that were deployed from
[micro-client-library](https://github.com/Micro-cosm/micro-client-library).

With the use of [micro-cms](https://github.com/Micro-cosm/micro-cms), dynamic content to any GraphQL datasource is supported.

# Quickstart
To encourage rapid iteration/deployment, this project is configured for, and this quickstart assumes, use with [bin-zsh](https://github.com/wejafoo/bin-zsh).

##### Local

  $  `pu.sh --local`

##### GCP Remote

$  `REMOTE_ALIAS=stage  pu.sh --remote=<REMOTE_ALIAS>` 

----
# About Micro-cosm
We value your perspective and invite you to participate in discovering new mife techniques and methods, regardless of your skill-level. Because of the shared common purpose,
**we try to quickly respond to your hackathon team... your success is ours!**

**Caution:**  All Micro-cosm projects are heavily-opinionated with bias towards Nodejs(Typescript)/GoLang/Angular(CLI)/Google(GCP)/Kubernetes.

A few goals of the overarching project:

- Use latest lts node implementation
- Use latest of angular cli
- Use `ng new <PROJECT NAME>` to create each new mife
- Use @angular/schematics wherever available to install libraries
- Use @angular/cli best practice and default libraries where conflicts with mife best practices are not present
- Use the latest library version of the most active project that serves the need
- Target **90% code coverage** as constribution acceptance criteria
- Focus exclusively on GCP deployability and infrastructure support.

This project was initially generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.7.


<p align="center">
  <a href="https://www.writespeakcode.com">
    <img alt="Write Speak Code Logo" src="/src/images/logos/wsc-logo-fullcolor.png" width="200" />
  </a>
</p>
<h1 align="center">
  Write Speak Code Website
</h1>

[![Netlify Status](https://api.netlify.com/api/v1/badges/ad665e3b-60e0-491c-9126-7f5002058f16/deploy-status)](https://app.netlify.com/sites/writespeakcode/deploys)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
![Npm Audit Fix](https://github.com/WriteSpeakCode/writespeakcode.com/workflows/npm-audit-fix/badge.svg)

<!-- TOC -->

- [✨ Goals](#-goals)
- [💻 How to contribute](#-how-to-contribute)
- [💖 Quick start](#-quick-start)
  - [Dependencies](#dependencies)
  - [Developing](#developing)
- [🎭 Staging](#-staging)
- [🚀 Deployment](#-deployment)
- [🎓 Learn More](#-learn-more)
  - [Code of Conduct](#code-of-conduct)
  - [Contribute](#contribute)
  - [Technologies](#technologies)
  - [Resources](#resources)

<!-- /TOC -->

## ✨ Goals

The goals of this website are as follows:

- to improve the aesthetic and functionality of our digital presence
- to streamline creation of conference pages each year
- to add new features

We aim to write code that is:

- Consistent
- Accessible
- Performant
- Ethical

## 💻 How to contribute

- Review the website goals above
- Read the [contributing doc](docs/CONTRIBUTE.md)
- Agree to and abide by our [code of conduct](http://www.writespeakcode.com/code-of-conduct)
- Follow the instructions below to setup the site and begin development

**Have a question?** _Make an issue using the question issue template._

## 💖 Quick start

### Dependencies

- [Node](https://nodejs.org/en/) (v10.15.3)

### Developing

1.  **Clone the repo.**

    ```sh
    git clone https://github.com/WriteSpeakCode/writespeakcode.com.git
    ```

1.  **Install node modules and start development server.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd writespeakcode.com/
    npm install
    npm run develop
    ```

1.  **Write code.**

    The site is now running at `http://localhost:8000`

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

## 🎭 Staging

Each time we make a pull request either on github or via the CMS, Netlify will deploy a preview of our changes to a custom URL.

## 🚀 Deployment

When any PR is merged into the `production` branch, Netlify automatically deploys that branch live.

## 🎓 Learn More

More information about this site and further resources are located in the `/docs` folder.

### Code of Conduct [Read](docs/CODE_OF_CONDUCT.md)

### Contribute [Read](docs/CONTRIBUTE.md)

### Technologies [Read](docs/TECHNOLOGIES.md)

### Resources [Read](docs/RESOURCES.md)

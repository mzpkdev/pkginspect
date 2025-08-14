<div align="center">

[![license](https://img.shields.io/npm/l/pkginspect.svg)](https://github.com/mzpkdev/pkginspect/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/pkginspect.svg)](https://www.npmjs.com/package/pkginspect)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![bundle size](https://img.shields.io/bundlephobia/min/pkginspect)](https://bundlephobia.com/result?p=pkginspect)

</div>
<br>
<br>

<p align="center">
  <img src="./.github/assets/main-banner.png" height="160" align="center" />
  <p align="center">
    <strong>pkginspect</strong> is ?
    <br />
    <br />
    <a href="#how-to-use"><strong>Explore the API »</strong></a>
    <br />
    <br />
    <a href="https://github.com/mzpkdev/pkginspect/issues">Report a bug</a>
    &nbsp;&nbsp;·&nbsp;&nbsp;
    <a href="https://github.com/mzpkdev/pkginspect/issues">Request a feature</a>
    &nbsp;&nbsp;·&nbsp;&nbsp;
    <a href="./README_ZH.md">中文</a>
  </p>
<br />
<br />

Table of Contents
------------------

* [Overview](#overview)
  * [Why pkginspect?](#why-pkginspect)
* [Getting started](#getting-started)
  * [How to install](#how-to-install)

Overview
--------

### Why pkginspect?

Getting started
----------------

### How to install

```shell
npm install pkginspect
```

```javascript
import pkg from "pkginspect"

const myModule = pkg.inspect()
const parentModule = require(myModule.root.pathname)
```
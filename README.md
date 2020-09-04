# Deck

![](https://travis-ci.org/kshirish/deck.svg?branch=master)
[![npm](https://img.shields.io/npm/v/@kshirish/deck)](https://www.npmjs.com/package/@kshirish/deck)
[![npm](https://img.shields.io/npm/l/@kshirish/deck)]()
[![npm](https://img.shields.io/npm/dw/@kshirish/deck)](https://www.npmjs.com/package/@kshirish/deck)

> Deck is the react toolset to build front end apps.

See Storybook [live](https://kshirish.github.io/deck).

<a href="https://www.npmjs.com/package/@kshirish/deck" target="_blank"> <img src="https://raw.githubusercontent.com/kshirish/deck/master/public/logo.png" width="200" alt="Deck"></a>

### Installation

```shell
npm install @kshirish/deck --save
```

### Usage

```js
import React from 'react';
import { Button, GlobalStyle, Theme } from '@kshirish/deck';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Theme>
        <Button>Hello world</Button>
      </Theme>
    </>
  );
}
```

### Develop components with Storybook

```shell
$ npm i
$ npm run storybook
```

Open http://localhost:6006/ in your favorite web browser.

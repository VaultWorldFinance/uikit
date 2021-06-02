# 🥞 VaultWorld UIkit

[![Version](https://img.shields.io/npm/v/@vaultworld/uikit)](https://www.npmjs.com/package/@vaultworld/uikit) [![Size](https://img.shields.io/bundlephobia/min/@vaultworld/uikit)](https://www.npmjs.com/package/@vaultworld/uikit)

VaultWorld UIkit is a set of React components and hooks used to build pages on VaultWorld's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @vaultworld/uikit`

## Setup

### Theme

Before using VaultWorld UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@vaultworld/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@vaultworld/uikit'
...
<ResetCSS />
```

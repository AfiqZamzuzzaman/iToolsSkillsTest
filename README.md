# iToolsSkillsTest

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

Hello there, Afiq here... I am sorry for the delay but alas here I am. Both yesterday and today was quite hectic, too many new things I needed to learn on the spot. Here is a brief idea on what those things were:

1. Familiar with axios http but not enough that I can bypass CORS on the spot. Fortunately enough, I did it through vite server.proxy configuration
2. Stored the retrieved JWT Token in localStorage
3. Unable to implement axios interceptors lack of experience; never even heard of it before
4. First time using Composition API on VueJS; prior experience was using Options API
5. Managed to make use of Composables for auth state and theme change (light & dark mode), very similar to Closures; tried but was not able to persist user's theme
6. Made use of global theming
7. Unable to complete task for bonus points
8. Done error handling for axios post request and login credentials
9. First time using git, git bash, and github

   
Reasons behind key design decisions:
1. used localStorage mainly because it persists data even when the browser tab or window is closed
2. used npm create vue@latest, utilising the readily available default theme at base.css file to maintain consistency and seamlessness
3. applied error handling on login fields to give users an idea on why their login attempts are not going through
4. applied some input sanitization on password field to prevent the use of single quote, double quote, slash, and backslash to reduce risk of SQL injection
5. prepared a button to toggle password's visibility for privacy

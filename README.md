# Custom Made Localization Demo

This is an exploration repository to see if it's feasible and easy to build a home-made localization.

I got another Remix project where I've set up the community-recommended way to implement internationalization, which uses all these packages:

- `i18next`
- `i18next-browser-languagedetector`
- `i18next-fs-backend`
- `i18next-http-backend`
- `react-i18next`
- `remix-i18next`

Which I think is convoluted and I'm not really sure what things bring to the table `react-i18next` and `remix-i18next`.

Also, I've been having several issues:

- I'm having issues with deep object access, I have correctly configured `keySeparator` to be a dot ("."), and still I cannot access something like `t("deep.object.translation")`.

- If something bad happens with a single translation file, the whole translations break, even if they come from other files.

- I don't really like to write JSON files, I believe translations could perfectly live in JS/TS files and be imported leveraging Javascript module system, which avoid a great deal of library code to resolve and load translation files. Furthermore: being a file where code can be executed, things like pluralization could be solved there.


## Remix help

This is a Remix project using Express.js template, so the remaining of the file is the standard Remix's auto-generated README file.

- 📖 [Remix docs](https://remix.run/docs)

## Development

Run the dev server:

```shellscript
pnpm dev
```

## Deployment

First, build your app for production:

```sh
pnpm build
```

Then run the app in production mode:

```sh
pnpm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `pnpm build`

- `build/server`
- `build/client`

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.

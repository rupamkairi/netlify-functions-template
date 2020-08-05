# Netlify-Functions Template project.

Simple Server-Side functionalities can be used on a front-end Web Application using [Netlify Functions](https://docs.netlify.com/functions/configure-and-deploy/#configure-the-functions-folder). This way of adding server-side processes known as Server-less lambda functions.

This project starts with rendering the `index.html` inside public directory. The web url is https://netlify-basic-template.netlify.app

To access the functions we need to access `/.netlify/functions` extended url. We only have `hello.js` that sends a ` {"message":"Hello, user."}`. And to access this function we simply go to `/hello` route. Now web url should be https://netlify-basic-template.netlify.app/.netlify/functions/hello.

We now want to pass some information back and forth to server and client. We use Query String Parameters. Our `hello` route already have a parameter called `subject`. To pass values we just pass value like `subject=awesome-me`. To enable the url to be able to use Query String Parameter we use `?` at end of our routes.
Now this web url https://netlify-basic-template.netlify.app/.netlify/functions/hello?subject=awesome-me should give ` {"message":"Hello, awesome-me."} `.
We can concatenate multiple of these params using `&` like `/hello?subject=user&role=host`. Here subject and role params are passed. NB: this `role` param is not implemented in the example but it is same as the subject.

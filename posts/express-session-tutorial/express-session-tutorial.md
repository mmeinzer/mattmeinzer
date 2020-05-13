---
path: "/express-session-tutorial"
date: "2020-05-07"
title: "Express.js Sessions Tutorial"
heading: "Express Sessions Deep Dive"
live: true
---

The `express-session` [package](https://github.com/expressjs/session) is maintained by expressjs as the “official” implementation of sessions. Using it is fairly straightforward.

The only required parameter is a `secret` but there are a few other settings that should be configured for a production environment.

Once configured as express middleware, the session for any request can be accessed on the `req.session` object. For example, if you wanted to store the number of api requests a user has made in a given session, that could be done by setting a variable `req.session.requests = 1` on the first request and incrementing that variable with each subsequent request. `maxAge` is generally easier to use since the `expires` attribute accepts a date object that you have to calculate rather than an elapsed time.
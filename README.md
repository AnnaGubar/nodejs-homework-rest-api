1. app.js -> `app.use("/api/users", usersRouter);`
2. routs/api -> users.js -> роуты `"/register"` `"/signup"`
3. controllers -> users -> `signup.js` `login.js`
4. middlewares -> `auth.js` 
5. routs/api/contacts.js сделать все роуты приватные добавив контроллер auth
6. routs/api/users.js -> роут `"/logout"` добавить контроллер auth
7. controllers /users -> `logout.js`
8. routs/api/users.js -> роут `"/current"` добавить контроллер auth
9. controllers /users -> `current.js`


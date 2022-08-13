1. app.js -> `app.use("/api/users", usersRouter);`
2. routs/api -> users.js -> роуты `"/register"` `"/signup"` `"/signout"`
3. controllers -> users -> `signup.js` `login.js`
4. middlewares -> `auth.js` 
5. routs/api/contacts.js добавить к роутам контроллер auth


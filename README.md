1. app.js -> `app.use("/api/users", usersRouter);`
2. routs/api -> users.js -> роуты `"/register"` `"/signup"`
3. controllers -> users -> `signup.js` `login.js`
4. middlewares -> `auth.js` 
5. routs/api/contacts.js сделать все роуты приватные добавив контроллер auth
6. routs/api/users.js -> роут `"/logout"` добавить контроллер auth
7. controllers /users -> `logout.js`
8. routs/api/users.js -> роут `"/current"` добавить контроллер auth
9. controllers /users -> `current.js`
# avatar
10. app.js -> раздача статики с папки `"public"` 
11. models/user.js -> добавление поля `avatarURL`
12. controllers/users/signup.js создание рандомной авы`npm i gravatar`
13. routs/api/users.js -> роут `"/avatars"` для обновление авы пользователем метод PATCH
14. middlewares -> `upload.js` конфиг для считывания и сохранения картинки `npm i multer`
15. controllers/users -> `setAvatar.js` 
# email verification
16. helpers -> `sendEmail.js`
17. models/user - добавляем поля `verify` `verificationToken`
18. controllers/auth/register.js - генерируем токен, добавляем в запрос, создаем и отправляем email
19. controllers/auth -> `verifyEmail.js`
20. routs/api/users.js -> `"/verify/:verificationToken"` + verifyEmail
21. controllers/auth/login.js -> генерировать токен только для подтвердивших почту
22. controllers/auth -> `resendVerifyEmail.js`
23. routs/api/users.js -> `"/verify"` + resendVerifyEmail

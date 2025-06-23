import { Log, registerUser, authenticate } from './middleware';

(async () => {
  const user = {
    email: "2203031050767@paruluniversity.ac.in",
    name: "UMARETIYA MAYURIBEN DHARMESHBHAI",
    mobileNo: "9023883529",
    githubUsername: "mayuri-11",
    rollNo: "2203031050767",
    collegeName: "PIET",
    accessCode: "TRzgWM", 
  };

  const regRes = await registerUser(user);

  await authenticate({
    ...user,
    clientID: regRes.clientID,
    clientSecret: regRes.clientSecret,
  });

  registerUser(user);
  authenticate(user);
  Log("All operations completed successfully.");
})();

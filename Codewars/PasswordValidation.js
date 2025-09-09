// You need to write regex that will validate
// a password to make sure it meets the following criteria:

// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a digit
// only contains alphanumeric characters (note that '_' is not alphanumeric)
const REGEXP =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])[A-Za-z\d[^A-Za-z0-9]]{6,}$/;
const passwords = [
  "Abc123",
  "Abc123!",
  "abc123$",
  "ABC123@",
  "Abcdef#",
  "Ab1!@#",
  "Ab1",
];

passwords.forEach((pwd) => {
  console.log(pwd, REGEXP.test(pwd));
});

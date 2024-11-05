export const users = [];

export const registerUser = (name:string, email:string) => {
  // Check if the email is already registered
  //@ts-ignore
  if (users.some(user => user.email === email)) {
    throw new Error('Email already registered');
  }

  // Register the new user
  const newUser = { name, email };
  //@ts-ignore
  users.push(newUser);
  return newUser;
}
const signupForm = document.getElementById("signup-form");
const signinForm = document.getElementById("signin-form");

async function handleSignup(event) {
  event.preventDefault();
  console.log("blah");

  const userNameValue = document.getElementById("username-signup").value.trim();
  const passwordValue = document.getElementById("password-signup").value.trim();
  const emailValue = document.getElementById("email-signup").value.trim();
  const licenseValue = document.getElementById("license-signup").value.trim();

  const newUser = {
    username: userNameValue,
    email: emailValue,
    password: passwordValue,
    license: licenseValue,
  };

  const response = await fetch("/api/users/signup", {
    body: JSON.stringify(newUser),
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
  });

  if (response.ok) {
    console.log("IT WORKED!");
  } else {
    console.log("Dan, you screwed it up again");
  }

  signupForm.reset();
}

async function handleLogin(event) {
  event.preventDefault();

  const emailValue = document.getElementById("email-login").value.trim();
  const passwordValue = document.getElementById("password-login").value.trim();

  const loginUser = {
    email: emailValue,
    password: passwordValue,
  };

  const response = await fetch("/api/users/login", {
    body: JSON.stringify(loginUser),
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
  });

  if (response.ok) {
    console.log("IT WORKED!");
  } else {
    console.log("Dan, you screwed it up again");
  }

  loginForm.reset();
}

signupForm.addEventListener("submit", handleSignup);
signinForm.addEventListener("submit", handleLogin);

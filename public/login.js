const signupForm = document.querySelector(".signup-form");
const signinForm = document.querySelector(".signin-form");

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
    console.log("Nice!");
    document.location.replace("/homepage");
  } else {
    console.log("Fetch Failed");
  }
}

async function handleLogin(event) {
  event.preventDefault();

  const emailValue = document.getElementById("email-signin").value.trim();
  const passwordValue = document.getElementById("password-signin").value.trim();

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
    console.log("Nice!");
    document.location.replace("/homepage");
  } else {
    console.log("Fetch Failed");
  }
}

signupForm.addEventListener("click", handleSignup);
signinForm.addEventListener("click", handleLogin);

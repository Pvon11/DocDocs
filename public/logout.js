const logOutButton = document.querySelector("#button-name");

async function handleLogout(event) {
  event.preventDefault();

  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
  });

  if (response.ok) {
    console.log("Nice!");
    console.log(response);
    document.location.replace("/");
  } else {
    console.log(response);
    console.log("Fetch Failed");
  }
}

logOutButton.addEventListener("click", handleLogout);

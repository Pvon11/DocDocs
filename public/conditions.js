const createConditionButton = document.getElementById("create-condition");
const searchConditionButton = document.getElementById("condition-search");
const conditionDisplay = document.getElementById("condition-data");
const alertDiv = document.getElementById("alert");

async function renderCondition(condition) {
  console.log(condition);
  const html = `<div class="display-box">
  <span class="material-symbols-outlined">conditions</span>
<p>${condition[0].name}</p> 
<p>${condition[0].description}</p>
<p>${condition[0].symptoms}</p>
<p>${condition[0].treatments}</p>
</div>`;
  conditionDisplay.replaceChildren("");
  conditionDisplay.insertAdjacentHTML("beforeend", html);
}

async function createCondition(event) {
  const conditionName = document.getElementById("condition-name").value.trim();
  const conditionDescription = document
    .getElementById("condition-description")
    .value.trim();
  const conditionSymptoms = document
    .getElementById("symptom-type")
    .value.trim();
  const conditionTreatments = document
    .getElementById("treatment-name")
    .value.trim();

  const newCondition = {
    name: conditionName,
    description: conditionDescription,
    symptoms: conditionSymptoms,
    treatments: conditionTreatments,
  };

  console.log(newCondition);

  const response = await fetch("/api/conditions", {
    body: JSON.stringify(newCondition),
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
  });

  if (response.ok) {
    console.log("Nice!");
  } else {
    console.log("Fetch Failed");
  }
}

async function searchCondition(event) {
  // event.preventDefault();

  const name = document.getElementById("condition-search-name").value.trim();

  if (!name) alertDiv.innerText = "Please type in a name";

  const response = await fetch(`/api/conditions/${name}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });

  // if (response.ok) {

  //   // console.log(response);
  //   // console.log(response.body);
  // } else {
  //   console.log(response);
  // }
  if (!response.ok) {
    const message = response.status;
    throw new Error(message);
  }
  const condition = await response.json();
  alertDiv.innerText = "";

  renderCondition(condition);
}

createConditionButton.addEventListener("click", createCondition);
searchConditionButton.addEventListener("click", searchCondition);

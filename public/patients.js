const createPatientButton = document.getElementById("create-patient");
const searchPatientButton = document.getElementById("search-patients");
const patientDisplay = document.getElementById("patient-data");
const alertDiv = document.getElementById("alert");

async function renderPatient(patient) {
  console.log(patient);
  const html = `<div class="display-box">
  <span class="material-symbols-outlined">patient_list</span>
<p>${patient[0].name}</p> 
<p>${patient[0].dob}</p>
<p>${patient[0].notes}</p>
</div>`;
  patientDisplay.replaceChildren("");
  patientDisplay.insertAdjacentHTML("beforeend", html);
}

async function createPatient(event) {
  // event.preventDefault();
  // console.log("blah");

  const patientName = document.getElementById("patient-name").value.trim();
  const patientDob = document.getElementById("date-of-birth").value.trim();
  const patientNotes = document.getElementById("patient-notes").value.trim();

  const newPatient = {
    name: patientName,
    dob: patientDob,
    notes: patientNotes,
  };
  //-- from here you can remove everythiung
  console.log(newPatient);

  const response = await fetch("/api/patients", {
    body: JSON.stringify(newPatient),
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

  //-- to here
}

async function searchPatient() {
  const name = document.getElementById("patient-search").value.trim();

  if (!name) alertDiv.innerText = "Please type in a name";

  const response = await fetch(`/api/patients/${name}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });

  if (!response.ok) {
    const message = response.status;
    throw new Error(message);
  }
  const patient = await response.json();
  alertDiv.innerText = "";
  renderPatient(patient);
}

createPatientButton.addEventListener("click", createPatient);
searchPatientButton.addEventListener("click", searchPatient);

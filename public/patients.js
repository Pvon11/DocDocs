const createPatientButton = document.getElementById("create-patient");
const searchPatientButton = document.getElementById("search-patients");
const patientDisplay = document.getElementById("patient-data");

async function renderPatient(patient) {
  console.log(patient);
  const html = `<div class="display-box">
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
}

async function searchPatient(event) {
  // event.preventDefault();

  const name = document.getElementById("patient-search").value.trim();
  console.log(name);

  const response = await fetch(`/api/patients/${name}`, {
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
  const patient = await response.json();

  renderPatient(patient);
}

createPatientButton.addEventListener("click", createPatient);
searchPatientButton.addEventListener("click", searchPatient);

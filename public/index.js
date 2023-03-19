const createConditionButton = document.getElementById("create-condition");
const searchConditionButton = document.getElementById("condition-search");

async function createCondition(event) {
    event.preventDefault();
    console.log("blah");
  
    const conditionName = document.getElementById("condition-name").value.trim();
    const conditionDescription = document.getElementById("condition-description").value.trim();
    const conditionSymptoms = document.getElementById("symptom-type").value.trim();
    const conditionTreatments = document.getElementById("treatment-name").value.trim();
  
    const newCondition = {
      name: conditionName,
      description: conditionDescription,
      symptoms: conditionSymptoms,
      treatments: conditionTreatments,
    };
  
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
  
   
  };


  async function searchCondition(event) {
    event.preventDefault();
    console.log("blah");
  
    const name = document.getElementById("condition-search-name").value.trim();
    
  
    const response = await fetch(`/api/conditions/${name}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
  
    if (response.ok) {
      console.log("Nice!");
    } else {
      console.log("Fetch Failed");
    }
  
   
  };

 

  createConditionButton.addEventListener("submit", createCondition);
  searchConditionButton.addEventListener("submit", searchCondition);
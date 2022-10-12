//getElementById() returns the element that has the ID attribute with the specified value
const submitButton = document.getElementById("submit");
const cancelButton = document.getElementById("cancel");

//Use the addEventListener() method to attach a "click" event to a <button> element:
submitButton.addEventListener("click", submitForm);
cancelButton.addEventListener("click", cancelAlertMessage);

function submitForm() {
  //Return the value property:
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var quantity = document.getElementById("quantity").value;

  //Set a <div> element to be displayed when required inputs are valid:
  if (name !== "" && email !== "" && quantity !== "")
    document.getElementById("alertMessage").style.display = "block";
}

function cancelAlertMessage(event) {
  //Calling preventDefault() during any stage of event flow cancels the event,
  //meaning that any default action normally taken by the implementation as a result of the event will not occur.
  event.preventDefault();

  //Set a <div> element to not be displayed:
  document.getElementById("alertMessage").style.display = "none";
}

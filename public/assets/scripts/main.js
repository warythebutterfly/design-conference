//getElementById() returns the element that has the ID attribute with the specified value
const cancelButton = document.getElementById("cancel");

//Use the addEventListener() method to attach a "click" event to a <button> element:
cancelButton.addEventListener("click", cancelAlertMessage);

function cancelAlertMessage(event) {
//Calling preventDefault() during any stage of event flow cancels the event, 
//meaning that any default action normally taken by the implementation as a result of the event will not occur.
  event.preventDefault();

  //Set a <div> element to not be displayed:
  document.getElementById("alertMessage").style.display = "none";
}

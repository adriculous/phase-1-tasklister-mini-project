document.addEventListener("DOMContentLoaded", () => {
  /* 
DELIVERABLES:
As a user, I should be able to type a task into the input field.
As a user, I should be able to click some form of a submit button.
As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.
*/

  const form = document.querySelector("form")
  const tasks = document.querySelector("#tasks")


  // this is the form where you submit your todo item
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = e.target.task.value
    addElement(inputValue)
    // this clears the input after it was submitted
    form.reset();

  })

  // this is what happens when you add your todo item
  function addElement(element) {
    let li = document.createElement("li")
    li.textContent = ` ${element} `
    let button = document.createElement("button")
    button.textContent = "x"
    button.addEventListener("click", e => deleteButton(e))
    li.appendChild(button)
    tasks.appendChild(li)
  }

  // this is where we're deleting the todo items completed
  function deleteButton(ev) {
    ev.target.parentNode.remove()
  }

});

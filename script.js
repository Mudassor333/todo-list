let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

function addTask() {
    let taskText = taskInput.value.trim();

    if (taskText !== "") {
        // Create a new list item
        let listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button onclick="removeTask(this)">Delete</button>
        `;

        // Add the new item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = "";
    }
}

function removeTask(button) {
    // Remove the parent li element when the delete button is clicked
    let listItem = button.parentNode;
    taskList.removeChild(listItem);
}

function printTaskList() {
    // Get the div that contains the to-do list
    let printableArea = document.getElementById("printableArea");

    // Open a new window and write the content of the div to it
    let printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>Print</title></head><body>');
    printWindow.document.write(printableArea.innerHTML);
    printWindow.document.write('</body></html>');

    // Close the new window after printing
    printWindow.document.close();
    printWindow.print();
}

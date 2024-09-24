let taskCount = 0; // Contador para la posición de la tarea

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    let message = document.getElementById("message");
    let reset = document.getElementById("btn-resetList");
    if (taskText === "") {
        message.textContent = "The task cannot be empty.";
        return;
    }
    
    taskCount++; // Incrementamos el número de tarea

    const tableBody = document.querySelector("#taskTable");
    if(tableBody === ""){
        reset.style.display = "none";
    }else{
        reset.style.display = "block";
    }
    // Crear una nueva fila
    const row = document.createElement('tr');

    // Columna del número de la tarea
    const numberCell = document.createElement('td');
    numberCell.textContent = taskCount;
    row.appendChild(numberCell);

    // Columna con el texto de la tarea
    const textCell = document.createElement('td');
    textCell.textContent = taskText;
    textCell.style.width = '60%';
    row.appendChild(textCell);

    // Columna con el botón para borrar................................................................
    const actionCell = document.createElement('td');
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.style.width = '60px';
    deleteButton.onclick = () => {
        tableBody.removeChild(row); // Eliminar la fila
        taskCount--; // Decrementamos el contador de tareas
        updateTaskNumbers(); // Actualizamos los números de las tareas
    };
    actionCell.appendChild(deleteButton);
    

    // Columna con el botón para marcar como "hecho"
    
    const doneButton = document.createElement('button');
    doneButton.textContent = 'Done';
    doneButton.style.width = '60px';
    doneButton.onclick = () => {
        row.classList.toggle('done'); // Alterna la clase "done" para marcar como hecho/no hecho
    };
    actionCell.appendChild(doneButton);
    row.appendChild(actionCell);

    // Añadir la fila a la tabla
    tableBody.appendChild(row);

    // Limpiar el campo de entrada
    taskInput.value = "";
    message.textContent = "";
}

// Función para actualizar los números de las tareas después de borrar una
function updateTaskNumbers() {
    const rows = document.querySelectorAll("#taskTable tbody tr");
    let newTaskCount = 0;
    rows.forEach((row) => {
        newTaskCount++;
        row.firstElementChild.textContent = newTaskCount;
    });
    taskCount = newTaskCount; // Actualizar el contador global
}



function resetList() {
    let reset = document.getElementById("btn-resetList");
    const tableBody = document.querySelector("#taskTable");
    tableBody.innerHTML = ""; // Limpiar todo el contenido del cuerpo de la tabla
    taskCount = 0; // Reiniciar el contador de tareas a cero 
    reset.style.display = "none";
}



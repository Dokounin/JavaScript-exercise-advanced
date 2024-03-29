const myJSON = "https://pachyderme.net/students.json";

fetch(myJSON) 
  .then((response) => response.json())
  .then((studentsJSON) => {
    console.log(studentsJSON);
    const divStudents = document.querySelector("#students");
    studentsJSON.students.forEach((student) => {
        divStudents.innerHTML += `<div class="block  md:p-[22.3px] p-6 m-2 max-w-sm bg-gray rounded-lg border border-gray-400 shadow-md hover:bg-stone-300">
          <p class="mb-2 text-xl font-bold tracking-tight text-gray-900">Firstname : ${student.firstname}</p>
          <p class="mb-2 text-xl font-bold tracking-tight text-gray-900">Lastname : ${student.lastname}  </p>
          <p class="mb-2 text-xl font-bold tracking-tight text-gray-900">Githubid : ${student.githubid} </p>
          <span class="text-gray-600">Sex : ${student.sex}<span>
          </div>`;
      }
    );
  });

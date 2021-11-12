function userCreate() {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let address = document.getElementById("address").value
    axios.post('http://localhost:3000/user', {
        name, email, address
    })
        .then(function (response) {
            console.log(response);

            document.getElementById("name").value = ""

            getAllUser()

            document.getElementById("alert").innerHTML =
                `<div class="alert alert-success" role="alert">
                    User Created Success!
                </div>`

            setTimeout(() => {
                document.getElementById("alert").innerHTML = ""
            }, 3000);

        })

}
function getAllUser() {

    axios.get('http://localhost:3000/users')
        .then(function (response) {
            console.log(response);

            let users = response.data;

            document.getElementById("tableBody").innerHTML = ""

            users.map((eachUser, index) => {
                document.getElementById("tableBody").innerHTML +=
                    `<tr>
                        <th scope="row">${eachUser._id}</th>
                        <td>${eachUser.name}</td>
                        <td>${eachUser.email}</td>
                        <td>${eachUser.address}</td>
                        <td>
                            <button type="button" onclick="deleteUser('${eachUser._id}')" class="btn btn-danger">delete</button>
                        </td>
                    </tr>`
            })
        })

}


function deleteUser(_id) {
    alert("User Deleted");

    axios.delete(`http://localhost:3000/user/${_id}`)
        .then(function (response) {
            console.log(response);

            getAllUser();

            document.getElementById("alert").innerHTML =
                `<div class="alert alert-danger" role="alert">
                    User Deleted Success!
                </div>`

            setTimeout(() => {
                document.getElementById("alert").innerHTML = ""
            }, 3000);

        })
}

getAllUser();


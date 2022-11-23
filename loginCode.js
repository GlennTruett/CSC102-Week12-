function checkCreds() {
    //collect the data
    var fsName = document.getElementById("fName").value;
    var lstName = document.getElementById("lName").value;
    var badgeNumb = document.getElementById("badgeID").value;
    //work with the data
    var fullName = fsName + " " + lstName
    console.log("The full name is " + fullName);
    console.log("The badge number is " + badgeNumb);
    var fullLength = fullName.length;
    console.log("The name Length is " + fullLength);

    //check the inputs
    if (fullLength > 20 || fullLength < 2) {
        document.getElementById("loginStatus").innerHTML = "invalid name entry, please try again";
    } else if (badgeNumb > 999 || badgeNumb < 1) {
        document.getElementById("loginStatus").innerHTML = "invalid badge number entry, please try again";
    } else {
        alert("Access Granted, Welcome " + fullName);
        location.replace("./Craps.html");
    }

}


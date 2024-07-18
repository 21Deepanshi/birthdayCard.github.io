// Prompt the user for their friend's name
        var friendName = prompt("Enter your name:");

        // Replace the content of the paragraph with the friend's name
        if (friendName) {
            document.getElementById("friendName").innerHTML = "Dear " + friendName + ",";
        }
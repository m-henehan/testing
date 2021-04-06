
// GET comments

function getcomments()
{
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://us-central1-authenticate-101.cloudfunctions.net/getcomments');

    //Track the state changes of the request
    xhr.onreadystatechange = function()
    {
        console.log("started");
        let DONE = 4; //readyState 4 means the request is done
        let OK = 200; // status 200 is a successful return
        if (xhr.readyState === DONE) {
            if (xhr.status === OK) {
                let sHTML = "";
                let data = JSON.parse(xhr.responseText);
                for (let i = 0; i < data.length; i++) {
                    sHTML += "<p> Handle: " + data[i].handle + "<\p>";
                    sHTML += "<p> Comment: " + data[i].comment + "<\p>";
                    document.getElementById("comments").innerHTML = sHTML;
                }
            } else {
                console.log('Error: ' + xhr.status);
            }
        }
    }
    xhr.send(null);
}
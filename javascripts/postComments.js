// POST comments
function postcomments(){
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://us-central1-authenticate-101.cloudfunctions.net/postcomments', true);

    xhr.setRequestHeader("Content-type", "application/json");
    //Track the state changes of the request
    xhr.onreadystatechange = function()
    {
        let DONE = 4; //readyState 4 means the request is done
        let OK = 200; // status 200 is a successful return
        if (xhr.readyState === DONE) {
            if (xhr.status === OK) {
                getcomments();
            } else {
                console.log('Error: ' + xhr.status);
            }
        }
    };
    xhr.send(JSON.stringify({"handle":document.getElementById('handle').value, "comment":document.getElementById('comment').value}
    ));
}
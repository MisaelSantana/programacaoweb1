// function addTask () {
//     var divTask = document.createElement('div');
//     var contentNew = document.createTextNode("TASK LIST");
//     divTask.appendChild(contentNew);

//     var divNew = document.getElementById('task');
//     document.body.insertBefore(divTask, divNew)
// }

function Init () {
    var input = document.getElementById('my-textbox');
    input.addEventListener( 'keypress', checkName, false);
}

function checkName(evt) {
    var charCode = evt.charCode;
    if (charCode != 0) {
        if (charCode < 97 || charCode > 122) {
            evt.preventDefault();
            alert(
                "Please use lowercase letters only."
                + "\n" + "charCode: " + charCode + "\n"
            );
        }
    }
} 

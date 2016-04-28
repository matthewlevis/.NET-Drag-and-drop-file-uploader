//Drop file area
var dArea = document.getElementById("drop-zone");

//drag events
dArea.ondragover = function () { dArea.className = 'hoverBorder'; return false; };
dArea.ondragleave = function () { dArea.className = 'defaultBorder'; return false; };
dArea.ondragend = function () { dArea.className = 'defaultBorder'; return false; };

dArea.ondrop = function (event) {

    //When file dropped change border style
    dArea.className = 'droppedBorder';

    event.preventDefault();
    
    //the dropped file
    files = event.dataTransfer.files;
    
    //Call VB page form and prepare
    var form = document.getElementById('DropForm');
    var data = new FormData(form);                

    //only 1 file [0]
    data.append(files[0].name, files[0]);                      

    //Here you can specify file size limits - currently set at 1000000 bytes (1MB)
    if (files[0].size > 1000000) {
        dArea.className = 'errorBorder';
        document.getElementById("info").innerHTML = "<tr><td align='center'>Error: Max file size is 1MB</td></tr>";
    } else {
        //return status of POST
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200 && xhr.responseText) {
                //Extract response message, removing the whole html page data which the response includes and we don't need
                var resPos = xhr.responseText.indexOf("<");

                var retMsg = xhr.responseText.substring(0, resPos)
                if (retMsg.indexOf("error") > -1 || retMsg.indexOf("Error") > -1) { dArea.className = 'errorBorder'; } //make border red if error returned
                document.getElementById("info").innerHTML = "<tr><td align='center'> " + retMsg + "</td></tr>";
            } else {
                document.getElementById("info").innerHTML = "<tr><td align='center'>Uploading...</td></tr>";
            }
        };
        //open connection to vb code behind and send file stream   
            xhr.open('POST', "DragDropNETUpload.aspx");
            xhr.send(data);                    
    }
};
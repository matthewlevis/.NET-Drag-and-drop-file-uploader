<%@ Page Language="VB" AutoEventWireup="false" CodeFile="DragDropNETUpload.aspx.vb" Inherits="_DragDrop" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Drag and Drop - VB.NET</title>
    <link rel="stylesheet" href="styles/reset.css"/>
    <link rel="stylesheet" href="styles/styles.css"/>        
</head>

<body>

        <form id="DropForm" enctype="multipart/form-data" runat="server">            
               
            <div id="drop-zone" class="defaultBorder">
                <p id="info">Drop your file here...</p>                
            </div> 
                                              
        </form>

        <script type="text/javascript" src="js/dropJs.js"></script>

</body>

</html>

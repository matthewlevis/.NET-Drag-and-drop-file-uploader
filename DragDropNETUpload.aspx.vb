Partial Class _DragDrop
    Inherits System.Web.UI.Page

    'Upload file in project directory
    Dim importDir As String = Server.MapPath(".")

    Private Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load

        'Do not run on initial page load
        If IsPostBack Then
            UploadFile(sender, e)
        End If

    End Sub

    Protected Sub UploadFile(sender As Object, e As EventArgs)

        Try

            'Request file that was uploaded via the XMLHTTP stream
            Dim fileCollection As HttpFileCollection = Request.Files
            'You can upload multiple files, here we just want to extract one
            Dim uploadFile As HttpPostedFile = fileCollection(0)

            'Filename only, remove absolute file path
            Dim FileNameSplit() As String = uploadFile.FileName.Split("\")
            Dim FileName As String = FileNameSplit(FileNameSplit.Length - 1)

            'save file
            uploadFile.SaveAs(importDir & "\" & FileName)

            'Success - return message to page
            Response.Write("File uploaded to " & importDir)

        Catch ex As Exception
            'Error found - return exception message to page
            Response.Write("Upload error:" & ex.Message)
        End Try

    End Sub

End Class

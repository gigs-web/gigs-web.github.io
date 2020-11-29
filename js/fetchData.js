var firebaseConfig = {
    apiKey: "AIzaSyAil2As0b3lhZ1zlq1WkLASYsh_vEGtIpg",
    authDomain: "electoral-database.firebaseapp.com",
    databaseURL: "https://electoral-database.firebaseio.com",
    projectId: "electoral-database",
    storageBucket: "electoral-database.appspot.com",
    messagingSenderId: "913717213460",
    appId: "1:913717213460:web:1dd79336d81e0951e36a01"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


 //Display Selected Image
$(document).ready( function() {
    $(document).on('change', '.btn-file :file', function() {
    var input = $(this),
        label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
    input.trigger('fileselect', [label]);
    });

    $('.btn-file :file').on('fileselect', function(event, label) {
        
        var input = $(this).parents('.input-group').find(':text'),
            log = label;
        
        if( input.length ) {
            input.val(log);
        } else {
            if( log ) alert(log);
        }
    
    });
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
                $('#img-upload').attr('src', e.target.result);
            }
            
            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#postImage").change(function(){
        readURL(this);
    }); 	
});

//Post Form Validations
var validImagetypes = ["image/gif", "image/jpeg", "image/jpg", "image/png"];

$("#uploadBtn").click(function()
{
    $("#postTitle").removeClass("is-invalid");
    $("#postImage").removeClass("is-invalid");

    var title = $("#postTitle").val();
    var picture = $("#postImage").prop("files")[0];

    if(!title)
    {
        $("#postTitle").addClass("is-invalid");
        return;
    }
    if(picture == null)
    {
        $("#postImage").addClass("is-invalid");
        return;
    }
    if($.inArray(picture["type"], validImagetypes)<0)
    {
        $("#postImage").addClass("is-invalid");
        return;
    }


//Upload Post to Firebase and Save Image to Firebase Storage

    var databaseRef = firebase.database().ref("electoralData");

    databaseRef.once("value").then(function(snapshot)
    {
        var name = picture["name"];
        var dateStr = new Date().getTime();
        var fileCompleteName = name + "_" + dateStr;

        var postImage = document.getElementById("#postImage");

        var storageRef= firebase.storage().ref("Data Images");
        var blogStorageRef = storageRef.child(fileCompleteName);

        var uploadTask = blogStorageRef.put(picture);

        uploadTask.on("state_changed",
            
            function progress(snapshot)
            {
                var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

                $("#upload-progress").html(Math.round(percentage) + "%");
                $("#upload-progress").attr("style", "width:" + percentage + "%");
            },
            function error(err)
            {
                
            },
            function complete()
            {    
                uploadTask.snapshot.ref.getDownloadURL().then(function(downloadUrl) //Get uploaded Image url
                {   
                    postImage = downloadUrl;

                    var blogData = firebase.database().ref().child('electoralData');

                    blogData.push().set({

                        postTitle:$('#postTitle').val(),
                        postImage: postImage
                    });
                });
            }
        );

    });
});


//Refresh Page
function refreshPage(){
    window.location.reload();
} 


//Fetch Post from Firebase and Display under post form
var dbLatest = firebase.database().ref().child("electoralData");

dbLatest.on("value", function(blogData)
{
    if(blogData.exists())
    {
        var blogsHtml = "";

        blogData.forEach(function(singleBlog)
        {

            // Main Card item to fetch post
            blogsHtml += "<div class='col>";

                    blogsHtml += "<div> <img class='card-img-top' alt='card image cap' src='";
                        blogsHtml += singleBlog.val().postImage
                    blogsHtml += "'/> </div>"

                    blogsHtml += "<div class='card-body text-center' style='font-family:Poppins; font-size:20px; font-weight:bold;'>"

                        "<h3 class='card-title'>"
                            blogsHtml += "<a href='#' style='text-decoration:none; color:black;'>";
                            blogsHtml += singleBlog.val().postTitle
                            blogsHtml += "</a>";
                        "</h3>"
                        
   
                    blogsHtml += "</div>";
            blogsHtml += "</div>";
        });

        //Display Card item on html page
        $("#posts-collection").html(blogsHtml);
    }
});
  



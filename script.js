var provider = new firebase.auth.GoogleAuthProvider();
var token;
var user;
console.log(user);

function googleSignIn() {
    firebase.auth()

    .signInWithPopup(provider).then(function(result) {
         token = result.credential.accessToken;
         user = result.user;
            //Hiding elements
            var box = document.getElementById('message');
            var signinWarning = document.getElementById('warning');
            var signinBtn = document.getElementById('signin');
            var signoutBtn = document.getElementById('signout');
            box.style.display = 'block';
            signinWarning.style.display = 'none';    
            signinBtn.style.display = 'none';
            signoutBtn.style.display = 'block';
            signoutBtn.style.textAlign = 'center';
        console.log(token);
        console.log(user);
    }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error.code);
        console.log(error.message);
    }) ;
}
function googleSignOut() {
    firebase.auth().signOut()
    .then(function() {
        location.reload();
    }).catch(function(error) {
        var error = error.code;
        var m = error.message;
        console.log(error.message);
    });
}
function btn() {
    var m = document.getElementById('text').value;
    var ref = firebase.database().ref('enquiries/');
    if(m != "")
    {
        ref.push({
            message : m,
            email : user.email,
            name : user.displayName
        });
        alert("Your Enquiry Has been sent successfully");
    }
    else {
        alert("Please Enter some enquiry...");
    }
}


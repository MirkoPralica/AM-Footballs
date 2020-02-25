$('#press').change(function(){
    if(this.checked) {
        $('.section-dark').removeClass("section-light");
        $('.section-light').addClass("section-dark");
    }
    else {
        $('.section-light').removeClass('section-dark');
        $('section-dark').addClass('section-light');
    }
});


function FormValidation() {
    //First Name Validation 
    var fn = document.getElementById('firstname').value;
    if (fn == "") {
        alert('Please Enter First Name');
        document.getElementById('firstname').style.borderColor = "red";
        return false;
    } else {
        document.getElementById('firstname').style.borderColor = "green";
    }
    if (/^[0-9]+$/.test(document.getElementById("firstname").value)) {
        alert("First Name Contains Numbers!");
        document.getElementById('firstname').style.borderColor = "red";
        return false;
    } else {
        document.getElementById('firstname').style.borderColor = "green";
    }
    if (fn.length <= 2) {
        alert('Your Name is To Short');
        document.getElementById('firstname').style.borderColor = "red";
        return false;
    } else {
        document.getElementById('firstname').style.borderColor = "green";
    }
};

function submitmethod() {
    // show Loading in submit-success
    document.getElementById("submit-success").innerHTML = '<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>';
    setTimeout(function() {
        // this will remove the loading and show the success message
        document.getElementById("submit-message").innerHTML =
            `<div class="alert alert-success alert-dismissible fade show" role="alert">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                Your submit has succeed..!
            </div>`
        document.getElementById("submit-success").innerHTML = "";
        document.getElementById("messageform").reset();

    }, 5000); // set timout
    // this will prevent the submit
    return false;
};

$("li").on('click', function() {
    $("li").removeClass("active");
    $(this).toggleClass("active");
});

function searchValidation() {
    var fn = document.getElementById('searchfield').value;
    if (fn == "") {
        alert('Please Enter Team Name');
        document.getElementById('searchfield').style.borderColor = "red";
        return false;

    } else if (/^[0-9]+$/.test(document.getElementById("searchfield").value)) {
        alert("Team Name Contains Numbers!");
        document.getElementById('searchfield').style.borderColor = "red";
        return false;

    } else if (fn.length <= 2) {
        alert('Team Name is To Short');
        document.getElementById('searchfield').style.borderColor = "red";
        return false;

    } else {
        document.getElementById('searchfield').style.borderColor = "green";
    }

    searchsubmit();
};


function searchsubmit() {

    const url = "http://api.football-data.org/v2/competitions/2021/standings";
    fetch(url, {
            method: "GET",
            headers: {
                "X-Auth-Token": "d38ac557ec364cf79e21a985e5d1cf8c",
            }
        })
        .then(resp => {
            return resp.json();
        })
        .then(function(data) {

        });

}
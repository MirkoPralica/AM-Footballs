function getlogo(link) {
    var img = link;
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");

    modal.style.display = "block";
    modalImg.src = img;

    modal.onclick = function() {
        modal.style.display = "none";
    }
}

function insertTable(table, cls, myTable) {
    var img = table.team.crestUrl;
    myTable += `<tr>`;
    myTable += `<td ${cls}> ${ table.position } </td>`;
    myTable += `<td ${cls}> <a id="logoimg" href="javascript:;" onclick="getlogo('${img}')"> ${ table.team.name } </a> </td>`;
    myTable += `<td ${cls}> ${ table.playedGames } </td>`;
    myTable += `<td ${cls}> ${ table.won } </td>`;
    myTable += `<td ${cls}> ${ table.draw } </td>`;
    myTable += `<td ${cls}> ${ table.lost } </td>`;
    myTable += `<td ${cls}> ${ 38 - table.playedGames } </td>`;
    myTable += `<td ${cls}> ${ table.goalsFor } </td>`;
    myTable += `<td ${cls}> ${ table.goalsAgainst } </td>`;
    myTable += `<td ${cls}> ${ table.goalDifference } </td>`;
    myTable += `<td ${cls}> ${ table.points } </td>`;
    myTable += `<tr>`;
    return myTable;
}

    function tableAPIsSL() {
        const url = "http://api.football-data.org/v2/competitions/2014/standings";
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

                let firstyear = (data.season.startDate).substring(0, 4);
                let secondyear = parseInt(firstyear) + 1;
                let season = firstyear + "-" + secondyear.toString();

                let output = "";
                output += `<p>Season ${season}, Started on ${data.season.startDate}, 
                            ending on ${data.season.endDate}</p>`;

                document.getElementById("title-spain").innerHTML = output;

                let myTable = "";
                myTable = `<table class="table table-striped table-sm" " style="margin-top:20px;">
                           <thead class="thead-dark ">
                           <tr>
                           <th scope="col ">#</th>
                           <th scope="col ">Team</th>
                           <th scope="col ">Played</th><th scope="col ">Win</th>
                           <th scope="col ">Draw</th>
                           <th scope="col ">Loss</th>
                           <th scope="col ">Remaining</th>
                           <th scope="col ">Goals F</th>
                           <th scope="col ">Goals A</th>
                           <th scope="col ">Goals Diff</th>
                           <th scope="col ">Points</th>
                           </tr></thead><tbody>`


                for (let i = 0; i < data.standings[0].table.length; i++) {
                    if (i < 4) {
                        myTable = insertTable(data.standings[0].table[i], 'class="green"', myTable);
                    } else if (i >= data.standings[0].table.length - 4) {
                        myTable = insertTable(data.standings[0].table[i], 'class="red"', myTable);
                    } else {
                        myTable = insertTable(data.standings[0].table[i], '', myTable);
                    }
                }

                myTable += '</tr></tbody></table>';

                document.getElementById("spain-division").innerHTML = myTable;

                let boxdivs = "";
                boxdivs = `<div class="" " style="margin-top:20px;">
                           <div style="width:25px"></div>`

            })
            .catch(function(error) {
                console.log(error);
            });
    }

    function ScoreAPIsSL() {
        const url = "https://api.football-data.org/v2/competitions/PD/scorers";
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

                let firstyear = (data.season.startDate).substring(0, 4);
                let secondyear = parseInt(firstyear) + 1;
                let season = firstyear + "-" + secondyear.toString();

                let output = "";
                output += `<p>Season ${season}, Started on ${data.season.startDate}, 
                            ending on ${data.season.endDate}</p>`;

                document.getElementById("title-spain").innerHTML = output;

                let scoreTable = "";
                scoreTable = `<table class="table table-striped table-sm" " style="margin-top:20px;">
                           <thead class="thead-dark ">
                           <tr>
                           <th scope="col ">#</th>
                           <th scope="col ">Name</th>
                           <th scope="col ">Goals</th>
                           <th scope="col ">Team</th>
                           </tr></thead><tbody>`
                let x = 1;
                for (let i = 0; i < data.scorers.length; i++) {
                    scoreTable += `<tr>`;
                    scoreTable += `<td > ${ x } </td>`;
                    scoreTable += `<td > ${ data.scorers[i].player.name } </td>`;
                    scoreTable += `<td > ${ data.scorers[i].numberOfGoals } </td>`;
                    scoreTable += `<td > ${ data.scorers[i].team.name } </td>`;
                    scoreTable += `<tr>`;
                    x++;
                }


                scoreTable += '</tr></tbody></table>';

                document.getElementById("spain-division").innerHTML = scoreTable;

                boxdivs = `<div class="" " style="margin-top:20px;">
                           <div style="width:25px"></div>`

            })
            .catch(function(error) {
                console.log(error);
            });
    }

    function tableAPIsPL() {
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

                let firstyear = (data.season.startDate).substring(0, 4);
                let secondyear = parseInt(firstyear) + 1;
                let season = firstyear + "-" + secondyear.toString();

                let output = "";
                output += `<p>Season ${season}, Started on ${data.season.startDate}, 
                            ending on ${data.season.endDate}</p>`;

                document.getElementById("title-england").innerHTML = output;

                let myTable = "";
                myTable = `<table class="table table-striped table-sm" " style="margin-top:20px;">
                           <thead class="thead-dark ">
                           <tr>
                           <th scope="col ">#</th>
                           <th scope="col ">Team</th>
                           <th scope="col ">Played</th><th scope="col ">Win</th>
                           <th scope="col ">Draw</th>
                           <th scope="col ">Loss</th>
                           <th scope="col ">Remaining</th>
                           <th scope="col ">Goals F</th>
                           <th scope="col ">Goals A</th>
                           <th scope="col ">Goals Diff</th>
                           <th scope="col ">Points</th>
                           </tr></thead><tbody>`


                for (let i = 0; i < data.standings[0].table.length; i++) {
                    if (i < 4) {
                        myTable = insertTable(data.standings[0].table[i], 'class="green"', myTable);
                    } else if (i >= data.standings[0].table.length - 4) {
                        myTable = insertTable(data.standings[0].table[i], 'class="red"', myTable);
                    } else {
                        myTable = insertTable(data.standings[0].table[i], '', myTable);
                    }
                }

                myTable += '</tr></tbody></table>';

                document.getElementById("england-division").innerHTML = myTable;

                let boxdivs = "";
                boxdivs = `<div class="" " style="margin-top:20px;">
                           <div style="width:25px"></div>`

            })
            .catch(function(error) {
                console.log(error);
            });
    }

    function ScoreAPIsPL() {
        const url = "https://api.football-data.org/v2/competitions/PL/scorers";
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

                let firstyear = (data.season.startDate).substring(0, 4);
                let secondyear = parseInt(firstyear) + 1;
                let season = firstyear + "-" + secondyear.toString();

                let output = "";
                output += `<p>Season ${season}, Started on ${data.season.startDate}, 
                            ending on ${data.season.endDate}</p>`;

                document.getElementById("title-england").innerHTML = output;

                let scoreTable = "";
                scoreTable = `<table class="table table-striped table-sm" " style="margin-top:20px;">
                           <thead class="thead-dark ">
                           <tr>
                           <th scope="col ">#</th>
                           <th scope="col ">Name</th>
                           <th scope="col ">Goals</th>
                           <th scope="col ">Team</th>
                           </tr></thead><tbody>`
                let x = 1;
                for (let i = 0; i < data.scorers.length; i++) {
                    scoreTable += `<tr>`;
                    scoreTable += `<td > ${ x } </td>`;
                    scoreTable += `<td > ${ data.scorers[i].player.name } </td>`;
                    scoreTable += `<td > ${ data.scorers[i].numberOfGoals } </td>`;
                    scoreTable += `<td > ${ data.scorers[i].team.name } </td>`;
                    scoreTable += `<tr>`;
                    x++;
                }


                scoreTable += '</tr></tbody></table>';

                document.getElementById("england-division").innerHTML = scoreTable;

                let boxdivs = "";
                boxdivs = `<div class="" " style="margin-top:20px;">
                           <div style="width:25px"></div>`

            })
            .catch(function(error) {
                console.log(error);
            });
    }
    
    document.addEventListener('DOMContentLoaded', function () {
        var checkbox = document.querySelector('input[type="checkbox"]');
      
        checkbox.addEventListener('change', function () {
          if (checkbox.checked) {
                document.getElementById("Spain").classList.remove("section-light");
                document.getElementById("Spain").classList.add("section-dark");
                document.getElementById("England").classList.remove("section-light");
                document.getElementById("England").classList.add("section-dark");
                document.getElementById("Contact").classList.remove("section-light");
                document.getElementById("Contact").classList.add("section-dark");                
            } else {
                document.getElementById("Spain").classList.remove("section-dark");
                document.getElementById("Spain").classList.add("section-light");
                document.getElementById("England").classList.remove("section-dark");
                document.getElementById("England").classList.add("section-light");
                document.getElementById("Contact").classList.remove("section-dark");
                document.getElementById("Contact").classList.add("section-light");                
          }
        });
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

        document.getElementById("submit-success").innerHTML = '<div class="alert alert-primary" role="alert" style="margin-top:15px">Your submit has succeed..!</div>'
        setTimeout("submitForm()", 5000); // set timout 
    }
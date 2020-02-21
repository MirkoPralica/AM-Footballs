    function getlogo(link) {
        var img = link;
        var appear_image = `<div id="appear_image_div" onclick="closeImage()"><img src="${img}" alt=""></div>`;
        console.log(appear_image);
        document.getElementById("spain-division").innerHTML = appear_image;
    }


    function insertTable(table, cls, myTable) {
        var logoimg = table.team.crestUrl;
        myTable += `<tr>`;
        myTable += `<td ${cls}> ${ table.position } </td>`;
        myTable += `<td ${cls}> <a id="logoimg" href="#" onclick="getlogo('${logoimg}')"> ${ table.team.name } </a> </td>`;
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
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    function clearDiv() {
        document.getElementById("spain-division").innerHTML = "";
        document.getElementById("title-spain").innerHTML = "";
        console.log("Spain");
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
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    function clearDiv() {
        document.getElementById("england-division").innerHTML = "";
        document.getElementById("title-england").innerHTML = "";
        console.log("England");

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
            })
            .catch(function(error) {
                console.log(error);
            });
    }


    document.addEventListener('DOMContentLoaded', function() {
        var checkbox = document.querySelector('input[type="checkbox"]');

        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                document.getElementById("Spain").classList.remove("section-light");
                document.getElementById("Spain").classList.add("section-dark");
                document.getElementById("England").classList.remove("section-light");
                document.getElementById("England").classList.add("section-dark");
            } else {
                document.getElementById("Spain").classList.remove("section-dark");
                document.getElementById("Spain").classList.add("section-light");
                document.getElementById("England").classList.remove("section-dark");
                document.getElementById("England").classList.add("section-light");
            }
        });
    });
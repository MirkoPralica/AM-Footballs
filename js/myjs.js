    function callAPIs() {
        console.log("Ahmad before Fetch..")
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
                let output = "";
                output += `<p>Started on ${data.season.startDate}, ending on ${data.season.endDate}</p>`;

                let myTable = "";
                myTable = '<table class="table table-striped table-sm" " style="margin-top:20px; "><thead class="thead-dark "><tr><th scope="col ">#</th><th scope="col ">Team</th><th scope="col ">Played</th><th scope="col ">Win</th><th scope="col ">Draw</th><th scope="col ">Loss</th><th scope="col ">Remaining</th><th scope="col ">Goals F</th><th scope="col ">Goals A</th><th scope="col ">Goals Diff</th><th scope="col ">Points</th></tr></thead><tbody>'

                for (let i = 0; i < data.standings[0].table.length; i++) {
                    myTable += `<tr>`;
                    myTable += `<td> ${ data.standings[0].table[i].position } </td>`;
                    myTable += `<td style="font-weight: bold"> ${ data.standings[0].table[i].team.name } </td>`;
                    myTable += `<td> ${ data.standings[0].table[i].playedGames } </td>`;
                    myTable += `<td> ${ data.standings[0].table[i].won } </td>`;
                    myTable += `<td> ${ data.standings[0].table[i].draw } </td>`;
                    myTable += `<td> ${ data.standings[0].table[i].lost } </td>`;
                    myTable += `<td> ${ 38 - data.standings[0].table[i].playedGames } </td>`;
                    myTable += `<td> ${ data.standings[0].table[i].goalsFor } </td>`;
                    myTable += `<td> ${ data.standings[0].table[i].goalsAgainst } </td>`;
                    myTable += `<td> ${ data.standings[0].table[i].goalDifference } </td>`;
                    myTable += `<td> ${ data.standings[0].table[i].points } </td>`;
                    myTable += `<tr>`;
                }

                myTable += '</tr></tbody></table>';

                document.getElementById("spain-division").innerHTML = myTable;
            })
            .catch(function(error) {
                console.log(error);
            });
    }
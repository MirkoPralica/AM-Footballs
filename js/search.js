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

class Team {
    constructor(id, name, shortname, crestUrl, founded, stadium) {
        this.id = id;
        this.name = name;
        this.shortname = shortname;
        this.crestUrl = crestUrl;
        this.founded = founded;
        this.stadium = stadium;
    }
}

function searchsubmit() {
    var searchteam = searchteam = document.getElementById("searchfield").value;

    var teams = [];
    const url = "https://api.football-data.org/v2/competitions/PD/teams";
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
            var teamdata = data.teams;
            for (let i = 0; i < teamdata.length; i++) {
                var team = new Team(teamdata[i].id, teamdata[i].name, teamdata[i].shortName,
                    teamdata[i].crestUrl, teamdata[i].founded, teamdata[i].venue);
                teams.push(team);
            }
            var searchresult = teams.find(element => element.name == searchteam);
            console.log(searchresult);
        })
        .catch(function(error) {
            console.log(error);
        });

}
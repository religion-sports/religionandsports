function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function get_data() {
    var kareem = document.getElementById('kareem')

    console.log('1')
    fetch("https://nba-stats4.p.rapidapi.com/career_totals_regular_season/76003", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "nba-stats4.p.rapidapi.com",
            "x-rapidapi-key": "50a8970fb8msh895f3df982f1f3dp1246aejsnfb310c35e28a"
        }
    })
    .then(res => res.json())
    .then(data => {
        delete data.player_id;
        delete data.league_id;
        delete data.team_id;

        let table = document.createElement("table");
        for (const [key, value] of Object.entries(data)) {
            let tr = document.createElement("tr");
            let td = document.createElement("td");
            td.appendChild(document.createTextNode(key));
            let td2 = document.createElement("td");
            td2.appendChild(document.createTextNode(JSON.stringify(value)));
            tr.appendChild(td);
            tr.appendChild(td2);
            table.appendChild(tr);
        }
        kareem.appendChild(table);
    })
    .catch(err => {
        console.error(err);
    });

    await sleep(2000);

    console.log('2')
    var hakeem = document.getElementById('hakeem')

    fetch("https://nba-stats4.p.rapidapi.com/career_totals_regular_season/165", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "nba-stats4.p.rapidapi.com",
            "x-rapidapi-key": "50a8970fb8msh895f3df982f1f3dp1246aejsnfb310c35e28a"
        }
    })
    .then(res => res.json())
    .then(data => {
        delete data.player_id;
        delete data.league_id;
        delete data.team_id;

        let table = document.createElement("table");
        for (const [key, value] of Object.entries(data)) {
            let tr = document.createElement("tr");
            let td = document.createElement("td");
            td.appendChild(document.createTextNode(key));
            let td2 = document.createElement("td");
            td2.appendChild(document.createTextNode(JSON.stringify(value)));
            tr.appendChild(td);
            tr.appendChild(td2);
            table.appendChild(tr);
        }
        hakeem.appendChild(table);
    })
    .catch(err => {
        console.error(err);
    });

    await sleep(1500);

    // For Post Season

    console.log('3')
    var kareem = document.getElementById('kareem2')

    fetch("https://nba-stats4.p.rapidapi.com/career_totals_post_season/76003", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "nba-stats4.p.rapidapi.com",
            "x-rapidapi-key": "50a8970fb8msh895f3df982f1f3dp1246aejsnfb310c35e28a"
        }
    })
    .then(res => res.json())
    .then(data => {
        delete data.player_id;
        delete data.league_id;
        delete data.team_id;

        let table = document.createElement("table");
        for (const [key, value] of Object.entries(data)) {
            let tr = document.createElement("tr");
            let td = document.createElement("td");
            td.appendChild(document.createTextNode(key));
            let td2 = document.createElement("td");
            td2.appendChild(document.createTextNode(JSON.stringify(value)));
            tr.appendChild(td);
            tr.appendChild(td2);
            table.appendChild(tr);
        }
        kareem.appendChild(table);
    })
    .catch(err => {
        console.error(err);
    });

    await sleep(1500);
    console.log('4')
    var hakeem = document.getElementById('hakeem2')

    fetch("https://nba-stats4.p.rapidapi.com/career_totals_post_season/165", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "nba-stats4.p.rapidapi.com",
            "x-rapidapi-key": "50a8970fb8msh895f3df982f1f3dp1246aejsnfb310c35e28a"
        }
    })
    .then(res => res.json())
    .then(data => {
        delete data.player_id;
        delete data.league_id;
        delete data.team_id;

        let table = document.createElement("table");
        for (const [key, value] of Object.entries(data)) {
            let tr = document.createElement("tr");
            let td = document.createElement("td");
            td.appendChild(document.createTextNode(key));
            let td2 = document.createElement("td");
            td2.appendChild(document.createTextNode(JSON.stringify(value)));
            tr.appendChild(td);
            tr.appendChild(td2);
            table.appendChild(tr);
        }
        hakeem.appendChild(table);
    })
    .catch(err => {
        console.error(err);
    });
}

get_data();
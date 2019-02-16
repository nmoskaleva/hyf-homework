let firstUser =
    fetch(`https://api.github.com/search/repositories?q=user:Sanahayat`)
    .then(response => response.json());

let secondUser =
    fetch(`https://api.github.com/search/repositories?q=user:AbodHassam`)
    .then(response => response.json());

let thirdUser = fetch(`https://api.github.com/search/repositories?q=user:humayunadilshahzad`)
    .then(response => response.json());


Promise.all([firstUser, secondUser, thirdUser])
    .then((responses) => {
        console.log(responses);
        responses.map(user => {
            let userNamesUl = document.querySelector(`.usernames`);
            let userNameLis = document.createElement(`li`);
            userNameLis.innerHTML = user.items[0].owner.login;
            userNamesUl.appendChild(userNameLis);
            let repoUl = document.createElement(`ul`);
            userNameLis.appendChild(repoUl);

            user.items.map(item => {
                let repoLis = document.createElement(`li`);
                repoLis.innerHTML = item.name + `: ` + item.url;
                repoUl.appendChild(repoLis);
            })
        });
    });
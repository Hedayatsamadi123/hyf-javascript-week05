console.log("....step-3....");
// click me 
const btn = document.querySelector("#btn");
btn.addEventListener('click', function(){
    console.log("you clicked me");
    fetchHYFRepos();
});

function fetchJSONData(url, callbackfn){
    const xhr = new     XMLHttpRequest();
    xhr.addEventListener('load', function(){
        console.log("Data loaded.");
        const data = JSON.parse(xhr.responseText);
        callbackfn(data);
    });
    xhr.open('GET', url);
    xhr.send();
}



function fetchHYFRepos (){
    fetchJSONData ('https://api.github.com/orgs/HackYourFuture/repos', function(repoList) {
        const ul = document.querySelector("#repoList");
        ul.innerHTML = ``;
        for (const repo of repoList){
            const li = document.createElement('li');
            ul.appendChild(li);
    
            li.innerHTML = `<a target="_blank" href="${repo.url}">${repo.name}</a>`;
        }
       
    });
}

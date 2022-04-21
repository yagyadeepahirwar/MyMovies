let list= [
    {
        title:"Vanguard 2020 Hindi Dual Audio",
        download:"https://drive.google.com/u/0/uc?id=1BCHnqtAnGVndfD-J9Jgf_5s1AjwsguO4&export=download"
    },
    {
        title:"Sonic the Hedgehog (2020) Movie Dual Audio [Hindi + English]",
        download:"https://drive.google.com/uc?id=1K1IcVkWmOPDAwPwxcVbEpx-OUdFzywyO&export=download"
    },
    {
        title:"Venom 2018 Movie Dual Audio ORG Hindi",
        download:"https://drive.google.com/uc?id=1LFVWsZ0rRA5sBQvS-IijutWS3nuPo-tf&export=download"
    },
    {
        title:"Avengers Infinity War 2018 Movie Dual Audio ORG Hindi",
        download:"https://drive.google.com/uc?id=1MEmEehflndMbIdU14MXvKZKsKvhwOesv&export=download"
    },
    {
        title:"Avengers Endgame 2019 Movie Dual Audio ORG Hindi",
        download:"https://drive.google.com/uc?id=1BIgJKwm9JFr6nvetcCINy4Nlq_GRVov9&export=download"
    },
    {
        title:"Deadpool 2 (2018) Movie Dual Audio ORG Hindi",
        download:"https://drive.google.com/uc?id=1o4yHriM1kNX4oboXgLbAN9s3XX9aPOVw&export=download"
    },
    {
        title:"Captain Marvel 2019 Movie Dual Audio ORG Hindi",
        download:"https://drive.google.com/uc?id=1UxR59qraAWbI-JGHpxCOG3GMBQ7FHNuB&export=download"
    },
    {
        title:"Aquaman 2018 Movie Dual Audio ORG Hindi",
        download:"https://drive.google.com/uc?id=1jDeh9nRftp0Mk-1a3d6vmZoai6q4Ik3l&export=download"
    },
    {
        title:"Guardians Of The Galaxy Vol 2 2017 Movie Dual Audio ORG Hindi",
        download:"https://drive.google.com/uc?id=14U_rMQXyRnQTBw6c5xnKhCXIBqSF9jOL&export=download"
    },
    {
        title:"Goosebumps 2 Haunted Halloween (2018) Dual Audio ORG Hindi",
        download:"https://drive.google.com/uc?id=1tiUBh7IE6MYbQWt3Ce9adwCECVwk6z2e&export=download"
    },
];

let cards= document.getElementById("cards");

for(let i=0;i<list.length;i++){
    cards.innerHTML+=`<div class="card">
    <a href="" class="link1">
        <img src="${i+1}.jpg" alt="">
    <h2 class="title">${list[i].title}</h2>
    </a>
    <a href="${list[i].download}" class="button"><button>Download</button></a>
</div>`;
}

const moonpath = "M14.5 28C14.5 43.1878 28 55.5 28 55.5C12.8122 55.5 0.5 43.1878 0.5 28C0.5 12.8122 12.8122 0.500006 28 0.500006C28 5.61681e-06 14.5 12.8122 14.5 28Z";
const sunpath = "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z";

const darkmode = document.querySelector("#Darkmode");

let toggle = false;

darkmode.addEventListener('click', () => {

    const timeline = anime.timeline({
        duration: 350,
        easing: "easeOutExpo" 
    });

    timeline.add({

        targets: ".sun",
        d: [{
            value: toggle ? sunpath : moonpath
        }]

    })
    .add({
        targets: "#Darkmode",
        rotate: 320
    })
    .add({
        targets: "section",
        backgroundColor: toggle ? "rgb(225,225,225)" : "rgb(22,22,22)",
        color: toggle ? "rgb(22,22,22)" : "rgb(225,225,225)" 
    }, "-=800"
    );

    if(!toggle){
        toggle = true;
    }else{
        toggle = false;
    }

});

function animation(){
    
}
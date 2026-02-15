const door = document.getElementById("door");
door.addEventListener("click", () => { 
    door.classList.toggle("open");
    setTimeout(() => {
        window.location.href = "house.html"; // opens the interior page
    }, 600); // after door animation
});

const ground = document.querySelector(".ground");

function randomNum(min,max){return Math.random()*(max-min)+min;}

/* Grass blades */
for(let i=0;i<40;i++){
  const blade = document.createElement("div");
  blade.className="grass-blade";
  blade.style.left=randomNum(0,window.innerWidth)+"px";
  blade.style.height=randomNum(40,70)+"px";
  blade.style.animationDuration=randomNum(2,4)+"s";
  blade.style.animationDelay=randomNum(0,3)+"s";
  ground.appendChild(blade);
}

/* Flowers (5, different colors) */
const colors=["pink","yellow","violet","orange","red"];
for(let i=0;i<5;i++){
  const flower = document.createElement("div");
  flower.className="flower";
  flower.style.left=randomNum(0,window.innerWidth)+"px";
  flower.style.height=randomNum(40,55)+"px";
  flower.style.animationDuration=randomNum(2.5,4.5)+"s";
  flower.style.animationDelay=randomNum(0,3)+"s";

  /* Petal color */
  const petal = document.createElement("div");
  petal.style.position="absolute";
  petal.style.bottom="30px";
  petal.style.left="-5px";
  petal.style.width="16px";
  petal.style.height="16px";
  petal.style.borderRadius="50%";
  petal.style.background=colors[i];
  flower.appendChild(petal);

  ground.appendChild(flower);
}

/* Bugs (3) */
for(let i=0;i<3;i++){
  const bug = document.createElement("div");
  bug.className="bug";
  bug.style.left=randomNum(0,window.innerWidth)+"px";
  bug.style.animationDuration=randomNum(4,8)+"s";
  ground.appendChild(bug);
}

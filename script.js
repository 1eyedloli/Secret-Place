const door = document.getElementById("door");
door.addEventListener("click", () => { 
    door.classList.toggle("open");
    setTimeout(() => {
        window.location.href = "house.html"; 
    }, 600);
});

const ground = document.querySelector(".ground");

function randomNum(min,max){return Math.random()*(max-min)+min;}

/* ===== GRASS ===== */
for(let i=0;i<40;i++){
  const blade = document.createElement("div");
  blade.className="grass-blade";
  blade.style.left=randomNum(0,window.innerWidth)+"px";
  blade.style.height=randomNum(40,70)+"px";
  blade.style.animationDuration=randomNum(2,4)+"s";
  blade.style.animationDelay=randomNum(0,3)+"s";
  ground.appendChild(blade);
}

/* ===== FLOWERS ===== */
const colors=["pink","yellow","violet","orange","red"];
for(let i=0;i<5;i++){
  const flower = document.createElement("div");
  flower.className="flower";
  flower.style.left=randomNum(0,window.innerWidth)+"px";
  flower.style.height=randomNum(40,55)+"px";
  flower.style.animationDuration=randomNum(2.5,4.5)+"s";
  flower.style.animationDelay=randomNum(0,3)+"s";

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

/* ===== BUGS ===== */
for(let i=0;i<3;i++){
  const bug = document.createElement("div");
  bug.className="bug";
  bug.style.left=randomNum(0,window.innerWidth)+"px";
  bug.style.animationDuration=randomNum(4,8)+"s";
  ground.appendChild(bug);
}

/* ===== CLOUDS ===== */
const cloudCount = 3;
for(let i=0;i<cloudCount;i++){
  const cloud = document.createElement("div");
  cloud.className="cloud";
  cloud.style.top=randomNum(50,200)+"px";
  cloud.style.width=randomNum(120,180)+"px";
  cloud.style.height=randomNum(40,60)+"px";
  cloud.style.animationDuration=randomNum(60,120)+"s";
  cloud.style.left=-randomNum(200,400)+"px";
  document.body.appendChild(cloud);

  const before = document.createElement("div");
  before.style.position="absolute";
  before.style.width=randomNum(50,70)+"px";
  before.style.height=randomNum(50,70)+"px";
  before.style.top=-randomNum(20,40)+"px";
  before.style.left=randomNum(10,30)+"px";
  before.style.borderRadius="50%";
  before.style.background="white";
  cloud.appendChild(before);

  const after = document.createElement("div");
  after.style.position="absolute";
  after.style.width=randomNum(60,80)+"px";
  after.style.height=randomNum(60,80)+"px";
  after.style.top=-randomNum(30,50)+"px";
  after.style.right=randomNum(10,30)+"px";
  after.style.borderRadius="50%";
  after.style.background="white";
  cloud.appendChild(after);
}

/* ===== BIRDS ===== */
const birdCount = 4;
for(let i=0;i<birdCount;i++){
  const bird = document.createElement("div");
  bird.className="bird";
  bird.style.top=randomNum(20,50)+"%";
  bird.style.animationDuration=randomNum(18,28)+"s";

  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS,"svg");
  svg.setAttribute("viewBox","0 0 64 32");
  const path = document.createElementNS(svgNS,"path");
  path.setAttribute("d",`M2 16 Q16 ${randomNum(4,10)} 32 16 Q48 ${randomNum(4,10)} 62 16`);
  path.setAttribute("fill","#333");
  path.style.animation="flap 0.8s ease-in-out infinite";
  svg.appendChild(path);

  bird.appendChild(svg);
  document.body.appendChild(bird);
}

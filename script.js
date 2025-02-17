document.body.style.zoom = "75%";
document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed("#typing", {
        strings: ["Full Stack Developer", "UI/UX Designer", "Programmer"],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1000,
        loop: true
    });
});

document.addEventListener("DOMContentLoaded", function () {
    
    let now = new Date();
    let hour = now.getHours();
    let greeting;

    if (hour >= 5 && hour < 12) {
        greeting = "Good Morning 🌅 😊 ";
    } else if (hour >= 12 && hour < 17) {
        greeting = "Good Afternoon 🔆😉 ";
    } else if (hour >= 17 && hour < 21) {
        greeting = "Good Evening 🌆 🥳";
    } else {
        greeting = "Good Night 🌙 😴";
    }

    
    document.getElementById("greeting").innerText = greeting;
});

document.addEventListener('DOMContentLoaded', () => {
    const animatedElement = document.getElementById('animatedElement');
    console.log("Astronaut animation initialized!");
  });


let cardContents = [
    `<strong>Seshadri Rao Gudlavalleru Engineering College, Gudlavalleru</strong><br>
    <br>
    <em>Bachelor of Technology - BTech, Electronics and Communication Engineering</em><br>
    <br>
    <b>Sept 2022 - May 2025</b><br>
    <br>
    <b>Grade:</b> 6.86 CGPA<br>`,

    `<strong>V.K.R.& V.N.B.Polytechnic College ,Gudivada </strong><br>
    <br>
    <em>APSBTET, <br>Electronics and Communication Engineering</em><br>
    <br>
    <b>Apr 2019 - Apr 2022</b><br>
    <br>
    <b>Percentage:</b> 78.74%<br>`,

    `<strong>Flora E.M School ,Vuyyuru</strong><br>
    <br>
    <em>SSC (X) </em><br>
    <br>
    <b>Apr 2018 - Apr 2019</b><br>
    <br>
    <b>Grade:</b> 9.5CGPA<br>`
];
let backgrounds = [
    "url('https://github.com/GPCHANDU08/Portfolio/blob/main/images/Purple%20Planet.png?raw=true')",
    "url('https://github.com/GPCHANDU08/Portfolio/blob/main/images/Purple%20Planet%20(3).png?raw=true')",
    "url('https://github.com/GPCHANDU08/Portfolio/blob/main/images/PurplePlanet(1).png?raw=true')"
];


let res = "";
for (let i = 0; i < cardContents.length; i++) {
    res += `
        <div class="card" style="background: ${backgrounds[i]}; background-size: cover; background-position: center;">
            <p class="card-paragraph">${cardContents[i]}</p>
        </div>`;
}
document.querySelector(".educontainers").innerHTML = res;



let cards = document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
        let [x, y, cardWidth, cardHeight] = [
            e.offsetX,
            e.offsetY,
            card.clientWidth,
            card.clientHeight
        ];
        let [transX, transY] = [x - cardHeight / 2, y - cardHeight / 2];
        card.style.transform = `translateX(${transX}px) translateY(${transY}px)`;
        card.style.boxShadow = `${transX / -1}px ${transY / -1}px 0 #0005`;
    });
    card.addEventListener("mouseout", (e) => {
        card.style.transform = "";
        card.style.boxShadow = "";
    });
});

(function() {
    emailjs.init("JF7ziOyqqbtGwxey9");  
})();

function sendEmail(event) {
    event.preventDefault(); 

    let params = {
        user_name: document.getElementById("name").value,
        user_email: document.getElementById("email").value,
        user_phone: document.getElementById("phone").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_qfjcaw6", "template_oumfzxo", params)
    .then(
        function(response) {
            alert("Mail sent successfully!");
            document.getElementById("contactForm").reset(); 
        },
        function(error) {
            alert("Error: " + error.text);
        }
    );
}

document.getElementById("contactForm").addEventListener("submit", sendEmail);

const sidebar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');

menu.addEventListener("click", function () {
    sidebar.classList.add("open-sidebar");
});

closeIcon.addEventListener("click", function () {
    sidebar.classList.remove("open-sidebar");
});

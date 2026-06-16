/* =====================================
   SLIM RECORDS PREMIUM JS
===================================== */

/* LOADER */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    gsap.to(loader, {
        opacity: 0,
        duration: 1.2,
        delay: 1,
        onComplete: () => {
            loader.style.display = "none";
        }
    });

});

/* AOS */

AOS.init({
    duration: 1200,
    once: true
});


/* NAVBAR */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* HERO ANIMATION */

gsap.from(".hero-content h1", {

    y: 80,
    opacity: 0,
    duration: 1.5,
    ease: "power4.out"

});

gsap.from(".hero-content p", {

    y: 50,
    opacity: 0,
    duration: 1.5,
    delay: .3,
    ease: "power4.out"

});

gsap.from(".hero-buttons", {

    y: 50,
    opacity: 0,
    duration: 1.5,
    delay: .6,
    ease: "power4.out"

});


/* CONTADORES */

const counters = document.querySelectorAll(".counter");

const startCounter = (counter) => {

    const target = +counter.dataset.target;

    let count = 0;

    const speed = target / 150;

    const updateCounter = () => {

        count += speed;

        if (count < target) {

            counter.innerText = Math.floor(count);

            requestAnimationFrame(updateCounter);

        } else {

            counter.innerText = target + "+";

        }

    };

    updateCounter();

};

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            startCounter(entry.target);

            counterObserver.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.5
});

counters.forEach(counter => {

    counterObserver.observe(counter);

});


/* MENU MOBILE */

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

});


/* SCROLL SUAVE */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


/* PARALLAX HERO */

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero video");

    let scroll = window.pageYOffset;

    hero.style.transform =
        `translateY(${scroll * 0.3}px)`;

});


/* REVEAL EFFECT */

const revealElements =
    document.querySelectorAll(
        ".artist-card, .release-card, .service-box"
    );

const revealObserver =
    new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: 0.2
    });

revealElements.forEach(el => {

    revealObserver.observe(el);

});


/* CURSOR GLOW */

const cursor = document.createElement("div");

cursor.classList.add("custom-cursor");

document.body.appendChild(cursor);

document.addEventListener("mousemove", e => {

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

});


/* BOTONES CURSOR */

const hoverTargets =
    document.querySelectorAll(
        "a, button, .artist-card"
    );

hoverTargets.forEach(item => {

    item.addEventListener("mouseenter", () => {

        cursor.classList.add("active");

    });

    item.addEventListener("mouseleave", () => {

        cursor.classList.remove("active");

    });

});


/* GSAP SECTION TITLES */

gsap.utils.toArray(".section-title").forEach(title => {

    gsap.from(title, {

        scrollTrigger: {
            trigger: title,
            start: "top 85%"
        },

        opacity: 0,
        y: 50,
        duration: 1

    });

});

function openArtist(artist){

    const info =
        document.getElementById("artistInfo");

    const artists = {

        kalim: {

            name: "Kali.M",

            image: "assets/artist1.png",

            bio: "Artista oficial de Slim Records.",

            instagram: "https://www.instagram.com/kali.m_official/",

            spotify: "#",

            youtube: "https://www.youtube.com/@KaliMOficial",

            songs: [
                {
                    title: "Aún me amas?",
                    youtube:"https://youtu.be/v4SpXsiKwKI?si=8lgvbzWbXuqjxP2b"
                }
            ],

            upcoming: [
            ]
        },

        ariel: {

            name: "Ariel Kciel",

            image: "assets/artist2.jpg",

            bio: "Artista oficial de Slim Records.",

            instagram: "https://www.instagram.com/arielkcel/",

            spotify: "https://open.spotify.com/artist/4tbjI5VdD1ofBXxU6CgQfY",

            youtube: "https://www.youtube.com/@ARIELKCIEL-oficial",

            songs: [
               {
                title: "Te Extraño",
                youtube: "https://youtu.be/HvAdu4PdRYA?si=l4cgNOMKI8buDaCd"
               },
               {
                title: "Luces Apagadas",
                youtube: "https://youtu.be/eHf25KgSqwA?si=_RrpOoVtrxVT2tE3"
               },
               {
                  title: "Diva",
                  youtube: "https://youtu.be/U9E4SBC7Bs0?si=bExbTyRVL1yA8473"
               }
            ],

            upcoming: [

            ]
        },

        jm: {

            name: "El JM",

            image: "assets/artist3.png",

            bio: "Artista oficial de Slim Records.",

            instagram: "https://www.instagram.com/el_jm_oficial_/",

            spotify: "https://open.spotify.com/artist/1wsbKsH7O3TUlZ4PG07HnC",

            youtube: "https://www.youtube.com/@ElJMoficial",

            audiomack: "https://audiomack.com/eljmofficial",

            songs: [
                {
                    title: "NO HAY CRISIS EP",
                    youtube: "https://youtube.com/playlist?list=PLx-QcVeQ5n8yOurpBzUX6aHuYOaVr0HUW&si=ZIAtU2JwmNpvZ2DT" 
                },
               {
                  title: "Pa' Qué Me Enamoras",
                  youtube: "https://www.youtube.com/watch?v=SEUWwaD3qEs"
               },
               {
                  title: "Ying Yang",
                  youtube: "https://youtu.be/Js51Ljwknos?si=-0XBPueh_w-blhh3"
               }
            ],
            
            upcoming: [
               
            ]
        },

        nova: {

            name: "Slim_Nova",

            image: "assets/artist4.jpg",

            bio: "Artista oficial de Slim Records.",

            instagram: "https://www.instagram.com/slim_nova_oficial/",

            spotify: "#",

            youtube: "#",

            songs: [
                
            ],

            upcoming: [

            ]
        },

        alex: {

            name: "Alex CA",

            image: "assets/artist5.jpg",

            bio: "Artista oficial de Slim Records.",

            instagram: "https://www.instagram.com/___300925___/",

            spotify: "#",

            youtube: "#",

            songs: [
                
            ],

            upcoming: [

            ]
        },

        matias: {

            name: "Matías CA",

            image: "assets/artist6.png",

            bio: "Artista oficial de Slim Records.",

            instagram: "https://www.instagram.com/__mlx7__/",

            spotify: "#",

            youtube: "#",

            songs: [
                
            ],

            upcoming: [

            ]
        },

        cacharpa: {

            name: "Cacharpa",

            image: "assets/artist7.jpg",

            bio: "Artista oficial de Slim Records.",

            instagram: "https://www.instagram.com/golumcitoo/",

            spotify: "#",

            youtube: "#",

            songs: [
                
            ],

            upcoming:[

            ]
        },

       lineadirecta: {
          name: "Linea Directa",
          image: "assets/artist8.jpg",
          bio: "Artista oficial de Slim Records.",
          instagram: "https://www.instagram.com/linea_directa_official/?hl=es",
          spotify: "#",
          youtube: "#",

          songs: [
             ],
          upcoming:[
             ]

          };
      }
    const a = artists[artist];

    info.innerHTML = `

        <div class="artist-profile">

            <img src="${a.image}">

            <div class="artist-data">

                <h1>${a.name}</h1>

                <p>${a.bio}</p>

                <br>

                <div class="artist-links">

                    <a href="${a.instagram}" target="_blank">
                        <i class="fab fa-instagram"></i>
                    </a>

                    <a href="${a.spotify}" target="_blank">
                        <i class="fab fa-spotify"></i>
                    </a>

                    <a href="${a.youtube}" target="_blank">
                        <i class="fab fa-youtube"></i>
                    </a>

                    <a href="${a.audiomack}" target="_blank">
                        <i class="fab fa-audiomack"></i>
                    </a>

                </div>

                <h2>🎵 Lanzamientos</h2>

                ${a.songs.map(song =>
                    `
                    <a href="${song.youtube}"
                        target="_blank"
                        class="song-card">

                        <i class="fa-brands fa-youtube"></i>

                        ${song.title}
                    </a>
                    `
                ).join("")}

                <br>

                <h2>🚀 Próximamente</h2>

                ${a.upcoming.map(song => `

                <a href="${song.youtube}"
                target="_blank"
                class="song-card upcoming">

                    <div>

                        <strong>${song.title}</strong>

                        <br>

                        <small>
                            Estreno: ${song.date}
                        </small>

                    </div>

                </a>

                `).join("")}

            </div>

        </div>

    `;

    document.getElementById("artistModal")
        .style.display = "flex";
}

function closeArtist(){

    document.getElementById("artistModal")
        .style.display = "none";
}

console.log("openArtist disponible:", typeof openArtist);

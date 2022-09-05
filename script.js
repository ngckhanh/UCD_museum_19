
models = [
    {
        "name": "Weapon",
        "model-link": [
            {
                "link": "https://sketchfab.com/models/2443c85540974064b66c6078f848cd1e/embed",
                "title": "M16 rifle",
                "des": "The M16 rifle (officially designated Rifle, Caliber 5.56 mm, M16) is a family of military rifles adapted from the ArmaLite AR-15 rifle for the United States military. The original M16 rifle was a 5.56×45mm automatic rifle with a 20-round magazine. In 1964, the M16 entered US military service and the following year was deployed for jungle warfare operations during the Vietnam War."
            },
            {
                "link": "https://sketchfab.com/models/986b4e4dd8064885af60489aaf7e6d13/embed",
                "title": "M40 Sniper Rifle",
                "des": "The M40 rifle is a bolt-action sniper rifle used by the United States Marine Corps. It comes in four variants: M40, M40A1, M40A3 and M40A5. The M40 was introduced in 1966. The conversion to the A1 model was completed in the 1970s, the A3 in the 2000s and the A5 in 2009. Each M40 was built from the Remington 700 and modified and changed by USMC guards at Marine Corps Base Quantico to serve in Vietnam War"
            },
            {
                "link": "https://sketchfab.com/models/8e63482deef44d2b920af87b3a81433e/embed",
                "title": "M7 Bayonet",
                "des": "The M7 bayonet is a bayonet that was used by the U.S. military for the M16 rifle, it can also be used with the M4 carbine as well as many other assault rifles, carbines and combat shotguns. It can be used as a fighting knife and utility tool. It was introduced in 1964, when the M16 rifle entered service during the Vietnam War.."
            },
            {
                "link": "https://sketchfab.com/models/384565b1779c450b90397232163e4e6d/embed",
                "title": "AK-47",
                "des": "The AK-47 rifle designed by Mikhail Timofeyevich Kalashnikov of Russia was equipped for the main unit of the Liberation Army during the Vietnam War. The AK-47 rifle has been equipped with the Russian army since 1949 and equipped with the Vietnamese army since 1958. Entering the 1960s, the Soviet Union began to mass aid us with more modern guns such as AK-47 and put into service as well as becoming the image of a Liberation Army soldier with an AK-47 gun in his hand has been a symbol of the Vietnamese national hero."
            },
        ],
        "images": [
            "images/Ex1/weapon-slide image.jpg",
            "images/Ex1/weapon-slide image2.jpg",
            "images/Ex1/weapon-slide image3.jpg"
        ],
        "top-text": "Find out about the armaments that were used during the War, how troops were armed, the difference between each force, and how it affected their tactics and actions. Ranging from a wide variety of weapon types, origins, and archetypes in this exhibition. Learn about the items displayed in more detail with our 3D model viewer or visit us directly!"
    },

    {
        "name": "Vehicle",
        "model-link": [
            {
                "link": "https://sketchfab.com/models/f8626a5278724cae8f173480288dbfe4/embed",
                "title": "T54B Tank No. 843",
                "des": 'Vehicles made by the Soviet Union, aid to Vietnam in the resistance war against the US, save the country, blue cars, medium vehicles. On the turret is mounted 12.7mm gun. The two sides of the turret were painted with a yellow star on the background of a red circle with a yellow border, participated in the liberation of Hue and Da Nang, then continued to march to participate in the liberation of the central coastal provinces and headed straight to Saigon with spirit of "speedy and decisive victory". In particular, at 11 am on April 30, 1975, this tank rammed into the side gate of the Independence Palace.'
            },
            {
                "link": "https://sketchfab.com/models/1da8b85c808c4f1aa05c1b5eb7c46bcc/embed",
                "title": "MiG-21",
                "des": 'The Mikoyan-Gurevich MiG-21  is a supersonic jet fighter and interceptor aircraft, designed by the Mikoyan-Gurevich Design Bureau in the Soviet Union. MiG-21 was the main aircraft of the Vietnamese Air Force during the period of resistance against the US, participated in many air battles and had a record of shooting down many US aircraft, including the B52. MiG-21 shot down 128 American planes of all kinds, while only 60 MiG-21s were downed in the air battle'
            },
            
        ],
        "images": [
            "images/Ex2/exhibition2-slide image.jpg",
            "images/Ex2/exhibition2-slide image2.png",
            "images/Ex2/exhibition2-slide image3.jpg",
            "images/Ex2/exhibition2-slide image4.jpg"
        ],
        "top-text": "In this exhibition, you will discover the variety of vehicles used during the War for many purposes, ranging from carriers to war machines. We will journey into the world of mechanical ingenious and innovation from both sides as we dive into their designs and modifications to better fit the environment of VietNam. Learn about the items displayed in more detail with our 3D model viewer or visit us directly!"
    },

    {
        "name": "Equipments",
        "model-link": [
            {
                "link": "https://sketchfab.com/models/5b8fb622d3cc49d2839d0b69d4fc27ba/embed",
                "title": "AN/PRC-77 Vietnam War Radio",
                "des": 'AN/PRC 77 Radio Set is a manpack, portable VHF FM combat-net radio transceiver manufactured by Associated Industries and used to provide short-range, two-way radiotelephone voice communication. In the Joint Electronics Type Designation System (JETS), AN/PRC translates to "Army/Navy, Portable, Radio, Communication." The AN/PRC-77 entered service in 1968 during the Vietnam War as an upgrade to the earlier AN/PRC-25'
            },
            {
                "link": "https://sketchfab.com/models/a6189ea7d7ff48d9b1ddec8541e67a33/embed",
                "title": "Type 102E HF Radio",
                "des": 'The Type 102E HF radio was a Chinese military radio that was commonly used by the People’s Army of Vietnam (PAVN) and the Viet Cong during the Vietnam War.'
            },
            
        ],
        "images": [
            "images/Ex3/exhibition3-slide image.jpg",
            "images/Ex3/exhibition3-slide image2.jpg",
            "images/Ex3/exhibition3-slide image3.jpg"
        ],
        "top-text": 'For this exhibition, we will let you dive into the activities of soldiers during the War, with insights on all the equipment used during the war and how they were used. Gives you a visualization of what day-to-day life was like for the 2 forces, how they communicate, and more… Learn about the items displayed in more detail with our 3D model viewer or visit us directly!'
    },
]





dropDownItem = document.querySelectorAll(".exhibition-item");
for (var i = 0; i < 3; i++) {
    dropDownItem[i].addEventListener("click", myFunction)
}

function myFunction(e) {
    topText = document.getElementById("top-text");
    sliderItem = document.getElementsByClassName("carousel-inner")[0];
    modelItem = document.getElementsByClassName("models")[0];
    const value = e.target.innerText;
    if (value == "Weapon") {
        topText.innerText = models[0]["top-text"];
        const image = models[0]["images"];
        const modelLinks = models[0]["model-link"];

        sliderItem.innerHTML = `<div class="carousel-item active">
        <img src="${image[0]}" class="d-block w-100" alt="...">
    </div>`
        for (var j = 1; j < image.length; j++) {
            sliderItem.innerHTML += `
        <div class="carousel-item">
            <img src="${image[j]}" class="d-block w-100" alt="...">
        </div>`
        }

        let count = 0;
        let check = modelLinks.length/2;
        modelItem.innerHTML = `<p class="fs-5 fw-bold" id="exhibition-name">Weapon: Tools of Destruction</p>`;
        while(check){
            modelItem.innerHTML += `<div class="row">
            <div class="card col-md-6" style="background-color: #b1ada5;">
                <div class="card-img-top">
                    <div class="sketchfab-embed-wrapper"> <iframe title="${modelLinks[count]["title"]}" frameborder="0"
                            allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true"
                            allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking
                            execution-while-out-of-viewport execution-while-not-rendered web-share
                            src="${modelLinks[count]["link"]}"> </iframe>
                    </div>
                </div>
                <div class="card-body" style="background-color: white;">
                    <h5 class="card-title">${modelLinks[count]["title"]}</h5>
                    <p class="card-text">${modelLinks[count]["des"]}</p>
                </div>
            </div>

            <div class="card col-md-6" style="background-color: #b1ada5;">
                <div class="card-img-top">
                    <div class="sketchfab-embed-wrapper"> <iframe title="${modelLinks[count]["title"]}" frameborder="0"
                            allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true"
                            allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking
                            execution-while-out-of-viewport execution-while-not-rendered web-share
                            src="${modelLinks[count+1]["link"]}"> </iframe>
                    </div>
                </div>
                <div class="card-body" style="background-color: white;">
                    <h5 class="card-title">${modelLinks[count+1]["title"]}</h5>
                    <p class="card-text">${modelLinks[count+1]["des"]}</p>
                </div>
            </div>
        </div>`
            count+=2;
            check--;
        }
    }
    else if (value == "Vehicle") {
        topText.innerText = models[1]["top-text"];
        const image = models[1]["images"];
        const modelLinks = models[1]["model-link"];
        sliderItem.innerHTML = `<div class="carousel-item active">
        <img src="${image[0]}" class="d-block w-100" alt="...">
    </div>`
        for (var j = 1; j < image.length; j++) {
            sliderItem.innerHTML += `
        <div class="carousel-item">
            <img src="${image[j]}" class="d-block w-100" alt="...">
        </div>`
        }

        let count = 0;
        let check = modelLinks.length/2;
        modelItem.innerHTML = `<p class="fs-5 fw-bold" id="exhibition-name">Vehicle: Mechanical Innovation</p>`;
        while(check){
            modelItem.innerHTML += `<div class="row">
            <div class="card col-md-6" style="background-color: #b1ada5;">
                <div class="card-img-top">
                    <div class="sketchfab-embed-wrapper"> <iframe title="${modelLinks[count]["title"]}" frameborder="0"
                            allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true"
                            allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking
                            execution-while-out-of-viewport execution-while-not-rendered web-share
                            src="${modelLinks[count]["link"]}"> </iframe>
                    </div>
                </div>
                <div class="card-body" style="background-color: white;">
                    <h5 class="card-title">${modelLinks[count]["title"]}</h5>
                    <p class="card-text">${modelLinks[count]["des"]}</p>
                </div>
            </div>

            <div class="card col-md-6" style="background-color: #b1ada5;">
                <div class="card-img-top">
                    <div class="sketchfab-embed-wrapper"> <iframe title="${modelLinks[count]["title"]}" frameborder="0"
                            allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true"
                            allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking
                            execution-while-out-of-viewport execution-while-not-rendered web-share
                            src="${modelLinks[count+1]["link"]}"> </iframe>
                    </div>
                </div>
                <div class="card-body" style="background-color: white;">
                    <h5 class="card-title">${modelLinks[count+1]["title"]}</h5>
                    <p class="card-text">${modelLinks[count+1]["des"]}</p>
                </div>
            </div>
        </div>`
            count+=2;
            check--;
        }
    }
    else {
        topText.innerText = models[2]["top-text"];
        const image = models[2]["images"];
        const modelLinks = models[2]["model-link"];
        sliderItem.innerHTML = `<div class="carousel-item active">
        <img src="${image[0]}" class="d-block w-100" alt="...">
    </div>`
        for (var j = 1; j < image.length; j++) {
            sliderItem.innerHTML += `
        <div class="carousel-item">
            <img src="${image[j]}" class="d-block w-100" alt="...">
        </div>`
        }

        let count = 0;
        let check = modelLinks.length/2;
        modelItem.innerHTML = `<p class="fs-5 fw-bold" id="exhibition-name">Equiptment: Tatician's Friend</p>`;
        while(check){
            modelItem.innerHTML += `<div class="row">
            <div class="card col-md-6" style="background-color: #b1ada5;">
                <div class="card-img-top">
                    <div class="sketchfab-embed-wrapper"> <iframe title="${modelLinks[count]["title"]}" frameborder="0"
                            allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true"
                            allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking
                            execution-while-out-of-viewport execution-while-not-rendered web-share
                            src="${modelLinks[count]["link"]}"> </iframe>
                    </div>
                </div>
                <div class="card-body" style="background-color: white;">
                    <h5 class="card-title">${modelLinks[count]["title"]}</h5>
                    <p class="card-text">${modelLinks[count]["des"]}</p>
                </div>
            </div>

            <div class="card col-md-6" style="background-color: #b1ada5;">
                <div class="card-img-top">
                    <div class="sketchfab-embed-wrapper"> <iframe title="${modelLinks[count]["title"]}" frameborder="0"
                            allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true"
                            allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking
                            execution-while-out-of-viewport execution-while-not-rendered web-share
                            src="${modelLinks[count+1]["link"]}"> </iframe>
                    </div>
                </div>
                <div class="card-body" style="background-color: white;">
                    <h5 class="card-title">${modelLinks[count+1]["title"]}</h5>
                    <p class="card-text">${modelLinks[count+1]["des"]}</p>
                </div>
            </div>
        </div>`
            count+=2;
            check--;
        }
    }
}

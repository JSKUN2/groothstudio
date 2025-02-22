$(document).ready(function () {
    $("#menu-toggle").prop("checked", false);
    $(".indonesia").hover(function () {
        $(".english").css("color", "#003567");
        $(".indonesia").css("color", "#4F7FBF");
        
    }, function () {
        $(".english").css("color", "#4F7FBF");
        $(".indonesia").css("color", "#003567");
    }
    );
    $(".news").click(function (e) { 
    e.preventDefault();
    $(".judulisi").html("News.");
    $(".isinyaisi").html("<b>Grooth Studio Team :</b><br><br>Currently, Grooth Studio is focusing on developing our newest game. Our team is working hard to create a unique and engaging gaming experience for gamers. We are designing new features and gameplay mechanics that will bring more challenges and excitement to players.<br>Although there is no new News that we can share at this time, we would like to thank you for your support. We will provide further updates as soon as this game is ready to be introduced to the public.<br><br>Thank you for being part of our journey!");
    });
    $(".home").click(function (e) { 
    e.preventDefault();
    $(".judulisi").html("Grooth Studio.");
    $(".isinyaisi").html("Grooth Studio is an indie game development group founded on April 19, 2024. We focus on creating and developing fun and innovative 2D games, aiming to offer players a unique and enjoyable experience. Our team consists of talented and dedicated members, each with specific skills, ensuring high quality game production.")
    });
    $(".faq").click(function (e) { 
    e.preventDefault();
    $(".judulisi").html("FAQ.");
    $(".isinyaisi").html("<b>Have questions?</b> Here you'll find answers to the most common inquiries from our community, along with access to step-by-step instructions and support.")
    });
    $(".about").click(function (e) { 
    e.preventDefault();
    $(".judulisi").html("About Us.");
    $('.isinyaisi').html(`
        <h2 class="subjudul"><b>Team Members:</b></h2>
        <ul>
            <li><b>Boltbert and Elemastonic (Programmers):</b> As programmers, Boltbert and Elemastonic are responsible for developing the code and game mechanics. They work together to create a stable and functional system, ensuring that every element of the game runs smoothly. Their expertise in programming allows us to introduce innovations and captivating gameplay.</li><br>
            <li><b>Grizz (Designer):</b> Grizz is our designer, responsible for crafting the visuals and aesthetics of the game. With creativity and a keen eye for detail, Grizz designs characters, environments, and user interfaces that are visually appealing. Strong design is crucial for providing an immersive experience and connecting players to the worlds we create.</li><br>
            <li><b>Yon (Sound and BGM Effects):</b> Yon is the mastermind behind the sound and music in our games. With expertise in creating atmospheric sound effects and background music, Yon helps set the right mood for each game. The right music and sound effects can enhance the gameplay experience and make it more immersive.</li><br>
            <li><b>Joseph (Web Developer and Lore Writer):</b> Joseph is the mastermind behind this website. He designed the platform that serves as a bridge between the development team and the players, ensuring seamless communication. Additionally, he writes the lore that immerses players deeply into the world he has created, weaving stories that enhance their experience and connection to the game.</li><br>
            <li><b>Gabriel (Sound and BGM Effects):</b> Gabriel adores playing musical instruments and creating music. Due to his love for the wonderful world of music, he has been able to gain various skills directly related to this field. He has been involved in fusion-jazz and RnB for 5 years now. Moreover, he has been playing the electric guitar for 2 years, adding more depth to his musicality. Additionally, Gabriel has spent 3 years learning Ableton and FL Studio, allowing him to create and produce music more professionally.</li><br>
        </ul>
        <p>At <b>Grooth Studio</b>, we are committed to creating games that are not only entertaining but also leave a lasting impression. Each team member contributes with passion and creativity, and we are excited to move our projects forward. We believe that through hard work and collaboration, we can deliver creations that can be enjoyed by many.</p>
    `);
    });
    $(".support").click(function (e) { 
    e.preventDefault();
    $(".judulisi").html("Support Us.");
    $('.isinyaisi').html(`
                    <p>At <b>Grooth Studio</b>, your support means a lot to us and helps us to continue creating. Here are some ways you can support us:</p> <br>
                    <h2 class="subjudul"><b>1. Follow Us on Social Media</b> </h2> <br>
                    <p><b>Be a part of our journey by following our social media accounts.</b> We frequently share updates, sneak peeks, and the latest news about our projects. Your every like and share helps us reach more people!</p>
                    <p>
                    <ul>
                        <li><a href="https://www.google.com/url?q=https%3A%2F%2Fwww.instagram.com%2Fgrooth_studio%2F&sa=D&sntz=1&usg=AOvVaw1mocSjjUT3tnYnXdmsrmTn" target="_blank"><b>Instagram :</b> grooth_studio</a></li>
                        <li><a href="https://www.youtube.com/@groothstudio" target="_blank"><b>YouTube :</b> @GroothStudio</a></li>
                        <li><a href="https://www.google.com/url?q=https%3A%2F%2Fx.com%2FGrooth_Studio&sa=D&sntz=1&usg=AOvVaw020-fgkJSyCc1x1pTDS0ky" target="_blank"><b>X :</b> Grooth_Studio</a></li>
                        <li><a href="https://github.com/GroothStudio" target="_blank"><b>Github :</b> GroothStudio</a></li> 
                    </ul>
                    </p> <br>
                    <h2 class="subjudul"><b>2. Give Feedback</b> </h2> <br>
                    <p><b>We really appreciate input from the community.</b> If you have any ideas or feedback about our game, feel free to contact us. Every opinion you have is valuable and can help us improve.</p><br>
                    <h2 class="subjudul"><b>3. Donate</b> </h2> <br>
                    <p><b>If you would like to support us directly, you can make a donation here.</b> Every contribution will help us to develop our projects and continue creating interesting games.</p><br>
                    <img src="img/qr.jpg" alt="" style="width: 270px; height: auto;"><br>
                    <p>We would like to <b>thank our donators</b> who have contributed</p>
                    <b>
                    <p><b>Our Donators:</b></p>
                    <p>
                        <ul>
                            <li>[Alvin Lim]</li>
                            <li>[Grookey]</li>
                            <li>[Jimmy]</li>
                            <li>[Denny]</li>
                            <li>[Frederick]</li>
                        </ul>
                    </p><br>
                    <p>Thank you for considering supporting Grooth Studio.</b> We really appreciate your support and can't wait to share our work with you!</p>
                `);
    });
    $(".games").click(function (e) { 
    e.preventDefault();
    $(".judulisi").html("Our Games.");
    $(".isinyaisi").html(`
        <center>
            <h2 class='commingsoon'>This Page Comming Soon...</h2>
            <img src="img/comming-soon.png" height="200px" width="200px">
        </center>
    `);
    });
    let contentDictionary = {
    "<p id='support'>Support:<br></p>": [
        "<p>At <b>Grooth Studio</b>, your support means a lot to us and helps us to continue creating. Here are some ways you can support us:</p>",
        "<h2 class=\"subjudul\"><b>1. Follow Us on Social Media</b></h2>",
        "<p><b>Be a part of our journey by following our social media accounts.</b> We frequently share updates, sneak peeks, and the latest news about our projects. Your every like and share helps us reach more people!</p>",
        `<p>
            <ul>
                <li><a href="https://www.google.com/url?q=https%3A%2F%2Fwww.instagram.com%2Fgrooth_studio%2F&sa=D&sntz=1&usg=AOvVaw1mocSjjUT3tnYnXdmsrmTn" target="_blank"><b>Instagram :</b> grooth_studio</a></li>
                <li><a href="https://www.youtube.com/@groothstudio" target="_blank"><b>YouTube :</b> @GroothStudio</a></li>
                <li><a href="https://www.google.com/url?q=https%3A%2F%2Fx.com%2FGrooth_Studio&sa=D&sntz=1&usg=AOvVaw020-fgkJSyCc1x1pTDS0ky" target="_blank"><b>X :</b> Grooth_Studio</a></li>
                <li><a href="https://github.com/GroothStudio" target="_blank"><b>Github :</b> GroothStudio</a></li> 
            </ul>
        </p>`,
        "<h2 class=\"subjudul\"><b>2. Give Feedback</b></h2>",
        "<p><b>We really appreciate input from the community.</b> If you have any ideas or feedback about our game, feel free to contact us. Every opinion you have is valuable and can help us improve.</p>",
        "<h2 class=\"subjudul\"><b>3. Donate</b></h2>",
        "<p><b>If you would like to support us directly, you can make a donation here.</b> Every contribution will help us to develop our projects and continue creating interesting games.</p>",
        "<p>We would like to <b>thank our donators</b> who have contributed</p>",
        "<p><b>Our Donators:</b></p>",
        `<p>
            <ul>
                <li>[Alvin Lim]</li>
                <li>[Grookey]</li>
                <li>[Jimmy]</li>
                <li>[Denny]</li>
                <li>[Frederick]</li>
            </ul>
        </p>`,
        "<p>Thank you for considering supporting Grooth Studio.</b> We really appreciate your support and can't wait to share our work with you!</p>"
    ],
    "<p id='news'>News:<br></p>": [
        "<b>Grooth Studio Team :</b><br><br>Currently, Grooth Studio is focusing on developing our newest game. Our team is working hard to create a unique and engaging gaming experience for gamers. We are designing new features and gameplay mechanics that will bring more challenges and excitement to players.<br>Although there is no new News that we can share at this time, we would like to thank you for your support. We will provide further updates as soon as this game is ready to be introduced to the public.<br><br>Thank you for being part of our journey!"
    ],
    "<p id='home'>Home:<br></p>": [
        "Grooth Studio is an indie game development group founded on April 19, 2024. We focus on creating and developing fun and innovative 2D games, aiming to offer players a unique and enjoyable experience. Our team consists of talented and dedicated members, each with specific skills, ensuring high quality game production."
    ],
    "<p id='support'>Faq:<br></p>": [
        "<b>Have questions?</b> Here you'll find answers to the most common inquiries from our community, along with access to step-by-step instructions and support."
    ],
    "<p id='about'>About:<br></p>": [
        "<h2 class=\"subjudul\"><b>Team Members:</b></h2>",
        "<b>Boltbert and Elemastonic (Programmers):</b> As programmers, Boltbert and Elemastonic are responsible for developing the code and game mechanics. They work together to create a stable and functional system, ensuring that every element of the game runs smoothly. Their expertise in programming allows us to introduce innovations and captivating gameplay.</li><br>",
        "<b>Grizz (Designer):</b> Grizz is our designer, responsible for crafting the visuals and aesthetics of the game. With creativity and a keen eye for detail, Grizz designs characters, environments, and user interfaces that are visually appealing. Strong design is crucial for providing an immersive experience and connecting players to the worlds we create.</li><br>",
        "<b>Yon (Sound and BGM Effects):</b> Yon is the mastermind behind the sound and music in our games. With expertise in creating atmospheric sound effects and background music, Yon helps set the right mood for each game. The right music and sound effects can enhance the gameplay experience and make it more immersive.</li><br>",
        "<b>Joseph (Web Developer and Lore Writer):</b> Joseph is the mastermind behind this website. He designed the platform that serves as a bridge between the development team and the players, ensuring seamless communication. Additionally, he writes the lore that immerses players deeply into the world he has created, weaving stories that enhance their experience and connection to the game.</li><br>",
        "<b>Gabriel (Sound and BGM Effects):</b> Gabriel adores playing musical instruments and creating music. Due to his love for the wonderful world of music, he has been able to gain various skills directly related to this field. He has been involved in fusion-jazz and RnB for 5 years now. Moreover, he has been playing the electric guitar for 2 years, adding more depth to his musicality. Additionally, Gabriel has spent 3 years learning Ableton and FL Studio, allowing him to create and produce music more professionally.</li><br>",
        "<p>At <b>Grooth Studio</b>, we are committed to creating games that are not only entertaining but also leave a lasting impression. Each team member contributes with passion and creativity, and we are excited to move our projects forward. We believe that through hard work and collaboration, we can deliver creations that can be enjoyed by many.</p>"
    ],
    "<p id='game'>Games:<br></p>": [
        "<center>",
        "<h2 class='commingsoon'>This Page Comming Soon...</h2>",
        "</center>"
    ]
    };
    
    function cariKata(kata, dictionary) {
        const hasil = [];
    
        for (const kategori in dictionary) {
            dictionary[kategori].forEach(kalimat => {
                if (kalimat.toLowerCase().includes(kata.toLowerCase())) {
                    hasil.push({ kategori, kalimat });
                }
            });
        }
        return hasil;
    }
    $("#searchInput").keydown(function(event) {
        if (event.which == 13) {
            $(".card").show();
            let kataDicari = $("#searchInput").val().trim();
            let hasilPencarian = cariKata(kataDicari, contentDictionary);
            $(".list-group").empty();
            $(".list-group").append('<li class="list-group-item"><h5>Result: </h5></li>');
            if (hasilPencarian.length > 0) {
                hasilPencarian.forEach(item => {
                    let tempElement = $("<div>").html(item.kategori);
                    let idNames = tempElement.find("*").attr("id");
                    $(".list-group").append(`<li href="#" class="list-group-item list-pencarian" onclick='$("." + ${idNames}).trigger('click');'><b>${item.kategori}</b> ${item.kalimat}</li>`);
                });
            } else {
                $(".list-group").append(`<li class="list-group-item list-pencarian"><center>Nothing here</center></li>`);
            }
        }
    }); });
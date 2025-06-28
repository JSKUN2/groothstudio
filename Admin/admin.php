<?php include "session.php"; ?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Grooth Studio</title>
        <meta name="description" content="Grooth Studio is an indie game development group focused on creating innovative 2D games that offer a unique and enjoyable gaming experience.">
        <meta name="keywords" content="Grooth Studio, indie game, game development, 2D games, innovative, grooth studio, grooth, studio, groothstudio, grooth_studio, grooth studio game">
        <meta name="robots" content="index, follow">
        <link rel="canonical" href="https://groothstudio.netlify.app">
        <meta property="og:title" content="Grooth Studio">
        <meta property="og:description" content="Grooth Studio is an indie game development group focused on creating innovative 2D games.">
        <meta property="og:url" content="https://groothstudio.netlify.app">
        <meta property="og:type" content="website">
        <meta property="og:image" content="https://groothstudio.netlify.app/img/logo.ico">
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="Grooth Studio">
        <meta name="twitter:description" content="Grooth Studio is an indie game development group focused on creating innovative 2D games.">
        <meta name="twitter:image" content="https://groothstudio.netlify.app/img/logo.ico">
        <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Grooth Studio",
            "url": "https://groothstudio.netlify.app",
            "logo": "https://groothstudio.netlify.app/img/logo.ico",
            "description": "Grooth Studio is an indie game development group focused on creating innovative 2D games that offer a unique and enjoyable gaming experience."
        }
        </script>
        <script src=" https://cdn.jsdelivr.net/npm/jquery-highlight@3.5.0/jquery.highlight.min.js "></script>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
        <link rel="shortcut icon" href="img/logo.ico" type="image/x-icon">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
        <link rel="stylesheet" href="../Assets/CSS/style.css">
        <link rel="stylesheet" href="../Assets/CSS/admin.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
        <style>
            .kanan .english {
                text-decoration: none;
                color: #4F7FBF;
            }
        </style>
      </head>
      
<style>
    .kanan .english{
        text-decoration: none;
        color: #4F7FBF;
    }
</style>
<body>
    <div class="bottom">
        <div class="slide">
            <div class="topslide">
                <div class="hiasan1"></div>
                <!-- <div class="hiasan2">
                    <div class="input-group">
                    <input type="search" class="form-control" placeholder="Search..." aria-describedby="basic-addon2" id="searchInput">
                    <span class="input-group-text" id="basic-addon2"><i class="fas fa-search"></i></span>
                    </div>
                    <div class="user"><svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35 20C35 22.6522 33.9464 25.1957 32.0711 27.0711C30.1957 28.9464 27.6522 30 25 30C22.3478 30 19.8043 28.9464 17.9289 27.0711C16.0536 25.1957 15 22.6522 15 20C15 17.3478 16.0536 14.8043 17.9289 12.9289C19.8043 11.0536 22.3478 10 25 10C27.6522 10 30.1957 11.0536 32.0711 12.9289C33.9464 14.8043 35 17.3478 35 20Z" fill="#FFEBD3"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.98 49.98C10.6462 49.445 0 38.465 0 25C0 11.1925 11.1925 0 25 0C38.8075 0 50 11.1925 50 25C50 38.8075 38.8075 50 25 50H24.6575C24.4308 50 24.205 49.9933 23.98 49.98ZM8.9575 40.775C8.77058 40.2382 8.70696 39.6662 8.77135 39.1015C8.83575 38.5367 9.02651 37.9938 9.32947 37.5128C9.63244 37.0319 10.0398 36.6254 10.5214 36.3235C11.003 36.0215 11.5464 35.8319 12.1112 35.7688C21.8563 34.69 28.2037 34.7875 37.9012 35.7912C38.4669 35.8502 39.0116 36.0374 39.494 36.3386C39.9763 36.6399 40.3836 37.0472 40.6847 37.5296C40.9858 38.0121 41.1729 38.5568 41.2316 39.1225C41.2904 39.6881 41.2193 40.2597 41.0238 40.7937C45.1801 36.5888 47.5077 30.9125 47.5 25C47.5 12.5737 37.4263 2.5 25 2.5C12.5737 2.5 2.5 12.5737 2.5 25C2.5 31.145 4.96375 36.715 8.9575 40.775Z" fill="#FFEBD3"/>
                        </svg>
                        </div>
                </div> -->
                <div class="isi">
                    <div class="comment">
                        <textarea name="komentar" id="komentar" required></textarea>
                        <div class="menuuu">
                            <div>
                                <input type="radio" name="tipeup" id="tipeup" value="🔵 News" class="newsbtn" checked>
                                <input type="radio" name="tipeup" id="tipeup" value="🔴 Update" class="updatebtn">
                            </div>
                            <div>
                                <button type="button" id="submit">Sebar Hoax!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="topnav">
        <section class="top-nav">
            <div class="logoimg">
                <img src="../img/logo.png" alt="" width="50px" height="50px" style="margin: auto;"> 
                <p class="namaper active" style="text-decoration: none;">Grooth</p>
            </div>
            <input id="menu-toggle" type="checkbox" />
            <label class='menu-button-container' for="menu-toggle">
                <div class='menu-button'></div>
            </label>
        </section>
    </div>
    <div class="card">
        <button type="button" class="btn-close" aria-label="Close" onclick="$('.card').hide();"></button>
        <div class="card-body">
          <ul class="list-group">
          </ul>
        </div>
      </div>
    <script>
        $('#submit').click(function () {
            const komentar = $('#komentar').val().trim();
            const tipe = $('input[name="tipeup"]:checked').val();

            if (komentar === "") {
            alert("Komentar tidak boleh kosong!");
            return;
            }

            $.ajax({
            url: 'news.php',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                text: komentar,
                tipe: tipe
            }),
            success: function (res) {
                $('#komentar').val('');
            },
            error: function (err) {
                console.error(err);
            }
            });
        });
        </script>
</body>
</html>

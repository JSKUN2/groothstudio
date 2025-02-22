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
    $(".judulisi").html("Berita.");
    $(".isinyaisi").html("<b>Tim Grooth Studio :</b><br><br>Saat ini, Grooth Studio sedang fokus mengembangkan game terbaru kami. Tim kami bekerja keras untuk menciptakan pengalaman bermain game yang unik dan menarik bagi para gamer. Kami merancang fitur dan mekanisme gameplay baru yang akan menghadirkan lebih banyak tantangan dan keseruan bagi para pemain.<br>Meskipun belum ada Berita baru yang dapat kami bagikan saat ini, kami ingin mengucapkan terima kasih atas dukungan Anda. Kami akan memberikan pembaruan lebih lanjut segera setelah game ini siap diperkenalkan kepada publik.<br><br>Terima kasih telah menjadi bagian dari perjalanan kami!");        });
$(".home").click(function (e) {
    $(".judulisi").html("Grooth Studio.");
    $(".isinyaisi").html("Grooth Studio adalah grup pengembangan game indie yang didirikan pada 19 April 2024. Kami fokus pada pembuatan dan pengembangan game 2D yang menyenangkan dan inovatif, yang bertujuan untuk menawarkan pengalaman unik dan menyenangkan kepada para pemain. Tim kami terdiri dari anggota yang berbakat dan berdedikasi, masing-masing dengan keterampilan khusus, memastikan produksi game berkualitas tinggi.")        });
$(".faq").click(function (e) {
    $(".judulisi").html("FAQ.");
    $(".isinyaisi").html("<b>Ada pertanyaan?</b> Di sini Anda akan menemukan jawaban atas pertanyaan paling umum dari komunitas kami, bersama dengan akses ke petunjuk dan dukungan langkah demi langkah.")});
$(".about").click(function (e) {
    $(".judulisi").html("Tentang Kami.");
    $('.isinyaisi').html(`
        <h2 class="subjudul"><b>Anggota Tim:</b></h2>
        <ul>
            <li><b>Boltbert dan Elemastonic (Programmer):</b> Sebagai programmer, Boltbert dan Elemastonic bertanggung jawab untuk mengembangkan kode dan mekanika permainan. Mereka bekerja sama untuk menciptakan sistem yang stabil dan fungsional, memastikan setiap elemen permainan berjalan dengan lancar. Keahlian mereka dalam pemrograman memungkinkan kami untuk menghadirkan inovasi dan gameplay yang menarik.</li><br>
            <li><b>Grizz (Desainer):</b> Grizz adalah desainer kami, bertanggung jawab atas pembuatan visual dan estetika permainan. Dengan kreativitas dan perhatian terhadap detail, Grizz merancang karakter, lingkungan, dan antarmuka pengguna yang menarik. Desain yang kuat sangat penting untuk memberikan pengalaman yang mendalam dan menghubungkan pemain dengan dunia yang kami ciptakan.</li><br>
            <li><b>Yon (Efek Suara dan Musik Latar):</b> Yon adalah ahli di balik suara dan musik dalam permainan kami. Dengan keahliannya dalam menciptakan efek suara atmosferik dan musik latar, Yon membantu menciptakan suasana yang tepat untuk setiap permainan. Musik dan efek suara yang tepat dapat meningkatkan pengalaman bermain dan membuatnya lebih mendalam.</li><br>
            <li><b>Joseph (Web Developer dan Lore Writer):</b> Joseph adalah seorang master kultivasi yang juga ahli dalam Web Development. Dengan keahliannya, ia menciptakan platform yang menghubungkan tim pengembang dan pemain. Pencerahan yang diperoleh selama kultivasi memberinya wawasan mendalam, sehingga ia mampu menulis cerita yang memikat dan membawa pemain lebih dalam ke dalam dunia yang ia ciptakan.</li><br>
            <li><b>Gabriel (Efek Suara dan Musik Latar):</b> Gabriel sangat menyukai bermain alat musik dan menciptakan musik. Karena kecintaannya pada dunia musik, ia telah memperoleh berbagai keterampilan yang berhubungan dengan bidang ini. Ia telah terlibat dalam musik fusion-jazz dan RnB selama 5 tahun. Selain itu, ia telah bermain gitar listrik selama 2 tahun, menambah kedalaman musikalitasnya. Gabriel juga telah mempelajari Ableton dan FL Studio selama 3 tahun, yang memungkinkannya untuk menciptakan dan memproduksi musik secara lebih profesional.</li><br>
        </ul>
        <p>Di <b>Grooth Studio</b>, kami berkomitmen untuk menciptakan permainan yang tidak hanya menghibur tetapi juga memberikan kesan mendalam. Setiap anggota tim berkontribusi dengan semangat dan kreativitas, dan kami sangat bersemangat untuk terus mengembangkan proyek kami. Kami percaya bahwa melalui kerja keras dan kolaborasi, kami dapat menghadirkan karya yang dapat dinikmati oleh banyak orang.</p>
    `);
});

$(".support").click(function (e) {
    $(".judulisi").html("Dukung Kami.");
    $('.isinyaisi').html(`
        <p>Di <b>Grooth Studio</b>, dukungan Anda sangat berarti bagi kami dan membantu kami untuk terus berkarya. Berikut adalah beberapa cara Anda dapat mendukung kami:</p> <br>
        <h2 class="subjudul"><b>1. Ikuti Kami di Media Sosial</b> </h2> <br>
        <p><b>Jadilah bagian dari perjalanan kami dengan mengikuti akun media sosial kami.</b> Kami sering membagikan pembaruan, cuplikan, dan berita terbaru tentang proyek kami. Setiap like dan share dari Anda membantu kami menjangkau lebih banyak orang!</p>
        <p>
        <ul>
            <li><a href="https://www.google.com/url?q=https%3A%2F%2Fwww.instagram.com%2Fgrooth_studio%2F&sa=D&sntz=1&usg=AOvVaw1mocSjjUT3tnYnXdmsrmTn" target="_blank"><b>Instagram :</b> grooth_studio</a></li>
            <li><a href="https://www.youtube.com/@groothstudio" target="_blank"><b>YouTube :</b> @GroothStudio</a></li>
            <li><a href="https://www.google.com/url?q=https%3A%2F%2Fx.com%2FGrooth_Studio&sa=D&sntz=1&usg=AOvVaw020-fgkJSyCc1x1pTDS0ky" target="_blank"><b>X :</b> Grooth_Studio</a></li>
            <li><a href="https://github.com/GroothStudio" target="_blank"><b>Github :</b> GroothStudio</a></li> 
        </ul>
        </p> <br>
        <h2 class="subjudul"><b>2. Berikan Masukan</b> </h2> <br>
        <p><b>Kami sangat menghargai masukan dari komunitas.</b> Jika Anda memiliki ide atau saran tentang permainan kami, jangan ragu untuk menghubungi kami. Setiap pendapat Anda sangat berharga dan dapat membantu kami menjadi lebih baik.</p><br>
        <h2 class="subjudul"><b>3. Donasi</b> </h2> <br>
        <p><b>Jika Anda ingin mendukung kami secara langsung, Anda dapat memberikan donasi di sini.</b> Setiap kontribusi akan membantu kami mengembangkan proyek dan terus menciptakan permainan yang menarik.</p><br>
        <img src="img/qr.jpg" alt="" style="width: 270px; height: auto;"><br>
        <p>Kami ingin mengucapkan <b>terima kasih kepada para donatur</b> yang telah berkontribusi</p>
        <b>
        <p><b>Para Donatur Kami:</b></p>
        <p>
            <ul>
                <li>[Alvin Lim]</li>
                <li>[Grookey]</li>
                <li>[Jimmy]</li>
                <li>[Denny]</li>
                <li>[Frederick]</li>
            </ul>
        </p><br>
        <p>Terima kasih telah mempertimbangkan untuk mendukung Grooth Studio.</b> Kami sangat menghargai dukungan Anda dan tidak sabar untuk berbagi karya kami dengan Anda!</p>
    `);
});

$(".games").click(function (e) {
    $(".judulisi").html("Our Games.");
    $(".isinyaisi").html(`
        <center>
            <h2 class='commingsoon'>Halaman ini segera tiba...</h2>
            <img src="img/comming-soon.png" height="200px" width="200px">
        </center>
    `);
});
let contentDictionary = {
    "<p id='home'>Beranda:<br></p>": [
        "Grooth Studio adalah grup pengembangan game indie yang didirikan pada 19 April 2024. Kami fokus pada pembuatan dan pengembangan game 2D yang menyenangkan dan inovatif, yang bertujuan untuk menawarkan pengalaman unik dan menyenangkan kepada para pemain. Tim kami terdiri dari anggota yang berbakat dan berdedikasi, masing-masing dengan keterampilan khusus, memastikan produksi game berkualitas tinggi."    ],
    "<p id='news'>Berita:<br></p>": [
        "<b>Tim Grooth Studio :</b><br><br>Saat ini, Grooth Studio sedang fokus mengembangkan game terbaru kami. Tim kami bekerja keras untuk menciptakan pengalaman bermain game yang unik dan menarik bagi para gamer. Kami merancang fitur dan mekanisme gameplay baru yang akan menghadirkan lebih banyak tantangan dan keseruan bagi para pemain.<br>Meskipun belum ada Berita baru yang dapat kami bagikan saat ini, kami ingin mengucapkan terima kasih atas dukungan Anda. Kami akan memberikan pembaruan lebih lanjut segera setelah game ini siap diperkenalkan kepada publik.<br><br>Terima kasih atas dukungan Anda!"
    ],
    "<p id='faq'>FAQ:<br></p>": [
        "<b>Ada pertanyaan?</b> Di sini Anda akan menemukan jawaban atas pertanyaan paling umum dari komunitas kami, bersama dengan akses ke petunjuk dan dukungan langkah demi langkah."    ],
    "<p id='support'>Dukungan:<br></p>": [
        "<p>Di <b>Grooth Studio</b>, dukungan Anda sangat berarti bagi kami dan membantu kami untuk terus berkarya. Berikut beberapa cara Anda dapat mendukung kami:</p>",
        "<h2 class='subjudul'><b>1. Ikuti Kami di Media Sosial</b></h2>",
        "<p><b>Jadilah bagian dari perjalanan kami dengan mengikuti akun media sosial kami.</b> Kami sering membagikan pembaruan, cuplikan, dan berita terbaru tentang proyek kami. Setiap like dan share Anda membantu kami menjangkau lebih banyak orang!</p>",
        `<p><ul
            <li><a href='https://www.instagram.com/grooth_studio/' target='_blank'><b>Instagram :</b> grooth_studio</a></li>
            <li><a href='https://www.youtube.com/@groothstudio' target='_blank'><b>YouTube :</b> @GroothStudio</a></li>
            <li><a href='https://x.com/Grooth_Studio' target='_blank'><b>X :</b> Grooth_Studio</a></li>
            <li><a href='https://github.com/GroothStudio' target='_blank'><b>Github :</b> GroothStudio</a></li>
        </ul></p>`,
        "<h2 class='subjudul'><b>2. Berikan Masukan</b></h2>",
        "<p><b>Kami sangat menghargai masukan dari komunitas.</b> Jika Anda memiliki ide atau saran tentang game kami, jangan ragu untuk menghubungi kami. Setiap pendapat Anda berharga dan dapat membantu kami berkembang.</p>",
        "<h2 class='subjudul'><b>3. Donasi</b></h2>",
        "<p><b>Jika Anda ingin mendukung kami secara langsung, Anda dapat berdonasi di sini.</b> Setiap kontribusi akan membantu kami mengembangkan proyek dan terus berkarya.</p>",
        "<p>Kami ingin <b>mengucapkan terima kasih kepada para donatur</b> yang telah berkontribusi.</p>",
        "<p><b>Para Donatur Kami:</b></p>",
        `<p><ul>
            <li>[Alvin Lim]</li>
            <li>[Grookey]</li>
            <li>[Jimmy]</li>
            <li>[Denny]</li>
            <li>[Frederick]</li>
        </ul></p>`,
        "<p>Terima kasih telah mempertimbangkan untuk mendukung Grooth Studio.</b> Kami sangat menghargai dukungan Anda dan tidak sabar untuk berbagi karya kami dengan Anda!</p>"
    ],
    "<p id='about'>Tentang:<br></p>": [
        "<h2 class='subjudul'><b>Anggota Tim:</b></h2>",
        "<b>Boltbert dan Elemastonic (Programmer):</b> Sebagai programmer, Boltbert dan Elemastonic bertanggung jawab untuk mengembangkan kode dan mekanika permainan. Mereka bekerja sama untuk menciptakan sistem yang stabil dan fungsional, memastikan setiap elemen permainan berjalan dengan lancar. Keahlian mereka dalam pemrograman memungkinkan kami untuk menghadirkan inovasi dan gameplay yang menarik.",
        "<b>Grizz (Desainer):</b> Grizz adalah desainer kami, bertanggung jawab atas pembuatan visual dan estetika permainan. Dengan kreativitas dan perhatian terhadap detail, Grizz merancang karakter, lingkungan, dan antarmuka pengguna yang menarik. Desain yang kuat sangat penting untuk memberikan pengalaman yang mendalam dan menghubungkan pemain dengan dunia yang kami ciptakan.",
        "<b>Yon (Efek Suara dan Musik Latar):</b> Yon adalah ahli di balik suara dan musik dalam permainan kami. Dengan keahliannya dalam menciptakan efek suara atmosferik dan musik latar, Yon membantu menciptakan suasana yang tepat untuk setiap permainan. Musik dan efek suara yang tepat dapat meningkatkan pengalaman bermain dan membuatnya lebih mendalam.",
        "<b>Joseph (Web Developer dan Lore Writer):</b> Joseph adalah seorang master kultivasi yang juga ahli dalam Web Development. Dengan keahliannya, ia menciptakan platform yang menghubungkan tim pengembang dan pemain. Pencerahan yang diperoleh selama kultivasi memberinya wawasan mendalam, sehingga ia mampu menulis cerita yang memikat dan membawa pemain lebih dalam ke dalam dunia yang ia ciptakan.",
        "<b>Gabriel (Efek Suara dan Musik Latar):</b> Gabriel sangat menyukai bermain alat musik dan menciptakan musik. Karena kecintaannya pada dunia musik, ia telah memperoleh berbagai keterampilan yang berhubungan dengan bidang ini. Ia telah terlibat dalam musik fusion-jazz dan RnB selama 5 tahun. Selain itu, ia telah bermain gitar listrik selama 2 tahun, menambah kedalaman musikalitasnya. Gabriel juga telah mempelajari Ableton dan FL Studio selama 3 tahun, yang memungkinkannya untuk menciptakan dan memproduksi musik secara lebih profesional.",
        "<p>Di <b>Grooth Studio</b>, kami berkomitmen untuk menciptakan permainan yang tidak hanya menghibur tetapi juga memberikan kesan mendalam. Setiap anggota tim berkontribusi dengan semangat dan kreativitas, dan kami sangat bersemangat untuk terus mengembangkan proyek kami. Kami percaya bahwa melalui kerja keras dan kolaborasi, kami dapat menghadirkan karya yang dapat dinikmati oleh banyak orang.</p>"
    ],
    "<p id='game'>Game:<br></p>": [
        "<center>",
        "<h2 class='commingsoon'>Halaman Ini Segera Hadir...</h2>",
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
        $(".list-group").append('<li class="list-group-item"><h5>Hasil: </h5></li>');
        if (hasilPencarian.length > 0) {
            hasilPencarian.forEach(item => {
                let tempElement = $("<div>").html(item.kategori);
                let idNames = tempElement.find("*").attr("id");
                $(".list-group").append(`<li href="#" class="list-group-item list-pencarian" onclick='$("." + ${idNames}).trigger('click');'><b>${item.kategori}</b> ${item.kalimat}</li>`);
            });
        } else {
            $(".list-group").append(`<li class="list-group-item list-pencarian"><center>Item tidak ada</center></li>`);
        }
    }
}); });
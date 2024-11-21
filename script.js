
// let filterarray = [];

// let galleryarray = [
//     {
//         id: 1,
//         date: "Admin 14 Agu 2024",
//         name: "Psychological Safety In The Perspective Of Indigen...",
//         src: "https://cdn.antaranews.com/cache/1200x800/2023/08/19/IMG_3778.jpg.webp",
//         desc: "Seminar Internasional ini adalah inisiatif Fakultas Psikologi untuk menyediakan platform bagi profesional dan akademisi untuk menentukan...",
//     },
//     {
//         id: 2,
//         name: "iphone ",
//         src: "./images/2.jpg",
//         desc: "Seminar Internasional ini adalah inisiatif Fakultas Psikologi untuk menyediakan platform bagi profesional dan akademisi untuk menentukan...",
//     },
//     {
//         id: 3,
//         name: "lenovo",
//         src: "./images/3.jpg",
//         desc: "agus",
//     },
//     {
//         id: 4,
//         name: "asus",
//         src: "./images/4.jpg",
//         desc: "lorem10sadsad dadadadada dadadadad adadadad dadadadad a",
//     },
//     {
//         id: 5,
//         name: "xiaomi",
//         src: "./images/1.jpg",
//         desc: "lorem10sadsad dadadadada dadadadad adadadad dadadadad a",
//     },
//     {
//         id: 6,
//         name: "blackbery",
//         src: "./images/1.jpg",
//         desc: "lorem10sadsad dadadadada dadadadad adadadad dadadadad a",
//     },
// ]




// function showGalerry(currarray) {

//     document.getElementById("card").innerText = "";
//     ;
//     for (var i = 0; i < currarray.length; i++) {
//         // document.getElementById('card').innerHTML += `
//         // <div class="col-md-4 mt-3">
//         //     <div class="card p-3 ps-5 pe-5">
//         //         <h4 class="text-capitalize text-center">${currarray[i].name}</h4>
//         //         <img src="${currarray[i].src}" width="100%" height="320px" />
//         //         <p class="mt-2">${currarray[i].desc}</p>
//         //         <button class="btn btn-primary w-100 mx-auto">More</button>
//         //         </div>
//         // </div>`

//         document.getElementById('card').innerHTML += `
//                <div class="col-3">
//                     <div class="shadow-lg p-4 rounded ">
//                         <div class="row">
//                             <div class="col-12">
//                                 <div class="purple ">
//                                     <p class="text-white fs-6 text-center py-2 fw-medium"> <i
//                                             class="fas fa-calendar"></i>
//                                         <a href="" class="link-light link-underline link-underline-opacity-0">${currarray[i].date}</a>
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="row">
//                             <div class="col-12">
//                                 <a href="">
//                                     <img class="img-fluid rounded"
//                                         src="${currarray[i].src}"
//                                         alt="">
//                                 </a>
//                             </div>
//                         </div>
//                         <hr>
//                         <div class="row">
//                             <div class="col-12">
//                                 <h6 class="text-center fs-5">${currarray[i].name}</h6>
//                             </div>
//                         </div>
//                         <div class="row">
//                             <div class="col-12 ">
//                                 <p class="text-justify">${currarray[i].desc}</p>
//                             </div>
//                         </div>
//                         <div class="row">
//                             <div class="col-6">
//                                 <button class="btn purple-btn text-white">Readmore</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//         `
//     }
// }








// showGalerry(galleryarray);



// document.getElementById("myinput").addEventListener("keyup", function () {
//     let text = document.getElementById("myinput").value;

//     filterarray = galleryarray.filter(function (a) {
//         if (a.name.includes(text)) {
//             return a.name;
//         }
//     });

//     if (this.value == "") {
//         showGalerry(galleryarray);
//     }
//     else {
//         if (filterarray == "") {
//             document.getElementById("para").style.display = 'block';
//             document.getElementById("card").innerHTML = "";
//         } else {
//             showGalerry(filterarray);
//             document.getElementById("para").style.display = 'none';
//         }
//     }
// })




//-----------------------------------------------------------------------------------


let filterarray = [];
let currentPage = 1;
let itemsPerPage = 9;

let galleryarray = [
    {
        id: 1,
        date: "14 Agustus 2024",
        link: "https://www.youtube.com/watch?v=t9VWICGOD90&list=RDknabHsR-0zM&index=8",
        name: "Psychological Safety In The Perspective Of Indigen...",
        src: "./images/imgcard/card01.png",
        desc: "Seminar Internasional ini adalah inisiatif Fakultas Psikologi untuk menyediakan platform bagi profesional dan akademisi untuk menentukan...",
    },
    {
        id: 2,
        date: "08 Agustus 2024",
        name: "Yudisium Genap TA.2023/2024",
        src: "./images/imgcard/card02.png",
        desc: "Yudisium Genap TA. 2023/2024 merupakan momen penting yang menjadi langkah terakhir bagi mahasiswa untuk meraih gelar akademik.......",
    },
    {
        id: 3,
        date: "06 Agustus 2024 ",
        name: "Sharing Session with the Experts ( Dirk Boersma )",
        src: "./images/imgcard/card03.png",
        desc: "Sharing Session with the Experts adalah inisiatif Fakultas Psikologi untuk menyediakan platform bagi profesional dan akademisi untuk menentukan...",
    },
    {
        id: 4,
        date: "22 Agustus 2024",
        name: "Pembaruan Rencana Pembalajaran Semester...",
        src: "./images/imgcard/card04.png",
        desc: "Acara pembaruan ini penting karena memastikan bahwa proses pembelajaran di Fakultas Psikologi selalu up-to-date dan mampu menghasilkan...",
    },
    {
        id: 5,
        date: "04 Juni 2024",
        name: "Sharing Session with The Experts (Prof. Uichol Kim)",
        src: "./images/imgcard/card05.png",
        desc: "Sharing Session with the Experts adalah inisiatif Fakultas Psikologi untuk menyediakan platform bagi profesional dan akademisi untuk menentukan...",
    },
    {
        id: 6,
        date: "29 Juni 2024",
        name: "Makanan Bergizi Penunjang Lansia",
        src: "./images/imgcard/card06.png",
        desc: "Assalaamu'alaikum warahmatullahi wabarokaatuh. Selamat siang bapak/ibu sekalian. Salam sejahtera bagi kita semua Izin menyampaikan undangan...",
    },
    {
        id: 7,
        date: "29 Mei 2024",
        name: "Sharing Session With Experts",
        src: "./images/imgcard/card07.png",
        desc: "Technology and Society: Way Forward - Challenges and Opportunities Kepada Yth Ibu dan Bapak Dosen FPsi UBJ Dalam rangka mengembangkan program..",
    },
    {
        id: 8,
        date: "18 Mei 2024",
        name: "Memahami proses penuaan dan perubahan...",
        src: "./images/imgcard/card08.png",
        desc: "Assalaamu'alaikum warahmatullahi wabarokaatuh. Selamat siang bapak/ibu sekalian. Salam sejahtera bagi kita semua Dalam rangka mengembangkan...",
    },
    {
        id: 9,
        date: "28 Agustus 2024",
        name: "Kegiatan Pengabdian Masyarakat Dalam...",
        src: "./images/imgcard/card09.png",
        desc: "Universitas Bhayangkara Jakarta Raya mengenalkan apa itu penguatan bela negara melalui karakter yang berintegratis dengan perilaku anti korupsi...",
    },
    {
        id: 10,
        date: "25 Agustus 2023",
        name: "Kegiatan MBKM Magang Di Pusat Pengembangan...",
        src: "./images/imgcard/card10.svg",
        desc: "Universitas Bhayangkara Jakarta Raya mengenalkan apa itu penguatan bela negara melalui karakter yang berintegratis dengan perilaku anti korupsi...",
    },
    {
        id: 11,
        date: "23 Agustus 2023",
        name: "Pelatihan Regulasi Emosi di SMPN 7 Tambun Selatan",
        src: "./images/imgcard/card10.svg",
        desc: "Universitas Bhayangkara Jakarta Raya mengenalkan apa itu penguatan bela negara melalui karakter yang berintegratis dengan perilaku anti korupsi...",
    },
    {
        id: 12,
        date: "21 Agustus 2023",
        name: "Rapat Evaluasi Akhir Semester Genap Dan Awal...",
        src: "./images/imgcard/card10.svg",
        desc: "Universitas Bhayangkara Jakarta Raya mengenalkan apa itu penguatan bela negara melalui karakter yang berintegratis dengan perilaku anti korupsi...",
    },
    {
        id: 13,
        date: "17 Agustus 2023",
        name: "Selamat Hari Kemerdekaan Indonesia Yang Ke 78",
        src: "./images/imgcard/card10.svg",
        desc: "Universitas Bhayangkara Jakarta Raya mengenalkan apa itu penguatan bela negara melalui karakter yang berintegratis dengan perilaku anti korupsi...",
    },
    {
        id: 14,
        date: "12 Agustus 2023",
        name: "Kunjungan Mahasiswa Ubhara Jaya Ke Pameran...",
        src: "./images/imgcard/card10.svg",
        desc: "Universitas Bhayangkara Jakarta Raya mengenalkan apa itu penguatan bela negara melalui karakter yang berintegratis dengan perilaku anti korupsi...",
    },
    {
        id: 15,
        date: "11 Agustus 2023",
        name: "Yudisium Genap T.A 2022/2023",
        src: "./images/imgcard/card10.svg",
        desc: "Universitas Bhayangkara Jakarta Raya mengenalkan apa itu penguatan bela negara melalui karakter yang berintegratis dengan perilaku anti korupsi...",
    },
    {
        id: 16,
        date: "24 Juli 2023",
        name: "lnternational Conference On Psychology, Counseling...",
        src: "./images/imgcard/card10.svg",
        desc: "Universitas Bhayangkara Jakarta Raya mengenalkan apa itu penguatan bela negara melalui karakter yang berintegratis dengan perilaku anti korupsi...",
    },
    {
        id: 17,
        date: "26 Mei 2023",
        name: "KEGIATAN FOTO BERSAMA FAKULTAS PSIKOLOGI...",
        src: "./images/imgcard/card10.svg",
        desc: "Universitas Bhayangkara Jakarta Raya mengenalkan apa itu penguatan bela negara melalui karakter yang berintegratis dengan perilaku anti korupsi...",
    },
    {
        id: 18,
        date: "11 Mei",
        name: "WISUDA SARJANA DAN MAGISTER KE-28",
        src: "./images/imgcard/card10.svg",
        desc: "Universitas Bhayangkara Jakarta Raya mengenalkan apa itu penguatan bela negara melalui karakter yang berintegratis dengan perilaku anti korupsi...",
    },
    {
        id: 19,
        date: "22 April 2023",
        name: "Selamat Hari Raya Idul Fitri 1444 H Tahun 2023",
        src: "./images/imgcard/card10.svg",
        desc: "Universitas Bhayangkara Jakarta Raya mengenalkan apa itu penguatan bela negara melalui karakter yang berintegratis dengan perilaku anti korupsi...",
    },
    {
        id: 20,
        date: "11 April 2023",
        name: "Kegiatan Acara Buka Bersama Fakultas Psikologi",
        src: "./images/imgcard/card10.svg",
        desc: "Universitas Bhayangkara Jakarta Raya mengenalkan apa itu penguatan bela negara melalui karakter yang berintegratis dengan perilaku anti korupsi...",
    },
    {
        id: 21,
        date: "16 Feb 2023",
        name: "Kegiatan International Collaborative Lecture...",
        src: "./images/imgcard/card10.svg",
        desc: "Universitas Bhayangkara Jakarta Raya mengenalkan apa itu penguatan bela negara melalui karakter yang berintegratis dengan perilaku anti korupsi...",
    },
    {
        id: 22,
        date: "10 Februari 2023",
        name: "Workshop Qualitative Research 10 Feb 23",
        src: "./images/imgcard/card10.svg",
        desc: "Universitas Bhayangkara Jakarta Raya mengenalkan apa itu penguatan bela negara melalui karakter yang berintegratis dengan perilaku anti korupsi...",
    },
    {
        id: 23,
        date: "09 Februari 2023",
        name: "WORKSHOP PENYUSUNAN RENCANA PEMBELAJARAN...",
        src: "./images/imgcard/card10.svg",
        desc: "Universitas Bhayangkara Jakarta Raya mengenalkan apa itu penguatan bela negara melalui karakter yang berintegratis dengan perilaku anti korupsi...",
    },
    {
        id: 24,
        date: "12 Desember 2023",
        name: "Refreshing Metode Systematic Literatur Review...",
        src: "./images/imgcard/card10.svg",
        desc: "Universitas Bhayangkara Jakarta Raya mengenalkan apa itu penguatan bela negara melalui karakter yang berintegratis dengan perilaku anti korupsi...",
    },
    {
        id: 25,
        date: "02 Desember 2023",
        name: "Workshop Orientasi Karir Dan Jabatan Fungsional...",
        src: "./images/imgcard/card10.svg",
        desc: "Universitas Bhayangkara Jakarta Raya mengenalkan apa itu penguatan bela negara melalui karakter yang berintegratis dengan perilaku anti korupsi...",
    },
    {
        id: 26,
        date: "02 September 2022",
        name: "Klinik Proposal Dan Pengabdian Masyarakat...",
        src: "./images/imgcard/card10.svg",
        desc: "Universitas Bhayangkara Jakarta Raya mengenalkan apa itu penguatan bela negara melalui karakter yang berintegratis dengan perilaku anti korupsi...",
    },
    {
        id: 27,
        date: "26 November 2021",
        name: "Seminar mindanao tahun 2021",
        src: "./images/imgcard/card10.svg",
        desc: "Universitas Bhayangkara Jakarta Raya mengenalkan apa itu penguatan bela negara melalui karakter yang berintegratis dengan perilaku anti korupsi...",
    },
];

// Function to display gallery on the current page
function showGalerry(currarray, page) {
    let startIndex = (page - 1) * itemsPerPage;
    let endIndex = page * itemsPerPage;
    let paginatedArray = currarray.slice(startIndex, endIndex);

    document.getElementById("card").innerHTML = "";
    for (var i = 0; i < paginatedArray.length; i++) {
        document.getElementById('card').innerHTML += `
            <div class="col-lg-4 col-sm-12 my-2 ">
                <div class="shadow-lg p-4 rounded" data-aos="flip-left">
                    <div class="row">
                        <div class="col-12">
                            <div class="purple rounded">
                                <p class="text-white fs-6 text-center py-2 fw-medium"> <i
                                        class="fas fa-calendar-days"></i>
                                    <a href="${paginatedArray[i].link}" class="link-light link-underline link-underline-opacity-0">${paginatedArray[i].date}</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <a href="">
                                <img class="img-fluid rounded"
                                    src="${paginatedArray[i].src}"
                                    alt="">
                            </a>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-12">
                            <h6 class="text-center fs-5">${paginatedArray[i].name}</h6>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <p class="text-justify">${paginatedArray[i].desc}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <button class="btn purple-btn text-white">Readmore</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

// Function to create pagination controls
function setupPagination(totalItems) {
    let pageCount = Math.ceil(totalItems / itemsPerPage);
    document.getElementById('pagination').innerHTML = '';

    for (let i = 1; i <= pageCount; i++) {
        let li = document.createElement('li');
        li.classList.add('page-item');
        li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
        li.addEventListener('click', function () {
            currentPage = i;
            showGalerry(galleryarray, currentPage);
        });
        document.getElementById('pagination').appendChild(li);
    }
}

// Initial display and setup pagination
showGalerry(galleryarray, currentPage);
setupPagination(galleryarray.length);

// Search functionality
document.getElementById("myinput").addEventListener("keyup", function () {
    let text = document.getElementById("myinput").value.toLowerCase();
    filterarray = galleryarray.filter(function (item) {
        return item.name.toLowerCase().includes(text);
    });

    if (filterarray.length === 0) {
        document.getElementById("para").style.display = 'block';
        document.getElementById("card").innerHTML = "";
    } else {
        document.getElementById("para").style.display = 'none';
        currentPage = 1;
        showGalerry(filterarray, currentPage);
        setupPagination(filterarray.length);
    }
});
const d = document;
const toggleBtn = d.querySelector('.toggle')
// Nav pada ukuran mobile
toggleBtn.addEventListener('click', () => {
    const nItem = d.querySelector('.nav-item');
    nItem.classList.toggle('show');
    nItem.classList.toggle('dekstop');
});
const nav = d.querySelector('nav');
// Memberi shadow pada nav saat scroll melebihi 50px
window.addEventListener('scroll', () => {
    if (d.documentElement.scrollTop > 50) {
        nav.classList.add('scroll');
    } else {
        nav.classList.remove('scroll');
    }
});
const smoothScroll = d.querySelectorAll('a');
// Smooth scroll
for (s of smoothScroll) {
    s.addEventListener('click', function (e) {
        const tujuan = this.getAttribute('href');
        const elemenTujuan = d.querySelector(tujuan);
        window.scrollTo(0, elemenTujuan.offsetTop - 100);
        e.preventDefault();
    });
}
const toTop = d.querySelector('.scroll-to-top');
// membuat tombol untuk scroll kembali keatas
window.addEventListener('scroll', () => {
    if (d.documentElement.scrollTop > 500) {
        toTop.classList.add('muncul');
        toTop.addEventListener('click', () => {
            window.scrollTo(0, 0);
        });
    } else {
        toTop.classList.remove('muncul');
    }
});
// Efek Nav-link active
const nLink = d.querySelectorAll('.nav-link');
const section = {
    pengertian: d.querySelector('#pengertian'),
    penularan: d.querySelector('#penularan'),
    gejala: d.querySelector('#gejala'),
    pencegahan: d.querySelector('#pencegahan'),
    berita: d.querySelector('#berita')
};
window.addEventListener('scroll', () => {
    for (s in section) {
        if (d.documentElement.scrollTop > 700) {
            if (d.documentElement.scrollTop > section[s].offsetTop - 100 && d.documentElement.scrollTop < section[s].offsetTop + section[s].clientHeight) {
                for (n of nLink) {
                    const target = n.getAttribute('href').slice(1);
                    n.classList.remove('active');
                    if (target == s) {
                        n.classList.add('active');
                    }
                }
            }
        } else {
            for (n of nLink) {
                n.classList.remove('active');
            }
        }
    }
});
const year = new Date().getFullYear();
d.querySelector('#year').textContent = year;
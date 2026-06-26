const driveThumb = (id, size = 1400) =>
  `https://drive.google.com/thumbnail?id=${id}&sz=w${size}`;

const photoSets = {
  munichBern: [
    "1S7JfI2O5a1kz5j2GZ0l89yuSESSgj7Iq",
    "1BKqycjiNpDvSQGzmt1IA53dTBebC58WU",
    "1K7AJxV8YWPawYE6zaOThibpt5z5ico0c",
    "1EP2UxjctriW_qgqzfZpx4uzwsOxHN0E7",
    "1utL0ik3-iCoqEShGi5Qh3V-6bPNnQri6",
    "1Y6-CLf_jq9ny1284E0-z4i68hARH9-zE",
    "1N34kyf8xAvnKJy4XsCOdSrdZBI3HqjOA",
    "1ywrXOTQ_DoRW5MUMEbIxJTGQFYZZs3rI",
    "1unzUSkM-7TXIlIBcs0ljZv_LvNNamZFS",
    "1hNKUoNp6dAeTF09cX4WSgfUuBoBX0Piw",
    "1k1kZsMH8xMyeQXxHCsndCKJk4DbjajFj",
    "1IP-0XZGxv35CIIr5wWHv9uZyN6hhMA_2"
  ],
  zermatt: [
    "1SrFH7YyGyZBDAkjkFXdDYcNBIwZqlnig",
    "1mjyNk8b7VGizcvSuLzD6FWg3wyxpO1oo",
    "1gwx40QCayWeHLH5e0U5BOpuiX5hWHPup",
    "1fVe78SChA5ICnTqoONF_GOKp5h1wgF-j",
    "1KC-0qgDQf-ggstbK-SLHo7L7K67iv3Wi",
    "1xgxJMF6glUA8nHu8vqVyICmcAXqFzP8E",
    "1IjeREfX_67kSQQaZbotOmY4hilG7nQvK",
    "1mrfLW2Hak2IqF7gRgISShE8OiPgBVO0D",
    "1jIUiiv7IvqOA4TDiFPfyJ1FPm26_eoP_",
    "1rEx0HkChMsophdl2S28Fli0C4oxI8rgs",
    "1wQr-uJ8gdITDjF4_6C2AOOKog3mfirPq",
    "1coQeaFNv3atOwzAY91pgB5P0Yn3mAtcl"
  ],
  thunChamonix: [
    "12kIda28ISRHmArUuv-KcOErzPrYjjerq",
    "1N-1m0DOgsvOmHYnV1aOIm36DEhWdbddu",
    "1R88qO6HkFNpZbQ1EJ-S-TaLPc9ZQ9peQ",
    "1QrUj21xN7ghyOs0lI_SglwuRtUTv18SC",
    "1-j9SIjDw7oQmhs4MO6uvnNjNoP22eePh",
    "1wpZACn3jS4WF3V4bfLQoMcZ3mYbjWdQY",
    "1CJJMMpe12RuudnzOiYy3LIctYYajt3pZ",
    "1NHjkdOjUYobhD8gzsQidH5mI4euWL-Jz",
    "1OlJliSpR56AhLf1dj4ADkYGPCTjci-gb",
    "12xMZKDRrFZqRfaOtKo7GZBYe6W1S9VLA",
    "1ctrOICFw--hs-W8bOMtAaFZiHKcQiosq",
    "1s9hpJPtWKb4OfpoWG660W9mwcYhmizVg"
  ],
  icif: [
    "1UyY-34bV_ph-aXe9dlWTtwIV8Bs9VJe9",
    "1uq5Jofct6MpechED6IZkKBOgilWPjpJa",
    "1LXqFmJiFhcr-xTmVgMCzmjak-x3LHdzS",
    "1Zh96ut_k2uGcEwJCH1iUCRR_IofEvzi_",
    "1X4uaTiYKjeWs7xTCb_vpcqHhQkWW_6yc",
    "1F7YdoJNw7Nge1We6tzPiLFcYqZKKXpHB",
    "1WSB3GMa5pw4hBsxY7eyImTmSOEK82G-i",
    "1I4QXm62-eUjkyMqVGL57KpGsIdm4kZLt",
    "1eRLQZwK7aiNshyAV8h26CSi97f-nrbWE",
    "13K-Ko1qK7PghYiXQRWd6gWgtBnnUH_-C",
    "1E4uNXwMKtPYAdRFn9k_-6sJPuqfiKGe8",
    "1lsCDVLs1BmXaEWa_maIXPHUhGWhoLa4H",
    "1_hYZDAjhIuvWUNWHdV7V-HTqeESl3CW_",
    "1XTpJ0o3-cQdnWtkvMFlELfzXHzDYMqSi",
    "1VtTjbmhvXNjmhG3Q3m_kMHJUTKfljhTJ",
    "1WVaEZHAs14YBiVPP78saNOMNRff9IHOA",
    "1fYQMzTYlSdxiNlIADqqO-fOfEvRmN8BC",
    "19Rc3s-iB_DjMuMlgWXWc9TB-_tDgbRfW",
    "1AnRKz8ZqWU-6VwoZ5owY8sUBzpnLc36D",
    "1vi7H1cVpbXvKUJxZKPpOLT82vgQZgrUi",
    "1R8KbtT61y_VwTc9vlI-S9tPOjZm1dBEa",
    "1Rommq9zlk1J4vDpYIdA-SYNengF20MnJ",
    "1O3CsR0rIZsSzEe_oXwB91Ca5dNy0IWB_",
    "1HclS9VroH3Tu0EzBHJPkdmqQJUGKukgR",
    "1Eyo_d50jfrkYx-uw_rROm0wvww67_31e"
  ],
  isiss: [
    "1AEfHSQOWKzcOWbnGRKmbRZF5vFtgBTNx",
    "15ciK86Aws4zsTjXwkLX0JXx89Ovs7zH_",
    "1Gtew5K2TTlDh2-FZu8YGjRN02-vOr9y4",
    "10GJIEuaiD-yTizTr5sxv81aMe7aGzN_x",
    "14R2H3sIqIzkWG8IwitahaYz6uyvHz5-O",
    "1ESlXIAUEveumm58wyk8UkZmhgSVFWJFj",
    "149mCn4VkaVit9bhEJHPjf732lkTaFkE3",
    "1qlYom7ZFynrt0y4Q_lj2-OH5Jy_eoJ4P",
    "1qW5XlBKfTNvnizcf9e59DWPtSZ1mgJ4C",
    "1OX54OA7hgZTOl0kgD7r-TZ0LFuqSM3cz",
    "1_LapB5i8dlxQRE2cBauPybacfIai240p",
    "1myN52op4ZI2ixW2lE9rmlCu5a2VUQq3c"
  ],
  auf: [
    "1EN-8wNIwx2sFJo1D-soWzTZgRkJhYumr",
    "1Ow-c5A_6bujoVeeFqml75NDN6we3agQj",
    "1d5aQ9kqYq-d5nfDF0otUfADKeVu6n3eu",
    "1-ECIUwDPavKDfv3DVN4Z84cxmudhUS3z",
    "1zXgIh7RwruHDO8qNGjL1KtqPLATFDzxT",
    "1JbxeHCg5MFWjgJ_vjibQXSr4qeOoMCBj",
    "12UKK8CdtUvhVxaUf74KfHoPAYpvRnibL",
    "1lNfQeT0DGGYFa0Ug7vaSqVKuIjGkRDgy",
    "1ONsEfsj4WCJ4wdiN_hbAF5jsgrw0qflm",
    "1Km1cEaiOhYZ14CJWK9Y8DMnXx_6A6QiT",
    "1WgNe3E4AQ3Hq14vH7H4S_etm3FKYnmTE",
    "18jifOFytlbfqYAn29D2sj_rrHH48lMvJ",
    "1O0ZgatCb1O6sOMQPmieFURwN9dRs2vUp"
  ],
  rome: [
    "1kS--qo1QZBlfKqbXsPJLSnPXdjGFntyM",
    "123bdkD1g-e4gd1W3IJFEl3FrHJ4NIygH",
    "1XLebQp0hYalAz2hp_vm1x9n8yv_eqDuB",
    "129X5RNzQLqiRzJM9ia3f9ZrrHhgSXoBe",
    "1Rzej5HVvhMjpB5Y17pNYUFSfq5dHC4-4",
    "19_GYEaP9eDtpbVziu4rbxg3tdlE-UFuI",
    "1PK3fspBrqlLc3pGk3Qp4GTWjF3DKmFRa",
    "15wI_hBruEmiE6k3JRKqgUa3bkHOWqB5D",
    "1Y_d2LfgqFRehoN-rPwE1DoAbj2fil5yc",
    "1tx4fp94NExoYnGVbNK6z2biZ6ykRZ2hF",
    "1Tnb9rCvWAdQZAwafBrDfPP8NmNwf1V5H"
  ],
  vatican: [
    "1EauqKxzJEFxqZEG_Wb9cq3e9TZEEo85P",
    "12vpFT4gD4l_2-iYkCsJAHHFrEjCbS-3n",
    "1TgGcq9c9VQofmNMyHkfmCC5cO6W9bGNq",
    "17U3oKTdBEX6zbF7omWvALXF0yh7j6-F8",
    "1IUWv89DZUiqTZoRGxS7T8yIwxl08M9Rg",
    "1lXggFbMLHnxYuppB6HpoKPn8217-i5A5",
    "16CEextoL95ByKT0GXAix4vSKAtX98aZx",
    "1Zy7EJYEOALTRA7FgEjNK0-VIhi9gcqJz",
    "1UhuZzL0fYFoK6XBG-0LXWbTWm5JDSl0z",
    "1c0uXZRZZrZrDNyzK6LqWLAnd98KpUiS_",
    "1djwlBUicvV0uxZIa3nY5rQ4ockaa-ZLm"
  ],
  vienna: [
    "10nosTOJisr-MDSVRZek4tMjk0_qkF5QR",
    "1ROiq4JxpRxqIYPUNtG_96zKix8Y8zEoB",
    "1n3a9dZry5wwjNzk0sHCSmJHdU57UwhuN",
    "1dq0HqJ9pbxBW8cCFBQagKhWu0pkBPvw9",
    "1LqhjOfqlkcApkoSVOBFYZSv9lCTdU7BF",
    "1HbHLw_0gKimeaFhX7PhJsfxLdq5xuiRH",
    "17NDM-ecEq0Jf_mNaYXhkCBCzOhpSKGNL",
    "1GQ5FWqdQhIxi6EkwaYNetTNLtp43LSKS",
    "1E8n4_h3PnaieoN3m3hFBKxC7CaMAhIJV",
    "1-JUfAcFsgZFc3CdKqC_O_cbpM7ubeKFk",
    "1yYjpjAMAmLWrj2k2Sw9N7KTk2fKkJnRy",
    "1yPoE7RL7cZx1bEABgUhzqUjKmAbbYOui"
  ]
};

const chapters = [
  {
    id: "munich-bern",
    country: "德國 / 瑞士",
    dates: "4/27 - 4/28",
    place: "德國｜慕尼黑、瑞士伯恩",
    title: "啟程、慕尼黑與伯恩：從歐洲第一站開始",
    body: "Drive 資料夾中的第一段行程是「啟程、慕尼黑、瑞士伯恩」。這一段適合作為開場，說明抵達歐洲後的城市觀察、交通移動與團隊進入狀況。",
    focus: ["德國入境", "慕尼黑城市觀察", "前往瑞士伯恩", "建立參訪節奏"],
    photos: photoSets.munichBern,
    camera: { x: "13vw", y: "8vh", scale: 1.18, progress: 0.06, planeX: "454px", planeY: "355px" }
  },
  {
    id: "zermatt",
    country: "瑞士",
    dates: "4/29",
    place: "瑞士｜策馬特",
    title: "策馬特：在山城裡看見瑞士的自然與觀光",
    body: "4/29 的資料夾標示為「策馬特」。這一站可以呈現瑞士山城、觀光管理、自然景觀與旅途中最有記憶點的環境變化。",
    focus: ["策馬特", "阿爾卑斯山景", "觀光城市觀察", "自然環境體驗"],
    photos: photoSets.zermatt,
    camera: { x: "5vw", y: "-6vh", scale: 1.34, progress: 0.18, planeX: "560px", planeY: "500px" }
  },
  {
    id: "thun-chamonix",
    country: "瑞士 / 法國",
    dates: "4/30",
    place: "瑞士｜木工學校、圖恩湖；法國｜夏摩尼",
    title: "木工學校、圖恩湖與夏摩尼：技職與地景的連結",
    body: "4/30 的資料夾包含木工學校、圖恩湖、夏摩尼。這一段可以把技職教育參訪與自然地景連在一起，讓觀眾看到課堂之外的學習現場。",
    focus: ["木工學校", "圖恩湖", "夏摩尼", "技職教育觀察"],
    photos: photoSets.thunChamonix,
    camera: { x: "-2vw", y: "-7vh", scale: 1.38, progress: 0.27, planeX: "610px", planeY: "520px" }
  },
  {
    id: "icif",
    country: "義大利",
    dates: "5/1",
    place: "義大利｜白朗峰、杜林、ICIF、品酒會與大師課",
    title: "白朗峰、杜林、ICIF 與義大利餐飲文化",
    body: "這一段把 ICIF 國際廚藝學校、品酒會、大師示範課、米其林餐與酒莊參訪放在同一個餐飲主題裡。照片來源也合併使用 5/1 到 5/3 的相關資料夾，避免把餐飲課程和其他城市段落混在一起。",
    focus: ["ICIF 國際廚藝學校", "品酒會與大師課", "米其林餐", "酒莊參訪"],
    photos: photoSets.icif,
    camera: { x: "-15vw", y: "-16vh", scale: 1.48, progress: 0.5, planeX: "780px", planeY: "640px" }
  },
  {
    id: "isiss",
    country: "義大利",
    dates: "5/4",
    place: "義大利｜ISISS 高中",
    title: "ISISS 高中：走進義大利校園與學生交流",
    body: "Drive 中 5/4 的資料夾明確標示為「ISISS高中」。這一段可以放在教育交流主軸，說明校園環境、學生互動、課程觀察與台灣學校的比較。",
    focus: ["ISISS 高中", "校園參訪", "學生交流", "教育制度觀察"],
    photos: photoSets.isiss,
    camera: { x: "-19vw", y: "-11vh", scale: 1.5, progress: 0.6, planeX: "830px", planeY: "600px" }
  },
  {
    id: "auf",
    country: "義大利",
    dates: "5/5",
    place: "義大利｜佛羅倫斯 AUF 藝術大學",
    title: "AUF 佛羅倫斯藝術大學：藝術、設計與城市文化",
    body: "5/5 的資料夾是「佛羅倫斯藝術大學」。我在頁面中用你說的 AUF 來呈現，並保留佛羅倫斯藝術大學名稱，適合放藝術課程、校園參訪與城市美學觀察。",
    focus: ["AUF 藝術大學", "佛羅倫斯", "藝術教育", "城市美學"],
    photos: photoSets.auf,
    camera: { x: "-20vw", y: "-24vh", scale: 1.53, progress: 0.71, planeX: "850px", planeY: "690px" }
  },
  {
    id: "rome",
    country: "義大利",
    dates: "5/6",
    place: "義大利｜天空之城、羅馬",
    title: "天空之城與羅馬：從山城走向古都",
    body: "5/6 的資料夾是「天空之城、羅馬」。這段可以作為義大利歷史文化的轉場，先看天空之城的地形與聚落，再進入羅馬的古典城市景觀。",
    focus: ["天空之城", "羅馬", "歷史聚落", "古都文化"],
    photos: photoSets.rome,
    camera: { x: "-27vw", y: "-29vh", scale: 1.55, progress: 0.8, planeX: "920px", planeY: "745px" }
  },
  {
    id: "vatican",
    country: "義大利 / 梵蒂岡",
    dates: "5/7",
    place: "義大利｜羅馬；梵蒂岡",
    title: "羅馬與梵蒂岡：宗教、藝術與世界級文化資產",
    body: "5/7 的資料夾是「羅馬、維也納」，其中子資料夾有明確的 Rome 照片。這段補上你提到的梵蒂岡，讓羅馬不只是城市參觀，也能延伸到宗教藝術與文化資產。",
    focus: ["羅馬市區", "梵蒂岡", "宗教藝術", "世界文化資產"],
    photos: photoSets.vatican,
    camera: { x: "-30vw", y: "-26vh", scale: 1.58, progress: 0.88, planeX: "950px", planeY: "720px" }
  },
  {
    id: "vienna",
    country: "奧地利",
    dates: "5/7 - 5/8",
    place: "奧地利｜維也納、賦歸",
    title: "維也納與賦歸：把十二天的參訪整理成成果",
    body: "最後抵達奧地利維也納，接著準備返程。這一段適合收束整個發表：回顧從德國、瑞士、義大利到奧地利的移動，整理學習、文化與團隊收穫。",
    focus: ["維也納", "旅程總結", "成果發表", "返程"],
    photos: photoSets.vienna,
    camera: { x: "-28vw", y: "2vh", scale: 1.42, progress: 1, planeX: "875px", planeY: "441px" }
  }
];

const chaptersRoot = document.querySelector("#chapters");

chaptersRoot.innerHTML = chapters
  .map((chapter) => {
    const focus = chapter.focus.map((item) => `<span>${item}</span>`).join("");
    const photos = chapter.photos
      .map((photoId, index) => {
        const caption = `${chapter.title}｜照片 ${index + 1}`;
        return `
          <figure class="photo-slide swiper-slide">
            <img src="${driveThumb(photoId)}" alt="${caption}" loading="lazy">
            <figcaption>${caption}</figcaption>
          </figure>
        `;
      })
      .join("");

    return `
      <section class="chapter" id="${chapter.id}" data-country="${chapter.id}">
        <div class="chapter-copy">
          <div class="chapter-meta">
            <span class="pill">${chapter.country}</span>
            <span class="pill">${chapter.dates}</span>
          </div>
          <h3>${chapter.title}</h3>
          <p>${chapter.body}</p>
          <div class="focus-list">${focus}</div>
        </div>
        <div class="chapter-slider swiper" data-slider>
          <div class="slider-toolbar">
            <span>${chapter.photos.length} 張照片</span>
            <div class="slider-actions">
              <button type="button" data-slider-prev aria-label="上一張照片">‹</button>
              <button type="button" data-slider-next aria-label="下一張照片">›</button>
            </div>
          </div>
          <div class="slider-track swiper-wrapper">${photos}</div>
          <div class="swiper-pagination"></div>
        </div>
      </section>
    `;
  })
  .join("");

const root = document.documentElement;
const pins = [...document.querySelectorAll("[data-map-pin]")];
const navLinks = [...document.querySelectorAll(".top-nav a")];
const currentPlace = document.querySelector("[data-current-place]");
const observedChapters = [...document.querySelectorAll(".chapter")];

function setActiveChapter(chapterId) {
  const chapter = chapters.find((item) => item.id === chapterId);

  if (!chapter) return;

  root.style.setProperty("--map-x", chapter.camera.x);
  root.style.setProperty("--map-y", chapter.camera.y);
  root.style.setProperty("--map-scale", chapter.camera.scale);
  root.style.setProperty("--route-progress", chapter.camera.progress);
  root.style.setProperty("--plane-x", chapter.camera.planeX);
  root.style.setProperty("--plane-y", chapter.camera.planeY);
  currentPlace.textContent = chapter.place;

  pins.forEach((pin) => {
    pin.classList.toggle("active", pin.dataset.mapPin === chapterId);
  });

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${chapterId}`);
  });

  const activeLink = navLinks.find((link) => link.getAttribute("href") === `#${chapterId}`);
  activeLink?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
}

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (visible) {
      setActiveChapter(visible.target.dataset.country);
    }
  },
  { rootMargin: "-18% 0px -42% 0px", threshold: [0.18, 0.35, 0.55] }
);

observedChapters.forEach((chapter) => observer.observe(chapter));
setActiveChapter("munich-bern");

document.querySelectorAll("img").forEach((image) => {
  image.addEventListener("error", () => {
    image.closest(".photo-slide, .hero-media")?.classList.add("image-failed");
    image.remove();
  });
});

document.querySelectorAll("[data-slider]").forEach((slider) => {
  const prev = slider.querySelector("[data-slider-prev]");
  const next = slider.querySelector("[data-slider-next]");
  const pagination = slider.querySelector(".swiper-pagination");

  if (window.Swiper) {
    new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 14,
      loop: false,
      grabCursor: true,
      keyboard: { enabled: true },
      pagination: { el: pagination, clickable: true },
      navigation: { prevEl: prev, nextEl: next },
      breakpoints: {
        860: { slidesPerView: 1.15, spaceBetween: 18 },
        1180: { slidesPerView: 1.25, spaceBetween: 20 }
      }
    });
    return;
  }

  const track = slider.querySelector(".slider-track");
  prev.addEventListener("click", () => track.scrollBy({ left: -track.clientWidth, behavior: "smooth" }));
  next.addEventListener("click", () => track.scrollBy({ left: track.clientWidth, behavior: "smooth" }));
});

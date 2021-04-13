<template lang="pug">
  //- start with an array of images, described by url and alt text
  - let items = [
  - 	{
  - 		text: "",
  - 		src: "https://i.imgur.com/0fP0SlB.png",
  - 		srcset: "https://i.imgur.com/0fP0SlB.png 1x, https://i.imgur.com/quXGcYt.png 2x"
  - 	},
  - 	{
  - 		text: "Ekosistem yang besar",
  - 		src: "https://i.imgur.com/DcKlhNj.png",
  - 		srcset: "https://i.imgur.com/DcKlhNj.png 1x, https://i.imgur.com/GX9pKKJ.png 2x"
  - 	},
  - 	{
  - 		text: "Pesan antar makanan",
  - 		src: "https://i.imgur.com/iuPr3u3.png",
  - 		srcset: "https://i.imgur.com/iuPr3u3.png 1x, https://i.imgur.com/HqyTH8d.png 2x"
  - 	},
  - 	{
  - 		text: "Ritel tradisional",
  - 		src: "https://i.imgur.com/M8PU6FS.png",
  - 		srcset: "https://i.imgur.com/M8PU6FS.png 1x, https://i.imgur.com/gCHy0Du.png 2x"
  - 	},
  - 	{
  - 		text: "Pembayaran digital",
  - 		src: "https://i.imgur.com/RX5HYP1.png",
  - 		srcset: "https://i.imgur.com/RX5HYP1.png 1x, https://i.imgur.com/7XRtDt5.png 2x"
  - 	},
  - 	{
  - 		text: "Layanan pemesanan transportasi",
  - 		src: "https://i.imgur.com/GA0cPl3.png",
  - 		srcset: "https://i.imgur.com/GA0cPl3.png 1x, https://i.imgur.com/H0vYflu.png 2x"
  - 	},
  - 	{
  - 		text: "Platform e-commerce #1",
  - 		src: "https://i.imgur.com/6VX1pZH.png",
  - 		srcset: "https://i.imgur.com/6VX1pZH.png 1x, https://i.imgur.com/xn0Nzyd.png 2x"
  - 	},
  - ];
  - let n_imgs = items.length;
  - let has_mid = 1; /* 0 if there's no item in the middle, 1 otherwise */
  - let m = n_imgs - has_mid; /* how many are ON the circle */
  - let tan = Math.tan(Math.PI/m); /* tangent of half the base angle */

  .container(style=`--m: ${m}; --tan: ${+tan.toFixed(2)}`)
    - for(let i = 0; i < n_imgs; i++)
      span(style=i - has_mid >= 0 ? `--i: ${i}` : null)
        div
          b-img(src=items[i].src srcset=items[i].srcset)
          div #{items[i].text}
</template>

<style lang="scss" scoped>
.container {
  --d: 175px; /* image size */
  --rel: 1; /* how much extra space we want between images, 1 = one image size */
  --r: calc(0.5 * (1 + var(--rel)) * var(--d) / var(--tan)); /* circle radius */
  --s: calc(2 * var(--r) + var(--d)); /* container size */
  position: relative;
  width: var(--s);
  height: var(--s);
}

.container > div > span:not(:first-child):hover {
  cursor: pointer;
  border: 1px solid #5f33ba;
}
.container > div > span {
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 50%;
  left: 50%;

  margin: calc(-0.5 * var(--d));
  padding: 20px;
  width: var(--d);
  height: var(--d);
  --az: calc(var(--i) * 1turn / var(--m));
  transform: rotate(var(--az)) translate(var(--r)) rotate(calc(-1 * var(--az)));

  border-radius: 50%;
  background-color: #ffffff;
  box-shadow: 0px 13px 34px rgba(95, 51, 186, 0.1);
}

img {
  max-width: 100%;
}
</style>

Vue.component("v-icon", VueAwesome);
var app = new Vue({
  el: "#app",

  data: {
    cart: 0,
    title: "Mango",
    descr: "A juicy fruit!",
    tags: ["sweet", "juicy", "tropical"],
    inStock: 11,
    onSale: false,
    images: [
      "https://c.pxhere.com/photos/e8/3a/fruit_mango_food_melon_organic_healthy-1027616.jpg!d",
      "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pdwatercolorfruitbatch1-661-gloy-a_1.jpg?bg=transparent&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-3.1.0&q=65&usm=15&vib=3&w=600&s=33a985615941600db4b6ee196c57feff",
    ],
    image: 0,
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    showImage(i) {
      return this.images[i];
    },
    changeImage() {
      this.image === 0 ? (this.image += 1) : (this.image -= 1);
    },
  },
});

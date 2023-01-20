<script setup lang="ts">
import brands from "@/json/brands.json";
import products from "@/json/products.json";
import { formatCurrency } from "@/scripts/helpers";
import { ref } from "vue";

function addToCart(product: any) {
  let cart: any[] = JSON.parse(localStorage.getItem("cart") || "[]");

  // If such item in cart already exists, increase qty, add new item otherwise
  let foundItmIdx = cart.indexOf((c: any) => c.id == product.id);

  if (foundItmIdx >= 0) {
    cart[foundItmIdx].qty += 1;
  } else {
    let cartItm = product;
    cartItm.brandName = brands.find((b) => b.id == product.brand)?.title || "";
    cartItm.qty = 1;
    cart.push(cartItm);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}

function selectBrand(brandId: number) {
  brandSelected.value = brandId;
  productsFiltered.value = brandId != -1 ? products.filter((p) => p.brand == brandId) : products;
}

const productsFiltered = ref(products);
const brandSelected = ref(-1);
</script>

<template>
  <section class="flex gap-2 w-full p-3 overflow-y-auto">
    <div>
      <ul class="px-6 whitespace-nowrap">
        <li class="cursor-pointer hover:scale-110" @click="selectBrand(-1)" :class="{ 'font-bold': brandSelected == -1 }">
          All brands
        </li>
        <li
          class="cursor-pointer hover:scale-110"
          v-for="br in brands"
          @click="selectBrand(br.id)"
          :class="{ 'font-bold': br.id == brandSelected }"
        >
          {{ br.title }}
        </li>
      </ul>
    </div>
    <div class="w-full">
      <h1 class="mx-3 mb-5 font-bold">Catalog</h1>

      <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        <div
          class="max-w-sm bg-white border border-gray-300 rounded-md shadow-md hover:-translate-y-1 cursor-pointer"
          v-for="pr in productsFiltered"
          :key="pr.id"
        >
          <div class="h-32 p-2">
            <img class="rounded-md object-contain object-contain h-32 mx-auto" src="/images/1.png" />
          </div>
          <div class="p-5 text-center">
            <h2 class="mb-2">{{ pr.title }}</h2>
            <h3 class="mb-2">{{ brands.find((b) => b.id == pr.brand)?.title || "" }}</h3>
            <p class="mb-2">{{ formatCurrency(pr) }}</p>
            <button
              class="px-3 py-2 text-sm text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              @click="addToCart(pr)"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

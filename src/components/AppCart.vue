<script setup lang="ts">
import { formatCurrency } from "@/scripts/helpers";
import { Ref, ref } from "vue";

const cart: Ref<any[]> = ref(JSON.parse(localStorage.getItem("cart") || "[]"));

function removeFromCart(itmId: number) {
  cart.value = cart.value.filter((c: any) => c.id != itmId);
  localStorage.setItem("cart", JSON.stringify(cart.value));
}

function updateQty() {
  localStorage.setItem("cart", JSON.stringify(cart.value));
}
</script>

<template>
  <section class="w-full p-3 overflow-y-auto">
    <h1 class="my-3 mb-6 font-bold text-lg">Shopping cart</h1>
    <table class="table-auto w-full text-center">
      <thead>
        <tr>
          <th></th>
          <th>Item</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Total</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="itm in cart">
          <td class="w-full sm:w-auto"><img class="rounded-md object-contain object-contain h-12 w-12" src="/images/1.png" /></td>
          <td class="font-bold">{{ itm.brandName }} | {{ itm.title }}</td>
          <td>{{ formatCurrency(itm) }}</td>
          <td><input class="w-12 border rounded-md" type="number" min="1" v-model="itm.qty" @input="updateQty" /></td>
          <td>{{ itm.qty * itm.regular_price.value }}</td>
          <td>
            <button @click="removeFromCart(itm.id)">
              <svg
                class="w-6 cursor-pointer text-red-500"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                ></path>
              </svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

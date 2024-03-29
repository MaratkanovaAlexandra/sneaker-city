import type { ProductType } from "@/types/Product";
import { getProducts } from "@/api";
import { defineStore } from "pinia";

export const useProductsStore = defineStore({
  id: "products",
  state: () => ({
    products: [] as ProductType[],
    sort: "asc",
    rate: { min: 0, max: 5 },
    count: { min: 1, max: 1000 },
    category: "",
    isLoading: true,
  }),
  getters: {
    isRotating: (state) => state.sort === "desc",
    filterProducts: (state) =>
      state.products.filter(
        (p) =>
          p.rating.rate >= state.rate.min &&
          p.rating.rate <= state.rate.max &&
          p.rating.count >= state.count.min &&
          p.rating.count <= state.count.max
      ),
  },

  actions: {
    async toggleSort() {
      this.sort = this.sort === "asc" ? "desc" : "asc";
      this.isLoading = true;
      this.products = await getProducts(this.sort, this.category);
      this.isLoading = false;
    },

    async getProducts() {
      this.isLoading = true;
      this.products = await getProducts(this.sort, this.category);
      this.isLoading = false;
    },

    setLoadeing(value: boolean) {
      this.isLoading = value;
    },

    setCategory(value: string) {
      this.category = value;
    },

    setRate(value: number[]) {
      this.rate.min = value[0];
      this.rate.max = value[1];
    },

    setCount(value: number[]) {
      this.count.min = value[0];
      this.count.max = value[1];
    },
  },
});

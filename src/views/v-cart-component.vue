<template>
  <div class="v-cart-component">
    <form @submit.prevent="submitForm">
      <h2>Форма создания объявления</h2>

      <label for="title">Заголовок:</label>
      <input type="text" id="title" v-model="formData.title" required />

      <label for="category">Категория:</label>
      <select
        class="categories-content"
        id="category"
        v-model="formData.category"
        required
      >
        <option
          class="category-item"
          v-for="category in formData.categories"
          :key="category.id"
          :value="category.id"
        >
          {{ category.name }}
        </option>
      </select>

      <label for="desc">Описание:</label>
      <textarea id="desc" v-model="formData.desc" required></textarea>

      <label for="price">Цена:</label>
      <input type="number" id="price" v-model="formData.price" required />

      <button type="submit">Создать объявление</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { API_URL } from "@/constants/apiUrl";

export default {
  data() {
    return {
      formData: {
        title: "",
        desc: "",
        price: null,
        categories: [
          { id: 1, name: "Gift boxes" },
          { id: 2, name: "Bouquets of Food" },
          { id: 3, name: "Sweet" },
          { id: 4, name: "Eggs, dairy products" },
          { id: 5, name: "Vegetable fat" },
          { id: 6, name: "Animal fat" },
          { id: 7, name: "Seeds" },
          { id: 8, name: "Meat, meat products" },
          { id: 9, name: "Fish sea food" },
          { id: 10, name: "Cooking" },
          { id: 11, name: "Sublimated products" },
          { id: 12, name: "Fruits and vegetables" },
          { id: 13, name: "Nuts and dried fruits" },
          { id: 14, name: "Snacks" },
          { id: 15, name: "Sauces and spices" },
          { id: 16, name: "Conservation" },
          { id: 17, name: "Freeze" },
          { id: 18, name: "Drinks" },
          { id: 19, name: "Baking" },
        ],
      },
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post(`${API_URL}/products`, this.formData);

        console.log("Server response:", response.data);

        this.resetForm();
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    },
    resetForm() {
      this.formData.title = "";
      this.formData.desc = "";
      this.formData.price = null;
      this.formData.category = null;
    },
  },
};
</script>

<style scoped>
.v-cart-component {
  max-width: 1300px;
  margin: 0 auto;
  padding: 20px;
  text-align: left;
}

h2 {
  padding: 20px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #ffffff;
  border-radius: 5px;
}

label {
  font-weight: bold;
  margin-left: 40px;
  border-radius: 5px;
}

input {
  padding: 10px;
  background-color: #e6e8df;
  border: none;
  margin: 0px 40px 0px 40px;
  height: 20px;
  max-width: 100%;
  outline: none;
}

textarea {
  padding: 10px;
  background-color: #e6e8df;
  border: none;
  margin: 0px 40px 0px 40px;
  height: 200px;
  outline: none;
  resize: none;
}

button {
  padding: 10px;
  background-color: #607932;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
  width: auto;
  margin: 0 40px 40px 40px;
}

span {
  margin: 0px 0px 0px 40px;
}

h1 {
  margin: 40px 0px 0px 40px;
}

.categories-content {
  display: block;
  font-size: 16px;
  font-family: sans-serif;
  font-weight: 700;
  color: #444;
  line-height: 1.3;
  padding: 0.6em 1.4em 0.5em 0.8em;
  max-width: 100%;
  box-sizing: border-box;
  margin: 0px 40px 0 40px;
  border: 1px solid #e6e8df;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #e6e8df;
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;
}
.category-item {
  background-color: #e6e8df;
  padding: 10px;
  border-radius: 5px;
  color: #333;
  cursor: pointer;
  transition: background-color 0.3s;
}

.category-item:hover {
  background-color: #a0a0a0;
}
</style>

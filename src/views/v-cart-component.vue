<!-- eslint-disable prettier/prettier -->
<template>
  <div class="v-cart-component">
    <form @submit.prevent="submitAdForm">
      <h1>Add Your Advertisement</h1>

      <label for="adTitle">Title:</label>
      <span>Describe in detail</span>
      <input type="text" id="adTitle" v-model="adTitle" required />

      <div @click="showCategoriesForm" class="categories-content">
        <div class="list-categories">
          <a>
            <img
              src="@/assets/categories-image.svg"
              alt="auth"
              style="height: 2.4em"
            />
          </a>
        </div>
        <div>
          Categories
        </div>
      </div>

      <label for="adDescription">Description:</label>
      <span class="input-description">
        Provide a detailed description of your product
      </span>
      <textarea id="adDescription" v-model="adDescription" required></textarea>
      <button type="submit">Post Ad</button>
    </form>
  </div>

  <addingNewAdPopup v-if="isCategoriesFormVisible" @close="hideCategoriesForm" />
</template>

<script>
import addingNewAdPopup from "@/components/ui/adding-a-new-ad-popup.vue";

export default {
  name: "AddAdPage",
  components: {
    addingNewAdPopup,
  },
  data() {
    return {
      adTitle: "",
      adDescription: "",
      isCategoriesFormVisible: false,
    };
  },
  methods: {
    submitAdForm() {
      // You can handle the form submission logic here
      // For example, send a request to your server to save the ad details
      console.log("Ad Title:", this.adTitle);
      console.log("Ad Description:", this.adDescription);
      // Reset the form fields after submission if needed
      this.adTitle = "";
      this.adDescription = "";
    },
    showCategoriesForm() {
      this.isCategoriesFormVisible = true;
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
  width: 60%;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  margin: 0px 0px 0px 40px;
  padding: 10px 25px 5px 20px;
  background: #959d7e;
}
</style>

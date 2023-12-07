<template>
  <div class="v-cart-component">
    <h1>Add Your Advertisement</h1>

    <form @submit.prevent="submitAdForm">
      <span>Describe in detail</span>
      <label for="adTitle">Title:</label>
      <input type="text" id="adTitle" v-model="adTitle" required />

      <label for="adDescription">Description:</label>
      <span class="input-description">
        Provide a detailed description of your product
      </span>
      <textarea id="adDescription" v-model="adDescription" required></textarea>

      <button type="submit">Post Ad</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddAdPage",
  data() {
    return {
      adTitle: "",
      adDescription: "",
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
  },
};
</script>

<style scoped>
.v-cart-component {
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px;
  text-align: left;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

label {
  font-weight: bold;
}

input,
textarea {
  padding: 5px;
}

input,
textarea {
  padding: 10px;
}

button {
  padding: 10px;
  background-color: #c07649;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
}
</style>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
    <h3 class="mr-4">Food Online</h3>
    <div class="footer">
      <ul class="mr-10">
        <li>
          <a href="" target="_blank" rel="noopener">About us</a>
        </li>
        <li>
          <a href="" target="_blank" rel="noopener">Blog</a>
        </li>
        <li>
          <a href="" target="_blank" rel="noopener">Contacts</a>
        </li>
      </ul>
      <h3 class="mr-4">Shop</h3>
      <ul class="mr-10">
        <li>
          <a href="" target="_blank" rel="noopener">Sell on Food online</a>
        </li>
        <li>
          <a href="" target="_blank" rel="noopener">Promotions</a>
        </li>
      </ul>
      <h3 class="mb-4">Rules</h3>
      <ul class="mr-10">
        <li>
          <a href="" target="_blank" rel="noopener">Delivery</a>
        </li>
        <li>
          <a href="" target="_blank" rel="noopener">Return</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

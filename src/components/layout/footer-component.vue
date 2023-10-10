<template>
  <footer class="footer-component">
    <div class="footer-content">
      <div class="footer-column">
        <!-- Колонка 1 -->
        <h4>Food online</h4>
        <ul>
          <li>About us</li>
          <li>Contacts</li>
        </ul>
      </div>
      <div class="footer-column">
        <!-- Колонка 2 -->
        <h4>Story</h4>
        <ul>
          <li>Sell on Food online</li>
          <li>Promotions</li>
        </ul>
      </div>
      <div class="footer-column">
        <!-- Колонка 3 -->
        <h4>Rules</h4>
        <ul>
          <li>Delivery</li>
          <li>Return</li>
        </ul>
      </div>
      <div class="footer-column">
        <!-- Колонка 4 -->
        <h4>Join in</h4>
        <ul>
          <li>Email</li>
          <li>t.me/Owner10</li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer-component",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  watch: {},
  mounted() {},
};
</script>

<style scoped>
.footer-component {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  color: #35392e;
  text-align: center;
  border-top: 1px solid #2b2b2b;
}

.footer-content {
  display: flex;
  max-width: 56.25rem;
  margin: 0 auto;
}

.footer-column {
  flex: 1;
  padding: 1.6%;
  text-align: left;
}

.footer-column h4 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #2b2b2b;
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
  text-align: center;
}

li {
  margin-bottom: 0.5rem;
}

a {
  color: #2b2b2b;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

@media (max-width: 540px) {
  ul {
    font-size: 0.8rem;
  }
}

@media (max-width: 414px) {
  .footer-column h4 {
    font-size: 0.9rem;
    margin-bottom: 1rem;
    color: #2b2b2b;
  }
  ul {
    font-size: 0.6rem;
  }
}

@media (max-width: 375px) {
  .footer-column h4 {
    font-size: 0.8rem;
    margin-bottom: 1rem;
    color: #2b2b2b;
  }
  ul {
    font-size: 0.5rem;
  }
}

@media (max-width: 280px) {
  .footer-column h4 {
    font-size: 0.6rem;
    margin-bottom: 1rem;
    color: #2b2b2b;
  }
  ul {
    font-size: 0.4rem;
  }
}
</style>

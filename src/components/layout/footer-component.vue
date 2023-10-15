<template>
  <footer class="footer-component">
    <div class="footer-content">
      <div class="footer-column">
        <!-- Колонка 1 -->
        <h4>Food online</h4>
        <ul>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/contacts">Contacts</router-link></li>
        </ul>
      </div>
      <div class="footer-column">
        <!-- Колонка 2 -->
        <h4>Story</h4>
        <ul>
          <li><router-link to="/sell">Sell on Food online</router-link></li>
          <li><router-link to="/promotions">Promotions</router-link></li>
        </ul>
      </div>
      <div class="footer-column">
        <!-- Колонка 3 -->
        <h4>Rules</h4>
        <ul>
          <li><router-link to="/delivery">Delivery</router-link></li>
          <li><router-link to="return">Return</router-link></li>
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
  background-color: #fdfcfa;
  color: #35392e;
  text-align: center;
  border-top: 1px solid #2b2b2b;
}

.footer-content {
  display: flex;
  align-items: flex-end;
  max-width: 56.25rem;
  margin: auto;
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

@media (max-width: 636px) {
  ul {
    font-size: 0.8rem;
  }
}

@media (max-width: 505px) {
  .footer-column h4 {
    font-size: 0.9rem;
    margin-bottom: 1rem;
    color: #2b2b2b;
  }
  ul {
    font-size: 0.6rem;
  }
}

@media (max-width: 379px) {
  .footer-column h4 {
    font-size: 0.8rem;
    margin-bottom: 1rem;
    color: #2b2b2b;
  }
  ul {
    font-size: 0.5rem;
  }
}

@media (max-width: 332px) {
  .footer-column h4 {
    font-size: 0.6rem;
    margin-bottom: 1rem;
    color: #2b2b2b;
  }
  ul {
    font-size: 0.4rem;
  }
  li {
    margin-bottom: 0.5rem;
  }
}
</style>

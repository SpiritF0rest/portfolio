<template>
  <header>
    <div class="logo">
     <img alt="logo" src="../assets/logo_white.svg">
    </div>
    <nav>
      <ul>
        <li><router-link to="/"><fa icon="house" class="header__icon"/><span> Home</span></router-link></li>
        <li><router-link to="/contact"><fa icon="paper-plane" class="header__icon"/><span> Contact</span></router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>

export default {
  name: 'Header',
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
header {
  background-color: #207373;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}
.header {
  &__icon {
    color: white;
  }
}
ul {
  list-style-type: none;
  display: flex;
  & li {
    margin: 0.5rem;
  }
}
.logo {
  display: flex;
  align-items: center;
}
img {
  height: 2.5rem;
}
span {
  color: white;
}
</style>
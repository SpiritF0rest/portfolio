<template>
  <div>
   <h1>Erreur 404: Impossible d'accéder à cette page !</h1>
   <p>Oups ! Il semblerait que la page a été supprimée ou bien n'existe pas.</p> 
   <button class="button__validation" @click="goBack()">Retour</button>
  </div>
</template>

<script>

export default {
  name: 'PageNotFound',
  methods : {
    goBack() {
      this.$router.push("/")
    }
  }
}

</script>

<style lang="scss" scoped>
  h1, p {
    color: #207373;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: auto;
    height: 100vh;
  }
  .button__validation {
  margin-top: 2rem ;
  padding: 0.5rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 1.5rem 1.5rem;
  background-color: #207373;
  box-shadow: 1px 1px 3px #103939;
  text-shadow: 2px 1px 3px #144848;
  color: white;
  cursor: pointer;
  &:hover {
    box-shadow: inset 2px 2px 5px #144848;
    text-shadow: 3px 1px 3px #103939;
    &:disabled {
      box-shadow: none;
      text-shadow: none;
      background: #909090;
      cursor: not-allowed;
    }
  }
  &:disabled {
    box-shadow: none;
      text-shadow: none;
      background: #909090;
  }
}
</style>
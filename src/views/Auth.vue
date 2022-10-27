<template>
    <div class="auth">
        <div class="authThings">
            <div class="navbar">
    <h1>Què farem avui?</h1>
    <div class="language">
    <select name="idioma" id="idioma">
                    <option value="cat">Català</option>
                    <option value="esp">Español</option>
                    <option value="eng">English</option>
                    <option value="fra">Français</option>
                </select>
            </div>
            </div>
    <div class="authFlex">
    <router-view></router-view>
    
    <h2>No saps distingir "Sign In" de "Log In"? 
        <br><br>Nosaltres tampoc! 
    <br><br> Aquí podràs registrar-te i/o iniciar sessió
i gaudir de la tranquil·litat de saber què has de fer!</h2>
</div>
</div>
<br>
    <Footer></Footer>
</div>
</template>
<script setup>
import Footer from '../components/Footer.vue'
</script>
<style scoped>
.navbar{
    display: flex;
    justify-content: space-between;
}
.language{
    margin: 20px;
}
select{
  background-color: cornflowerblue;
  color: white;
  border: none;
  padding: 2px;
}
.auth{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
}
.authThings{
    margin: 0px 20px;
}
.authFlex{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
}
h2{
    display: flex;
    align-items: center;
    margin-left: 20px;
    color: cornflowerblue

}
h1{
    color: beige;
    text-shadow: 1px 1px cornflowerblue;
}
.authFlex>h2{
    width: 40%;
}
@media (max-width: 670px){
h2{
    font-size: 20px;
}
}
@media (max-width: 620px){
.authFlex{
    flex-direction: column;
    align-items: center;
}
.authFlex>h2{
    width: 350px;
    text-align: center;
   
}
h2{
    font-size: 15px;
    margin: 20px 0px;
}
}
</style>
<template>
  <div class="home">
    <v-main>
      <h1>{{$route.params.user}}님의 정보페이지 입니다.</h1>
    </v-main>
  </div>
</template>

<script>

export default {
  name: 'UserView',

}
</script>

<template>
  <div class="page">
    <v-main>
        <!--동적 라우터를 이용하여 $route의 값을 저장하고 가져올 수있다-->
      <p>{{$route.params.page}}페이지 입니다</p>
    </v-main>
  </div>
</template>

<script>

export default {
  name: 'PageComponent',

}
</script>
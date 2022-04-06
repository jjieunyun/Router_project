<template>
    <v-container>
        <v-card class="pa-10">
            <v-text-field label="아이디" v-model="user" ></v-text-field>
            <v-text-field label="패스워드" type="password"></v-text-field>
            <v-card-actions>
                <v-spacer></v-spacer>

                <!--로그인 버튼을 누르면 loginUser메소드 호출-->
                <v-btn @click="loginUser">로그인</v-btn>
                <!--취소 버튼을 누르면 라우터의 push를 이용하여 '/'로 이동-->
                <v-btn @click="$router.push('/')">취소</v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name : 'LoginView',
    data : ()=>({
        user : '',
    }),
    methods : {
        loginUser : function() {
            this.$emit('login-user', this.user)
            // 컴포넌트를 '/'로 바꿈
            this.$router.push('/');
        }
    }
}
</script>

<style>

</style>
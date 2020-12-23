<template>
    <div class="card" @click="handleClick">
        <img :src="image"/>
        <p>{{name}}</p>
        <p>{{type}}</p>
        <p>{{gender}}</p>
    </div>
</template>

<script>
    export default {
        name: "Character",
        props: {
            id: {
                type: Number,
            },
            name: {
                type: String,
                required: true,
            },
            image: {
                type: String,
            },
            type: {
                type: String,
            },
            gender: {
                type: String,
            }
        },
        methods: {
            handleClick() {
                this.$router.push(`/perfil/${this.id}`);
            }
        }
    }
</script>

<style scoped>
    .card {
        width: 400px;

        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        border-radius: 5px; /* 5px rounded corners */

        margin: 20px;

        cursor: pointer;
    }
</style>
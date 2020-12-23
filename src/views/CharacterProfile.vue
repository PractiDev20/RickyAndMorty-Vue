<template>
    <div>
        <img :src="character.image"/>
        <p>{{character.name}}</p>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'

    export default {
        name: "CharacterProfile",
        created() {
            const { id } = this.$route.params;
            this.getCharacter(id);
        },
        computed: {
            ...mapState({
                character: store => store.character.currentCharacter,
            })
        },
        methods: {
            ...mapActions({
                getCharacter: "getCharacter"
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>
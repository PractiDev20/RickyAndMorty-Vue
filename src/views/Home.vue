<template>
  <div class="home">
    <div class="character-list">
      <Character
        v-for="character in characters"
        :key="character.id"
        :id="character.id"
        :name="character.name"
        :image="character.image"
        :type="character.type"
        :gender="character.gender"
      />
    </div>
  </div>
</template>

<script>

import Character from '@/components/Character.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    Character,
  },
  methods: {
    ...mapActions({
      getCharacters: "getCharacters",
    }),
  },
  computed: {
    ...mapState({
      characters: store => store.character.characters,
    }),
  },
  async created() {
    await this.getCharacters();
  },
}
</script>
<style scoped>
  .character-list {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
  }
</style>

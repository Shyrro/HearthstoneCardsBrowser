<template>
  <div class="home">
    <ChampionSelect />
  </div>
</template>

<script>
import ChampionSelect from '@/components/ChampionSelect';

export default {
  name: "Home",
  components: {ChampionSelect}
};
</script>
<style lang="scss">
.home {
  height: 100%;
}
</style>

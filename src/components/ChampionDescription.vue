<template>
    <div class="champion-description">
        <img class="champion-image" 
            :src="this.getImageUrlForChampion(this.champion.id.toString())" 
            :alt="this.champion.name">
        <span class="champion-bio">
            <p class="bio-text">
                {{ this.champion.shortBio }}
            </p>
        </span>
    </div>
</template>
<script lang="ts">
import { Prop, Component } from 'vue-property-decorator';
import { Champion } from '@/interfaces/Champion';
import BaseChampion from '@/classes/BaseChampion';

@Component
export default class ChampionDescription extends BaseChampion {
    @Prop() champion!: Champion;

    created() {
        console.log(this.champion);
    }

}
</script>
<style lang="scss">
.champion-description {
    display: flex;
    .champion-bio {
        padding: 10px;
        .bio-text {
            font-size: 25px;
            text-align: left;
        }
    }
}
</style>
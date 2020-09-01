<template>
    <div class="champ-container" v-if="this.champions.length > 5">
        <!-- <div v-if="showLoader" class="loader"></div>
        <div v-else>
            <img v-for="champion in champions"             
            class="champ-card"
            :key="champion.id"             
            :src="getImageUrlForChampion(champion.id.toString())" 
            :alt="champion.name">
        </div>         -->
        <ChampionDescription  :champion="this.champions[1]"/>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Champion } from '@/interfaces/Champion';
import BaseChampion from '@/classes/BaseChampion';
import ChampionDescription from '@/components/ChampionDescription.vue';
import axios, { AxiosResponse, AxiosError } from 'axios';

@Component({
    components: { ChampionDescription }
})
export default class ChampionSelect extends BaseChampion {
    public champions: Array<Champion> = [];
    public maxChampionsToDisplay = 30;    
    private baseUrl!: string;

    created() {
        // Not initialized in data because of inheritance and Vue lifecycles
        this.baseUrl = `https://cdn.communitydragon.org/${this.version}/champion/:championId/data`;
        
        // TODO : Create a promise for this function to use it for loader
        for(let i=0; i < this.maxChampionsToDisplay; i++) {
            const newUrl = this.baseUrl.replace(':championId', i.toString());
            axios.get<Champion>(newUrl)
                .then((c: AxiosResponse<Champion>) => {
                    this.champions.push(c.data);
                })
                .catch((err: AxiosError) => {
                    console.log(err.message);
                });
        }
    }

    get showLoader(): boolean {        
        return this.champions.length + 1 != this.maxChampionsToDisplay;
    }    
}
</script>
<style lang="scss">
.champ-container {
    height: 100%;
    
    .loader{
        background: url('../assets/loading-1.gif') no-repeat center center;
        width: 300px;
        height: 300px;
        transition: all 2s;
        margin-right: auto;
        margin-left: auto;
        justify-self: center;
    }
    .champ-card {
        cursor: pointer;
        width: 200px;
        margin: 30px;
    }
}
</style>
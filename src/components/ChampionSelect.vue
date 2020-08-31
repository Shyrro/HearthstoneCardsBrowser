<template>
    <div class="champ-container">
        <div v-if="showLoader" class="loader"></div>
        <div v-else>
            <img v-for="champion in champions"             
            class="champ-card"
            :key="champion.id"             
            :src="getImageUrlForChampion(champion.id.toString())" 
            :alt="champion.name">
        </div>        
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Champion } from '@/interfaces/Champion';
import axios, { AxiosResponse, AxiosError } from 'axios';

@Component
export default class ChampionSelect extends Vue {
    public champions: Array<Champion> = [];
    public maxChampionsToDisplay = 30;
    private version = 'latest';
    private baseUrl = `https://cdn.communitydragon.org/${this.version}/champion/:championId/data`;
    public portraitUrl = ` https://cdn.communitydragon.org/${this.version}/champion/:championId/portrait`;

    created() {
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

    getImageUrlForChampion(championId: string) : string {        
        return this.portraitUrl.replace(':championId', championId);
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
    }
    .champ-card {
        cursor: pointer;
        width: 200px;
        margin: 30px;
    }
}
</style>
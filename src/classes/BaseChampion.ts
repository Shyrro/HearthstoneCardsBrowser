import Vue from 'vue';
import { Component } from "vue-property-decorator";

@Component
export default class BaseChampion extends Vue {
    protected version = 'latest';
    public portraitUrl = ` https://cdn.communitydragon.org/${this.version}/champion/:championId/portrait`;


    protected getImageUrlForChampion(championId: string) : string {        
        return this.portraitUrl.replace(':championId', championId);
    }
}
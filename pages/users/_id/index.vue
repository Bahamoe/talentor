<template>
    <div class="w-full">
        <NuxtLink to="/users" class="font-bold text-talentor-greenDark mb-4 block">< To overview</NuxtLink>
        <div v-if="loaded" class="rounded w-full">
            <div class="w-full bg-talentor-green p-4">
                <h1 class="text-2xl lg:text-5xl font-semibold text-talentor-white">{{ candidate.name }}</h1>
            </div>
            <div class="w-full bg-talentor-white p-4">
                <p class="text-base"><Cake /> {{ candidate.age }}</p>
                <p class="text-base"><Mail /> <a :href="`mailto:${candidate.email}`">{{ candidate.email }}</a></p>
                <p class="text-base"><Location /> {{ candidate.address }}</p>
                <p class="text-base"><span class="font-bold">Current stage:</span> {{ getStageName(candidate.recruitmentStage) }}</p>
                <div class="text-right">
                    <Btn type="danger" @click.native="deleteCandidate">Delete</Btn>
                    <NuxtLink :to="`/users/${candidate.id}/edit`">
                        <Btn>Edit</Btn>
                    </NuxtLink>
                </div>
            </div>  
        </div>
    </div>
    
</template>

<script>
import { getStageName } from '~/helpers/index';

export default {
    created() {
        const candidateId = this.$route.params.id;
        const candidates = this.$store.state.candidates;
        const candidate = candidates.find(candidate => candidate.id == candidateId);
        if(candidate) {
            this.candidate = candidate;
            this.loaded = true;
        }
    },
    data() {
        return {
            candidate: null,
            loaded: false
        }
    },
    methods: {
        deleteCandidate() {
            this.$store.commit('destroy', this.candidate.id);
            this.$router.push(`/users`);
        },
        getStageName
    }
}
</script>
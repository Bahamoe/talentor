<template>
    <div v-if="loaded" class="rounded text-left w-full mx-4 rounded">
        <div class="w-full bg-talentor-green p-4">
            <h1 class="text-2xl lg:text-5xl font-semibold text-talentor-white">Editing {{ candidate.name }}</h1>
        </div>
        <div class="w-full bg-talentor-white p-4">
            <!-- <div class="grid grid-cols-3 gap-4 mb-4"> -->
                <div class="flex flex-wrap ustify-between -mx-4">
                    <div class="w-full lg:w-4/12 mb-4 px-4">
                        <InputField name="name" v-model="name" />
                    </div>
                    <div class="w-full lg:w-4/12 mb-4 px-4">
                        <InputField name="age" type="number" v-model="age"/>
                    </div>
                    <div class="w-full lg:w-4/12 mb-4 px-4">
                        <InputField name="email" type="email" v-model="email"/>
                    </div>
                    <div class="w-full lg:w-4/12 mb-4 px-4">
                        <InputField name="address" v-model="address" />
                    </div>
                    <div class="w-full lg:w-4/12 mb-4 px-4">
                        <Selector :options="stages" name="stage" v-model.number="recruitmentStage"/>    
                    </div>
                </div>
                
            <!-- </div> -->
            <div class="text-right">
                <NuxtLink :to="`/users/${candidate.id}`">
                    <Btn type="secondary">Cancel</Btn>
                </NuxtLink>
                <Btn @click.native="update">Update</Btn>
            </div>
        </div>
        
    </div>
    
</template>

<script>
import stages from '~/data/recruitmentStages';

export default {
    created() {
        const candidateId = this.$route.params.id;
        const candidates = this.$store.state.candidates;
        const candidate = candidates.find(candidate => candidate.id == candidateId);
        if(candidate) {
            this.candidate = candidate;

            this.name = candidate.name;
            this.age = candidate.age;
            this.email = candidate.email;
            this.address = candidate.address;
            this.recruitmentStage = candidate.recruitmentStage;

            this.loaded = true;
        }
    },
    data() {
        return {
            candidate: null,
            loaded: false,
            name: null,
            age: null,
            email: null,
            address: null,
            recruitmentStage: null
        }
    },
    computed: {
        stages() {
            return stages;
        }
    },
    methods: {
        update() {
            const { name, age, email, address, recruitmentStage } = this;
            
            const updatedCandidate = {
                id: this.candidate.id,
                name,
                age,
                email,
                address,
                recruitmentStage
            }
            this.$store.commit('update', updatedCandidate);
            this.$router.push(`/users/${updatedCandidate.id}`);
        }
    }
}
</script>

<style>

</style>
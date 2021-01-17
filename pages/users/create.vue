<template>
    <div>
        
        <h1 class="text-5xl text-left">Create user</h1>
        <div class="w-full bg-talentor-white p-4 rounded">
            <div class="flex flex-wrap ustify-between -mx-4">
                <div class="w-full lg:w-4/12 mb-4 px-4">
                    <InputField name="name" v-model="name" />
                </div>
                <div class="w-full lg:w-4/12 mb-4 px-4">
                    <InputField name="age" type="number" v-model="age" />
                </div>
                <div class="w-full lg:w-4/12 mb-4 px-4">
                    <InputField name="email" type="email" v-model="email" />
                </div>
                <div class="w-full lg:w-4/12 mb-4 px-4">
                    <InputField name="address" v-model="address" />
                </div>
                <div class="w-full lg:w-4/12 mb-4 px-4">
                    <Selector :options="stages" name="stage" v-model.number="recruitmentStage"/> 
                </div>
            </div>
            <div class="text-right">
                
                <NuxtLink to="/users"><Btn type="secondary">Cancel</Btn></NuxtLink>
                <Btn @click.native="create">Create</Btn>
            </div>
        </div>
    </div>
</template>

<script>
import stages from '~/data/recruitmentStages';
import { idMaker } from '~/helpers/index';


export default {
    data() {
        return {
            name: null,
            age: null,
            email: null,
            address: null,
            recruitmentStage: 1,
        }
    },
    computed: {
        stages() {
            return stages;
        }
    },
    methods: {
        create() {
            const { name, age, email, address, recruitmentStage } = this;
            
            const candidateId = idMaker();
            const newCandidate = {
                id: candidateId,
                name,
                age,
                email,
                address,
                recruitmentStage
            }
            this.$store.commit('add', newCandidate);
            this.$router.push(`/users/${newCandidate.id}`);
        }
    }
}
</script>

<style>

</style>
<template>
    <div class="w-full">
        <div class="flex justify-between items-center">
            <h1 class="text-5xl text-left">Candidates</h1>
            <NuxtLink to="/users/create">
                <Btn type="secondary">New</Btn>
            </NuxtLink>
        </div>
        <div class="w-full mb-4">
           <SearchField @search="handleSearch" />
        </div>
        <div v-if="candidates" class="flex flex-wrap ustify-between -mx-4">
            <div
                v-for="(candidate, index) in candidates"
                :key="`candidate-${index}`"
                class="w-full lg:w-4/12 mb-4 px-4"
            >
                <Card :candidate="candidate" />
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            searchQuery: null,
        }
    },
    computed: {
        candidates() {
            return this.$store.getters.candidates(this.searchQuery);
        }
    },
    methods: {
        handleSearch(searchQuery) {
            console.log(searchQuery);
            if(searchQuery.length > 2) {
                this.searchQuery = searchQuery;
            }else{
                this.searchQuery = null;
            }
        }
    }
}
</script>

<style>

</style>
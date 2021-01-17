<template>
    <div class="shadow-md">
        <div class="w-full bg-talentor-green text-center p-4">
            <p class="text-lg font-bold text-talentor-white">{{ candidate.name }}</p>
        </div>
        <div class="w-full bg-talentor-white px-2 py-4 text-center shadow-md">
            <p class="text-base"><Cake /> {{ candidate.age }}</p>
            <p class="text-base"><Mail /> <a :href="`mailto:${candidate.email}`">{{ candidate.email }}</a></p>
            <p class="text-base"><Location /> {{ candidate.address }}</p>
            <p class="text-base"><span class="font-bold">Current stage:</span> {{ getStageName(candidate.recruitmentStage) }}</p>
            <span class="block border border-talentor-grey w-2/4 mx-auto my-4"></span>
            <NuxtLink
                :to="`/users/${candidate.id}`"
                class="text-base font-bold mb-4 text-talentor-green hover:text-talentor-greenDark"
            >
                Show
            </NuxtLink>
        </div>
    </div>

</template>

<script>
import stages from '~/data/recruitmentStages';
import { getStageName } from '~/helpers/index';

export default {
    props: {
        candidate: {
            type: Object,
            required: true,
        }
    },
    methods: {
        getStageName
    }

}
</script>
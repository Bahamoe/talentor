<template>
    <div class="text-left">
        <label :for="inputId" class="capitalize block">{{ name }}</label>
        <select
            :id="inputId"
            class="w-full text-talentor-black border-2 bg-talentor-grey border-talentor-greyDark rounded px-4 py-2"
            :name="name"
            :value="value"
            @change="$emit('input', $event.target.value)"
        >
            <option v-for="option in options" :value="option.id" :key="option.id">{{ option.name }}</option>
        </select>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        options: {
            type: Array,
            required: true
        },
        value: {
            type: Number,
            default: 1,
        }
    },
    computed: {
        inputId() {
            return `inputfield-${this.name}`;
        }
    }
}
</script>

<style>

</style>
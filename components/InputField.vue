<template>
    <div class="text-left">
        <label :for="inputId" class="capitalize block">{{ name }}</label>
        <input
            :id="inputId"
            class="w-full text-talentor-black border-2 bg-talentor-grey border-talentor-greyDark rounded px-4 py-2"
            :name="name"
            :type="type"
            :value="value"
            @input="$emit('input', $event.target.value)"
        />
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            default: 'text',
        },
        value: {}
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
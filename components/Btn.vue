<template>
    <button class="btn" :class="[typeClass]"><slot></slot></button>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'primary'
        },
    },
    computed: {
        typeClass() {
            return `btn--${this.type}`;
        }
    }
}
</script>

<style lang="scss" scoped>
    .btn {
        @apply py-2 px-4 text-talentor-white font-semibold rounded-lg shadow-md duration-100 ease-in-out;
        &:hover {
            @apply bg-talentor-greenDark;
        }
        &:focus {
            @apply outline-none;
        }
        &--primary {
            @apply bg-talentor-green border-talentor-green border-2;
            &:hover {
                @apply bg-talentor-greenDark border-talentor-greenDark;
            }
        }
        &--secondary {
            @apply bg-talentor-white text-talentor-green border-talentor-green border-2;
            &:hover {
                @apply bg-talentor-green text-talentor-white;
            }
        }
        &--danger {
            @apply bg-talentor-danger border-talentor-danger border-2;
            &:hover {
                @apply bg-talentor-dangerDark border-talentor-dangerDark;
            }
        }
    }
</style>
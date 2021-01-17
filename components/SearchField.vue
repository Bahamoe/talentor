<template>
    <div>
        <input
            placeholder="Search"
            class="w-full text-talentor-black border-2 border-talentor-green outline-none rounded px-4 py-2"
            @input="$emit('search', $event.target.value)"
        />
    </div>
</template>
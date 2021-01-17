<template>
    <div class="welcome-box flex justify-center items-start">
        <div class="text-center">
            <p class="text-2xl text-talentor-black font-bold">Welcome to Talentor!</p>
            <p class="text-1xl text-talentor-black mb-4">Talentor is a tool to manage your candidates.</p>
            <NuxtLink to="/users">
                <Btn>To the candidates!</Btn>
            </NuxtLink>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style>
.welcome-box {
    /* height: calc(100vh - 62px); */
}
</style>

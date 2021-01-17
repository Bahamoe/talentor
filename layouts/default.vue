<template>
    <div class="bg-talentor-blue">
        <Header />
        <div class="container">
            <Nuxt />
        </div>
    </div>
</template>

<style>
html {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
}

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
}
p, h1, h2, h3, h4, h5, h6 {
    @apply text-talentor-black;
}
.container {
    @apply flex justify-center mx-auto px-4 py-24;
    min-height: calc(100vh - 62px);
}
.talentor-icon {
    display: inline-block;
    font-size: inherit;
    overflow: visible;
    width: 0.875em;
    height: 1em;
    vertical-align: -0.125em;
}
</style>

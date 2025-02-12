<template>
    <Teleport to="#haha">
        <div class="background">
            <h1>Popup Box</h1>
            <header>
                <slot name="header">Default Header</slot>
            </header>
            <div>
                <slot>Default Body</slot>
            </div>
            <div>
                <slot>Default Body 2</slot>
            </div>
            <footer>
                <slot name="footer">Default Footer</slot>
            </footer>
        </div>
    </Teleport>
</template>

<style lang="css" scoped>
.background {
    background: rgba(0, 0, 0, 0.1);
}
</style>

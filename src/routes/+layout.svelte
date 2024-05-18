<script>
    import { page } from '$app/stores'
    $: currentRoute = $page.url.pathname
    const menu = [{name: 'Home', href: '/'}, {name: 'Cica', href: '/cica'}]
</script>
<div class="menu">
    {#each menu as item}
        <a class={currentRoute === item.href ? 'active' : ''} href={item.href}>{item.name}</a>
    {/each}
</div>
<slot />
<style>
:global(body) {
    margin: 0px;
    background-color: aqua;
    text-align: center;
}
.menu {
    text-align: right;
    background-color: black;
    color: white;
}
a.active {
    background-color: white;
    color: black;
}
a {
    all:unset;
    font-family:'Courier New', Courier, monospace;
    font-weight: bold;
    font-size: 16px;
    padding: 5px;
    padding-left: 20px;
    padding-right: 20px;
    display: inline-block;
    cursor: pointer;
    transition: 0.4s;
}
a:hover {
    background-color: rgb(185, 185, 185);
    color: rgb(57, 57, 57);
}
a:hover.active {
    background-color: white;
    color: black;
    cursor: default;
    box-shadow: 0px 0px 10px inset red;
}
</style>
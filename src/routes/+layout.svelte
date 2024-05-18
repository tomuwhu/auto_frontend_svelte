<div class="menu">
    <a href="/">Home</a> | <a href="/cica">Cica</a>
</div>
<slot />
<style>
:global(body) {
    margin: 0px;
    background-color: aqua;
    text-align: center;
}
.menu {
    background-color: black;
    color: white;
}
a {
    all:unset;
    padding: 5px;
    display: inline-block;
    cursor: pointer;
}
a:hover {
    background-color: white;
    color: black;
}
</style>
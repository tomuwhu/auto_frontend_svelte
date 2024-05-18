<script>
    import { blur } from 'svelte/transition'
    export let data
    export let form
    var x = data.post
</script>
<h1>Gyökér {data.post}</h1>
{#if form?.x1}Utolsó: {form.x1} {/if}
<h2>
    Reactív elem példa:
    <button on:click={() => x--}>-</button>
        <div class=xc>
        {#key x}<span in:blur out:blur>{x}</span>{/key}
        </div>
    <button on:click={() => x++}>+</button>
    <hr>
</h2>
<h2>Form + Adatbázis Full-Stack Példa</h2>
<form method=post>
    <label for=x1>Állat neve:</label>
    <input type=text name=x1 id=x1>
    <label for=x1>Állat mérete:</label>
    <input type=number name=x2 id=x2>
    <button>Felvesz</button>
</form>
<hr>
<div class="c">
{#each data.all as item}
<div>{item.x1}</div><div>{item.x2}</div>
{/each}
</div>
<style>
    div.xc {
        width: 100px;
        display: inline-block;
        border: 1px solid black;
        padding: 6px;
        border-radius: 6px;
        margin: 2px;
        background-color: rgb(213, 212, 212);
        box-shadow: 1px 1px 3px inset black;
        text-shadow: 1px 1px 3px gray
    }
.c {
    display: inline-grid;
    grid-template-columns: repeat(2, 1fr);
    border: 1px solid black;
    border-radius: 10px;
    padding: 3px;
    background-color: rgb(108, 108, 108);
}
.c div {
    border: 1px solid black;
    padding: 6px;
    border-radius: 6px;
    margin: 2px;
    background-color: rgb(213, 212, 212);
    box-shadow: 1px 1px 3px inset black;
}
h1 {
    color: rgb(25, 36, 65);
    text-shadow: 1px 1px 3px gray;
}
input, button, label {
    padding: 7px;
}
label, button {
    border-radius: 7px;
    box-shadow: 1px 1px 3px black;
    background-color: darkkhaki;
    color: rgb(88, 50, 50);
    text-shadow: 1px 1px 3px gray;
}
button {
    cursor: pointer;
}
button:hover {
    background-color: rgb(199, 116, 114);
}
</style>
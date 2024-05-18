<script>
    var l = [
        {type: 'text', name: "x1"},
        {type: 'range', name: "x2", min: 0, max: 100},
        {type: 'number', name: "x3"},
        {type: 'date', name: "x4"},
        {type: 'color', name: "x5"},
    ], vl = [5, 20, 15, '2021-10-01', '#456743']
</script>
<h1>Cica, vagy semmi</h1>
<h2>Form elemek</h2>
<div class="c">
{#each l as o, i}
    <div><input type="text" {...o} bind:value={vl[i]}></div>
    <div>{vl[i]}</div>
{/each}
</div>
<style>
    h1 {
        color: rgb(90, 27, 27);
        text-shadow: 1px 1px 3px gray;
        user-select: none;
        cursor: none;
    }
    h1:hover {
        animation: 3s pulse;
    }
    @keyframes pulse {
        0% {
            filter: blur(1px);
        }
        100% {
            filter: blur(30px);
        }
    }
    div.c {
        display: inline-grid;
        grid-template-columns: repeat(2, 1fr);
    }
    .c div {
        border: 1px solid black;
        padding: 8px;
        margin: 3px;
    }
</style>
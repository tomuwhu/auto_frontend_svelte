<script>
	import { onMount } from "svelte"
    var auth_token = "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsImp0aSI6IjJiYzM2MDcxLTQzMmQtNDUxNi04M2M4LTRlZDQwMTZhN2QyYiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiZXhwIjoxNzE1OTUyMDU4fQ.L34DoRFuR_-FPFj0ZJaMynr8ZKCv1u-BMrYOTe-fiXM"
    var o = {
        async addCar(car) {
        const token = auth_token // Token lekérdezése
        try {
            const response = await fetch('http://localhost:5235/api/Car', {
                method: 'POST',
                headers: {
                'Authorization': `Bearer ${auth_token}`,
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(car) // A car objektumot JSON-be konvertáljuk
            })
            if (response.ok) {
                const data = await response.json()
                adatok.push(data) // Az új autót hozzáadjuk a cars tömbhöz
                adatok = adatok
                console.log('Sikeres autó hozzáadása!')
            } else {
                console.error('Hiba az autó hozzáadásakor:', error)
            }
            } catch (error) {
                console.error('Hiba az autó hozzáadásakor:', error)
            }
        },
        async deleteCar(id) {
            const token = auth_token
            try {
            const response = await fetch(`http://localhost:5235/api/Car/${id}`, {
                method: 'DELETE',
                headers: {
                'Authorization': `Bearer ${auth_token}`
                }
            });
        
            if (response.ok) {
                adatok = adatok.filter(car => car.id !== id); // Töröljük az autót a cars tömbből
                console.log('Sikeres autó törlése!');
            } else {
                console.error('Hiba az autó törlésekor:', error);
            }
            } catch (error) {
            console.error('Hiba az autó törlésekor:', error);
            }
        }
    }
    var adatok = []
    onMount(async () => {
        const token = auth_token
        try {
            const response = await fetch('http://localhost:5235/api/Car', {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            })
    
            if (response.ok) {
            const data = await response.json()
            adatok = data;
            } else {
            console.error('Hiba a lekérdezés során:', error)
            }
        } catch (error) {
            console.error('Hiba a lekérdezés során:', error)
        }
    })
</script>
<h1>Autós frontend Dávidnak</h1>
<div class="c">
    {#each adatok as item}
    <div>{item.id}</div>
    <div>{item.brand}</div>
    <div>{item.model}</div>
    <div>{item.year}</div>
    <div>
        <button on:click={() => o.deleteCar(item.id)}>Töröl</button>
    </div>
{/each}
</div>
<hr>
<form>
    <div class="c2">
    <div>
    <label for="brand">Marka:</label>
    </div>
    <div>
    <input type="text" name="brand" id="brand">
    </div>
    <div>
    <label for="model">Modell:</label>
    </div>
    <div>
    <input type="text" name="model" id="model">
    </div>
    <div>
    <label for="year">Évjárat:</label>
    </div>
    <div>
    <input type="number" name="year" id="year">
    </div>
    <div>
        <button on:click={() => {
            o.addCar({
                brand: document.getElementById('brand').value,
                model: document.getElementById('model').value,
                year: document.getElementById('year').value
            })
        }}>Felvesz</button>
    </div>
    <div>
        <button>Módosít</button>
    </div>
    </div>
</form>
<style>
.c {
    display: inline-grid;
    grid-template-columns: repeat(5, 1fr);
    border: 1px solid black;
    border-radius: 10px;
    padding: 3px;
    background-color: rgb(108, 108, 108);
}
.c2 {
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
    text-shadow: 1px 1px 3px gray;
}
.c2 div {
    border: 1px solid black;
    padding: 6px;
    border-radius: 6px;
    margin: 2px;
    background-color: rgb(213, 212, 212);
    box-shadow: 1px 1px 3px inset black;
    text-shadow: 1px 1px 3px gray;
}
</style>
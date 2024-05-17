import Database from 'better-sqlite3'
const db = new Database('mydb.db')
var x = 2
export function load() {
    const stmt = db.prepare('SELECT * FROM t1').all()
	return {
		post: x++, all: stmt
	}
}
export const actions = {
	default: async ({request}) => {
		const data = await request.formData()
        var x1 = data.get('x1'), x2 = data.get('x2')
        const stmt = db.prepare('INSERT INTO t1 VALUES(?, ?)')
            .run(data.get('x1'), data.get('x2'))
        return {
            x1, x2
        }
	}
}
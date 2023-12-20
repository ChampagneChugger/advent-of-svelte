import type { Listofkids } from "$lib/types"

export async function load() {
    const res = await fetch("https://advent.sveltesociety.dev/data/2023/day-one.json")
    const data = await res.json()

    return {
        listofkids: data as Listofkids[]
    }
}
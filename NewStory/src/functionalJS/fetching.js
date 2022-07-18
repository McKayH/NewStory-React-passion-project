export async function fetchBooks(select, page){
    const get = await fetch(`https://openlibrary.org/subjects/${select}?offset=${page}`);
    return get.json();
}

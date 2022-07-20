export async function fetchBooks(select, page){
    const get = await fetch(`https://openlibrary.org/subjects/${select}?offset=${page}`);
    return get.json();
}

export async function fetchTitle(title) {
    const get = await fetch(`http://openlibrary.org/search.json?title=${title}`);
    return get.json();
}
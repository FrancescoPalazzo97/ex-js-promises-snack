const API_POST = `https://dummyjson.com/posts/`;
const API_USERS = `https://dummyjson.com/users/`;

const getPostTitle = id => {
    return new Promise((res, rej) => {
        fetch(`${API_POST}${id}`)
            .then(response => response.json())
            .then(post => res(post.title))
            .catch(rej)
    })
}

getPostTitle(1)
    .then(title => console.log(`Titolo: ${title}`))
    .catch(err => console.error(err))

getPostTitle(2)
    .then(title => console.log(`Titolo: ${title}`))
    .catch(err => console.error(err))
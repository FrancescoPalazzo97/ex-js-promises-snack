const API_POST = `https://dummyjson.com/posts/`;
const API_USERS = `https://dummyjson.com/users/`;

const getPost = id => {
    return new Promise((resolve, reject) => {
        fetch(`${API_POST}${id}`)
            .then(res => res.json())
            .then(post => {
                fetch(`${API_USERS}${post.userId}`)
                    .then(res => res.json())
                    .then(user => {
                        const newObj = {
                            ...post,
                            user
                        }
                        resolve(newObj)
                    })
            })
            .catch(reject)
    })
}

// const getPostTitle = id => {
//     return new Promise((res, rej) => {
//         fetch(`${API_POST}${id}`)
//             .then(response => response.json())
//             .then(post => res(post.title))
//             .catch(rej)
//     })
// }

getPost(1)
    .then(post => console.log(`Post completo:`, post))
    .catch(err => console.error(err))
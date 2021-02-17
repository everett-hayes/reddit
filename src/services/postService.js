class postService {

    constructor() {
        this.baseURL = 'https://polar-basin-60578.herokuapp.com/api/v1/posts';
    }

    getPosts() {
        return fetch(this.baseURL)
                .then(response => response.json())
                .then(data => {
                    return data;
                })
                .catch(error => console.warn(error));
    }

    getPostById(id) {
        return fetch(this.baseURL + '/' + id)
                .then(response => response.json())
                .then(data => {
                    return data;
                })
                .catch(error => console.warn(error));
    }

    createPost(content) {
        let post =  {
            content: content
        }

        return fetch(this.baseURL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ post }),
        })
    }

    updatePostById(id, content) {
        let post =  {
            content: content
        }

        return fetch(this.baseURL + '/' + id, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ post })
        })
    }

    deletePostById(id) {
        return fetch(this.baseURL + '/' + id, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            }
        })
    }



}


const myPostService = new postService();
    
myPostService.getPosts().then((res) => {

    for (let item of res) {
        console.log(JSON.stringify(item, null, 2));
        renderPost(item);
    }

})

function render() {
    renderContainer();
}

function renderContainer(sortMethod) {

    let posts = [];

    myPostService.getPosts().then((res) => {
        posts = res;
    })

    if (sortMethod === 'vote') {
        posts.sort((a,b) => (a.vote > b.vote) ? 1 : -1);
    } 

    for (let post of posts) {
        renderPost(post);
    }

}

function vote(index, direction) {

    let count = parseInt($(`#post-${index}-vote`).html());

    (direction === 'up') ? count++ : count--;

    post = {
        content : $(`#post-${index}-content`).html(),
        vote: count
    }

    console.log(post);
    //myPostService.updatePostById(index, post);
    $(`#post-${index}-vote`).html(count);
}

function renderPost(post) {
    let html = `<div id="post-${post.id}" class="post">
                    <div id="post-voting" class="postVote">
                        <button class="btn" onclick="vote(${post.id}, 'up');"><i class="fa fa-arrow-up"></i></button>
                        <p id="post-${post.id}-vote" class="voteCount">${post.vote}</p>
                        <button class="btn" onclick="vote(${post.id}, 'down');"><i class="fa fa-arrow-down"></i></button>
                    </div>
                    <div id="post-${post.id}-content">
                        ${post.content}
                    </div>
                </div>`;

    $('#postContainer').append(html);
}
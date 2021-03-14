'use script';

let REDDIT_INDEX_PAGE = (function () {

    let myPostService = new postService();
    let posts;

    function render() {

        let promise = getPosts()
            .then(renderContainer)
        ;

        return promise;
    }
    
    function getPosts() {
        let promise = myPostService.getPosts()
            .then((res) => {
                posts = res;
            })    

        return promise;
    }
    
    function renderContainer(sortMethod) {

        $('#mySpinner').hide();

        if (sortMethod === 'vote') {
            posts.sort((a,b) => (a.vote > b.vote) ? 1 : -1);
        } else if (sortMethod === 'recent') {
            posts.sort((a,b) => (a.created_at > b.created_at) ? 1 : -1);
        }
    
        for (let post of posts) {
            renderPost(post);
        }
    
    }

    function renderPost(post) {
        let html = `<div id="post-${post.id}" class="post">
                        <div id="post-voting" class="postVote">
                            <button class="btn" onclick="REDDIT_INDEX_PAGE.vote(${post.id}, 'up');"><i class="fa fa-arrow-up"></i></button>
                            <p id="post-${post.id}-vote" class="voteCount">${post.vote}</p>
                            <button class="btn" onclick="REDDIT_INDEX_PAGE.vote(${post.id}, 'down');"><i class="fa fa-arrow-down"></i></button>
                        </div>
                        <div id="post-${post.id}-content">
                            ${post.content}
                        </div>
                    </div>`;
    
        $('#postContainer').append(html);
    }
    
    function vote(index, direction) {
    
        let count = parseInt($(`#post-${index}-vote`).html());
    
        (direction === 'up') ? count++ : count--;
    
        post = {
            content : $(`#post-${index}-content`).html(),
            vote: count
        }
    
        //myPostService.updatePostById(index, post);
        $(`#post-${index}-vote`).html(count);
    }

    return {
        render : render,
        vote : vote
    }

}());
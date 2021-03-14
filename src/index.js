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

        if (sortMethod == null) sortMethod = 'recent';

        $('#mySpinner').hide();
        $('#postContainer').empty();

        if (sortMethod === 'vote') {
            posts.sort((a,b) => (a.vote < b.vote) ? 1 : -1);
        } else if (sortMethod === 'recent') {
            posts.sort((a,b) => (a.id < b.id) ? 1 : -1);
        }

        console.log(JSON.stringify(posts, null , 2));
    
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
                        <p id="post-${post.id}-content">${post.content}</p>
                    </div>`;
    
        $('#postContainer').append(html);
    }
    
    function vote(index, direction) {
    
        let count = parseInt($(`#post-${index}-vote`).html());
    
        (direction === 'up') ? count++ : count--;
    
        post = {
            content : $(`#post-${index}-content`).text(),
            vote: count
        }

        console.log(JSON.stringify(post, null , 2));
        //console.log(JSON.stringify(post, null, 2));
        myPostService.updatePostById(index, post);

        $(`#post-${index}-vote`).html(count);
    }

    return {
        render : render,
        vote : vote,
        renderContainer : renderContainer
    }

}());
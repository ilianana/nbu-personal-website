document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('comment-form');
    const commentsSection = document.getElementById('comments-section');

    function addComment(name, comment) {
        const newComment = document.createElement('div');
        newComment.classList.add('comment');

        const commentAuthor = document.createElement('h4');
        commentAuthor.textContent = name;
        newComment.appendChild(commentAuthor);

        const commentText = document.createElement('p');
        commentText.textContent = comment;
        newComment.appendChild(commentText);

        commentsSection.appendChild(newComment);
    }

    commentForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const comment = document.getElementById('comment').value;

        addComment(name, comment);

        // Clear the form
        commentForm.reset();
    });
});

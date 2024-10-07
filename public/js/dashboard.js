// Handle creating a new post
document.querySelector('#new-post-form').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value.trim();
    const content = document.querySelector('textarea[name="post-content"]').value.trim();
  
    if (title && content) {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');+
        alert('Failed to create post.');
      }
    }
  });
  
  // Handle updating an existing post
  document.querySelectorAll('.edit-post-btn').forEach((btn) => {
    btn.addEventListener('click', async (event) => {
      const id = event.target.getAttribute('data-id');
      const title = document.querySelector(`input[name="post-title-${id}"]`).value.trim();
      const content = document.querySelector(`textarea[name="post-content-${id}"]`).value.trim();
  
      if (title && content) {
        const response = await fetch(`/api/posts/${id}`, {
          method: 'PUT',
          body: JSON.stringify({ title, content }),
          headers: { 'Content-Type': 'application/json' },
        });
  
        if (response.ok) {
          document.location.replace('/dashboard'); 
          alert('Failed to update post.');
        }
      }
    });
  });
  
  // Handle deleting a post
  document.querySelectorAll('.delete-post-btn').forEach((btn) => {
    btn.addEventListener('click', async (event) => {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard'); 
      } else {
        alert('Failed to delete post.');
      }
    });
  });  
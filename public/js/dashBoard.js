const newBlog = async (event) => {

    event.preventDefault();
    console.log("newBlog function called");
    const title = document.querySelector('#title').value.trim();

    const content = document.querySelector('#content').value.trim();
    const author = "fafan";


    console.log(title);
    console.log(content);
  
    if (title && content ) {
      const response = await fetch(`/api/newBlogs`, {
        method: 'POST',
        body: JSON.stringify({ author, title, content}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/blog');
      } else {
        alert('Failed to create project');
      }
    }
  };

document
  .querySelector('.contentForm')
  .addEventListener('submit', newBlog);



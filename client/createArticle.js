const submitArticle = () => {
  const title = document.getElementById('title').value;
  const body = quill.root.innerHTML;

  const form = {
    title: title,
    body: body,
    author: 'fred from FORM',
  };

  const sendForm = async () => {
    const rawResponse = await fetch('http://127.0.0.1:3000/api/article', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });
    const content = await rawResponse.json();
    console.log(content);
  };

  sendForm();
};

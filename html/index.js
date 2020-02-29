const getButton = document.getElementById("get");
const postButton = document.getElementById("post");
const indexContent = document.getElementById("div-content");
const inputTitle = document.getElementById("title");
const inputContent = document.getElementById("content");

getButton.addEventListener("click", () => {
  fetch("http://localhost:8080/feed/posts")
    .then(res => res.json())
    .then(resData => {
      console.log(resData);
      const { id, title, content } = resData;

      indexContent.insertAdjacentHTML(
        "afterbegin",
        `<h1>${id}</h1><h1>${title}</h1><hr><p>${content}</p>`
      );
    })
    .catch(err => console.log(err));
});

postButton.addEventListener("click", () => {
  fetch("http://localhost:8080/feed/post", {
    method: "POST",
    body: JSON.stringify({
      title: inputTitle.value,
      content: inputContent.value
    }),
    headers: {
      "Content-Type": "application/json"
    }
  });
});

const getButton = document.getElementById("get");
const postButton = document.getElementById("post");
const indexContent = document.getElementById("content");

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

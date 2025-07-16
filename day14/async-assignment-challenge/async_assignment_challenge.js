const fetchMultiplePosts = async (...postIds) => {
  const results = {};

  for (const id of postIds) {
    if (isNaN(id) || id < 1 || id > 100) {
      results[`post${id}`] = `에러: 유효한 ID(1-100)가 아닙니다.`;
      continue;
    }

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      results[`post${id}`] = data.title;
    } catch (error) {
      results[`post${id}`] = `에러: ${error.message}`;
    }
  }

  return results;
};

const runChallenge = function () {
  const postIdsInput = document.getElementById("postIds");
  const fetchButton = document.getElementById("fetchPosts");
  const outputDiv = document.getElementById("output");

  fetchButton.addEventListener("click", async () => {
    const postIds = postIdsInput.value.split(",").map(Number);

    if (postIds.some(isNaN) || postIds.some(id => id < 1 || id > 100)) {
        outputDiv.innerHTML = `<div class="error">유효한 ID(1-100)를 입력하세요!</div>`;
        return;
    }

    fetchButton.disabled = true;
    outputDiv.innerHTML = "";

    const posts = await fetchMultiplePosts(...postIds);

    for (const key in posts) {
      const postElement = document.createElement("div");
      postElement.classList.add("post");
      postElement.textContent = `${key}: ${posts[key]}`;
      outputDiv.appendChild(postElement);
    }

    fetchButton.disabled = false;
  });
};

runChallenge();

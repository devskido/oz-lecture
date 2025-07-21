const apiUrl = "https://jsonplaceholder.typicode.com";

// 포스트 상세 정보 표시
async function displayPostDetail() {
    // URL에서 postId 가져오기
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const postId = urlParams.get("postId");
        if (!postId) throw new Error("No post ID provided");
        let post = {};
        
        // localStorage에서 캐시 확인 (도전 과제)
        const cacheKey = `post_${postId}`;
        const cachedData = localStorage.getItem(cacheKey);
        
        if (cachedData) {
            const parsedCache = JSON.parse(cachedData);
            const currentTime = Date.now();
            const cacheTime = parsedCache.timestamp;
            const fiveMinutes = 5 * 60 * 1000; // 5분을 밀리초로 변환
            
            // 캐시가 5분 이내인지 확인
            if (currentTime - cacheTime < fiveMinutes) {
                post = parsedCache.data;
                console.log("Post loaded from localStorage");
            } else {
                // 캐시가 만료된 경우 localStorage에서 제거
                localStorage.removeItem(cacheKey);
                post = await fetchPostFromAPI(postId);
            }
        } else {
            // 캐시가 없으면 API에서 가져오기
            post = await fetchPostFromAPI(postId);
        }
        
        renderPost(post);
    } catch (error) {
        console.error("Error:", error.message);
        document.getElementById("post-detail").innerHTML = "<p>Error loading post details</p>";
    }
}

// API에서 포스트 데이터를 가져오고 localStorage에 저장하는 함수
async function fetchPostFromAPI(postId) {
    const response = await fetch(`${apiUrl}/posts/${postId}`);
    if (!response.ok) throw new Error("Failed to fetch post");
    const post = await response.json();
    
    // localStorage에 캐시 저장 (타임스탬프와 함께)
    const cacheKey = `post_${postId}`;
    const cacheData = {
        data: post,
        timestamp: Date.now()
    };
    localStorage.setItem(cacheKey, JSON.stringify(cacheData));
    
    console.log("Post fetched from API");
    return post;
}

// 포스트 렌더링 함수
function renderPost(post) {
    const postDetail = document.getElementById("post-detail");
    postDetail.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
    `;
}

// 페이지 로드 시 포스트 상세 정보 표시
displayPostDetail();
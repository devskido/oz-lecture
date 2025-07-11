// ## 기본 과제 (리팩토링) ##

// 1. 변수와 배열 선언
const defaultGenre = "Unknown";
let movies = [];
var movieCount; // 'var' for function scope demonstration

// 2. 영화 객체 생성
const movie1 = { title: "The Matrix", director: "Wachowskis", year: 1999, genre: "Sci-Fi" };
const movie2 = { title: "Inception", director: "Nolan", year: 2010, genre: "Sci-Fi" };
const movie3 = { title: "Parasite", director: "Bong", year: 2019, genre: "Drama" };
const movie4 = { title: "The Godfather", director: "", year: 1972, genre: "Crime" };

movies.push(movie1, movie2, movie3, movie4);

// --- 헬퍼 함수 ---
// 영화 객체 하나를 포맷팅하는 함수
function formatMovie(movie, index) {
  const title = movie.title || "Unknown Title";
  const director = movie.director || "Unknown Director";
  const year = movie.year || "Unknown Year";
  const genre = movie.genre || defaultGenre;
  return `${index + 1}. Title: ${title}, Director: ${director}, Year: ${year}, Genre: ${genre}`;
}

// 3. 영화 목록 출력 함수 (개선됨)
function printMovies(movieArray) {
  console.log("Movie Collection:");
  movieArray.forEach((movie, index) => {
    console.log(formatMovie(movie, index));
  });
  movieCount = movieArray.length;
  console.log(`Total Movies: ${movieCount}`);
}

// 기본 과제 실행
printMovies(movies);


// ## 도전 과제 (리팩토링) ##

console.log("\n--- Challenge Tasks ---");

// 1. 영화 검색 (특정 장르) (개선됨)
function searchByGenre(movieArray, searchGenre) {
  console.log(`\nSearching for ${searchGenre} movies...`);
  const foundMovies = movieArray.filter(movie => movie.genre && movie.genre.toLowerCase() === searchGenre.toLowerCase());

  if (foundMovies.length > 0) {
    foundMovies.forEach((movie, index) => {
      console.log(formatMovie(movie, index)); // 헬퍼 함수 재사용
    });
  } else {
    console.log(`No movies found for genre: ${searchGenre}.`);
  }
}

// 영화 검색 실행
searchByGenre(movies, "Sci-Fi");
searchByGenre(movies, "Comedy");


// 2. 통계 계산
const calculateAverageYear = function(movieArray) {
  if (movieArray.length === 0) return 0;
  const totalYears = movieArray.reduce((sum, movie) => sum + (movie.year || new Date().getFullYear()), 0);
  return (totalYears / movieArray.length).toFixed(0);
};

const findNewestMovie = (movieArray) => {
  if (movieArray.length === 0) return null;
  return movieArray.reduce((newest, movie) => (movie.year > newest.year ? movie : newest), movieArray[0]);
};

console.log("\nStatistics:");
const avgYear = calculateAverageYear(movies);
const newestMovie = findNewestMovie(movies);
console.log(`Average Year: ${avgYear}`);
if (newestMovie) {
    console.log(`Newest Movie: ${newestMovie.title} (${newestMovie.year})`);
}


// 3. ...rest를 사용하여 여러 영화 추가
function addMovies(...newMovies) {
    console.log("\nAdding new movies...");
    movies.push(...newMovies);
}

const extraMovie1 = { title: "Dune", director: "Villeneuve", year: 2021, genre: "Sci-Fi" };
const extraMovie2 = { title: "Everything Everywhere All at Once", director: "Daniels", year: 2022, genre: "Action" };

addMovies(extraMovie1, extraMovie2);

// 추가 후 전체 목록 다시 출력
console.log("\nUpdated Movie Collection:");
printMovies(movies);
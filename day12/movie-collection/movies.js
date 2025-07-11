// ## 기본 과제 ##

// 1. 변수와 배열 선언
const defaultGenre = "Unknown";
let movies = [];
var movieCount; // 'var' for function scope demonstration

// 2. 영화 객체 생성 (최소 3개)
const movie1 = { title: "The Matrix", director: "Wachowskis", year: 1999, genre: "Sci-Fi" };
const movie2 = { title: "Inception", director: "Nolan", year: 2010, genre: "Sci-Fi" };
const movie3 = { title: "Parasite", director: "Bong", year: 2019, genre: "Drama" };
const movie4 = { title: "The Godfather", director: "", year: 1972, genre: "Crime" }; // director가 비어있음

movies.push(movie1, movie2, movie3, movie4);

// 3. 영화 목록 출력 함수 (함수 선언문)
function printMovies(movieArray) {
  console.log("Movie Collection:");
  for (let i = 0; i < movieArray.length; i++) {
    let movie = movieArray[i];
    // 매개변수 기본값 처리 (빈 속성 확인)
    const title = movie.title || "Unknown Title";
    const director = movie.director || "Unknown Director";
    const year = movie.year || "Unknown Year";
    const genre = movie.genre || defaultGenre;

    console.log(`${i + 1}. Title: ${title}, Director: ${director}, Year: ${year}, Genre: ${genre}`);
  }
  movieCount = movieArray.length;
  console.log(`Total Movies: ${movieCount}`);
}

// 기본 과제 실행
printMovies(movies);


// ## 도전 과제 ##

console.log("\n--- Challenge Tasks ---");

// 1. 영화 검색 (특정 장르)
function searchByGenre(movieArray, searchGenre) {
  console.log(`\nSearching for ${searchGenre} movies...`);
  let foundMovies = [];
  for (const movie of movieArray) {
    // for...in을 사용하여 객체 속성 순회 (요구사항)
    let hasGenre = false;
    for (const key in movie) {
      if (key === 'genre' && movie[key].toLowerCase() === searchGenre.toLowerCase()) {
        hasGenre = true;
        break;
      }
    }
    if (hasGenre) {
      foundMovies.push(movie);
    }
  }

  if (foundMovies.length > 0) {
    // 검색 결과를 출력하기 위해 printMovies 함수 재사용
    const originalLog = console.log;
    console.log = () => {}; // 임시로 console.log 비활성화
    printMovies(foundMovies);
    console.log = originalLog; // console.log 복원

    foundMovies.forEach((movie, index) => {
        const { title, director, year, genre } = movie;
        originalLog(`${index + 1}. Title: ${title}, Director: ${director || 'Unknown'}, Year: ${year}, Genre: ${genre}`);
    });

  } else {
    console.log(`No movies found for genre: ${searchGenre}.`);
  }
}

// 영화 검색 실행
searchByGenre(movies, "Sci-Fi");
searchByGenre(movies, "Comedy");


// 2. 통계 계산
// - 평균 출판년도 계산 (함수 표현식)
const calculateAverageYear = function(movieArray) {
  if (movieArray.length === 0) return 0;
  const totalYears = movieArray.reduce((sum, movie) => sum + (movie.year || new Date().getFullYear()), 0);
  return (totalYears / movieArray.length).toFixed(0);
};

// - 가장 최신 영화 찾기 (화살표 함수)
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

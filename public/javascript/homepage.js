async function createFeatureBusiness(event) {
  let randomNum = Math.floor(Math.random() * 4) + 1;

  let container = document.getElementById("feature-business");
  const response = await fetch(`/api/businesses/${randomNum}`);
  const business = await response.json();

  let reviewTotal = 0;
  let reviewCount = 0;
  for(let i=0; i < business.reviews.length; i++){
    reviewTotal += business.reviews[i].stars;
    reviewCount++;
  }
  let reviewAvg = reviewTotal/reviewCount;
  let reviewAvgText = ' Star Rating'


  let imageEl = document.createElement("img");
  imageEl.src = business.mainPhoto;
  imageEl.classList.add('rounded', 'w-full')
  container.appendChild(imageEl);

  let nameEl = document.createElement("a");
  nameEl.href = `business/${business.id}`;
  nameEl.innerText = business.business_name;
  nameEl.classList.add('absolute', 'w-full', 'text-center', 'top-5', 'text-white', 'font-bold', 'text-4xl', 'z-30');
  container.appendChild(nameEl);
  
  let starsContainerEl = document.createElement("div");
  starsContainerEl.classList.add('w-full', 'grid', 'place-items-center');
  container.appendChild(starsContainerEl);

  let starsEl = document.createElement("p");
  starsEl.innerText = reviewAvg + reviewAvgText;
  starsEl.classList.add('absolute', 'text-center', 'bottom-10', 'font-bold', 'text-2xl', 'z-30', 'inline-block', 'bg-gray-200', 'rounded-full', 'px-3', 'py-1', 'text-sm', 'font-semibold', 'text-gray-700');
  starsContainerEl.appendChild(starsEl);

}

async function createFeatureReview(event) {
  let randomNum = Math.floor(Math.random() * 4) + 1;

  let container = document.getElementById("feature-review");
  const response = await fetch(`/api/review/${randomNum}`);
  const review = await response.json();
  console.log(review);

  let reviewTitleEl = document.createElement("div");
  reviewTitleEl.classList.add('p-3')
  container.appendChild(reviewTitleEl);

  let reviewUserEl = document.createElement("a");
  reviewUserEl.href = `user/${review.user.id}`;
  reviewUserEl.innerText = "Review by " + review.user.username;
  reviewTitleEl.appendChild(reviewUserEl);

  let reviewBusinessEl = document.createElement("a");
  reviewBusinessEl.href = `business/${review.business.id}`
  reviewBusinessEl.innerText = "for " + review.business.business_name;
  reviewBusinessEl.classList.add('text-xl', 'm-2');
  reviewTitleEl.appendChild(reviewBusinessEl);

  let review_textEl = document.createElement("p");
  review_textEl.innerText = review.review_text;
  review_textEl.classList.add('p-3');
  container.appendChild(review_textEl);

  let reviewStarsEl = document.createElement('p');
  reviewStarsEl.innerText = review.stars + " Star rating";
  reviewStarsEl.classList.add('text-center', 'font-bold', 'text-2xl', 'inline-block', 'bg-gray-200', 'rounded-full', 'px-3', 'py-1', 'text-sm', 'font-semibold', 'text-gray-700', 'm-3');
  container.appendChild(reviewStarsEl);
}

document.addEventListener("DOMContentLoaded", function() {
  createFeatureBusiness();
  createFeatureReview();
});
async function showModal(event) {
  event.preventDefault();
  const modal = document.querySelector('#myModal');
  modal.classList.remove("hidden");
}

async function hideModal(event) {
  event.preventDefault();
  const modal = document.querySelector('#myModal');
  modal.classList.add("hidden");
  location.reload();
}

async function addReview(event) {
  event.preventDefault();

  const review_text = document.querySelector('input[name="review_text"]').value;
  const stars = document.querySelector('select[name="stars"]').value;
  const business_id = document.querySelector('#business');
  console.log(stars);

  const response = await fetch(`/api/review` , {
    method: 'POST',
    body: JSON.stringify({
      review_text: review_text,
      stars: stars,
      user_id: 1,
      business_id: business_id.dataset.id
    }),
    headers: {
      'Content-type': 'application/json'
    }
  });

  if (response.ok) {
    location.reload();
  } else {
    alert(response.statusText);
  }
}

document.querySelector('#add').addEventListener('click', showModal);
document.querySelector('#X').addEventListener('click', hideModal);
document.querySelector('#submitReview').addEventListener('click', addReview);

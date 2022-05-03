async function showModal(event) {
  const modal = document.querySelector('#myModal');
  modal.classList.remove("hidden");
}

async function hideModal(event) {
  const modal = document.querySelector('#myModal');
  modal.classList.add("hidden");
  location.reload();
}

async function addBusiness(event) {
  event.preventDefault();

  const categoryID = document.querySelector('#category');
  const name = document.querySelector('input[name="business-name"]').value;
  const website = document.querySelector('input[name="website"]').value;
  const phone = document.querySelector('input[name="phone"]').value;
  const address = document.querySelector('input[name="address"]').value;
  const photo = document.querySelector('input[name="photo"]').value;

  const response = await fetch(`../api/businesses` , {
    method: 'POST',
    body: JSON.stringify({
      business_name: name,
      category_id: categoryID.dataset.id,
      website: website,
      phone: phone,
      address: address,
      mainPhoto: photo
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
document.querySelector('#submit').addEventListener('click', addBusiness);

const search = () => {
        const inputField = document.getElementById('searchInput');
        const searchText = inputField.value;
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(phoneData => searchResult(phoneData.data.slice(0, 20)));
        inputField.value = '';
    }
    // search()
const searchResult = (phones) => {
    // console.log(phones);
    const displayContainer = document.getElementById('Phone-container');
    displayContainer.textContent = '';
    for (const phone of phones) {
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
        <div class="card m-3 p-3 border rounded custom-hover" style="width: 20rem;">
                            <img src="${phone.image}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${phone.phone_name}</h5>
                                <h6>${phone.brand}Brand</h6>
                                <a href="#" class="btn btn-primary">Phone details</a>
                            </div>
        `;
        displayContainer.appendChild(div);
        // console.log(phone);

    }

}
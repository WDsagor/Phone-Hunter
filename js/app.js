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
                                <a href="#" class="btn btn-primary" onclick="details('${phone.slug}')">Phone details</a>
                            </div>
        `;
        displayContainer.appendChild(div);
        // console.log(phone);

    }

}
const details = (id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(detailData => showModal(detailData.data));


}
const showModal =(details)=>{
    console.log(details)
    const phoneDetail = document.getElementById('phoneDetail');
    const div = document.createElement('div');
        div.classList.add('show-part');
        div.innerHTML=`
                        <div class="row">
                                        <div class="col-12 col-lg-6 d-flex justify-content-center align-items-center">
                                            <img class="img-fluid" src="${details.image}" alt="" srcset="">
                                        </div>
                                        <div class="col-12 col-lg-6 ">
                                            <div class="custom-table">
                                                <table class="table table-success table-striped ">
                                                    <thead>
                                                        <tr>
                                                            <th colspan="2">Details</th>
                                                         
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Model</td>
                                                            <td>${details.name}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Realse date</td>
                                                            <td>${details.releaseDate}</td>
                                                        </tr>
                                                        <tr>
                                                            <th colspan="2">Main Features</th>
                                                        </tr>
                                                        <tr>
                                                            <td >Display Size</td>
                                                            <td >${details.mainFeatures.displaySize}</td>
                                                        </tr>
                                                        <tr>
                                                            <td >Chip Set</td>
                                                            <td >${details.mainFeatures.chipSet}</td>
                                                        </tr>
                                                        <tr>
                                                            <td >Storage</td>
                                                            <td >${details.mainFeatures.storage}</td>
                                                        </tr>
                                                        <tr>
                                                            <td >Memory</td>
                                                            <td >${details.mainFeatures.memory}</td>
                                                        </tr>
                                                        <tr>
                                                            <th colspan="2">Others</th>
                                                        </tr>
                                                        <tr>
                                                            <td >Bluetooth</td>
                                                            <td >${details.others.Bluetooth}</td>
                                                        </tr>
                                                        <tr>
                                                            <td >GPS</td>
                                                            <td >${details.others.GPS}</td>
                                                        </tr>
                                                        <tr>
                                                            <td >WLAN</td>
                                                            <td >${details.others.WLAN}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <span onclick="modalOf()"> X </span>
                        `
    phoneDetail.appendChild(div);
    phoneDetail.style.visibility = "visible";
   
};
const modalOf = () => {
    const phoneDetail1 = document.getElementById('phoneDetail');
    phoneDetail1.style.visibility = "hidden";
    phoneDetail1.innerHTML=""
};
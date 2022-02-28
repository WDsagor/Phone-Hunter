const search = () => {
        const searchText = document.getElementById('searchInput').value;
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(phoneData => searchResult(phoneData.data.slice(0, 20)));
    }
    // search()
const searchResult = (phones) => {
    // console.log(phones);
    for (const phone of phones) {
        console.log(phone.phone_name);
    }
}
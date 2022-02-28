const search = () => {
        const searchText = document.getElementById('searchInput')
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(phoneData => console.log(phoneData.data.slice(0, 20)));
    }
    // search()
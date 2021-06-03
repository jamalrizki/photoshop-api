$(document).ready(function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
            return response.json()
        })
        .then((response) => {
            console.log(response)
            var bd = document.getElementById('bd')
            var result = document.getElementById('result')
            var bd1 = document.getElementById('bd1')
            var result1 = document.getElementById('result1')
            var bd2 = document.getElementById('bd2')
            var result2 = document.getElementById('result2')
            var cardbd = document.getElementById('cardbd')
            var cardheader = document.getElementById('cardheader')
            var cardbd1 = document.getElementById('cardbd1')
            var cardheader1 = document.getElementById('cardheader1')
            var cardbd2 = document.getElementById('cardbd2')
            var cardheader2 = document.getElementById('cardheader2')
            result.innerHTML = response[0].title
            bd.innerHTML = response[0].body
            result1.innerHTML = response[1].title
            bd1.innerHTML = response[1].body
            result2.innerHTML = response[2].title
            bd2.innerHTML = response[2].body
            cardheader.innerHTML = response[3].title
            cardbd.innerHTML = response[3].body
            cardheader1.innerHTML = response[4].title
            cardbd1.innerHTML = response[4].body
            cardheader2.innerHTML = response[5].title
            cardbd2.innerHTML = response[5].body
        })

    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(function (response) {
            return response.json()
        })
        .then((response) => {
            var image = document.getElementById('image').src = response[0].url
            var image1 = document.getElementById('image1').src = response[2].url
            var image2 = document.getElementById('image2').src = response[3].url
            var image3 = document.getElementById('image3').src = response[5].url
            var image4 = document.getElementById('image4').src = response[7].url
        })

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
            return response.json()
        })
        .then((response) => {
            console.log(response)
            var name = document.getElementById('name')
            var name1 = document.getElementById('name1')
            var name2 = document.getElementById('name2')
            name.innerHTML = response[0].name
            name1.innerHTML = response[1].name
            name2.innerHTML = response[2].name
        })

    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(function (response) {
            return response.json()
        })
        .then((response) => {
            console.log(response)
            var comment = document.getElementById('comment')
            var comment1 = document.getElementById('comment1')
            var comment2 = document.getElementById('comment2')
            var grid = document.getElementById('grid')
            var grid1 = document.getElementById('grid1')
            var grid2 = document.getElementById('grid2')
            var grid3 = document.getElementById('grid3')

            comment.innerHTML = response[0].body
            comment1.innerHTML = response[1].body
            comment2.innerHTML = response[2].body
            grid.innerHTML = response[3].body
            grid1.innerHTML = response[4].body
            grid2.innerHTML = response[5].body
            grid3.innerHTML = response[6].body

        })

});
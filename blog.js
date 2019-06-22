$(function () {
    $.get({
        // url: "http://www.mocky.io/v2/5d0da2bb3400005d00ca4a31"
        url: 'http://www.mocky.io/v2/5d0da8313400007c00ca4a38'
    }).done(function (data) {
        console.log(data)
        data.forEach(article => {
            $(".articles").append(`<article class="article">
                    <header class="article__header">${article.title}</header>
                <div class="article_content">${article.content}</div>
                </article>`)
        })
    });
})
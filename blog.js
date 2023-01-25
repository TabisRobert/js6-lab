$(function () {
    $.ajax({
        url: 'http://www.mocky.io/v2/5d0da8313400007c00ca4a38',
        type: 'GET',
        dataType: 'json',
    }).done(function (data) {
        console.log(data)
        data.forEach(article => {
            $(".articles").append(`<article class="article">
                    <header class="article__header">${article.title}</header>
                <div class="article_content">${article.content}</div>
                </article>`)
        })
    });
});

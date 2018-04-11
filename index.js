$(document).ready(function (){

});

function searchRepositories() {
  // const searchTerms = document.getElementById('searchTerms').value
  // const req = new XMLHttpRequest()
  // req.addEventListener("load", showRepositories)
  // req.open("GET", "https:api.github.com/search/repositories?q=" + `${searchTerms}`)
  // req.send()
  const searchTerms = document.getElementById('searchTerms').value
  const searchUrl = `https:api.github.com/search/repositories?q=${searchTerms}`
  $.get(searchUrl, function(response) {
    $("#results").html(showRepositories(response))
  }).fail(function(error) {
    displayError()
  })
}

// function showRepositories(event, data) {
//   var repos = JSON.parse(this.responseText)
//   console.log(repos)
//   const repoList = `
//     <ul>
//       ${repos.map(r =>
//         '<li>' + r.html_url + '</li>'
//       ).join('')}
//     </ul>`
//   return repoList
// }

function showRepositories(response) {
  // const repos = JSON.parse(this.responseText)
  const src = document.getElementById("repository-template").innerHTML
  const template = Handlebars.compile(src)
  return template(response)
}

function displayError() {
    $("#errors").html("error")
}

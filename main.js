const linksSocialMedia = {
  github: 'Daniel-jp',
  youtube: 'channel/UCWpSVjfuqZhQZ5gfyFg56jw',
  facebook: 'danieljoaquimpaulino.danny',
  instagram: 'daniel_j_paulino',
  twitter: 'Daniel28725148',
  linkedin: 'in/daniel-joaquim-paulino-737808198'
}

function changeSocialMidiaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    //alert(li.children[0].href)
  }
}
changeSocialMidiaLinks()

//using APi

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGithubProfileInfos()

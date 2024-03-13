const express = require('express')
const app = express()
const port = 3000

const Githubdata ={
    "login": "annuj-vishwakarma",
    "id": 118470175,
    "node_id": "U_kgDOBw-2Hw",
    "avatar_url": "https://avatars.githubusercontent.com/u/118470175?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/annuj-vishwakarma",
    "html_url": "https://github.com/annuj-vishwakarma",
    "followers_url": "https://api.github.com/users/annuj-vishwakarma/followers",
    "following_url": "https://api.github.com/users/annuj-vishwakarma/following{/other_user}",
    "gists_url": "https://api.github.com/users/annuj-vishwakarma/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/annuj-vishwakarma/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/annuj-vishwakarma/subscriptions",
    "organizations_url": "https://api.github.com/users/annuj-vishwakarma/orgs",
    "repos_url": "https://api.github.com/users/annuj-vishwakarma/repos",
    "events_url": "https://api.github.com/users/annuj-vishwakarma/events{/privacy}",
    "received_events_url": "https://api.github.com/users/annuj-vishwakarma/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Anuj Vishwakarma",
    "company": null,
    "blog": "",
    "location": "Bhopal  (MP)",
    "email": null,
    "hireable": null,
    "bio": "🚀 MERN Stack Developer | Crafting web solutions with JavaScript, React, and Node.js. 🔧🌱",
    "twitter_username": null,
    "public_repos": 34,
    "public_gists": 0,
    "followers": 5,
    "following": 8,
    "created_at": "2022-11-17T17:04:44Z",
    "updated_at": "2024-02-25T04:34:16Z"
  }
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/github',(req,res)=>{
    res.json(Githubdata)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
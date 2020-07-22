# Important Links
[![Maintainability](https://api.codeclimate.com/v1/badges/5baf4f53288ddd737410/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/Revitalize-FE/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/5baf4f53288ddd737410/test_coverage)](https://codeclimate.com/github/Lambda-School-Labs/Revitalize-FE/test_coverage)

[Production deploy](https://revitalize.community)
[Staging deploy](https://revitalize.netlify.com)


[Nelify production logs](https://app.netlify.com/sites/sleepy-brattain-252a23/deploys)
[Nelify staging logs](https://app.netlify.com/sites/revitalize/deploys)

[GraphiQL Playground staging](https://revitalize-development.herokuapp.com/)

## Contributors

|                                                                                                                                                                                                                                                             |                                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                           |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                                                              <img src="https://avatars0.githubusercontent.com/u/53657930?s=400&u=e55733acee338a9aaf0633e8ad2966fc863800a7&v=4" width="200" />                                                               | <img src="https://avatars0.githubusercontent.com/u/50215893?s=460&u=0be53185776c8c7acbcaa4f3355a0c3de5d76b96&v=4 " width="200" />                                                                                                                             | <img src="https://avatars2.githubusercontent.com/u/57777545?s=460&v=4" width="200" />                                                                                                                                                                     |
|        Russell Terry [<img src="https://img.icons8.com/nolan/64/github.png" width="25">](https://github.com/Surfsol) [<img src="https://img.icons8.com/color/48/000000/linkedin.png" width="25">](https://www.linkedin.com/in/russ-terry-261a13192/)        | Brandon Harris[<img src="https://img.icons8.com/nolan/64/github.png" width="25">](https://github.com/brandonharris177) [<img src="https://img.icons8.com/color/48/000000/linkedin.png" width="25">](https://www.linkedin.com/in/brandon-harris177/)           | Alex Miller [<img src="https://img.icons8.com/nolan/64/github.png" width="25">](https://github.com/alexvision26) [<img src="https://img.icons8.com/color/48/000000/linkedin.png" width="25">](https://www.linkedin.com/in/alexvision/)                    |
|                                <img src="https://media-exp1.licdn.com/dms/image/C4E03AQElrgNvmpeLcg/profile-displayphoto-shrink_200_200/0?e=1596067200&v=beta&t=K0xvmQ1EEIWzJP5arka3vOVdBL5yI90gD6eV52-MOwM" width="200" />                                 | <img src="https://avatars1.githubusercontent.com/u/42018604?s=460&u=39b8f7af43b2050d7c2db571c3174c0a955a62ea&v=4" width="200" />                                                                                                                              | <img src="https://media-exp1.licdn.com/dms/image/C4E03AQE7Y5fEluOTHQ/profile-displayphoto-shrink_400_400/0?e=1596067200&v=beta&t=PwVLnX6wQO2WIwvlFvJSmDFA_cE41cyTuc1wSc3ULDc" width="200" />                                                              |
|  Cristina Edens [<img src="https://img.icons8.com/nolan/64/github.png" width="25">](https://github.com/cristinaedens) [<img src="https://img.icons8.com/color/48/000000/linkedin.png" width="25">](https://www.linkedin.com/in/cristina-edens-65777b198/)   | Guyton M.O. [<img src="https://img.icons8.com/nolan/64/github.png" width="25">](https://github.com/guytonoriji) [<img src="https://img.icons8.com/color/48/000000/linkedin.png" width="25">](https://www.linkedin.com/in/Guytonoriji/)                        | Matthew Cebenka [<img src="https://img.icons8.com/nolan/64/github.png" width="25">](https://github.com/MatthewCebenka) [<img src="https://img.icons8.com/color/48/000000/linkedin.png" width="25">](https://www.linkedin.com/in/matthew-cebenka/)         |
---
# Warnings
**File casing**
Changing the casing on a file will often result in errors on Windows based machines! Be careful when doing this.

**SVG versus PNG**
Please do not save `svg` files in assets. Export from figma as small `png`'s. They load faster and have been compatibility with optimization. Some of the `svg` files we have are > 10mb! 

Only save true vectors as `svg`, never rasters; if you don't know what that is, just save as `png`, no biggie!

---
# Notes
Staging is updated frequently throughout the day.
Master is updated at the end of the day from staging.

---
# Git flow cheat sheet
**Push your work to your branch**
On your branch, you did some work...
>`git add .`
`git commit -m` ^1^
`git push origin your-branch-name`

now you want to pull into staging. Good.

To do that, you can checkout staging, and get the most updated version like this:
>`git checkout staging`
`git pull origin staging`

Pulling staging into staging _should_ go really smooth. All it's doing is updating your version of staging with the newest version of staging that is live. When you do it, you should see a message at the top of the list of files that says _Fast forward_.

Up to now, we've simply updated our local staging with the updated staging. The above process should be done, **at least**, once a day.

**Pull your branch into local staging**
Now, you are on the staging branch locally and your staging branch is all up to date. Do this:
>`git pull origin your-branch-name`

Ideally, you'll see another _Fast forward_^2^ and you can proceed with committing. 

Alternatively, you may run into _merge conflicts_. That's ok, it happens!

**In the event of a merge conflict**
Anytime two people work on the same file during the same time, the potential for a conflict exists. 

BUT, VSCode makes it really easy to see and handle such conflicts. 

Click on the github icon in VS, review the merge changes (these are the first in the first section) one by one and then decide what the best course of action will be.

Remember, save each file after you resolve the conflict!

Remember, commit each file after you resolve the conflict!

**Push your newly updated staging**
Now, you have an updated staging. After handling any conflicts, don't forget to review the app to make sure nothing unexpected happened. 

IF the app looks clean, the changes are good, and your ready to deploy the updated staging server, do this:
>`git push origin staging`
`git checkout -b new-branch-name`


**Notes**
^1^ _Or `git commit` if you're using gitmoji with the hook_
^2^ _Merged using recursive strategy sometimes happens_






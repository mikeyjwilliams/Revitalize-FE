# Important Links
[![Maintainability](https://api.codeclimate.com/v1/badges/5baf4f53288ddd737410/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/Revitalize-FE/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/5baf4f53288ddd737410/test_coverage)](https://codeclimate.com/github/Lambda-School-Labs/Revitalize-FE/test_coverage)

[Production deploy v1.0(not current)](https://revitalize.community)


[Nelify production logs](https://app.netlify.com/sites/sleepy-brattain-252a23/deploys)

[GraphiQL Playground staging](https://revitalize-development.herokuapp.com/)


---
# SASS/CSS Layout Notes

### Preset Colors and styles:
The main colors used throughout the app are located in `src/styles/_variables.scss`

### Finding your style:
If you are trying to edit the SASS/CSS the basic layout is very detailed and everything should be put into the correct file. The fastest way to find what file to edit is to inspect an element you are interested in changing and reading the class name.

In most instances the names are laid out with the component file name then the component element.
> **e.x. you are trying to edit the login card where you type your login info the name is `.login-container.login-card.`**
**This shows you that you need to goto the Login component and edit that .scss file.**

### Dark Mode styles:
In every .scss file if there needs to be a change to the `dark-mode` at the bottom you will find .dark-mode. You must then add the hierarchy to edit that style.
> **e.x. following the login example above the dark-mode version would be `.dark-mode.login-container.login-card.`**

### Page Container and Footer explanation:
All pages are setup to route as a single page app. If you look in `Routes.jsx` in the src folder you will see how the navigation and routing is setup for the app. We use the `<Switch>` from `react-router-dom` to make our pages maintain a single view that swaps only the middle content. This helps keep the site easily maintained and easier to update.

If you want to add extra pages within the `<Switch> </Switch>` simply post the component route like you usually would. Anything outside these brackets will render in that order.
>i.e. `<Nav> <Component> <Footer>`(only the *Component* will change when clicking a link with this design) 

To ensure that the `<Footer>` is consistent on every page the `<Nav>` + `<Component>` is contained in a page container and the `<Footer>` is added after *(The code can be seen in src/components/Layout/PageContainer.scss)* The style `.page-container` is calculated based on a scaling calculation and leaves space for the `<Footer>`. If you change the size of the `<Footer>` **YOU MUST** change the amount in the calculation *(100vh means 100% view height)* or you will **DESTROY** the layout on other pages.

### Adding New Components:
If you are adding new pages or components with their own styling you must remember to add them via `@import` to the `base.scss` file *(located in src/styles/base.scss)* or your styles will not apply.


# Warnings
**File casing**
Changing the casing on a file will often result in errors on Windows based machines! Be careful when doing this.

**SVG versus PNG**
Please do not save `svg` files in assets. Export from figma as small `png`'s. They load faster and have been compatibility with optimization. Some of the `svg` files we have are > 10mb! 

Only save true vectors as `svg`, never rasters; if you don't know what that is, just save as `png`, no biggie!

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






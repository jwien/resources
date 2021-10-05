Intro to Git
------------

Version control system (resume.pdf, resumeFINAL.pdf)
    - permanent record (series of commits)
    - time machine     (ability to checkout a commit)
    - parallel universes (branches)

## Key Vocabulary Terms
- repository: a regular ol' directory where you've done "git init" or "git clone"
- local repo: the repo on your computer 
- remote: a copy of the repo somewhere on the internet (github)
- adding: specifying which files will be going to the next commit
- commiting: creating a snapshot in time of changes to lines on files
- pushing: upload a new commits to your remote repository
- connect a remote: telling a local repo where code should go when you push

## Common commands
`git init`
`git log` shows history of commits in current branch
`git remote -v` shows all remotes (if empty, you don't have a remote)
`git status` shows the status 

## Workflow
- `git init` ONCE at the beginning of the project
- create a file called index.html and add a bunch of work
- `git add index.html`
- `git commit -m 'this is the message that describes the work'`
- Do new work. Add/remove lines of code, add/remove files
- `git add about.html`
- `git commit -m 'created the about me page'`

## workflow loop
- do new work (create, edit, delete lines of code or files)
- git add filenameWithTheWork.js
- `git commit -m "explain what this change is"`

## Creating and connecting remotes (backup side of things)
- To have a remote, we need to create a new, empty repository on github
- To do that, https://github.com/new
- Name the repo, provide a description, ignore the readme part, and click "Create Repository".
- Then follow the directions for whether or not you have an existing repo or not.

## Pushing
- For your first push to a remote, do `git push -u origin master`
- subsequent pushes in that branch name, do `git push`
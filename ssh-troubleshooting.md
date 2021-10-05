+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
---------------------------------------------------------------

		Github SSH Troubleshooting
			by james.wienecke (james.a.wienecke@gmail.com)

---------------------------------------------------------------
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

#Are you having problems with pushing or pulling from github remotes?
Here's some of the things that I've tried to ensure I am using the right SSH settings:

1.	Check the SSH settings on your github account's key listing. Run this command:
		ssh-add -l
	and compare its outputted hashes with the hashes listed on github. The hash will be the second line of content for each key, provided the key's name is the first line. Google "SHA Hash" if you're still uncertain what it looks like or how to compare.

2. 	Ensure that during the "git remote add..." command you used the SSH path instead of the HTTPS path provided by github's "push existing repository" command block.

3. 	Run this command:
		ssh -T git@github.com
	Expected output if your SSH is configured properly should be:
	"Hi <your-github-username>! You've successfully authenticated, but GitHub does not provide shell access."

4. 	If you keep getting an authentication error for using a password to push even though you set up SSH correctly, it's because you messed up #2. above and need to fix the remote path. While in the local repository, try this command: 
		git remote set-url origin git@github.com:<github-user>/<repository>.git 
	(make sure to replace the content in the brackets with your own info)

#This will be updated with information in the future
I will inevitably cause myself more pain and suffering in the future and will add my solutions to this document. Hopefully by fixing these issues and sharing them I will be able to spare others similar embarassing situations

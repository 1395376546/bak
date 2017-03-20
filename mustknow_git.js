1.教程 http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/0013743256916071d599b3aed534aaab22a0db6c4e07fd0000
2.》创建库‘
    进入目录(最好不要用中文路径)
    git init  建库
    git add readme.txt 添加
    git commit -m "wrote a readme file"  提交 
          注：-m后面输入的是本次提交的说明，
          可以输入任意内容，当然最好是有意义的，这样你就能从历史记录里方便地找到改动记录
    git status  命令可以让我们时刻掌握仓库当前的状态
    git diff readme.txt 已经记不清上次怎么修改的readme.txt
    git log  查看提交日志
    git log --pretty=oneline   一行显示
    git reset --hard HEAD^   版本回退(上一个写^ 两个写^^ 100个写HEAD~100)
    git reset --hard 3628164  命令窗口没有关闭时  返回已经失去的版本(数字为commit id 不用写全  前几位就可以了)
    git reflog  找不到新版本的commit id怎么办
    !!!注 目前发现不用add添加到暂存区 commit就提交不了 log也不会有内容
    git commit -a -m '改动readme文件'(连添加带修改)
    cat readme.txt 查看文件内容
    git reset HEAD readme.txt 撤销暂存区的修改
    git checkout -- readme.txt 撤销工作区的修改(其实是用版本库里的版本替换工作区的版本) 
    git rm test.txt 删除文件 
    git remote add origin git@github.com:1395376546/bak.git 远程账号
    git push -u origin master 就可以把本地库的所有内容推送到远程库上(第一次加 -u)
    git push origin master 以后就可以简写
    git clone git@github.com:1395376546/gitskills.git 克隆远程别人的库
    git branch dev 创建
    git checkout dev 切换
    git branch 显示所有分支(当前分支加"*")
		* master
          dev
    git checkout -b dev 创建并切换分支
    git merge dev 切换到master 并把dev分支上的内容合并到master上面
    git branch -d dev 删除分支dev
    git branch -D feature-vulcan 强行删除分支dev
    !!!注 merge完有冲突的时候 需要解决完冲突 再add commit
    git merge --no-ff -m "merge with no-ff" dev   
                请注意--no-ff参数，表示禁用Fast forward(Git就会在merge时生成一个新的commit，这样，从分支历史上就可以看出分支信息。) 
    
    !!!当在分支有修改不能提交，但是要临时修复bug，这时候就可以用
    git stash 可以把当前工作现场“储藏”起来，等以后恢复现场后继续工作： 
    git stash drop 来删除
    
    git remote -v 显示更详细的信息
    git push origin master 推送时，要指定本地分支，这样，Git就会把该分支推送到远程库对应的远程分支上
	    master分支是主分支，因此要时刻与远程同步；
		dev分支是开发分支，团队所有成员都需要在上面工作，所以也需要与远程同步；
		bug分支只用于在本地修复bug，就没必要推到远程了，除非老板要看看你每周到底修复了几个bug；
		feature分支是否推到远程，取决于你是否和你的小伙伴合作在上面开发

    git checkout -b dev origin/dev 你的小伙伴要在dev分支上开发，就必须创建远程origin的dev分支到本地
    git push origin dev 时不时地把dev分支push到远程
    git pull 推送失败，先用git pull把最新的提交从origin/dev抓下来，然后，在本地合并，解决冲突，再推送

    git tag 查看所有tag 
    git tag v1.0 打标签(通常用来代替commit id)，默认标签是打在最新提交的commit上的
    git tag v0.9 6224937 忘记打标签的时候 先用log 查看commit id ，然后找到相应的id 打标签
    git show v0.1 可以看到说明文字

    git config --global alias.st status  我们只需要敲一行命令，告诉Git，以后st就表示status
    									 给命令创建别名
	git config --global alias.co checkout 
	git config --global alias.ci commit
	git config --global alias.br branch

	配置文件放哪了？每个仓库的Git配置文件都放在.git/config文件中

	搭建Git服务器需要准备一台运行Linux的机器，强烈推荐用Ubuntu或Debian，这样
	通过几条简单的apt命令就可以完成安装。
	假设你已经有sudo权限的用户账号，下面，正式开始安装。
		第一步，安装git：
			$ sudo apt-get install git
		第二步，创建一个git用户，用来运行git服务：
			$ sudo adduser git
		第三步，创建证书登录：
		收集所有需要登录的用户的公钥，就是他们自己的id_rsa.pub文件，把所有公钥导入到/home/git/.ssh/authorized_keys文件里，一行一个。
		第四步，初始化Git仓库：
		先选定一个目录作为Git仓库，假定是/srv/sample.git，在/srv目录下输入命令：
			$ sudo git init --bare sample.git
		Git就会创建一个裸仓库，裸仓库没有工作区，因为服务器上的Git仓库纯粹是为了共享，所以不让用户直接登录到服务器上去改工作区，并且服务器上的Git仓库通常都以.git结尾。然后，把owner改为git：
			$ sudo chown -R git:git sample.git
		第五步，禁用shell登录：
		出于安全考虑，第二步创建的git用户不允许登录shell，这可以通过编辑/etc/passwd文件完成。找到类似下面的一行：
			git:x:1001:1001:,,,:/home/git:/bin/bash
			改为：
			git:x:1001:1001:,,,:/home/git:/usr/bin/git-shell
		这样，git用户可以正常通过ssh使用git，但无法登录shell，因为我们为git用户指定的git-shell每次一登录就自动退出。
		第六步，克隆远程仓库：
		现在，可以通过git clone命令克隆远程仓库了，在各自的电脑上运行：
			$ git clone git@server:/srv/sample.git
			Cloning into 'sample'...
			warning: You appear to have cloned an empty repository.

		剩下的推送就简单了
    
    git gui里面乱码的问题
	    需要在config里面设置utf-8
        [gui]
	    encoding = utf-8
    
    !!!如何连接github并推送本地文件
       1.》ssh-keygen -t rsa -C "1395376546@qq.com"
          在~/下生成.ssh文件夹，将id_rsa.pub里面的码复制到github 个人设置ssh密钥俩面
       2.》ssh -T git@github.com 
          验证是否连接成功“You’ve successfully authenticated, but GitHub does not provide shell access”
       3.》找到变化的文件夹
            git add filename 
            git commit -m '123'
            git checkout master
            git push (输入自己的账号及密码) 提交成功






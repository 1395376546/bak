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
    !!!注 merge完有冲突的时候 需要解决完冲突 再add commit
    git merge --no-ff -m "merge with no-ff" dev   
                请注意--no-ff参数，表示禁用Fast forward(Git就会在merge时生成一个新的commit，这样，从分支历史上就可以看出分支信息。) 
    
    !!!当在分支有修改不能提交，但是要临时修复bug，这时候就可以用
    git stash 可以把当前工作现场“储藏”起来，等以后恢复现场后继续工作： 


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
    ！！！注 目前发现不用add添加到暂存区 commit就提交不了 log也不会有内容
    git commit -a -m '改动readme文件'(连添加带修改)
    cat readme.txt 查看文件内容
    
    首先确定要在哪个分支上修复bug，假定需要在master分支上修复，就从master创建临时分支：
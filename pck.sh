if [ -n "$1" ];then
echo $1
git add -A
echo "git add -A"
git commit -m "$1"
echo "git commit $1"
git pull
echo "git pull"
git push
echo "git push"
echo "\033[31m ==> 代码提交成功 \033[0m"
else
echo "\033[31m 请输入commit描述 \033[0m"
fi
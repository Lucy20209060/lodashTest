if [ -n "$1" ];then
echo "\033[33m ==> git add -A \033[0m"
git add -A

echo "\033[33m ==> git commit -m $1 \033[0m"
git commit -m "$1"

echo "\033[33m ==> git pull \033[0m"
git pull

echo "\033[33m ==> git push \033[0m"
git push

echo "\033[35m ==> 代码提交成功 \033[0m"

else
echo "\033[31m 请输入commit描述 \033[0m"
fi
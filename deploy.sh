#/bin/bash

# ブランチの確認
ISMAIN=`git branch | grep "* main" | wc -l | awk '{print $1}'`

# main以外の場合切り替え
if [ "$ISMAIN" -eq 0 ];then
    git switch main
fi

# リポジトリ 更新
git pull

# コンテナのリビルド
docker-compose build

ISRUN=`docker-compose ls | grep Suwaaa_ | wc -l | awk '{print $1}'`

# コンテナが起動済みの場合は停止する
if [ "$ISRUN" -ge 1 ];then
    docker-compose down
fi

# コンテナを起動する
docker-compose up -d

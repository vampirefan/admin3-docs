#!/bin/bash

# 拉取最新代码
git fetch 
git pull

# 编译
rm -rf node_modules/
rm yarn.lock
yarn install
yarn generate

# 复制源文件
rm -rf /home/wangfan/nginx/html/wiki3-dist/*
mv dist/* /home/wangfan/nginx/html/wiki3-dist/

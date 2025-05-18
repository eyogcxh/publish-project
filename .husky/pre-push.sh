#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

# Проверяем типы перед пушем
npm run type-check

protected_branch="main"
current_branch=$(git symbolic-ref HEAD | sed -e 's,.*/\(.*\),\1,')

if [ "$current_branch" = "$protected_branch" ]; then
  echo "⛔ Прямой пуш в ветку $protected_branch запрещен!"
  echo "✅ Пожалуйста, используйте Pull Request для внесения изменений в $protected_branch."
  exit 1
fi

if [ "$current_branch" = "master" ]; then
  echo "⛔ Прямой пуш в ветку master запрещен!"
  echo "✅ Пожалуйста, используйте Pull Request для внесения изменений в master."
  exit 1
fi
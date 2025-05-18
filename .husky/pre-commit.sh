
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx lint-staged

protected_branches="main master develop release"
current_branch=$(git symbolic-ref HEAD | sed -e 's,.*/\(.*\),\1,')

if echo "$protected_branches" | grep -w "$current_branch" > /dev/null; then
  echo "⛔ Прямой коммит в ветку $current_branch запрещен!"
  echo "✅ Создайте отдельную ветку для ваших изменений и затем создайте Pull Request."
  exit 1
fi
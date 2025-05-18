#!/bin/bash

# Цвета для лучшей визуализации
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Настройка защиты веток Git...${NC}"

# Проверяем, находимся ли мы в Git репозитории
if [ ! -d .git ]; then
  echo -e "${RED}Ошибка: Это не Git репозиторий!${NC}"
  exit 1
fi

# Создаем директорию для хуков, если она не существует
mkdir -p .git/hooks

# Создаем pre-push хук
cat > .git/hooks/pre-push << 'EOF'
#!/bin/bash

# Защищенные ветки
protected_branches=("main" "master" "develop" "release")
current_branch=$(git symbolic-ref HEAD | sed -e 's,.*/\(.*\),\1,')

# Проверяем, является ли текущая ветка защищенной
for branch in "${protected_branches[@]}"; do
  if [ "$current_branch" = "$branch" ]; then
    echo -e "\033[0;31m⛔ Прямой пуш в ветку $branch запрещен!\033[0m"
    echo -e "\033[0;32m✅ Пожалуйста, используйте Pull Request для внесения изменений в $branch.\033[0m"
    exit 1
  fi
done

# Проверяем форсированный пуш
while read local_ref local_sha remote_ref remote_sha; do
  if [[ "$remote_ref" == refs/heads/* ]]; then
    remote_branch=${remote_ref#refs/heads/}
    for branch in "${protected_branches[@]}"; do
      if [ "$remote_branch" = "$branch" ]; then
        # Проверка на форсированный пуш
        if [ "$local_sha" != "$remote_sha" ] && [ "$remote_sha" != "0000000000000000000000000000000000000000" ]; then
          if ! git merge-base --is-ancestor "$remote_sha" "$local_sha"; then
            echo -e "\033[0;31m⛔ Форсированный пуш в ветку $branch запрещен!\033[0m"
            echo -e "\033[0;32m✅ Пожалуйста, используйте Pull Request для внесения изменений в $branch.\033[0m"
            exit 1
          fi
        fi
      fi
    done
  fi
done
EOF

# Создаем pre-commit хук
cat > .git/hooks/pre-commit << 'EOF'
#!/bin/bash

# Защищенные ветки
protected_branches=("main" "master" "develop" "release")
current_branch=$(git symbolic-ref HEAD | sed -e 's,.*/\(.*\),\1,')

# Проверяем, является ли текущая ветка защищенной
for branch in "${protected_branches[@]}"; do
  if [ "$current_branch" = "$branch" ]; then
    echo -e "\033[0;31m⛔ Прямой коммит в ветку $branch запрещен!\033[0m"
    echo -e "\033[0;32m✅ Создайте отдельную ветку для ваших изменений и затем создайте Pull Request.\033[0m"
    exit 1
  fi
done

# Запускаем lint-staged для проверки кода
npx lint-staged
EOF

# Делаем хуки исполняемыми
chmod +x .git/hooks/pre-push
chmod +x .git/hooks/pre-commit

echo -e "${GREEN}✓ Защита веток настроена для: main, master, develop, release${NC}"
echo -e "${GREEN}✓ Прямые коммиты и пуши в эти ветки теперь запрещены${NC}"
echo -e "${YELLOW}Примечание: Для обхода защиты (в экстренных случаях) используйте флаг --no-verify${NC}"
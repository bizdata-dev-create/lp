# 変数（外部から上書き可能）=======================

# Git関連
BRANCH ?= ryo1114
MSG ?= v1

# Git関連
## GitHubのリポジトリURL（固定値のため "=" を使用）
GIT_REPO_URL = https://github.com/bizdata-dev-create/lp

# =======================
# Git関連
# =======================
# Git: Push to remote
.PHONY: git-push
git-push:
	@echo "🔧 Checking remote repository..."
	@if ! git remote | grep -q origin; then \
		echo "➡️  Setting remote origin: $(GIT_REPO_URL)"; \
		git remote add origin $(GIT_REPO_URL); \
	fi
	@echo "🔀 Checking branch: $(BRANCH)"
	@if git rev-parse --verify $(BRANCH) >/dev/null 2>&1; then \
		echo "✅ Branch $(BRANCH) already exists. Switching to it..."; \
		git checkout $(BRANCH); \
	else \
		echo "🆕 Creating new branch: $(BRANCH)"; \
		git checkout -b $(BRANCH); \
	fi
	@echo "📦 Staging files..."
	git add .
	@echo "📝 Committing changes..."
	- git commit -m "$(MSG)"  # 変更がない場合でも止まらないように "-"
	@echo "🚀 Pushing to remote branch: $(BRANCH)"
	git push -u origin $(BRANCH)
	@echo "✅ Git push completed."

# Git: Pull latest main branch
pull-main:
	@# 未コミットの変更があるかチェック
	@if ! git diff-index --quiet HEAD --; then \
		echo "⚠️ 未コミットの変更があります。stashまたはcommitしてください。"; \
		exit 1; \
	fi
	@echo "🔄 Fetching remote branches..."
	git fetch origin
	@echo "🔄 Switching to main branch..."
	git checkout main
	@echo "🔄 Pulling latest changes from origin/main..."
	git pull origin main
	@echo "✅ Main branch is now up to date."
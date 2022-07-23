rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "commit page" &&
git branch -M main &&
git remote add origin git@github.com:AlierQ/OneUI-vue-page.git &&
git push -u -f origin main &&
cd -

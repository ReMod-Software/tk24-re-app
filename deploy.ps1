pnpm build --preset=deno_deploy

Set-Location ".\.output"

git init
git add . 
git commit -m "Deploy: $(Get-Date)"
git remote add master "https://github.com/LePichu/tk24-beacon-deploy"
git push master master --force

Set-Location "../"
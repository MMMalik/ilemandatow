set -e

# Installs dependencies
printf "\n%s\n\n" "Install dependencies"
yarn install

# Builds project
printf "\n%s\n\n" "Build project and its dependencies"
yarn build

# Deploys static site
# Requires variables: NETLIFY_AUTH_TOKEN, NETLIFY_SITE_ID
printf "\n%s\n\n" "Deploy static site"
yarn netlify deploy --dir=packages/site/public --prod

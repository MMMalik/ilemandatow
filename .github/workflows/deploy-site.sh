set -e

# Installs dependencies
printf "\n%s\n\n" "Install dependencies"
yarn install

# Creates .env.production file
# Requires variables: ILEMANDATOW_ALLOW_ROBOTS, ILEMANDATOW_API_URL, ILEMANDATOW_SITE_URL
printf "\n%s\n\n" "Save environment variables to .env.production"
printf "ILEMANDATOW_ALLOW_ROBOTS=$ILEMANDATOW_ALLOW_ROBOTS\nILEMANDATOW_API_URL=$ILEMANDATOW_API_URL\nILEMANDATOW_SITE_URL=$ILEMANDATOW_SITE_URL" >./packages/site/.env.production

# Builds project
printf "\n%s\n\n" "Build project and its dependencies"
yarn build

# Deploys static site
# Requires variables: NETLIFY_AUTH_TOKEN, NETLIFY_SITE_ID
printf "\n%s\n\n" "Deploy static site"
yarn netlify deploy --dir=packages/site/public --prod

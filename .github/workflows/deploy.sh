# Install dependencies
printf "\n%s\n\n" "Install dependencies"
yarn install

# Build project
printf "\n%s\n\n" "Build project"
yarn build

# Deploy static site
# Requires variables: NETLIFY_AUTH_TOKEN, NETLIFY_SITE_ID
printf "\n%s\n\n" "Deploy static site"
yarn netlify deploy --dir=packages/site/public --prod

# Build KeystoneJs app
printf "\n%s\n\n" "Build KeystoneJs app"
yarn build:api:keystone

# Prune dev dependencies
printf "\n%s\n\n" "Prune dev dependencies"
yarn install --production

# Add ssh key
# Requires MD_SSH_KEY, MD_SSH_HOST
printf "\n%s\n\n" "Configure SSH"
mkdir ~/.ssh
printf "\n%s\n\n" "Save private key"
printenv $MD_SSH_KEY >~/.ssh/id_ed25519
chmod 600 ~/.ssh/id_ed25519
printf "\n%s\n\n" "Save known hosts"
ssh-keyscan -H $MD_SSH_HOST >~/.ssh/known_hosts
ls -al ~/.ssh

# Create .env file
# Requires variables: DB_USER, DB_PASS, DB_NAME, DB_URI, COOKIE_SECRET
printf "\n%s\n\n" "Save environment variables to .env"
printf "DB_USER=$DB_USER\nDB_PASS=$DB_PASS\nDB_NAME=$DB_NAME\nDB_URI=$DB_URI\nCOOKIE_SECRET=$COOKIE_SECRET" >packages/api/.env

# Copy API files
# Requires variables: MD_SSH_USER, MD_SSH_HOST, MD_SSH_DOMAIN
printf "\n%s\n\n" "Run rsync to copy files"
rsync -zavhR \
    app.js \
    node_modules \
    packages/api \
    $MD_SSH_USER@$MD_SSH_HOST:/usr/home/$MD_SSH_USER/domains/$MD_SSH_DOMAIN/public_nodejs

# Restart server
printf "\n%s\n\n" "Restart server"
ssh $MD_SSH_USER@$MD_SSH_HOST "devil www restart $MD_SSH_DOMAIN"

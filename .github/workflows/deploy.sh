# Install dependencies
yarn install

# Build project
yarn build

# Deploy static site
# Requires variables: NETLIFY_AUTH_TOKEN, NETLIFY_SITE_ID
yarn netlify deploy --dir=packages/site/public --prod

# Build Keystone app
yarn build:api:keystone

# Prune dev dependencies
yarn install --production

# Add ssh key
# Requires MD_SSH_KEY, MD_SSH_HOST
mkdir ~/.ssh
printenv $MD_SSH_KEY >~/.ssh/id_ed25519
chmod 600 ~/.ssh/id_ed25519
ssh-keyscan -H $MD_SSH_HOST >~/.ssh/known_hosts

# Create .env file
# Requires variables: DB_USER, DB_PASS, DB_NAME, DB_URI, COOKIE_SECRET
printf "DB_USER=$DB_USER\nDB_PASS=$DB_PASS\nDB_NAME=$DB_NAME\nDB_URI=$DB_URI\nCOOKIE_SECRET=$COOKIE_SECRET" >packages/api/.env

# Copy API files
# Requires variables: MD_SSH_USER, MD_SSH_HOST, MD_SSH_DOMAIN
rsync -zavhR \
    app.js \
    node_modules \
    packages/api \
    $MD_SSH_USER@$MD_SSH_HOST:/usr/home/$MD_SSH_USER/domains/$MD_SSH_DOMAIN/public_nodejs

# Restart server
ssh $MD_SSH_USER@$MD_SSH_HOST "devil www restart $MD_SSH_DOMAIN"

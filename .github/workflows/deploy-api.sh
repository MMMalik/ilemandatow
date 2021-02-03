set -e

DEST_PATH=/usr/home/$MD_SSH_USER/domains/$MD_DOMAIN

# Installs dependencies
printf "\n%s\n\n" "Install dependencies"
yarn install

# Builds packages
printf "\n%s\n\n" "Build API package"
yarn build:api

# Builds KeystoneJs app
printf "\n%s\n\n" "Build KeystoneJs app"
yarn build:api:keystone

# Prunes dev dependencies
printf "\n%s\n\n" "Prune dev dependencies"
yarn install --production

# Adds ssh key
# Requires MD_SSH_KEY, MD_SSH_HOST
printf "\n%s\n\n" "Create ssh directory"
mkdir ~/.ssh
printf "\n%s\n\n" "Save private key"
printenv MD_SSH_KEY >~/.ssh/id_ed25519
chmod 600 ~/.ssh/id_ed25519
printf "\n%s\n\n" "Save known hosts"
ssh-keyscan -H $MD_SSH_HOST >~/.ssh/known_hosts

# Creates db script wrappers
printf "\n%s\n\n" "Create scripts directory"
mkdir ~/.db-scripts
for i in db:backup db:backup:cleanup db:restore db:setup db:seed; do
    printf "\n%s\n\n" "Create $i script wrapper"
    printf "cd $DEST_PATH/public_nodejs && NODE_ENV=production API_ENV_PATH=$DEST_PATH/.env yarn $i" >~/.db-scripts/$i.sh
done

# Creates .env file
# Requires variables: DB_USER, DB_PASS, DB_NAME, DB_URI, COOKIE_SECRET
printf "\n%s\n\n" "Save environment variables to .env"
printf "DB_USER=$DB_USER\nDB_PASS=$DB_PASS\nDB_NAME=$DB_NAME\nDB_URI=$DB_URI\nCOOKIE_SECRET=$COOKIE_SECRET" >~/.env

# Copies API files
# Requires variables: MD_SSH_USER, MD_SSH_HOST, MD_DOMAIN
printf "\n%s\n\n" "Run rsync to copy files"
rsync -zahR \
    app.js \
    package.json \
    node_modules \
    packages/api \
    packages/content \
    $MD_SSH_USER@$MD_SSH_HOST:$DEST_PATH/public_nodejs

# Copies env variables
# Requires variables: MD_SSH_USER, MD_SSH_HOST, MD_DOMAIN
printf "\n%s\n\n" "Run rsync to copy env variables"
rsync -zah ~/.env $MD_SSH_USER@$MD_SSH_HOST:$DEST_PATH

# Copies db scripts
# Requires variables: MD_SSH_USER, MD_SSH_HOST, MD_DOMAIN
printf "\n%s\n\n" "Run rsync to copy db scripts"
rsync -zah ~/.db-scripts/ $MD_SSH_USER@$MD_SSH_HOST:$DEST_PATH

# Restarts server
printf "\n%s\n\n" "Restart server"
ssh $MD_SSH_USER@$MD_SSH_HOST "devil www restart $MD_DOMAIN"

# Hits server in order to wake it up
curl -s $ILEMANDATOW_API_URL >/dev/null

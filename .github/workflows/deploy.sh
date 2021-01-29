# Install dependencies
yarn install

# Build project
yarn build

# Prune dev dependencies
yarn install --production

# Deploy static site
# Requires variables: NETLIFY_AUTH_TOKEN, NETLIFY_SITE_ID
yarn netlify deploy --dir=packages/site/public --prod

# Add ssh key
# Requires MD_SSH_KEY, MD_SSH_HOST
mkdir ~/.ssh
echo $MD_SSH_KEY >~/.ssh/id_ed25519
ssh-keyscan -H $MD_SSH_HOST >>~/.ssh/known_hosts

# Copy API files
# Requires variables: MD_SSH_USER, MD_SSH_HOST, MD_SSH_DOMAIN
rsync -zavh \
    app.js \
    node_modules \
    packages/api/build \
    packages/api/dist \
    packages/api/index.js \
    MD_SSH_USER@MD_SSH_HOST:/usr/home/MD_SSH_USER/domains/MD_SSH_DOMAIN/public_nodejs

# Restart server
ssh MD_SSH_USER@MD_SSH_HOST "devil www restart $MD_SSH_DOMAIN"

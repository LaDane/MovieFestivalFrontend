PROJECT_NAME="filmfestival"
DROPLET_URL="167.172.97.168"

echo "Building front end"
npm run build

echo "Deploying front end..."
scp -r ./build/* root@$DROPLET_URL:/var/www/$PROJECT_NAME
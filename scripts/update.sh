# Stop service
service plushyserver stop
# Delete temporal and frontend files
rm -r /server/raspberry-server/node_modules
rm -r /var/www/html/server/
# Update codebase and install dependencies
cd /server/raspberry-server && git pull
cd /server/raspberry-server && npm i
# Set new frontend pages
cp -r /server/raspberry-server/frontend /var/www/html/server
# Restart service
service plushyserver restart
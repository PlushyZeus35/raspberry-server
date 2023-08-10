service plushyserver stop
rm -r /server/raspberry-server/node_modules
cd /server/raspberry-server && npm i
rm -r /var/www/html/server/
cd /server/raspberry-server && git pull
cp -r /server/raspberry-server/frontend /var/www/html/server
service plushyserver restart
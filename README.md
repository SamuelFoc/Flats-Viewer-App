# Flat Viewer App

This app allows you to access the information from the PSQL flats database using simple UI.

- **StartUp**

  - Open terminal in this folder
  - Run docker build and up commands

          > docker-compose build
          > docker-compose up

  - Or you can run just one command, which will rebuild the docker container if it is needed.

          > docker-compose up --build

- **Feeding up the database**

  - Create folder named **data** inside the main folder of Flats Viewer app and place there CSV file with data in it. Header of this file, or columns structure of the database table, should look like the following:

        > id,flat_href,img_href,address,price,title,type,surface,price_num

  - Open terminal in **node_db** container inside **flats-app** container
  - Run commands bellow to import CSV export_file from **app/data** to **PSQL DB**

          > psql -U flats flats_db
          > COPY flats FROM '/var/lib/postgresql/database/pgdata/pandas_flat_id.csv' CSV HEADER;

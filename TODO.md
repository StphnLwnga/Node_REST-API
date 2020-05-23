- Run `lb4 datasource`

  - `node_db`
  - Select connector: MongoDB
  - `host: localhost`
  - `port: 27017`
  - `database: node_db`

- Run `lb4 repository` for each model

- Run `lb4 controller` - `contact`

- ID increment function may have to be added to post method in controller
  `let contactId = 1; while(await this.contactRepository.exists(contactId)){ contactId ++; } contact.id = contactId;`

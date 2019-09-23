## Usage
```
$ npm i
$ ./node_modules/.bin/clasp login
$ ./node_modules/.bin/clasp create --rootDir ./src
$ ./node_modules/.bin/clasp push
```

### Setup GAS
- `$ ./node_modules/.bin/clasp open`
- Set `SHEET_ID` and `SLACK_INCOMING_WEBHOOK_URL` to Project property

### Setup Spread sheet
- Make `config` sheet
- Set query value to Cell (2, 1)
  - e.g `is:unread "Some filter subject strings"`

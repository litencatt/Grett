# GMail receive then that(Grett)

## Usage
```
$ npx clasp login
$ npx clasp create --rootDir ./src
$ npx clasp -P src/ push
```

### Setup GAS
- npx clasp -P src/ open
- Set `SHEET_ID` and `SLACK_INCOMING_WEBHOOK_URL` to Project property

### Setup Spread sheet
- Make `config` sheet
- Set query value to Cell (2, 1)

query | 
-- |
is:unread "Some filter subject strings" |

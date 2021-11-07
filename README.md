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

![image](https://user-images.githubusercontent.com/17349045/140632921-db89300f-a9eb-4cfc-b0dd-45e92aeaf940.png)

See more about search operators => https://support.google.com/mail/answer/7190

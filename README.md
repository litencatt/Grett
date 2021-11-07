# GMail receive then that(Grett)

## Usage
```
$ npx clasp login
$ npx clasp create --rootDir ./src
$ npx clasp -P src/ push
```

### Setup GAS
```
$ npx clasp -P src/ open
```
- Set your `SHEET_ID` and `SLACK_INCOMING_WEBHOOK_URL` to Project property
  <img src="https://user-images.githubusercontent.com/17349045/140633187-8a303476-c1fd-4d3b-aeb3-1c8e45db43c4.png" width="500">

### Setup GMail search operator
- Make `config` sheet on a spreadsheet of `SHEET_ID` set to GAS property.
- Set operator value to A2 cell in `config` sheet.  
  ![image](https://user-images.githubusercontent.com/17349045/140638902-b919fd70-0587-43a0-9f4c-4483b277ce92.png) 


See more about GMail search operators => https://support.google.com/mail/answer/7190

### Set trigger
Set trigger schedule as you like.

#### e.g. trigger per 10 minutes
<img src="https://user-images.githubusercontent.com/17349045/140634231-a78f3718-c3b5-4f25-9cdb-77ac5c1d611c.png" height="500">

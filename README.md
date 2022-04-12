### Preparation

Make sure that ESLint has been connected and works well after installation.

```sh
npm install # to get all required dev packages.
```

### Valid input data

Application gets data from the terminal input.
The input represents amount of tests and their data which should be passed to the program.

Each test represents a rectangular bitmap where at least one pixel `must` be white.
`1` is used for white pixels and `0` is for black pixels.

Following example describes as `valid` data shold look like:

```log
2       -- Amount of tests which should be launched.
3 4     -- Rows and Columns value for the first rectangular (rows = 3, columns = 4).
0001    |\
0010    | |-- The Bitmap data of the rectangle's pixels. At least one has to have '1' value.
0100    |/
        -- An empty line which separates test cases.
4 5     -- Rows and Columns value for the second rectangular (rows = 4, columns = 5).
00000   |\
00000   | | -- The Bitmap data of the rectangle's pixels. At least one has to have '1' value.
00100   | |
00000   |/
        -- An empty line which means no more test cases will be added.
```

Please find valid examples in the `manual_test` folder.

The output will be printed after last test case was added and the `Enter` botton was pressed.

If you try to add more test cases after you achieved entered number or tests - the application will output exact same
amount which you entered in the begining.

### Run application

```sh
npm run start:dev # and either add your custom data or use mock from the `manual_test` folder.
```

### Errors and invalid data

If you try to pass not valid data to the input - the application with throw an error with message of
a problem and will ask you to restart from the begining.

### Testing

All unit tests are located in the `test` folder.

```sh
npm run test # to run all tests.
npm run test:cov # to get coverage statistic.
npm run test -- test_name.test.ts # to run specific test.
```

### Build

```sh
npm run build # to start build.
npm run start # to start application after successful build.
```
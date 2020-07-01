# Code Commit Process

1. Tell Jest to watch for file changes and run the unit tests automatically

        npm run test:unit -- --watch

    Alternatively you can continuously run all tests, but integration tests
    are slower and hence it might be more productive to run them once in a while,
    but surely before commit.

2. Perform the code changes and ensure a test has been written to cover your new code

   *Ensure code coverage stays high at all times by adding more specific tests*

3. Do any code formatting neccesary (TODO: replace with linter)

4. Run all tests if not already, including integration

        npm run test

5. Write the related documentation. If its a big change, a decision in the format
    of `adr` will be required.

6. Commit and push your code changes

        git add .
        git commit -m "Issue number / other info"
        git push

7. Publish the package

        npm run publish

8. Create the release notes

9. Deploy the documentation

        npm run docs:deploy

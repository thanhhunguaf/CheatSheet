## Git notes:

Rules for work with git:
-   1 branch master: for all
-   1 branch dev: development
-   1 branch release
-   Dev only one branch dev
-   After release:
    +   With one required feature is the same sub-branch dev. Example start with version v1.0 after that is v1.1, v1.2, etc...
    +   Merge to branch master. Using this branch for build release
    +   The version on branch lease is the same version dev. Aim to save the released versions and can rollback to the previous version in special cases
- **Particularly important:** *Can't dev or do anything on branch master and release unless you know what're you doing or you have permission.*
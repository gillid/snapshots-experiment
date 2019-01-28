# `Jest`+`enzyme` multiple snapshots speed testing
Aim - to figure out speed difference on testing conditional rendering.

#### Env
Using `node v8.14.1`, `yarn v1.13.0`, for the rest see in `package.json`

#### Usage
Runs 1000 similar components with 5 conditional rendering props.

#### Approach 1
Use 2 snapshots for rendering with props and without props.  
`rm -rf __tests__/__snapshots__/Approach1.js.snap && yarn jest --clearCache && yarn jest Approach1`  
Run time `~2.9s`

#### Approach 2
Use 1 snapshot for empty rendering and `enzyme`'s `.contain()` to check conditional renders.  
`rm -rf __tests__/__snapshots__/Approach2.js.snap && yarn jest --clearCache && yarn jest Approach2`  
Run time `~3.4s`s
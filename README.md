# Backend (Suvidha) 
Suvidha aims to solve the issue exists in traditional way of distribution of ration by digitizing it and giving the control to the customer


## Tech Stack
**Backend**<br>
[Node.js](https://nodejs.org/en) <br>
[Typescript](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html) <br>
[Prisma](https://www.prisma.io/docs/getting-started) <br>
[Postgresql](https://www.postgresql.org/docs/)

## Instruction to setup branches locally
Right after cloning this repo create a branch name dev:```git branch dev```<br>
Switch to dev branch:```git checkout dev```<br>
Set local dev to remote dev:```git branch -u origin/dev```<br>
**Note**: Don't commit or push directly to main branch. Only commit and push changes to the dev branch and create pull requests for merge <br>

After cloning the main repo<br>
- go to server directory<br>
- create a .env file and set PORT=4000
- run: ```npm install && npm run build``` <br>
- run: ```npm run dev``` <br>
- go to http://localhost:4000 to see the app running<br>
- Every time you start working on a feature do consider running ```git pull origin dev``` to avoid issues

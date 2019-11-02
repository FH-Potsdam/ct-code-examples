# CT Coding Sessions

<div style="display:flex;flex-wrap: wrap; width:500px">
<div style="width:125px; padding:5px">
<img src="./images/colores.png" alt=""">
</div>
<div style="width:125px;padding:5px">
<img src="./images/connected-dots.png" alt=""">
</div>
<div style="width:125px;padding:5px">
<img src="./images/gridorious.png" alt=""">
</div>
<div style="width:125px;padding:5px">
<img src="./images/swing.png" alt=""">
</div>
  </div>
</div>

This is a collection repo with all the examples generated during coding sessions in the seminar [Creative Technologists - Tracing the City](https://fhp.incom.org/workspace/8527).

In the folder `packages` you will find all the session. 


## Usage

Due to the fact that we have multiple repos we use lerna to bootstrap them all.


```bash
git clone git@github.com:FH-Potsdam/ct-code-examples.git
cd ct-code-examples
npm install
npm run setup
npm run serve
```

## Develop  

When all the subfolders should have their dependencies installed using 
`npm run setup` you can cd into it and start the dev server using `npm start`.


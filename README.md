# CT Coding Sessions

[![](./docs/thumbs/colores.png)](./packages/colores) [![](./docs/thumbs/connected-dots.png)](./packages/grid) [![](./docs/thumbs/gridorious.png)](./packages/gridorious) [![](./docs/thumbs/swing.png)](./packages/swing)

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


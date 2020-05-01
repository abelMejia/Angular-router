

The `routes.ts` pattern

# Getting started
#### Go to project folder and install dependencies:
`$ npm install`
#### Launch development server, and open localhost:4200 in your browser:
`$ ng serve`


# Tree Structure        
```
  app/
      app.module.ts
      app.routes.ts  
          modules/
              configuration/
                 configuration.module.ts
                 configuration.routes.ts
              user/  
                 user.module.ts
                 user.routes.ts
```        

Based on https://medium.com/@shairez/angular-routing-a-better-pattern-for-large-scale-apps-f2890c952a18

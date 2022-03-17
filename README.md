# express-ts

implementing ts in express

# Note

1. TS has a distinct OOP style. hardcore use on class, inheritance dan composition

# Apps overview.

1. Website to login and authentication function. Using express application.

# Env Setup

1. Typescript etc
2. express, body-parser, cookie-session

# Issue

1. TS tidak bisa mengecheck yang terjadi di middleware
2. TS bisa memberikan informasi yang salah.

# Solving

1. Using interface --> untuk melengkapi type definition dari middleware/javascript lib yang digunakan.

# Twisting TS with JS Express

Remember: Typescript is all about class based focus/role. But dont throw all of it into classes.

1. Enhancing the code - express for ts
   Decorator --> Improving developer experience.
   def: function to modif, change, anything dif properties/methods in the class
   only being used on classes in typescript.
   key: understanding the order in decorators.
   decorators in ts is experimental

2. Controller -> metadata. proposed feature to be added to Javascript
3. metadata -> snippets of info that can be tied to a method, property or class definition
4. metadata can be used for super custom stuff
5. metadata -> ts will provide type information as metadata optionally
6. Read and written using the reflect-metadata package

# Basic Metadata - Typescript

1. Decorator

Used to controll router and controller that depends on the method.

2. Interface bisa digunakan sebagai pelindung orang yang memasukan fungsi asal2an

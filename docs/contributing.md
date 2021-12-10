---
id: contributing
title: Contributing
---
![picture](https://ottaaproject.com/img/ottaa-project.svg)
# How to contribute #
We would love your help. Before you start working however, please read and follow this guide.

## Reporting Issues ##

Provide a lot of information about the bug. Mention the version of OTTAA Project and explain how the problem can be reproduced.

## Code Contributions ##



### Create a pull request ###
In order to create a pull request is necessary 

* Avoid file conflicts with the source code
* Should make a description about the characteristics to apply
* Should apply the pull request in the corresponding branch

|Branch|Description|
|---|---|
|Version| Main |
|Feature| Add new features |
|Hotfix|  Hot-fix about a version|
|Bugfix|  Bug-fix about a version|



## Documentation ##
### Comments ###
* Comment documenting the source code are required.

* Comment a class explaining the purpose of that and how to implements if that required.

* Comment should be formatted as proper English sentences.
* use Javadoc documentation.

## Code ##

### Duplication ###
* Don't copy-paste source code. Reuse it.

### Import Libraries ###

* Sort by category.

|Category|Description|
|--------|-----------|
| Google | Library related to google |
| Android | Library related to android |
|Firebase | Library related to firebase api|
|Test |Library related to test app|
| Library | Library related to different apps|

* Sort by alphabetical order.  

* Use Grandle level app
 Example :
```
#!xml
dependencies {
   implementation 'library'  
}
```
### Indentation ###


 Switch case 
```
#!java
Align by  such as these cases :

Switch(value){
    case 0:
       // Todo action here
    break;
    Default:
       // Todo default action here
    break;
}
```
If / else or else if 
```
#!java

if(value.toString().equals("Hello")){
  //To do action here
}else if{
  // To do action here
} else{
  // Todo 
}

```
**Remember:**

* The attributes of the class must be protected or private

* The Method of the class must be public, private or protected

* The class must be public or private

### Naming ###
**Name:** That must be transparent and representative about the action to show us.

**Class:** should be nouns in UpperCamelCase, with the first letter of every word capitalized.
example :

```
#!java
public class Json(){
  
}
```
**variable:** 	Local variables, instance variables, and class variables are also written in lowerCamelCase.

example :

```
#!java

String name =" Carl";
String fileName="json.txt";
```

**Constant:** Constants should be written in uppercase characters separated by underscores.

example :


```
#!java

public static final String CONSTANT_NAME=" fileName.txt";
```

### Firebase index: ###

This is the Three in firebase :

```
#!code

index
├── Avatar  
├── Edad           
├── email
├── Fotos
|    ├── nombre_foto
|    └── url_foto
├── FotosUsuario
├── Frases
├── FrasesFavoritas
├── Grupos
├── Juegos
├── Pago
├── Pictos
├── PrimeraUltimaConexion
├── Usuarios
└── Version

```
* **Avatar :** this is the user icon that represents it
* **Edad :**   this is the user age
* **email :**	 this is the user email	
* **Fotos :**  this node contains all the user's pictures URL directions
* **FotosUsuario:**  this node contains all pictures related to the user
* **Frases :** this node contains the user phrases URL
* **FrasesFavoritas:** this node contains the user favourite phrases URL
* **Grupos:** this node contains the user Group URL
* **Juegos:** this node contains the user Game URL
* **Pago:** this node contains information about  the kind of user at the application
* **Pictos:** this node contains the user Pictograms URL
* **PrimeraUltimaConexion:** this node contains the first and last connection from the user
* **Usuarios:** this node contains the user information
* **Version:**  this node has got the application version.

The OTTAA Project firebase database node is designed in the next way:

All nodes have the user id such as a child like the following examples:

    Avatar 
      ├── UserID0 :  defaultAvatarID
      |
      └── UserID1
		├── name : Picture name
		└── urlFoto : firebase Storage Picture
    Edad
      ├── UserID0 :  ADULTO
      |
      └── UserID1: JOVEN
      |
      └── UserID2: NINO


	
    email
      ├── UserID0 :  
      |     └── email : useremail0@mailexample.com
      ├── UserID1 :  
      |     └── email : useremail1@mailexample.com
      └── UserID2: 
            └── email : useremail2@mailexample.com

    Fotos
      ├── push0:  
      |       ├── nombre_foto : name of picture
      |       └── url_foto : firebase storage url
      ├── push1:  
      |       ├── nombre_foto
      |       └── url_foto
      ├── push2:  
      |       ├── nombre_foto
      |       └── url_foto
      ├── push3:  
      |       ├── nombre_foto
      |       └── url_foto
      ├── push4:  
      |       ├── nombre_foto
      |       └── url_foto
      ├── push5:  
      |       ├── nombre_foto
      |       └── url_foto
      └──  push6:  
               ├── nombre_foto
               └── url_foto

    FotosUsuario
      ├── UserID0:  
      |       ├── push0 : push0
      |       └── push3 : push3
      ├── UserID1:  
      |       ├── push2
      |       └── push6
      └──  UserID2:  
               ├── push4
               └── push5


    Frases
      ├── UserID0:  
      |       ├── URL_frases_en : firebase url
      |       └── URL_frases_es : firebase url
      └──  UserID2:  
               └── URL_frases_es: firebase url
    Grupos
      ├── UserID0:  
      |       ├── URL_grupos_en : firebase url
      |       └── URL_grupos_es : firebase url
      └──  UserID2:  
               └── URL_grupos_es: firebase url
    Juegos
      ├── UserID0:  
      |       ├── URL_juegos_en : firebase url
      |       └── URL_juegos_es : firebase url
      └──  UserID2:  
               └── URL_juegos_es: firebase url
    Pago
      ├── UserID0:  
      |       ├── FechaPago : (Date value in long)
      |       ├── FechaVencimiento : (DateValue in long)
      |       └── Pago :  1
      └──  UserID2:  
               └── Pago:0

    Pictos
      ├── UserID0:  
      |       ├── URL_pictos_en : firebase url
      |       └── URL_pictos_es : firebase url
      └──  UserID2:  
               └── URL_pictos_es: firebase url

    PrimeraUltimaConexion
      ├── UserID0:  
      |       ├── Pconexion : (Date in ms)  First time they login
      |       └── Uconexion : (Date in ms)  Last time they login
      └──  UserID2:  
               └── Uconexion: (Date in ms)

    Usuarios
      └─ UserID0:  
              ├── Nombre :  user name
              ├── birth_date :  (Date in ms)
              └── pref_sexo :  user gender (MASCULINO, FEMENINO,Binary , fluid,other)
    
	

### How to setup the files ###

 OTTAA Project uses different's apis in order to offer different kinds of functions such as the location in the prediction and the google translate  language that's was implemented with the smart talk function.

 OTTAA Project uses this Rest api :

 1. Google places
 2. Firebase
 3. Google Translate
 4. Galeria Araasac

In order to set up the files follow these steps :

  1. Go to the folder values : "/app/src/main/res/values"
  2. create a new xml files 
  3. copy this line of code

 ```
 <?xml version="1.0" encoding="utf-8"?>
<resources>
    <string name="places_api_key"> Replacement with the google places api key </string>
    <string name="galeria_araasac_api_key"> Replacement with the galeria araasac api key </string>
    <string name="google_translate_api_key"> Replacement with the google translate api key </string>
    <string name="firebase_name_database"> Replacement with the firebase database path </string>
</resources>
```
 

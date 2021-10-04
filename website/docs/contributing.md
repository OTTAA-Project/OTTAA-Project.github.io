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
**Remember: **

* The attributes of the class must be protected or private

* The Method of the class must be public, private or protected

* The class must be public or private

### Naming ###
** Name:** That must be transparent and representative about the action to show us.

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
├── Edad
├── email
├── Fotos
|    ├── nombre_foto
|    └── url_foto
├── FotosUsuario
├── Frases
├── Grupos
├── Juegos
├── Pago
├── Pictos
├── PrimeraUltimaConexion
├── Usuarios
└── Version
```

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
 
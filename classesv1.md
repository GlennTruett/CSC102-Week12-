#sample uml diagram for CSC102 by Glenn Truett<br>
#JamTruet@uat.edu

create a diagram with 2 classes. Those classes need 3 attributes, 3 methods

```mermaid
    classDiagram
    class Shape{
        -length
        -width
        +get length()
        +set length()
        +get width()
        +set width()

    }

class ShapeSig{
        -length int
        -width int
        +get length() : int
        +set length(n : int) : void
        +get width() : int
        +set width(n : int) : void

    }



```
Attributes come before properties or methods <br>
\+ public \- private, \# protected <br>

```mermaid
    classDiagram
    class Superclass{
        

    }

class Subclass1{
        
    }

class Subclass2{
        
    }
Superclass <|-- Subclass1
Superclass <|-- Subclass2

```



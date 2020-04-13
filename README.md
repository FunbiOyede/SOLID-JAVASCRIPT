
The Solid Principles of OOP Design
=============

### Introduction
   SOLID is an acronym for first 5  basic principles of OOP(Object Orientend Programming) intended to make software more understandable, flexible and maintainable. Other princples are DRY(Do not repeat yourself) and delegation.

 * The S - SRP AKA SINGLE RESPONSIBILITY PRINCIPLE
    1. A class should only have a single responsility.
    2. It doesnt apply to classes only. It can be used by other software entities
    3. Examples of things that should use the single responsibility
        * Persistence
        * Validation
        * Notification
        * Error Handling
        * Logging
    4. Dont put functions that change for different reasons in the same class


 * The O - OCP AKA OPEN CLOSE PRINCIPLE
    1. Software entities should be open for extension not for modification
    2. Meaning, when a you a class that contains different function for handling authentication for users, and later in the future you want to add some new features. Adding the new features shouldn't make you modify the whole service. If you have to modify the whole service then your code or the service doesnt follow this principle. Adding the feature without modifying is the same as extending the code. Don't get it twisted.
    3. Dont modify the existing code to extend the behaviour
    

 * The L - LSP AKA LISKOV SUBSTITUTION PRINCIPLE
   1. A Derived class should be able to replace a Base class without any problems

 * The I - ISP AKA INTERFACE SEGREGATION
   1. A client should never be forced to implement an interface that it doesn’t use or
   clients shouldn’t be forced to depend on methods they do not use.
 * The D - DI - DEPENDENCY INVERSION
   1. High-level modules should not depend upon low-level modules. Both should depend upon abstractions.
   2. Abstractions should not depend on details. Details should depend upon abstractions.
   3. Abstraction is the process of hiding the internal details of an application from the outer world.


 ### Other resource
 https://blog.bitsrc.io/solid-principles-every-developer-should-know-b3bfa96bb688
 https://www.baeldung.com/solid-principles
 https://dev.to/francescoxx/solid-principles-in-javascript-3pek
 https://hackernoon.com/10-oop-design-principles-every-programmer-should-know-f187436caf65
 https://github.com/BolajiOlajide/SOLID

The Solid Principles of OOP Design
=============

### Introduction
   SOLID is an acronym for first 5 principles of OOP(Object Orientend Programming) intended to make software more understandable, flexible and maintainable. Other princples are DRY(Do not repeat yourself) and delegation.

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
    



 ### Other resource
 https://blog.bitsrc.io/solid-principles-every-developer-should-know-b3bfa96bb688
 https://www.baeldung.com/solid-principles
 https://dev.to/francescoxx/solid-principles-in-javascript-3pek
 https://hackernoon.com/10-oop-design-principles-every-programmer-should-know-f187436caf65
 https://github.com/BolajiOlajide/SOLID
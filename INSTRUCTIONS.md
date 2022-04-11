# FindHotel Mobile Application Engineer Assignment

Thanks for applying for the Mobile Engineer position at FindHotel!

This assignment is designed to evaluate your mobile application engineering experience. The focus us on technical proficiency, design implementation and cross platform aspects. It will mimic a real life feature of our future application, a guest selector that is used for requesting hotel availability.

## Time to spend on the assignment

We don't assign a fixed time deadline for it, but after you’ve read the assignment, please let us know when you’re planning to complete it. After you complete the assignment we'll review it internally and if we evaluate it to be positive, we'll schedule a technical interview to discuss the results together. As said, feel free to make some concessions under time pressure, just let us know what parts you've focused on most.

## Technology and Frameworks

Our application will be built with React Native. It is therefore recommended to use React Native and Expo to get up and running quickly and this repository has Expo set up for you. However if you have another technology in mind you think is better suited, you’re free to use it - as long as we can easily debug and run the application in iOS and Android simulators.

We use Redux at FindHotel, but again you're free to choose any state management technology you'd like.

Finally, we prefer to use a typed dialect such as TypeScript or Flow, so it is a plus for you to showcase the use of it, but you are allowed to use any JS flavor.

Styling can be done via CSS, or a CSS-in-JS framework of your choice (we use <https://github.com/emotion-js/emotion>).

## The assignment

Please note for this assignment you are not required to build any server side or API logic, you can build all logic in the application.

### The Guest and Room Selector component

Please see the following screenshots for the designs to build. You can focus on the Guest and Room Selector, **building the home page is not required**.

| Home screen                     | Guest and Room Overlay                                                      | Guest and Room Overlay with more rooms                                                                         |
| ------------------------------- | --------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| ![Home](Home.jpg "Home screen") | ![Guest and Room Overlay](GuestPicker-Default.jpg "Guest and Room Overlay") | ![Guest and Room Overlay with more rooms](GuestPicker-More-Rooms.jpg "Guest and Room Overlay with more rooms") |

### Business requirements

#### Input and output

The component should receive its initial state as a string that is deep-linkable, allow the user to update the state via manipulating the UI, and emit its output as a serialized string to be shared with others. You should be able to pass the Guests and Rooms configuration in via the URI in this encoded manner. The component should have an onChange property that is called with the serialized string when the component state is "comitted" (via the Search button) to allow for sharing.

The rules for the output format are the following:

- Rooms are separated by pipe `|`
- Adults and children are separated by colon `:`
- Children ages are separated by comma `,`

##### Examples

- "1:4,6|3" → Two rooms, one with one adult and two children ages four and six and the other with three adults and no children
- "3" → One room with three adults and no children
- "2:4" → One room with two adults and one child aged four
- "1:0,13,16" → One room with one adult and three children (aged zero, thirteen and sixteen)

Note: Keep in mind this is the serialized representation of a valid component state, you can keep a different intermediate data structure of your choice to manage internal state.

#### Functional requirements

These are the requirements the component need to abide to be deemed functional.

- Up to eight rooms can be added
- Each room has at least one adult and up to a maximum of five
- Each room has zero or more children up to a maximum of three
- Each child needs to have their age supplied, so we know what kind of bed or cot to provide and what to charge for the room
- Each room has a maximum occupancy of five. This is, adults plus children per room
- The Guest and Room selector should always yield a valid room occupancy, use button disablement to avoid invalid configurations
- A user can either choose `Search` to commit the output, or click the `x` on top to reset the chosen room selection, revert back to the original state and emit this in the onChange handler
- It is important that the state of the application can be deep-linked after a user clicked `Search`

#### Non-functional requirements

##### Device compatibility

We expect the application to work on both iOS & Android with support for the latest versions.
The application should scale and work on the following common form factors: iPhone 12+ and Android Pixel 5+.

##### Configurability

The functional requirements can change in the future, do what you can to make sure the component is easily configurable.

##### Usability

It should be evident to the user how to operate the component. We are here to help the user to understand what are their options and guide them.

##### Testability

It is recommended to write automated tests (unit or integration) to verify and document the business logic.
We leave to you to decide which parts of the implementation should be covered by tests, given the constraint of time.

##### State management / scalability

Use any state management mechanism you’d like, keeping in mind how you would scale the architecture of the application as it grows.

##### Deep-linking and navigation

Even though the home view doesn't need to be implemented in detail, please showcase how you would handle navigation and deep-linking in your application.

### Evaluation criteria

We will evaluate the assignment according to the following aspects:

- Correctness, bug free implementation according to the requirements
- Code quality, how clean, readable, organized and future proof your code is
- Visual implementation, how close your component implementation is to the supplied designs
- Quality assurance, how much confidence your automated tests add to the implementation

### Bonus points

- Allow the input as props and emit a Redux action (or other state management framework of choice) as output
- Exercise the component interactively with an appropriate test library
- Use git best practices, commit messages and such

Good luck! If you have any questions around the assignment, feel free to reach out :)

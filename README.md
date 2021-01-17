# Office Hours App

## What should our App be?

Let's make a zoo app that....

1. Shows a list of all of the animals at /
2. Allows us to add an animal at /add
 <!-- 2. Shows a list of a certain type of animal at /:animalType -->

This app should...

1. Use Context
1. Use a 'wrapper component for context'
1. Use a custom hook to grab info form context
1. Use Routes
1. Have controlled inputs
1. Validate form errors onChange not onSubmit

## Steps

### All Animals

1. Create functional component called AllAnimals
2. Grab the animals from the data
3. h1 of 'All Animals'
4. Loop through the animals to display them on the page.
5. Render component on app at route /animals

### Add Animals

1. Form that will...
    1. text input for name
    2. dropdown for type
    3. textarea for bio
    4. checkbox for asleep
    5. onSubmit add animal to context, redirect to '/'

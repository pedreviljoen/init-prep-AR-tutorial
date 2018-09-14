# Init Prep Tutorial - Viro React
Complete this tutorial to learn the basics of rendering 3D Text, passing props to Viro scenes, and to become familiar with the project structure we will be using on the day. 

After checking out the branch, run 
```
sudo npm install
```
to ensure you have all the required dependancies installed. 

## Task
The task is to render a 3D text object that a) displays a counter's value, and b) increments the counter when you touch the 3D text. 
The tutorial consists of 3 steps: 

1) Render a plain 3D Text object (ViroChildScene.js)
In the ViroChildScene.js, add a 3D text component to the ViroARScene's render function. See [here](https://docs.viromedia.com/docs/virotext2) for more info on ViroText.

2) Counter Incrementing
Create two counter variables on the ViroParentScreen.js, one on the screen's state, and one in the viroAppProps object that is also stored on the state. Code the functionality of the _incrementCounter function so that it increments both the counters when the function is called. Use this.setState for the increment. 

3) Connect the counters & functions
The viroAppProps are already passed through the ViroARSceneNavigator, so you can access the counter and function declared in the viroAppProps in the ViroChildScene. Link the counter variable to the text so that the text displays it, and link the _incrementCounter function to the Text's onPress prop so that the function is called when the text is pressed. 
Also, link the count variable that is on the ViroParentScreen to the text displayed on the screen, so that the screen's counter is displayed in the box below. 

You should now have a 3D Text object that increments both counters when you tap the text!!


